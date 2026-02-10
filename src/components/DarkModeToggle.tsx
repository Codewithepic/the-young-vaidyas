'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="relative w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg"
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 40,
        }}
      >
        <span className="flex items-center justify-center w-full h-full">
          {isDark ? '🌙' : '☀️'}
        </span>
      </motion.div>
    </motion.button>
  )
}
