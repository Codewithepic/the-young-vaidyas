import { cookies } from 'next/headers'

const SESSION_COOKIE = 'admin_session'
const SESSION_VALUE = 'tyv_admin_authenticated'

export async function setAdminSession() {
    const cookieStore = await cookies()
    cookieStore.set(SESSION_COOKIE, SESSION_VALUE, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
    })
}

export async function clearAdminSession() {
    const cookieStore = await cookies()
    cookieStore.delete(SESSION_COOKIE)
}

export async function isAdminAuthenticated(): Promise<boolean> {
    const cookieStore = await cookies()
    return cookieStore.get(SESSION_COOKIE)?.value === SESSION_VALUE
}

export function isAdminAuthenticatedFromRequest(request: Request): boolean {
    const cookieHeader = request.headers.get('cookie') || ''
    return cookieHeader.includes(`${SESSION_COOKIE}=${SESSION_VALUE}`)
}
