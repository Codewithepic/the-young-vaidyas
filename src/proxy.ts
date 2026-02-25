import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SESSION_COOKIE = 'admin_session'
const SESSION_VALUE = 'tyv_admin_authenticated'

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Protect /admin routes (but not /admin/login)
    if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
        const session = request.cookies.get(SESSION_COOKIE)?.value
        if (session !== SESSION_VALUE) {
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*'],
}
