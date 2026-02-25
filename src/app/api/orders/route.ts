import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { isAdminAuthenticatedFromRequest } from '@/lib/auth'

export async function POST(request: Request) {
    try {
        const orderData = await request.json()
        const orderRef = `ORD-${Date.now()}`

        const completeOrder = {
            ...orderData,
            orderRef,
            timestamp: new Date().toISOString(),
            status: 'pending'
        }

        // Save to Supabase
        const { error } = await supabaseAdmin.from('orders').insert({
            order_ref: orderRef,
            status: 'pending',
            customer_name: orderData.customerInfo.name,
            customer_email: orderData.customerInfo.email,
            customer_phone: orderData.customerInfo.phone,
            shipping_address: orderData.shippingAddress,
            items: orderData.items,
            subtotal: orderData.subtotal,
            shipping: orderData.shipping,
            total: orderData.total,
            notes: orderData.notes || null,
        })

        if (error) {
            console.error('Supabase insert error:', error)
            // Don't fail the order — still return success so customer flow works
        }

        const emailBody = `
New Order Request from The Young Vaidyas Website

ORDER REFERENCE: ${orderRef}

CUSTOMER INFORMATION
Name: ${orderData.customerInfo.name}
Email: ${orderData.customerInfo.email}
Phone: ${orderData.customerInfo.phone}

SHIPPING ADDRESS
${orderData.shippingAddress.address}
${orderData.shippingAddress.city}, ${orderData.shippingAddress.state}
${orderData.shippingAddress.country} - ${orderData.shippingAddress.pincode}

PRODUCTS ORDERED
${orderData.items.map((item: any) => `${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`).join('\n')}

SUBTOTAL: ₹${orderData.subtotal}
SHIPPING: ₹${orderData.shipping}
TOTAL: ₹${orderData.total}

${orderData.notes ? `SPECIAL NOTES:\n${orderData.notes}` : ''}

---
Please contact customer to confirm order and share payment details.
`.trim()

        return NextResponse.json({
            success: true,
            orderRef,
            emailBody: encodeURIComponent(emailBody)
        })

    } catch (error) {
        console.error('Error processing order:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to process order request' },
            { status: 500 }
        )
    }
}

export async function GET(request: Request) {
    if (!isAdminAuthenticatedFromRequest(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data, error } = await supabaseAdmin
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ orders: data })
}
