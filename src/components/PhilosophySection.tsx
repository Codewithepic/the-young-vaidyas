'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function PhilosophySection() {
    return (
        <section className="relative overflow-hidden">
            {/* Main Split Section */}
            <div className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col md:flex-row">
                {/* Left Side - Image */}
                <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto">
                    <Image
                        src="/images/philosophy_bg.jpg"
                        alt="Ayurvedic philosophy"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e1f]/80 to-[#1a2e1f]/40" />

                    {/* Decorative Circle */}
                    <div className="absolute top-10 right-10 w-32 h-32 border border-[#c9a227]/30 rounded-full" />
                    <div className="absolute bottom-10 left-10 w-24 h-24 border border-[#c9a227]/20 rounded-full" />
                </div>

                {/* Right Side - Content */}
                <div className="relative w-full md:w-1/2 bg-gradient-to-br from-[#1a2e1f] via-[#1a2e1f] to-[#2a3e2f] flex items-center">
                    <div className="px-8 md:px-16 py-16 md:py-20 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Label */}
                            <div className="inline-flex items-center gap-3 mb-8">
                                <span className="w-12 h-[1px] bg-[#c9a227]"></span>
                                <span className="text-[#c9a227] uppercase tracking-[0.3em] text-[10px] font-semibold">
                                    Our Philosophy
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
                                Rooted in <br />
                                <span className="italic text-[#c9a227] text-4xl md:text-5xl lg:text-6xl">Tradition</span>,<br />
                                Crafted with Care
                            </h2>

                            {/* Description */}
                            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                                Every formulation follows the ancient Samhitas, prepared with the same reverence and precision as centuries ago. We honor the wisdom of our ancestors while bringing their knowledge to modern wellness.
                            </p>

                            {/* Sanskrit Quote */}
                            <div className="mb-10 pl-6 border-l-2 border-[#c9a227]/30">
                                <p className="text-xl md:text-2xl font-serif italic text-white/90 mb-2">
                                    "हृदय तिष्ठति संहिता"
                                </p>
                                <p className="text-[#c9a227] text-xs tracking-[0.2em] uppercase">
                                    The Samhita stays in the heart
                                </p>
                            </div>

                            {/* CTA */}
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-[#1a2e1f] text-xs tracking-[0.2em] uppercase font-semibold hover:shadow-lg hover:shadow-[#c9a227]/30 transition-all duration-300 rounded-full"
                            >
                                Discover Our Story
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a227]/5 rounded-full blur-3xl" />
                </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
        </section>
    )
}
