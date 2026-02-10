'use client'

import { motion } from 'framer-motion'

export default function RippleButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = document.createElement('span')
    ripple.style.position = 'absolute'
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.width = '0px'
    ripple.style.height = '0px'
    ripple.style.borderRadius = '50%'
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
    ripple.style.pointerEvents = 'none'

    button.appendChild(ripple)

    const animation = ripple.animate(
      [
        { width: '0px', height: '0px', opacity: 1 },
        { width: '300px', height: '300px', opacity: 0 },
      ],
      { duration: 600 }
    )

    animation.onfinish = () => ripple.remove()
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}
