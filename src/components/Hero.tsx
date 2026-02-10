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

      {/* Animated Glowing Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{
              y: [null, "-100%"],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-[#c9a227] rounded-full"
            style={{ left: `${10 + i * 8}%` }}
          />
        ))}
      </div>

      {/* Morphing Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ["30% 70% 70% 30%", "70% 30% 30% 70%", "30% 70% 70% 30%"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#c9a227]/5 to-transparent"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            borderRadius: ["70% 30% 30% 70%", "30% 70% 70% 30%", "70% 30% 30% 70%"]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#c9a227]/3 to-transparent"
        />
      </div>

      {/* Rotating Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-[#c9a227]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] border border-[#c9a227]/5 rounded-full"
        />
      </div>

      {/* Floating Botanical Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 text-6xl opacity-20 hidden lg:block pointer-events-none"
      >
        🌿
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-16 text-5xl opacity-15 hidden lg:block pointer-events-none"
      >
        🍃
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-8 text-4xl opacity-10 hidden xl:block pointer-events-none"
      >
        ✧
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-32 text-5xl opacity-15 hidden xl:block pointer-events-none"
      >
        🌸
      </motion.div>

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
            className="px-10 py-4 bg-[#c9a227] text-[#1a2e1f] text-sm tracking-widest uppercase font-medium hover:bg-[#d4af37] transition-colors rounded-full"
          >
            Shop Collection
          </Link>
          <Link
            href="/about"
            className="px-10 py-4 border border-white/30 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-colors rounded-full"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[9px] text-white/50 uppercase tracking-widest"
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#c9a227]/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
