import React from 'react';
import Header from '../../components/hita/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const BLOG_POSTS = [
    {
        id: 1,
        slug: 'benefits-of-abhyanga',
        title: 'The Art of Abhyanga: Why You Need a Daily Oil Massage',
        excerpt: 'Discover the ancient Ayurvedic practice of self-massage and how it can transform your physical and mental well-being.',
        date: 'October 15, 2023',
        category: 'Wellness',
        image: '/images/product_oil.jpg' // Placeholder
    },
    {
        id: 2,
        slug: 'ayurvedic-diet-winter',
        title: 'Winter Wellness: An Ayurvedic Guide to Eating Right',
        excerpt: 'As the season changes, so should your diet. Learn which foods to embrace and avoid during the cold months to keep your Doshas in balance.',
        date: 'November 02, 2023',
        category: 'Nutrition',
        image: '/images/category_skin.jpg' // Placeholder
    },
    {
        id: 3,
        slug: 'power-of-neem',
        title: 'Neem: The Miracle Herb for Clear Skin',
        excerpt: 'Unveiling the secrets of Neem and its powerful antibacterial properties that have made it a staple in Ayurvedic skincare for centuries.',
        date: 'November 20, 2023',
        category: 'Skincare',
        image: '/images/category_oral.jpg' // Placeholder
    }
];

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Journal',
    description: 'Insights, tips, and ancient wisdom for a modern lifestyle.',
}

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-stone-50 flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16 space-y-4">
                            <h1 className="text-4xl md:text-5xl font-serif text-primary-900">The Journal</h1>
                            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                                Insights, tips, and ancient wisdom for a modern lifestyle.
                            </p>
                        </div>

                        {/* Featured Post (First one) */}
                        <div className="mb-16">
                            <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="group block relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="grid md:grid-cols-2">
                                    <div className="relative h-64 md:h-96">
                                        <Image
                                            src={BLOG_POSTS[0].image}
                                            alt={BLOG_POSTS[0].title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                                        <div className="text-sm font-medium text-secondary-600 mb-3 uppercase tracking-wider">
                                            {BLOG_POSTS[0].category} • {BLOG_POSTS[0].date}
                                        </div>
                                        <h2 className="text-3xl font-serif text-primary-900 mb-4 group-hover:text-primary-700 transition-colors">
                                            {BLOG_POSTS[0].title}
                                        </h2>
                                        <p className="text-stone-600 mb-6 text-lg">
                                            {BLOG_POSTS[0].excerpt}
                                        </p>
                                        <span className="text-primary-600 font-medium inline-flex items-center group-hover:underline">
                                            Read Article
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Recent Posts Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {BLOG_POSTS.slice(1).map((post) => (
                                <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                                    <div className="relative h-60 w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="text-xs font-medium text-secondary-600 mb-3 uppercase tracking-wider">
                                            {post.category} • {post.date}
                                        </div>
                                        <h3 className="text-xl font-serif text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-stone-600 mb-4 text-sm flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-primary-600 font-medium text-sm inline-flex items-center group-hover:underline mt-auto">
                                            Read Article
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
