'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function CounterAnimation({ endValue, duration = 2 }: { endValue: number; duration?: number }) {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setValue(Math.floor(endValue * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setValue(endValue)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [endValue, duration])

  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {value.toLocaleString()}
    </motion.span>
  )
}
