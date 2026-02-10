import { sql } from '@vercel/postgres'

async function createReviewsTable() {
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
        console.log('Reviews table created successfully')
    } catch (error) {
        console.error('Error creating reviews table:', error)
    }
}

createReviewsTable()
