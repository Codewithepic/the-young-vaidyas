import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

// GET /api/reviews - Fetch all reviews
export async function GET() {
    try {
        const { rows } = await sql`
            SELECT * FROM reviews 
            WHERE verified = true 
            ORDER BY date DESC
        `
        return NextResponse.json(rows)
    } catch (error) {
        console.error('Error fetching reviews:', error)
        // Fallback to JSON file if database not set up yet
        try {
            const reviewsData = await import('@/data/reviews.json')
            return NextResponse.json(reviewsData.default)
        } catch {
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

        // Save to database
        const date = new Date().toISOString().split('T')[0]

        await sql`
            INSERT INTO reviews (name, location, rating, review, date, verified)
            VALUES (${name}, ${location}, ${rating}, ${review}, ${date}, true)
        `

        return NextResponse.json({ success: true }, { status: 201 })
    } catch (error) {
        console.error('Error saving review:', error)
        return NextResponse.json(
            { error: 'Failed to save review. Please try again.' },
            { status: 500 }
        )
    }
}
