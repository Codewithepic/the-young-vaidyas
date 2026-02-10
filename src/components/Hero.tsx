'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a2e1f]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_background.jpg"
          alt="Ayurvedic wellness background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e1f]/60 via-[#1a2e1f]/40 to-[#1a2e1f]" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-8 top-1/3 w-px h-32 bg-gradient-to-b from-transparent via-[#c9a227]/40 to-transparent hidden lg:block" />
      <div className="absolute right-8 bottom-1/3 w-px h-32 bg-gradient-to-b from-transparent via-[#c9a227]/40 to-transparent hidden lg:block" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-[#c9a227]/50" />
          <span className="text-[#c9a227] uppercase tracking-[0.35em] text-[10px] font-medium">
            Handcrafted in India
          </span>
          <span className="w-8 h-px bg-[#c9a227]/50" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-6"
        >
          Ancient Wisdom,
          <br />
          <span className="italic text-[#c9a227]">Modern Wellness</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          Pure Ayurvedic formulations crafted with classical precision
          by student scholars of traditional medicine.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/collections/all"
            className="px-10 py-4 bg-[#c9a227] text-[#1a2e1f] text-sm tracking-widest uppercase font-medium hover:bg-[#d4af37] transition-colors"
          >
            Shop Collection
          </Link>
          <Link
            href="/about"
            className="px-10 py-4 border border-white/30 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[9px] text-white/50 uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a227]/60 to-transparent" />
      </motion.div>
    </section>
  )
}
