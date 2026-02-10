'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BreadcrumbProps {
  items: { label: string; href: string }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      className="flex items-center gap-2 text-sm text-gray-600"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((crumb, index) => (
        <motion.div key={index} variants={item} className="flex items-center gap-2">
          <Link href={crumb.href} className="hover:text-primary-600 transition-colors">
            {crumb.label}
          </Link>
          {index < items.length - 1 && (
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
