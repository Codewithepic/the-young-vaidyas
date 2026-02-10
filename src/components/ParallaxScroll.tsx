'use client'

import { motion } from 'framer-motion'

export default function ParallaxScroll({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      style={{
        y: scrollY * 0.5,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

import React from 'react'
