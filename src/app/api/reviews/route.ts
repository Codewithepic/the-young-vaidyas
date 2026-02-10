import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// GET /api/reviews - Fetch all reviews
export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src/data/reviews.json')
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const reviews = JSON.parse(fileContents)

        return NextResponse.json(reviews)
    } catch (error) {
        console.error('Error reading reviews:', error)
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
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

        // Read existing reviews
        const filePath = path.join(process.cwd(), 'src/data/reviews.json')
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const reviews = JSON.parse(fileContents)

        // Create new review
        const newReview = {
            id: reviews.length > 0 ? Math.max(...reviews.map((r: any) => r.id)) + 1 : 1,
            name,
            location,
            rating: Number(rating),
            review,
            date: new Date().toISOString().split('T')[0],
            verified: true // Auto-approve for now
        }

        // Add to reviews array
        reviews.push(newReview)

        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(reviews, null, 4))

        return NextResponse.json({ success: true, review: newReview }, { status: 201 })
    } catch (error) {
        console.error('Error saving review:', error)
        return NextResponse.json(
            { error: 'Failed to save review' },
            { status: 500 }
        )
    }
}
