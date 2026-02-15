'use client'

import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
