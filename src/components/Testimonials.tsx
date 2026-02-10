'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import reviewsData from '@/data/reviews.json'

interface Review {
    id: number
    name: string
    location: string
    rating: number
    review: string
    date: string
    verified: boolean
}

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        rating: 5,
        review: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const reviews: Review[] = reviewsData

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
        setTimeout(() => {
            setShowForm(false)
            setIsSubmitted(false)
            setFormData({ name: '', location: '', rating: 5, review: '' })
        }, 3000)
    }

    return (
        <section className="py-20 md:py-28 bg-[#faf8f5]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#c9a227] uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1a2e1f]">
                        Words from Our <span className="italic">Community</span>
                    </h2>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto mb-16">
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
                                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                    <span key={i} className="text-lg">★</span>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-2xl md:text-3xl font-serif italic text-[#1a2e1f] leading-relaxed mb-8">
                                "{reviews[currentIndex].review}"
                            </p>

                            {/* Author */}
                            <div>
                                <p className="text-[#1a2e1f] font-medium text-sm uppercase tracking-widest">
                                    {reviews[currentIndex].name}
                                </p>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                                    {reviews[currentIndex].location}
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
                                {reviews.map((_, i) => (
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

                {/* Share Your Experience Button */}
                <div className="text-center mb-16">
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="px-8 py-3 bg-[#1a2e1f] text-white hover:bg-[#2a3e2f] transition-colors text-sm tracking-widest uppercase"
                    >
                        {showForm ? 'Hide Form' : 'Share Your Experience'}
                    </button>
                </div>

                {/* Review Submission Form */}
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="max-w-2xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-sm"
                    >
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <div className="text-5xl mb-4">✓</div>
                                <h3 className="text-2xl font-serif text-[#1a2e1f] mb-2">Thank You!</h3>
                                <p className="text-gray-600">Your review has been submitted and will appear after approval.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-serif text-[#1a2e1f] mb-6">Write a Review</h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.location}
                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none"
                                            placeholder="City"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                className={`text-3xl ${star <= formData.rating ? 'text-[#c9a227]' : 'text-gray-300'}`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Review *</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.review}
                                        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none"
                                        placeholder="Share your experience with our products..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-3 bg-[#c9a227] text-[#1a2e1f] hover:bg-[#d4af37] transition-colors text-sm tracking-widest uppercase font-medium"
                                >
                                    Submit Review
                                </button>
                            </form>
                        )}
                    </motion.div>
                )}

                {/* All Reviews Grid */}
                <div>
                    <h3 className="text-3xl font-serif text-[#1a2e1f] text-center mb-12">
                        All <span className="italic">Reviews</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 text-[#c9a227] mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-sm">★</span>
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                                    "{review.review}"
                                </p>

                                {/* Author */}
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-[#1a2e1f] font-medium text-sm">{review.name}</p>
                                    <p className="text-gray-400 text-xs">{review.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
