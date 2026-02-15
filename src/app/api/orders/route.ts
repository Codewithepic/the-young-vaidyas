import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const orderData = await request.json()

        // Generate order reference
        const orderRef = `ORD-${Date.now()}`

        // Add order reference and timestamp to order data
        const completeOrder = {
            ...orderData,
            orderRef,
            timestamp: new Date().toISOString(),
            status: 'pending'
        }

        // For now, we'll just return success
        // TODO: In production, save to database or send email
        console.log('New Order Request:', completeOrder)

        // Create email body for mailto link
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
