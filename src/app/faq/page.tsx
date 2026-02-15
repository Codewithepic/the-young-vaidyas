'use client'

import type { Metadata } from 'next'
import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        category: 'Orders & Shipping',
        questions: [
            {
                q: 'How long does delivery take?',
                a: 'Standard delivery takes 5-7 business days for most locations across India. Orders are processed within 1-2 business days.'
            },
            {
                q: 'Do you offer free shipping?',
                a: 'Yes! We offer free shipping on all orders above Rs. 500. Orders below Rs. 500 have a shipping charge of Rs. 50.'
            },
            {
                q: 'Can I track my order?',
                a: 'Absolutely! Once your order is shipped, you will receive a tracking number via email to monitor your delivery status.'
            },
            {
                q: 'Do you ship internationally?',
                a: 'Currently, we only ship within India. International shipping will be available soon.'
            }
        ]
    },
    {
        category: 'Products',
        questions: [
            {
                q: 'Are your products 100% natural?',
                a: 'Yes, all our formulations use 100% natural ingredients sourced from authentic Ayurvedic texts. We use no synthetic fragrances, preservatives, or chemicals.'
            },
            {
                q: 'How should I store the products?',
                a: 'Store products in a cool, dry place away from direct sunlight. Some products may require refrigeration—please check individual product labels.'
            },
            {
                q: 'What is the shelf life of your products?',
                a: 'Most products have a shelf life of 12-18 months from the date of manufacture. Specific expiry dates are mentioned on each product.'
            },
            {
                q: 'Are your products suitable for all skin types?',
                a: 'Our products are formulated using traditional Ayurvedic principles and are generally suitable for all skin types. However, we recommend doing a patch test before use.'
            }
        ]
    },
    {
        category: 'Returns & Refunds',
        questions: [
            {
                q: 'What is your return policy?',
                a: 'We accept returns within 7 days of delivery if the product is unused and in original packaging. Please contact us at theyoungvaidyas@gmail.com to initiate a return.'
            },
            {
                q: 'How long does it take to process a refund?',
                a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned product.'
            },
            {
                q: 'Can I exchange a product?',
                a: 'Yes, exchanges are possible for unused products in original packaging. Please contact us to arrange an exchange.'
            }
        ]
    },
    {
        category: 'About Ayurveda',
        questions: [
            {
                q: 'What makes your products different?',
                a: 'Our formulations are crafted by student scholars of traditional Ayurvedic medicine, following authentic classical texts. We prioritize purity, tradition, and time-honored preparation methods.'
            },
            {
                q: 'How long before I see results?',
                a: 'Ayurveda focuses on root-cause correction rather than quick fixes. Results vary by individual, but most people notice improvements within 2-4 weeks of consistent use.'
            },
            {
                q: 'Can I use multiple products together?',
                a: 'Yes, our products are designed to complement each other. However, for personalized guidance, please consult with an Ayurvedic practitioner.'
            }
        ]
    }
]

export default function FAQPage() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null)

    const toggleQuestion = (id: string) => {
        setOpenQuestion(openQuestion === id ? null : id)
    }

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
                                Help Center
                            </span>
                            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
                                Frequently Asked <span className="italic text-[#c9a227]">Questions</span>
                            </h1>
                            <p className="text-white/70 text-lg">
                                Find answers to common questions about our products and services
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="max-w-4xl mx-auto px-6 py-20">
                    {faqs.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-serif text-[#1a2e1f] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[#c9a227]" />
                                {category.category}
                            </h2>

                            <div className="space-y-4">
                                {category.questions.map((faq, index) => {
                                    const questionId = `${categoryIndex}-${index}`
                                    const isOpen = openQuestion === questionId

                                    return (
                                        <div
                                            key={questionId}
                                            className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <button
                                                onClick={() => toggleQuestion(questionId)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="text-[#1a2e1f] font-medium pr-4">
                                                    {faq.q}
                                                </span>
                                                <ChevronDown
                                                    size={20}
                                                    className={`text-[#c9a227] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>

                                            <motion.div
                                                initial={false}
                                                animate={{ height: isOpen ? 'auto' : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Contact CTA */}
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
                                Still Have <span className="italic text-[#c9a227]">Questions?</span>
                            </h3>
                            <p className="text-white/70 mb-8 max-w-xl mx-auto">
                                Our team is here to help. Reach out to us anytime.
                            </p>
                            <a
                                href="mailto:theyoungvaidyas@gmail.com"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#1a2e1f] rounded-full font-semibold hover:bg-[#c9a227] hover:text-white transition-all duration-300 shadow-xl"
                            >
                                Contact Us
                                <span>→</span>
                            </a>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
