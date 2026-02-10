'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SectionDivider() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  return (
    <motion.div ref={ref} className="relative h-32 overflow-hidden" style={{ opacity }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="url(#gradient)"
          animate={{
            d: [
              'M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z',
              'M0,60 Q300,10 600,60 T1200,60 L1200,120 L0,120 Z',
              'M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3d8b5c" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3d8b5c" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
