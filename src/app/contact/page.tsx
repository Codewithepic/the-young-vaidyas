'use client'

import React, { useState } from 'react';
import Header from '../../components/hita/Header';
import Footer from '../../components/Footer';



export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    }

    return (
        <div className="min-h-screen bg-stone-50 flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16 space-y-4">
                            <h1 className="text-4xl md:text-5xl font-serif text-primary-900">Contact Us</h1>
                            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                                Have questions about our Ayurvedic formulations or need personalized recommendations?
                                We are here to guide you on your wellness journey.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-serif text-primary-800 mb-4">Get in Touch</h3>
                                    <p className="text-stone-600 mb-6">
                                        Reach out to our Vaidyas and support team for any queries regarding products, orders, or consultations.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="bg-primary-50 p-3 rounded-full mr-4 text-primary-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-primary-900">Email</h4>
                                            <p className="text-stone-600">hello@theyoungvaidyas.com</p>
                                            <p className="text-stone-500 text-sm">We reply within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-primary-50 p-3 rounded-full mr-4 text-primary-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-primary-900">Phone</h4>
                                            <p className="text-stone-600">+91 98765 43210</p>
                                            <p className="text-stone-500 text-sm">Mon - Fri, 10am to 6pm IST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-primary-50 p-3 rounded-full mr-4 text-primary-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-primary-900">Address</h4>
                                            <p className="text-stone-600">
                                                The Young Vaidyas Wellness Center<br />
                                                123 Ayurveda Marg, Green Park<br />
                                                New Delhi, India - 110016
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form or Success Message */}
                            <div>
                                {isSubmitted ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fadeIn py-12">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl">
                                            ✉️
                                        </div>
                                        <h3 className="text-2xl font-serif text-primary-900">Message Sent!</h3>
                                        <p className="text-stone-600">
                                            Thank you for reaching out. We will get back to you shortly.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-primary-700 font-medium hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                                placeholder="Your Name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                                            <textarea
                                                id="message"
                                                rows={4}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                                placeholder="How can we help you?"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
