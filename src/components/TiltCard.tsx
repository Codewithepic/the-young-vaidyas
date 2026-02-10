'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import React from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  // Disabled 3D tilt for performance - simple hover scale instead
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  )
}
