'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      setIsPointer(!!isClickable)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full pointer-events-none z-50 mix-blend-multiply"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-primary-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      {/* Particle trail */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-primary-400 rounded-full pointer-events-none z-40 opacity-60"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
          }}
          transition={{
            delay: i * 0.05,
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
        />
      ))}
    </>
  )
}
