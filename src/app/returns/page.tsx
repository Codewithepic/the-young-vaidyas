'use client'

import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { RefreshCw, Package, Clock, Mail } from 'lucide-react'

export default function ReturnsPage() {
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
                                Customer Satisfaction
                            </span>
                            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
                                Returns & <span className="italic text-[#c9a227]">Refunds</span>
                            </h1>
                            <p className="text-white/70 text-lg">
                                Your satisfaction is our priority
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Returns Info */}
                <section className="max-w-4xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center mb-4">
                                <Clock className="text-[#c9a227]" size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-[#1a2e1f] mb-3">7-Day Return Window</h3>
                            <p className="text-gray-600">
                                Return products within 7 days of delivery if you're not satisfied.
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
                                <Package className="text-[#c9a227]" size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-[#1a2e1f] mb-3">Original Packaging</h3>
                            <p className="text-gray-600">
                                Products must be unused and in original packaging for returns.
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
                                <RefreshCw className="text-[#c9a227]" size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-[#1a2e1f] mb-3">Quick Refunds</h3>
                            <p className="text-gray-600">
                                Refunds processed within 5-7 business days after return approval.
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
                                <Mail className="text-[#c9a227]" size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-[#1a2e1f] mb-3">Easy Process</h3>
                            <p className="text-gray-600">
                                Simply email us to initiate a return request.
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
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4">Return Eligibility</h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Products must be unused and in original condition</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Original packaging and seals must be intact</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Return request must be made within 7 days of delivery</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Products must not be opened or tampered with</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4">How to Return</h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <ol className="space-y-4 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] font-semibold">1.</span>
                                        <span>Email us at <a href="mailto:theyoungvaidyas@gmail.com" className="text-[#c9a227] hover:underline">theyoungvaidyas@gmail.com</a> with your order number and reason for return</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] font-semibold">2.</span>
                                        <span>Wait for our team to approve your return request</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] font-semibold">3.</span>
                                        <span>Pack the product securely in its original packaging</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] font-semibold">4.</span>
                                        <span>Ship the product to the address provided by our team</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] font-semibold">5.</span>
                                        <span>Refund will be processed once we receive and inspect the product</span>
                                    </li>
                                </ol>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4">Refund Policy</h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Once your return is received and inspected, we will send you an email notification of approval or rejection of your refund.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    If approved, your refund will be processed within 5-7 business days and credited to your original payment method.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4">Non-Returnable Items</h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Opened or used products</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Products without original packaging</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Products damaged due to misuse</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
