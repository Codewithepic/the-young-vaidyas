import { NextResponse } from 'next/server'
import { setAdminSession } from '@/lib/auth'

export async function POST(request: Request) {
    try {
        const { password } = await request.json()
        const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

        if (password !== adminPassword) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
        }

        await setAdminSession()
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
}
