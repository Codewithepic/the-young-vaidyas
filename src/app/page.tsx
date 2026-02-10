'use client'

import Header from '@/components/hita/Header'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategoryGrid from '@/components/CategoryGrid'
import PhilosophySection from '@/components/PhilosophySection'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-hita-cream">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <CategoryGrid />
        <PhilosophySection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}