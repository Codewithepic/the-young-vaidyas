'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
    {
        id: 1,
        quote: "I've tried many Ayurvedic brands, but The Young Vaidyas stands out. The face serum has completely restored my skin's natural glow.",
        author: "Priya S.",
        location: "Mumbai",
        rating: 5
    },
    {
        id: 2,
        quote: "The hair oil is a miracle worker. My hair fall has reduced significantly, and it feels so much healthier now.",
        author: "Rahul M.",
        location: "Bangalore",
        rating: 5
    },
    {
        id: 3,
        quote: "Authentic, pure, and effective. The Kamal Nayan Kajal is soothing and stays put all day.",
        author: "Anjali K.",
        location: "Delhi",
        rating: 5
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-20 md:py-28 bg-[#faf8f5]">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#c9a227] uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1a2e1f]">
                        Words from Our <span className="italic">Community</span>
                    </h2>
                </div>

                {/* Testimonial Content */}
                <div className="relative">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-8"
                    >
                        {/* Stars */}
                        <div className="flex justify-center gap-1 text-[#c9a227] mb-8">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <span key={i} className="text-lg">★</span>
                            ))}
                        </div>

                        {/* Quote */}
                        <p className="text-2xl md:text-3xl font-serif italic text-[#1a2e1f] leading-relaxed mb-8">
                            "{testimonials[currentIndex].quote}"
                        </p>

                        {/* Author */}
                        <div>
                            <p className="text-[#1a2e1f] font-medium text-sm uppercase tracking-widest">
                                {testimonials[currentIndex].author}
                            </p>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                                {testimonials[currentIndex].location}
                            </p>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 text-gray-400 hover:text-[#1a2e1f] transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#c9a227] w-6' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="p-2 text-gray-400 hover:text-[#1a2e1f] transition-colors"
                            aria-label="Next testimonial"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
