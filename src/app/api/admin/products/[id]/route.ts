import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { isAdminAuthenticatedFromRequest } from '@/lib/auth'

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    if (!isAdminAuthenticatedFromRequest(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const body = await request.json()

    // Only allow updating safe fields
    const allowedFields = ['name', 'price', 'description', 'short_description', 'badge', 'details', 'variants', 'process']
    const updates: Record<string, any> = { updated_at: new Date().toISOString() }
    for (const key of allowedFields) {
        if (key in body) updates[key] = body[key]
    }

    const { data, error } = await supabaseAdmin
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, product: data })
}
