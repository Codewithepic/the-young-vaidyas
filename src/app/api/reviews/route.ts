import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET /api/reviews - Fetch all reviews
export async function GET() {
    try {
        const { data, error } = await supabase
            .from('reviews')
            .select('*')
            .eq('verified', true)
            .order('date', { ascending: false })

        if (error) throw error

        return NextResponse.json(data || [])
    } catch (error: any) {
        console.error('Error fetching reviews:', error.message)

        // Fallback to JSON file
        try {
            const reviewsData = await import('@/data/reviews.json')
            return NextResponse.json(reviewsData.default)
        } catch (jsonError) {
            console.error('Error loading JSON:', jsonError)
            return NextResponse.json([])
        }
    }
}

// POST /api/reviews - Submit a new review
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, location, rating, review } = body

        // Validation
        if (!name || !location || !rating || !review) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                { error: 'Rating must be between 1 and 5' },
                { status: 400 }
            )
        }

        // Save to Supabase
        const date = new Date().toISOString().split('T')[0]

        const { error } = await supabase
            .from('reviews')
            .insert([
                { name, location, rating, review, date, verified: true }
            ])

        if (error) throw error

        return NextResponse.json({ success: true }, { status: 201 })
    } catch (error: any) {
        console.error('Error saving review:', error.message)
        return NextResponse.json(
            { error: 'Failed to save review. Please try again.' },
            { status: 500 }
        )
    }
}
