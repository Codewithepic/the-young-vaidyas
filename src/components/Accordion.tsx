'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface AccordionItemProps {
  title: string
  content: React.ReactNode
  isOpen?: boolean
}

export default function Accordion({ items }: { items: AccordionItemProps[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="rounded-xl overflow-hidden border border-primary-200/30 backdrop-blur-sm bg-white/5"
          initial={false}
        >
          <motion.button
            className="w-full flex items-center justify-between p-4 hover:bg-primary-50/10 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-gray-900">{item.title}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ↓
            </motion.div>
          </motion.button>

          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? 'auto' : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-gray-700">
              {item.content}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
