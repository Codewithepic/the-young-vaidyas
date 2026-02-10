'use client'

import { motion, useScroll } from 'framer-motion'
import React from 'react'

export default function CustomScrollbar() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 z-50"
        style={{
          height: '100vh',
          scaleY: scrollYProgress,
          transformOrigin: 'top',
        }}
      />
      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3d8b5c, #00d4aa);
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2d6b4c, #00b490);
        }
      `}</style>
    </>
  )
}
