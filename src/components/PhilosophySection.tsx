'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function PhilosophySection() {
    return (
        <section className="relative">
            {/* Image Section */}
            <div className="relative h-[60vh] min-h-[400px]">
                <Image
                    src="/images/philosophy_bg.jpg"
                    alt="Ayurvedic philosophy"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1a2e1f]/60" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center px-6 max-w-3xl"
                    >
                        <span className="text-[#c9a227] uppercase tracking-[0.3em] text-[10px] font-medium mb-6 block">
                            Our Philosophy
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
                            Rooted in <span className="italic text-[#c9a227]">Tradition</span>,
                            <br />
                            Crafted with Care
                        </h2>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto">
                            Every formulation follows the ancient Samhitas, prepared with the same reverence as centuries ago.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Quote Section */}
            <div className="bg-[#1a2e1f] py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed mb-6">
                            "हृदय तिष्ठति संहिता"
                        </p>
                        <p className="text-[#c9a227] text-sm tracking-widest uppercase mb-8">
                            The Samhita stays in the heart
                        </p>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-white text-sm tracking-widest uppercase hover:text-[#c9a227] transition-colors"
                        >
                            Read Our Story
                            <span>→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
