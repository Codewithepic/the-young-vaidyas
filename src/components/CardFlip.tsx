'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function CardFlip({ front, back }: { front: React.ReactNode; back: React.ReactNode }) {
  const [isFlipped, setIsFlipped] = React.useState(false)

  return (
    <motion.div
      className="relative w-full h-full cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div style={{ backfaceVisibility: 'hidden' }}>
          {front}
        </div>
        <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          {back}
        </div>
      </motion.div>
    </motion.div>
  )
}
