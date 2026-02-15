'use client'

import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
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
                                Your Data, Protected
                            </span>
                            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
                                Privacy <span className="italic text-[#c9a227]">Policy</span>
                            </h1>
                            <p className="text-white/70 text-lg">
                                Last updated: February 15, 2026
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className="max-w-4xl mx-auto px-6 py-20">
                    <div className="prose prose-lg max-w-none">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <p className="text-gray-600 leading-relaxed mb-8">
                                At The Young Vaidyas, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-[#c9a227]" />
                                Information We Collect
                            </h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 mb-6">
                                <h3 className="text-lg font-semibold text-[#1a2e1f] mb-3">Personal Information</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Name, email address, and phone number</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Shipping and billing addresses</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Payment information (processed securely through third-party providers)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <h3 className="text-lg font-semibold text-[#1a2e1f] mb-3">Usage Information</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Browser type and device information</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>IP address and location data</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Pages visited and time spent on our website</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-[#c9a227]" />
                                How We Use Your Information
                            </h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>To process and fulfill your orders</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>To communicate with you about your orders and inquiries</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>To send promotional emails and newsletters (with your consent)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>To improve our website and customer experience</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>To prevent fraud and ensure security</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-[#c9a227]" />
                                Data Security
                            </h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <p className="text-gray-600 leading-relaxed">
                                    We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted and processed through secure third-party payment gateways. We do not store credit card information on our servers.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-[#c9a227]" />
                                Cookies
                            </h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. Cookies are small text files stored on your device.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-[#c9a227]" />
                                Third-Party Services
                            </h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We may use third-party services for payment processing, shipping, and analytics. These services have their own privacy policies, and we encourage you to review them.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We do not sell or rent your personal information to third parties for marketing purposes.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-[#c9a227]" />
                                Your Rights
                            </h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Access and review your personal information</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Request correction of inaccurate data</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Request deletion of your personal information</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#c9a227] mt-1">•</span>
                                        <span>Opt-out of marketing communications</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-[#c9a227]" />
                                Changes to This Policy
                            </h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <p className="text-gray-600 leading-relaxed">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-[#c9a227]" />
                                Contact Us
                            </h2>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <p className="text-gray-600 leading-relaxed">
                                    If you have any questions about this Privacy Policy or how we handle your data, please contact us at{' '}
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
