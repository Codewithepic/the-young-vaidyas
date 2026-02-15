'use client'

import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Package, Truck, MapPin, Clock } from 'lucide-react'

export default function ShippingPage() {
    return (
        <div className="min-h-screen bg-[#faf8f5]">
            <Header />

            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#1a2e1f] to-[#2a3e2f]">
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="h-px w-16 bg-[#c9a227] mx-auto mb-8" />
                            <span className="text-[#c9a227] uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
                                Delivery Information
                            </span>
                            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
                                Shipping <span className="italic text-[#c9a227]">Policy</span>
                            </h1>
                            <p className="text-white/70 text-lg">
                                We deliver authentic Ayurvedic formulations across India
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Shipping Info */}
                <section className="max-w-4xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center mb-4">
                                <Truck className="text-[#c9a227]" size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-[#1a2e1f] mb-3">Free Shipping</h3>
                            <p className="text-gray-600">
                                Enjoy free shipping on all orders above Rs. 500 across India.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center mb-4">
                                <Clock className="text-[#c9a227]" size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-[#1a2e1f] mb-3">Delivery Time</h3>
                            <p className="text-gray-600">
                                Standard delivery within 5-7 business days for most locations.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center mb-4">
                                <MapPin className="text-[#c9a227]" size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-[#1a2e1f] mb-3">Pan-India Coverage</h3>
                            <p className="text-gray-600">
                                We ship to all major cities and towns across India.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center mb-4">
                                <Package className="text-[#c9a227]" size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-[#1a2e1f] mb-3">Secure Packaging</h3>
                            <p className="text-gray-600">
                                All products are carefully packaged to ensure they reach you in perfect condition.
                            </p>
                        </motion.div>
                    </div>

                    {/* Detailed Information */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4">Shipping Charges</h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Orders above Rs. 500: <strong className="text-[#1a2e1f]">Free Shipping</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Orders below Rs. 500: <strong className="text-[#1a2e1f]">Rs. 50</strong> shipping charge</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4">Processing Time</h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <p className="text-gray-600 leading-relaxed">
                                    Orders are processed within 1-2 business days. You will receive a confirmation email with tracking details once your order is shipped.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4">Order Tracking</h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <p className="text-gray-600 leading-relaxed">
                                    Once your order is shipped, you will receive a tracking number via email. You can use this to track your package and monitor its delivery status.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4">Contact Us</h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <p className="text-gray-600 leading-relaxed">
                                    For any shipping-related queries, please contact us at{' '}
                                    <a href="mailto:theyoungvaidyas@gmail.com" className="text-[#c9a227] hover:underline">
                                        theyoungvaidyas@gmail.com
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
