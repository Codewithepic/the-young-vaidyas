'use client'

import { motion } from 'framer-motion'

export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, #3d8b5c 0%, #00d4aa 25%, #ff6b6b 50%, #ffa85c 75%, #3d8b5c 100%)`,
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm" />
    </div>
  )
}
