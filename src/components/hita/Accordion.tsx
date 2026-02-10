'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    isOpen?: boolean
    onClick?: () => void
}

function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-hita-green/20 last:border-0">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full py-4 text-left group"
            >
                <span className="text-hita-green font-serif text-lg tracking-wide group-hover:text-hita-gold transition-colors duration-300">
                    {title}
                </span>
                <span className={`transform transition-transform duration-300 text-hita-green/60 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-700 font-sans font-light leading-relaxed text-sm">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface AccordionProps {
    items: {
        title: string
        content: React.ReactNode
    }[]
    allowMultiple?: boolean
}

export default function HitaAccordion({ items, allowMultiple = false }: AccordionProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const handleClick = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            )
        } else {
            setOpenIndexes(prev =>
                prev.includes(index) ? [] : [index]
            )
        }
    }

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndexes.includes(index)}
                    onClick={() => handleClick(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    )
}
