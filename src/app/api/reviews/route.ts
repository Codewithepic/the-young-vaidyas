import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

// GET /api/reviews - Fetch all reviews
export async function GET() {
    try {
        // Try to fetch from database
        const { rows } = await sql`
            SELECT * FROM reviews 
            WHERE verified = true 
            ORDER BY date DESC
        `
        return NextResponse.json(rows)
    } catch (error: any) {
        console.error('Database error:', error.message)

        // If table doesn't exist, try to create it
        if (error.message?.includes('relation "reviews" does not exist')) {
            try {
                await sql`
                    CREATE TABLE IF NOT EXISTS reviews (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        location VARCHAR(255) NOT NULL,
                        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
                        review TEXT NOT NULL,
                        date DATE NOT NULL,
                        verified BOOLEAN DEFAULT true,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )
                `
                // Return empty array after creating table
                return NextResponse.json([])
            } catch (createError) {
                console.error('Error creating table:', createError)
            }
        }

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

        // Save to database
        const date = new Date().toISOString().split('T')[0]

        try {
            await sql`
                INSERT INTO reviews (name, location, rating, review, date, verified)
                VALUES (${name}, ${location}, ${rating}, ${review}, ${date}, true)
            `
            return NextResponse.json({ success: true }, { status: 201 })
        } catch (dbError: any) {
            console.error('Database insert error:', dbError.message)

            // If table doesn't exist, create it first
            if (dbError.message?.includes('relation "reviews" does not exist')) {
                await sql`
                    CREATE TABLE IF NOT EXISTS reviews (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        location VARCHAR(255) NOT NULL,
                        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
                        review TEXT NOT NULL,
                        date DATE NOT NULL,
                        verified BOOLEAN DEFAULT true,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )
                `
                // Try insert again
                await sql`
                    INSERT INTO reviews (name, location, rating, review, date, verified)
                    VALUES (${name}, ${location}, ${rating}, ${review}, ${date}, true)
                `
                return NextResponse.json({ success: true }, { status: 201 })
            }

            throw dbError
        }
    } catch (error) {
        console.error('Error saving review:', error)
        return NextResponse.json(
            { error: 'Failed to save review. Please try again.' },
            { status: 500 }
        )
    }
}
