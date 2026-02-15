'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'

export default function PhilosophyPage() {
    return (
        <div className="min-h-screen bg-[#faf8f5]">
            <Header />

            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#1a2e1f] to-[#2a3e2f]">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-20 w-96 h-96 bg-[#c9a227] rounded-full blur-3xl" />
                        <div className="absolute bottom-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="h-px w-16 bg-[#c9a227] mx-auto mb-8" />
                            <span className="text-[#c9a227] uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
                                Our Guiding Principles
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                                Our <span className="italic text-[#c9a227]">Philosophy</span>
                            </h1>
                            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
                                Rooted in ancient wisdom, guided by discipline, and dedicated to authentic healing
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Philosophy Content */}
                <section className="max-w-4xl mx-auto px-6 py-20">
                    <div className="space-y-16">
                        {/* Principle 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-[#c9a227] pl-8"
                        >
                            <h2 className="text-3xl font-serif text-[#1a2e1f] mb-4">
                                हृदय तिष्ठति संहिता
                            </h2>
                            <p className="text-[#c9a227] italic mb-4">The Samhita stays in the heart</p>
                            <p className="text-gray-600 leading-relaxed">
                                We believe that true Ayurvedic knowledge is not just memorized—it is lived, felt, and embodied. Every formulation we create comes from a deep reverence for the classical texts and a commitment to preserving their wisdom without compromise.
                            </p>
                        </motion.div>

                        {/* Principle 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-[#c9a227] pl-8"
                        >
                            <h2 className="text-3xl font-serif text-[#1a2e1f] mb-4">
                                Tradition Over Trends
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                In a world rushing towards instant results, we choose the path of patience. Our formulations are not invented; they are rediscovered from ancient texts. We reject shortcuts, chemical stabilizers, and mass production in favor of time-honored methods that honor the integrity of each ingredient.
                            </p>
                        </motion.div>

                        {/* Principle 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-[#c9a227] pl-8"
                        >
                            <h2 className="text-3xl font-serif text-[#1a2e1f] mb-4">
                                Slow Healing, Deep Roots
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We value root-cause correction over temporary relief. True wellness takes time. Our approach is not about quick fixes but about restoring balance to the body and mind through gentle, sustained nourishment.
                            </p>
                        </motion.div>

                        {/* Principle 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-[#c9a227] pl-8"
                        >
                            <h2 className="text-3xl font-serif text-[#1a2e1f] mb-4">
                                Student-Led, Scholar-Driven
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We are students first, practitioners second. This humility keeps us grounded in continuous learning and deep respect for the vastness of Ayurvedic knowledge. Every product we create is a reflection of our dedication to mastering this ancient science.
                            </p>
                        </motion.div>

                        {/* Principle 5 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-[#c9a227] pl-8"
                        >
                            <h2 className="text-3xl font-serif text-[#1a2e1f] mb-4">
                                Purity as a Practice
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                100% natural ingredients. No synthetic fragrances. No preservatives. No compromises. We treat the preparation of medicine as a sacred responsibility, demanding precision, patience, and deep respect for nature's gifts.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-4xl mx-auto px-6 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#1a2e1f] to-[#2a3e2f] text-white p-12 rounded-3xl text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#c9a227]/10 rounded-full blur-2xl" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-serif mb-4">
                                Experience Our <span className="italic text-[#c9a227]">Philosophy</span>
                            </h3>
                            <p className="text-white/70 mb-8 max-w-xl mx-auto">
                                Explore our collection of authentic Ayurvedic formulations
                            </p>
                            <Link
                                href="/collections/all"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#1a2e1f] rounded-full font-semibold hover:bg-[#c9a227] hover:text-white transition-all duration-300 shadow-xl"
                            >
                                Shop Our Products
                                <span>→</span>
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
