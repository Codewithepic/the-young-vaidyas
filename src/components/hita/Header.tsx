'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'

export default function HitaHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { cartCount, toggleCart } = useCart()

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-[#1a2e1f]/90 backdrop-blur-xl py-3 shadow-lg shadow-black/10'
                    : 'bg-[#1a2e1f]/80 backdrop-blur-md py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
                    <div className="flex items-center justify-between h-14">

                        {/* Left - Minimalist Nav */}
                        <nav className="hidden lg:flex items-center gap-8 flex-1">
                            <Link
                                href="/collections/all"
                                className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/90 hover:text-[#c9a227] transition-colors"
                            >
                                Shop
                            </Link>
                            <Link
                                href="/about"
                                className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/90 hover:text-[#c9a227] transition-colors"
                            >
                                Our Story
                            </Link>
                        </nav>

                        {/* Mobile Hamburger */}
                        <button
                            className="lg:hidden p-2 text-white transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 space-y-1">
                                <motion.span
                                    animate={{
                                        rotate: isMenuOpen ? 45 : 0,
                                        y: isMenuOpen ? 6 : 0
                                    }}
                                    className="block h-[1.5px] bg-current origin-center"
                                />
                                <motion.span
                                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                                    className="block h-[1.5px] bg-current"
                                />
                                <motion.span
                                    animate={{
                                        rotate: isMenuOpen ? -45 : 0,
                                        y: isMenuOpen ? -6 : 0
                                    }}
                                    className="block h-[1.5px] bg-current origin-center"
                                />
                            </div>
                        </button>

                        {/* Center - Absolute Logo */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <Link href="/" className="group block">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    src="/images/PNG_logo_shaved.png"
                                    alt="The Young Vaidyas"
                                    className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-24' : 'h-32'
                                        }`}
                                />
                            </Link>
                        </div>

                        {/* Right - Icons & Journal */}
                        <div className="flex items-center justify-end gap-6 lg:gap-8 flex-1">
                            <Link
                                href="/blog"
                                className="hidden lg:block text-[11px] uppercase tracking-[0.25em] font-medium text-white/90 hover:text-[#c9a227] transition-colors"
                            >
                                Journal
                            </Link>

                            {/* Cart */}
                            <button
                                onClick={toggleCart}
                                className="relative text-white/90 hover:text-[#c9a227] transition-colors"
                                aria-label="Shopping cart"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                    <path d="M3 6h18" />
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg>
                                {cartCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#c9a227] text-[#1a2e1f] text-[9px] font-bold rounded-full flex items-center justify-center"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Enhanced Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#1a2e1f]/95 backdrop-blur-xl"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <div className="relative h-full flex flex-col">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-10"
                                aria-label="Close menu"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Navigation Links */}
                            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
                                {[
                                    { name: 'Shop All', href: '/collections/all' },
                                    { name: 'Our Story', href: '/about' },
                                    { name: 'Reviews', href: '/reviews' },
                                    { name: 'Journal', href: '/blog' },
                                    { name: 'Contact', href: '/contact' },
                                ].map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-4xl font-serif text-white hover:text-[#c9a227] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Decoration */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pb-12 text-center"
                            >
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <span className="w-8 h-px bg-[#c9a227]/50" />
                                    <span className="text-[#c9a227] text-xs tracking-[0.3em] uppercase">
                                        Handcrafted in India
                                    </span>
                                    <span className="w-8 h-px bg-[#c9a227]/50" />
                                </div>
                                <p className="text-white/40 text-xs tracking-[0.3em] uppercase">
                                    Ancient Wisdom • Modern Wellness
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
