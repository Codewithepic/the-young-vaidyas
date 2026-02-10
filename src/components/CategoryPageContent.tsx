'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import { PRODUCTS, CATEGORIES } from '@/data/products'

interface CategoryPageContentProps {
    slug: string
}

export default function CategoryPageContent({ slug }: CategoryPageContentProps) {
    const category = slug === 'all'
        ? { name: 'All Products', description: 'Explore our complete collection of Ayurvedic formulations.', slug: 'all', image: '/images/hero_background.jpg' }
        : CATEGORIES.find(c => c.slug === slug)

    const products = slug === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === slug)

    if (!category) {
        return (
            <div className="min-h-screen bg-[#faf8f5] flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-serif text-[#1a2e1f] mb-4">Category Not Found</h1>
                        <Link href="/" className="text-[#c9a227] hover:underline">Return Home</Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#faf8f5] flex flex-col">
            <Header />

            <main className="flex-grow pt-24 pb-16">
                {/* Category Header */}
                <section className="relative py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1a2e1f]/20 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#c9a227]/20 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#c9a227] uppercase tracking-[0.2em] text-xs font-medium mb-4 block">
                                Collection
                            </span>
                            <h1 className="text-5xl md:text-6xl font-serif text-[#1a2e1f] mb-6">
                                {category.name}
                            </h1>
                            <p className="max-w-xl mx-auto text-gray-600 leading-relaxed">
                                {category.description}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Product Grid */}
                <section className="max-w-7xl mx-auto px-4">
                    {slug === 'all' ? (
                        <div className="space-y-20">
                            {CATEGORIES.map((cat) => {
                                const catProducts = products.filter(p => p.category === cat.slug);
                                if (catProducts.length === 0) return null;

                                return (
                                    <div key={cat.id}>
                                        <div className="flex items-center justify-center gap-4 mb-10">
                                            <div className="h-px w-16 bg-[#c9a227]/30"></div>
                                            <h2 className="text-3xl font-serif text-[#1a2e1f]">{cat.name}</h2>
                                            <div className="h-px w-16 bg-[#c9a227]/30"></div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                                            {catProducts.map((product, index) => (
                                                <motion.div
                                                    key={product.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <Link href={`/products/${product.slug}`} className="block group">
                                                        <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-white border border-gray-100">
                                                            <Image
                                                                src={product.images[0]}
                                                                alt={product.name}
                                                                fill
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                                loading="lazy"
                                                            />
                                                            {product.badge && (
                                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#1a2e1f] text-[10px] uppercase tracking-widest px-3 py-1">
                                                                    {product.badge}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="text-center">
                                                            <h3 className="text-xl font-serif text-[#1a2e1f] group-hover:text-[#c9a227] transition-colors mb-1">
                                                                {product.name}
                                                            </h3>
                                                            <p className="text-gray-500 text-sm mb-2">
                                                                {product.shortDescription}
                                                            </p>
                                                            <p className="text-[#1a2e1f] font-medium">
                                                                Rs. {product.price.toLocaleString('en-IN')}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        products.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                                {products.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link href={`/products/${product.slug}`} className="block group">
                                            <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-white border border-gray-100">
                                                <Image
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                                {product.badge && (
                                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#1a2e1f] text-[10px] uppercase tracking-widest px-3 py-1">
                                                        {product.badge}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <h3 className="text-xl font-serif text-[#1a2e1f] group-hover:text-[#c9a227] transition-colors mb-1">
                                                    {product.name}
                                                </h3>
                                                <p className="text-gray-500 text-sm mb-2">
                                                    {product.shortDescription}
                                                </p>
                                                <p className="text-[#1a2e1f] font-medium">
                                                    Rs. {product.price.toLocaleString('en-IN')}
                                                </p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 bg-white/50 border border-dashed border-[#1a2e1f]/20 rounded-lg">
                                <p className="text-gray-500 italic">No products found in this category yet.</p>
                            </div>
                        )
                    )}
                </section>
            </main>

            <Footer />
        </div>
    )
}
