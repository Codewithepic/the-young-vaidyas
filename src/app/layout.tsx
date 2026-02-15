import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cinzel, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import CustomCursor from '@/components/CustomCursor'
import CustomScrollbar from '@/components/CustomScrollbar'

import { CartProvider } from '@/context/CartContext'
import CartDrawer from '@/components/CartDrawer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'The Young Vaidyas - Ayurvedic Wellness',
    template: '%s | The Young Vaidyas'
  },
  description: 'Authentic Ayurvedic wellness and handmade formulations rooted in classical texts. Experience the wisdom of nature.',
  keywords: ['Ayurveda', 'Wellness', 'Skincare', 'Hair Care', 'Natural Products', 'BAMS Doctors', 'Traditional Medicine'],
  authors: [{ name: 'The Young Vaidyas' }],
  creator: 'The Young Vaidyas',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://theyoungvaidyas.com',
    siteName: 'The Young Vaidyas',
    title: 'The Young Vaidyas - Ayurvedic Wellness',
    description: 'Authentic Ayurvedic wellness consultations and handmade formulations.',
    images: [
      {
        url: '/images/hero_bg_new.png',
        width: 1200,
        height: 630,
        alt: 'The Young Vaidyas - Ayurvedic Wellness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Young Vaidyas',
    description: 'Authentic Ayurvedic wellness consultations and handmade formulations.',
    images: ['/images/hero_bg_new.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${cinzel.variable} ${cormorant.variable} font-sans bg-hita-cream text-gray-800 antialiased`}>
        <CartProvider>
          <ScrollProgress />
          {/* <CustomCursor /> */}
          <CustomScrollbar />
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}