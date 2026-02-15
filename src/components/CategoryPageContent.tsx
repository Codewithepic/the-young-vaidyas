'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Star, Filter } from 'lucide-react'
import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import { PRODUCTS, CATEGORIES } from '@/data/products'

interface CategoryPageContentProps {
    slug: string
}

export default function CategoryPageContent({ slug }: CategoryPageContentProps) {
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    const category = slug === 'all'
        ? { name: 'All Products', description: 'Explore our complete collection of Ayurvedic formulations.', slug: 'all', image: '/images/hero_background.jpg' }
        : CATEGORIES.find(c => c.slug === slug)

    const allProducts = slug === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === slug)

    // Filter products based on selected category (for all products page)
    const products = slug === 'all' && selectedCategory !== 'all'
        ? allProducts.filter(p => p.category === selectedCategory)
        : allProducts

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
        <div className="min-h-screen bg-gradient-to-b from-[#faf8f5] via-white to-[#faf8f5] flex flex-col">
            <Header />

            <main className="flex-grow pt-24 pb-16">
                {/* Enhanced Hero Section */}
                <section className="relative py-20 md:py-32 overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Morphing Blobs */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                                borderRadius: ["30% 70% 70% 30%", "70% 30% 30% 70%", "30% 70% 70% 30%"]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#c9a227]/10 to-transparent"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                rotate: [0, -90, 0],
                                borderRadius: ["70% 30% 30% 70%", "30% 70% 70% 30%", "70% 30% 30% 70%"]
                            }}
                            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#1a2e1f]/5 to-transparent"
                        />

                        {/* Floating Particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
                                animate={{ y: [null, "-30%"], opacity: [0, 0.4, 0] }}
                                transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 5 }}
                                className="absolute w-1 h-1 bg-[#c9a227] rounded-full"
                                style={{ left: `${10 + i * 15}%` }}
                            />
                        ))}
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            {/* Decorative Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "4rem" }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="h-px bg-[#c9a227] mx-auto mb-8"
                            />

                            <span className="text-[#c9a227] uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
                                {slug === 'all' ? 'Complete Collection' : 'Curated Selection'}
                            </span>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1a2e1f] mb-6 leading-tight">
                                {category.name.split(' ').map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        className={i === category.name.split(' ').length - 1 ? 'italic text-[#c9a227]' : ''}
                                    >
                                        {word}{' '}
                                    </motion.span>
                                ))}
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed mb-8"
                            >
                                {category.description}
                            </motion.p>

                            {/* Product Count Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#c9a227]/20 px-6 py-3 rounded-full shadow-lg"
                            >
                                <div className="w-2 h-2 bg-[#c9a227] rounded-full animate-pulse" />
                                <span className="text-sm text-[#1a2e1f] font-medium">
                                    {products.length} {products.length === 1 ? 'Product' : 'Products'} Available
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Filter Section (for all products page) */}
                {slug === 'all' && (
                    <section className="max-w-7xl mx-auto px-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap items-center justify-center gap-4"
                        >
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Filter size={16} />
                                <span className="font-medium">Filter by:</span>
                            </div>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === 'all'
                                        ? 'bg-[#1a2e1f] text-white shadow-lg'
                                        : 'bg-white text-[#1a2e1f] border border-gray-200 hover:border-[#c9a227]'
                                    }`}
                            >
                                All Products
                            </button>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.slug)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat.slug
                                            ? 'bg-[#1a2e1f] text-white shadow-lg'
                                            : 'bg-white text-[#1a2e1f] border border-gray-200 hover:border-[#c9a227]'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </motion.div>
                    </section>
                )}

                {/* Enhanced Product Grid */}
                <section className="max-w-7xl mx-auto px-6">
                    <AnimatePresence mode="wait">
                        {products.length > 0 ? (
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                            >
                                {products.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        onMouseEnter={() => setHoveredProduct(product.id)}
                                        onMouseLeave={() => setHoveredProduct(null)}
                                        className="group"
                                    >
                                        <Link href={`/products/${product.slug}`} className="block">
                                            {/* Product Image Container */}
                                            <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    className="absolute inset-0"
                                                >
                                                    <Image
                                                        src={product.images[0]}
                                                        alt={product.name}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        className="object-cover"
                                                        loading="lazy"
                                                    />
                                                </motion.div>

                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1f]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                {/* Badge */}
                                                {product.badge && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="absolute top-4 left-4 bg-[#c9a227] text-white text-[10px] uppercase tracking-widest px-4 py-2 font-semibold shadow-lg"
                                                    >
                                                        {product.badge}
                                                    </motion.div>
                                                )}

                                                {/* Quick Shop Button */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{
                                                        opacity: hoveredProduct === product.id ? 1 : 0,
                                                        y: hoveredProduct === product.id ? 0 : 20
                                                    }}
                                                    className="absolute bottom-6 left-6 right-6"
                                                >
                                                    <button className="w-full px-6 py-3 bg-white text-[#1a2e1f] text-xs tracking-[0.2em] uppercase font-semibold rounded-full shadow-xl hover:bg-[#c9a227] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                                                        <ShoppingBag size={16} />
                                                        Quick View
                                                    </button>
                                                </motion.div>

                                                {/* Decorative Corner */}
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: hoveredProduct === product.id ? 0.3 : 0 }}
                                                    className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c9a227]"
                                                />
                                            </div>

                                            {/* Product Info */}
                                            <div className="text-center px-2">
                                                {/* Rating */}
                                                <div className="flex items-center justify-center gap-1 mb-3">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={12} className="fill-[#c9a227] text-[#c9a227]" />
                                                    ))}
                                                    <span className="text-xs text-gray-400 ml-2">(5.0)</span>
                                                </div>

                                                <h3 className="text-xl md:text-2xl font-serif text-[#1a2e1f] group-hover:text-[#c9a227] transition-colors mb-2 leading-tight">
                                                    {product.name}
                                                </h3>

                                                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                                    {product.shortDescription}
                                                </p>

                                                <div className="flex items-center justify-center gap-3">
                                                    <p className="text-[#1a2e1f] font-semibold text-lg">
                                                        Rs. {product.price.toLocaleString('en-IN')}
                                                    </p>
                                                    {product.variants && product.variants.length > 1 && (
                                                        <>
                                                            <span className="text-xs text-gray-400">•</span>
                                                            <span className="text-xs text-gray-500">
                                                                {product.variants.length} sizes
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20 bg-white/50 border-2 border-dashed border-[#c9a227]/20 rounded-2xl"
                            >
                                <div className="text-6xl mb-6 opacity-20">🌿</div>
                                <p className="text-gray-500 text-lg italic">No products found in this category yet.</p>
                                <p className="text-gray-400 text-sm mt-2">Check back soon for new arrivals!</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>

                {/* Bottom CTA Section */}
                {slug !== 'all' && (
                    <section className="max-w-7xl mx-auto px-6 mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center bg-gradient-to-br from-[#1a2e1f] to-[#2a3e2f] text-white py-16 px-8 rounded-3xl relative overflow-hidden"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-serif mb-4">
                                    Explore More <span className="italic text-[#c9a227]">Collections</span>
                                </h3>
                                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                                    Discover our complete range of Ayurvedic formulations
                                </p>
                                <Link
                                    href="/collections/all"
                                    className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#1a2e1f] rounded-full font-semibold hover:bg-[#c9a227] hover:text-white transition-all duration-300 shadow-xl"
                                >
                                    View All Products
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    )
}
