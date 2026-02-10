'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function GlassmorphismCard({ children, className = '', delay = 0 }: GlassmorphismCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden group ${className}`}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0))',
        }}
      />
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
