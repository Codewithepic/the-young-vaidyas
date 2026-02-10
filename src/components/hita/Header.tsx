'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'

export default function HitaHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { cartCount, toggleCart } = useCart()

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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                    ? 'bg-[#1a2e1f]/95 backdrop-blur-md py-4 shadow-sm'
                    : 'bg-[#1a2e1f]/95 backdrop-blur-md py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
                    <div className="flex items-center justify-between h-14">

                        {/* Left - Minimalist Nav */}
                        <nav className="hidden lg:flex items-center gap-8 flex-1">
                            <Link
                                href="/collections/all"
                                className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-colors ${isScrolled ? 'text-white/90 hover:text-[#c5a059]' : 'text-stone-600 hover:text-[#b8922a]'
                                    }`}
                            >
                                Shop
                            </Link>
                            <Link
                                href="/about"
                                className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-colors ${isScrolled ? 'text-white/90 hover:text-[#c5a059]' : 'text-stone-600 hover:text-[#b8922a]'
                                    }`}
                            >
                                Our Story
                            </Link>
                        </nav>

                        {/* Mobile Hamburger */}
                        <button
                            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-white' : 'text-stone-800'}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="w-5 space-y-1">
                                <span className={`block h-[1.5px] bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
                                <span className={`block h-[1.5px] bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block h-[1.5px] bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
                            </div>
                        </button>

                        {/* Center - Absolute Logo to break flow */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <Link href="/" className="group block">
                                <img
                                    src="/images/PNG_logo_shaved.png"
                                    alt="The Young Vaidyas"
                                    className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Right - Icons & Journal */}
                        <div className="flex items-center justify-end gap-6 lg:gap-8 flex-1">
                            <Link
                                href="/blog"
                                className={`hidden lg:block text-[11px] uppercase tracking-[0.25em] font-medium transition-colors ${isScrolled ? 'text-white/90 hover:text-[#c5a059]' : 'text-stone-600 hover:text-[#b8922a]'
                                    }`}
                            >
                                Journal
                            </Link>

                            {/* Cart */}
                            <button
                                onClick={toggleCart}
                                className={`relative transition-colors ${isScrolled ? 'text-white/90 hover:text-[#c5a059]' : 'text-stone-600 hover:text-[#b8922a]'
                                    }`}
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
                                        className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#c9a227] text-white text-[9px] font-bold rounded-full flex items-center justify-center"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header >

            {/* Elegant Full-Screen Mobile Menu */}
            <AnimatePresence>
                {
                    isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 z-40 bg-[#faf8f5] lg:hidden flex flex-col"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-6 right-6 text-stone-600 p-2"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Menu Content */}
                            <div className="flex-1 flex flex-col items-center justify-center gap-8">
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
                                        transition={{ delay: 0.1 + i * 0.08 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-3xl font-serif text-stone-800 hover:text-[#b8922a] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Tagline */}
                            <div className="pb-12 text-center">
                                <p className="text-stone-400 text-xs tracking-[0.3em] uppercase">
                                    Ancient Wisdom • Modern Wellness
                                </p>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    )
}
