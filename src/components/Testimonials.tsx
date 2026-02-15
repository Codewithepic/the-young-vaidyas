'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [reviews, setReviews] = useState<Review[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [mounted, setMounted] = useState(false)

    // Mark component as mounted on client-side
    useEffect(() => {
        setMounted(true)
    }, [])

    // Fetch reviews on component mount
    useEffect(() => {
        if (mounted) {
            fetchReviews()
        }
    }, [mounted])

    const fetchReviews = async () => {
        try {
            const response = await fetch('/api/reviews')
            if (response.ok) {
                const data = await response.json()
                setReviews(data)
            }
        } catch (error) {
            console.error('Error fetching reviews:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setIsSubmitted(true)
                await fetchReviews()
                setTimeout(() => {
                    setShowForm(false)
                    setIsSubmitted(false)
                    setFormData({ name: '', location: '', rating: 5, review: '' })
                }, 3000)
            } else {
                alert('Failed to submit review. Please try again.')
            }
        } catch (error) {
            console.error('Error submitting review:', error)
            alert('Failed to submit review. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    // Prevent hydration mismatch by not rendering until mounted on client
    if (!mounted || isLoading) {
        return (
            <section className="py-20 md:py-32 bg-gradient-to-br from-[#faf8f5] via-white to-[#f5f3ef]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-block">
                        <div className="w-12 h-12 border-4 border-[#c9a227] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#faf8f5] via-white to-[#f5f3ef]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Elegant Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#c9a227]/10 to-[#1a2e1f]/10 rounded-full mb-6"
                    >
                        <span className="w-2 h-2 bg-[#c9a227] rounded-full mr-3 animate-pulse"></span>
                        <span className="text-[#1a2e1f] uppercase tracking-[0.3em] text-[10px] font-semibold">Customer Stories</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1a2e1f] mb-6"
                    >
                        Voices of <span className="italic text-[#c9a227]">Wellness</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Authentic experiences from our community on their journey to natural wellness
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-24 h-1 bg-gradient-to-r from-[#c9a227] to-[#1a2e1f] rounded-full mx-auto mt-8"
                    ></motion.div>
                </div>

                {reviews.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-6">🌿</div>
                        <h2 className="text-3xl font-serif text-[#1a2e1f] mb-4">Be the First to Share</h2>
                        <p className="text-gray-600 mb-8">Your experience matters. Help others discover natural wellness.</p>
                        <button
                            onClick={() => setShowForm(true)}
                            className="px-10 py-4 bg-gradient-to-r from-[#1a2e1f] to-[#2a3e2f] text-white hover:shadow-2xl transition-all duration-300 text-sm tracking-widest uppercase font-medium rounded-full"
                        >
                            Share Your Story
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Featured Review Carousel */}
                        <div className="max-w-5xl mx-auto mb-24">
                            <div className="relative bg-white rounded-3xl shadow-xl p-12 md:p-16 border border-gray-100">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                                    ✦
                                </div>

                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center"
                                >
                                    {/* Stars */}
                                    <div className="flex justify-center gap-2 mb-8">
                                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                            <span key={i} className="text-2xl text-[#c9a227]">★</span>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-[#1a2e1f] leading-relaxed mb-10">
                                        "{reviews[currentIndex].review}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#c9a227]/20 to-[#1a2e1f]/20 rounded-full flex items-center justify-center">
                                            <span className="text-[#1a2e1f] font-serif text-xl">
                                                {reviews[currentIndex].name.charAt(0)}
                                            </span>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[#1a2e1f] font-semibold text-lg">
                                                {reviews[currentIndex].name}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                {reviews[currentIndex].location}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Navigation */}
                                <div className="flex justify-center items-center gap-8 mt-12">
                                    <button
                                        onClick={prevTestimonial}
                                        className="p-3 rounded-full bg-gray-100 hover:bg-[#c9a227] hover:text-white transition-all duration-300"
                                        aria-label="Previous review"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <div className="flex gap-2">
                                        {reviews.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentIndex(i)}
                                                className={`transition-all duration-300 rounded-full ${i === currentIndex
                                                    ? 'w-8 h-2 bg-[#c9a227]'
                                                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={nextTestimonial}
                                        className="p-3 rounded-full bg-gray-100 hover:bg-[#c9a227] hover:text-white transition-all duration-300"
                                        aria-label="Next review"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Share Your Experience CTA */}
                        <div className="text-center mb-20">
                            <button
                                onClick={() => setShowForm(!showForm)}
                                className="group px-10 py-4 bg-gradient-to-r from-[#1a2e1f] to-[#2a3e2f] text-white hover:shadow-2xl transition-all duration-300 text-sm tracking-widest uppercase font-medium rounded-full relative overflow-hidden"
                            >
                                <span className="relative z-10">{showForm ? 'Hide Form' : 'Share Your Experience'}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>

                        {/* Review Submission Form */}
                        {showForm && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="max-w-3xl mx-auto mb-24"
                            >
                                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                            <h3 className="text-3xl font-serif text-[#1a2e1f] mb-3">Thank You!</h3>
                                            <p className="text-gray-600 text-lg">Your review has been submitted successfully</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="text-center mb-8">
                                                <h3 className="text-3xl font-serif text-[#1a2e1f] mb-2">Share Your Story</h3>
                                                <p className="text-gray-600">Help others discover the power of Ayurveda</p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-semibold text-[#1a2e1f] mb-3 uppercase tracking-wider">Your Name *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition-all text-[#1a2e1f]"
                                                        placeholder="Enter your name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-[#1a2e1f] mb-3 uppercase tracking-wider">Location *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.location}
                                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition-all text-[#1a2e1f]"
                                                        placeholder="Your city"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-[#1a2e1f] mb-3 uppercase tracking-wider">Your Rating *</label>
                                                <div className="flex gap-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <button
                                                            key={star}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, rating: star })}
                                                            className={`text-4xl transition-all duration-200 hover:scale-110 ${star <= formData.rating ? 'text-[#c9a227]' : 'text-gray-300'
                                                                }`}
                                                        >
                                                            ★
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-[#1a2e1f] mb-3 uppercase tracking-wider">Your Experience *</label>
                                                <textarea
                                                    required
                                                    rows={5}
                                                    value={formData.review}
                                                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                                                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition-all text-[#1a2e1f] resize-none"
                                                    placeholder="Share your journey with our products..."
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full px-10 py-5 bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-white hover:shadow-2xl transition-all duration-300 text-sm tracking-widest uppercase font-semibold rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Submit Review'}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* All Reviews Grid */}
                        <div>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-serif text-[#1a2e1f] mb-4">
                                    Community <span className="italic text-[#c9a227]">Reviews</span>
                                </h2>
                                <p className="text-gray-600 text-lg">Real stories from real people</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {reviews.map((review, index) => (
                                    <motion.div
                                        key={review.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#c9a227]/30"
                                    >
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-5">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <span key={i} className="text-lg text-[#c9a227]">★</span>
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-4">
                                            "{review.review}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                                            <div className="w-10 h-10 bg-gradient-to-br from-[#c9a227]/20 to-[#1a2e1f]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-[#1a2e1f] font-serif text-sm">
                                                    {review.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-[#1a2e1f] font-semibold text-sm">{review.name}</p>
                                                <p className="text-gray-500 text-xs">{review.location}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
