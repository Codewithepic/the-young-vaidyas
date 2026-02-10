'use client'

import { motion } from 'framer-motion'

interface SkeletonProps {
  width?: string
  height?: string
  circle?: boolean
}

export default function Skeleton({ width = 'w-full', height = 'h-4', circle = false }: SkeletonProps) {
  return (
    <motion.div
      className={`${width} ${height} ${circle ? 'rounded-full' : 'rounded-lg'} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200`}
      animate={{
        backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      style={{
        backgroundSize: '200% 100%',
      }}
    />
  )
}
