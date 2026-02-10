import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Philosophy',
    description: 'Returning to nature\'s rhythms. Discover the wisdom of The Young Vaidyas.',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
