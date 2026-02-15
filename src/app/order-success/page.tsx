'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, Phone, MessageCircle, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export default function OrderSuccessPage() {
    const router = useRouter()
    const [orderRef, setOrderRef] = useState('')
    const [emailBody, setEmailBody] = useState('')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const ref = localStorage.getItem('lastOrderRef')
        const email = localStorage.getItem('lastOrderEmail')

        if (!ref) {
            router.push('/collections/all')
        } else {
            setOrderRef(ref)
            setEmailBody(email || '')
        }
    }, [router])

    if (!mounted || !orderRef) {
        return null
    }

    const handleSendEmail = () => {
        const subject = `Order Request - ${orderRef}`
        const mailtoLink = `mailto:theyoungvaidyas@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`
        window.location.href = mailtoLink
    }

    return (
        <div className="min-h-screen bg-[#faf8f5]">
            <Header />

            <main className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">
                    {/* Success Animation */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', duration: 0.6 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                            <CheckCircle className="text-white" size={48} />
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif text-[#1a2e1f] mb-4">
                            Order Request <span className="italic text-[#c9a227]">Received!</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-2">
                            Thank you for your interest in our Ayurvedic products
                        </p>
                        <p className="text-sm text-gray-500">
                            Order Reference: <span className="font-mono font-semibold text-[#c9a227]">{orderRef}</span>
                        </p>
                    </motion.div>

                    {/* What's Next */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 mb-8"
                    >
                        <h2 className="text-2xl font-serif text-[#1a2e1f] mb-6 text-center">What Happens Next?</h2>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#c9a227]/10 rounded-full flex items-center justify-center">
                                    <span className="text-[#c9a227] font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1a2e1f] mb-1">We'll Review Your Order</h3>
                                    <p className="text-sm text-gray-600">Our team will review your order request and verify product availability.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#c9a227]/10 rounded-full flex items-center justify-center">
                                    <span className="text-[#c9a227] font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1a2e1f] mb-1">We'll Contact You</h3>
                                    <p className="text-sm text-gray-600">Expect a call or message within 24 hours to confirm your order details.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#c9a227]/10 rounded-full flex items-center justify-center">
                                    <span className="text-[#c9a227] font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1a2e1f] mb-1">Payment Details Shared</h3>
                                    <p className="text-sm text-gray-600">We'll share our UPI ID or bank details for payment via phone/WhatsApp/email.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#c9a227]/10 rounded-full flex items-center justify-center">
                                    <span className="text-[#c9a227] font-bold">4</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1a2e1f] mb-1">Delivery Scheduled</h3>
                                    <p className="text-sm text-gray-600">Once payment is confirmed, we'll ship your order to your doorstep!</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Options */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-gradient-to-br from-[#1a2e1f] to-[#2a3e2f] p-8 md:p-10 rounded-2xl shadow-xl text-white mb-8"
                    >
                        <h2 className="text-2xl font-serif mb-2 text-center">Have Questions?</h2>
                        <p className="text-white/70 text-center mb-6">Feel free to reach out to us anytime</p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <button
                                onClick={handleSendEmail}
                                className="flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                            >
                                <Mail className="text-[#c9a227]" size={24} />
                                <span className="text-sm font-medium">Email Us</span>
                            </button>

                            <a
                                href="tel:+919876543210"
                                className="flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                            >
                                <Phone className="text-[#c9a227]" size={24} />
                                <span className="text-sm font-medium">Call Us</span>
                            </a>

                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                            >
                                <MessageCircle className="text-[#c9a227]" size={24} />
                                <span className="text-sm font-medium">WhatsApp</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/collections/all"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-[#1a2e1f] text-sm tracking-widest uppercase font-semibold hover:shadow-xl transition-all duration-300 rounded-full"
                        >
                            <ShoppingBag size={20} />
                            Continue Shopping
                        </Link>

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#1a2e1f] text-[#1a2e1f] text-sm tracking-widest uppercase font-semibold hover:bg-[#1a2e1f] hover:text-white transition-all duration-300 rounded-full"
                        >
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="text-center mt-8"
                    >
                        <p className="text-sm text-gray-500">
                            📧 A confirmation email has been sent to your registered email address
                        </p>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
