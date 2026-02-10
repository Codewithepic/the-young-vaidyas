'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
}

export default function Toast({ message, type = 'info', duration = 3000 }: ToastProps) {
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }[type]

  const icon = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  }[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      animate={isVisible ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 20, x: 20 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-4 right-4 ${bgColor} text-white rounded-lg p-4 shadow-lg flex items-center gap-2 z-50`}
    >
      <span className="font-bold">{icon}</span>
      <span>{message}</span>
    </motion.div>
  )
}
