import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { isAdminAuthenticatedFromRequest } from '@/lib/auth'
import { PRODUCTS } from '@/data/products'

export async function GET(request: Request) {
    if (!isAdminAuthenticatedFromRequest(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data, error } = await supabaseAdmin
        .from('products')
        .select('*')
        .order('id')

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ products: data })
}

// Seed products from static data into Supabase (first-time setup)
export async function POST(request: Request) {
    if (!isAdminAuthenticatedFromRequest(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const rows = PRODUCTS.map(p => ({
        id: p.id,
        slug: p.slug,
        name: p.name,
        price: p.price,
        category: p.category,
        description: p.description,
        short_description: p.shortDescription,
        images: p.images,
        badge: p.badge || null,
        details: p.details,
        variants: p.variants || null,
        process: p.process || null,
    }))

    const { error } = await supabaseAdmin
        .from('products')
        .upsert(rows, { onConflict: 'id' })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, seeded: rows.length })
}
