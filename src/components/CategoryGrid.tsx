'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
    {
        id: 1,
        title: 'Hair Care',
        image: '/images/category_hair.jpg',
        link: '/collections/hair-care',
        description: 'Ancient oils & elixirs',
        productCount: 1,
        icon: '🌿'
    },
    {
        id: 2,
        title: 'Skin Care',
        image: '/images/category_skin.jpg',
        link: '/collections/skincare',
        description: 'Pure botanical formulations',
        productCount: 5,
        icon: '✨'
    }
]

export default function CategoryGrid() {
    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-[#faf8f5] to-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, "-50%"],
                            opacity: [0, 0.3, 0]
                        }}
                        transition={{
                            duration: 10 + Math.random() * 8,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        className="absolute w-1 h-1 bg-[#c9a227] rounded-full"
                        style={{ left: `${10 + i * 12}%` }}
                    />
                ))}

                {/* Morphing Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        borderRadius: ["30% 70% 70% 30%", "70% 30% 30% 70%", "30% 70% 70% 30%"]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#c9a227]/5 to-transparent"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        borderRadius: ["70% 30% 30% 70%", "30% 70% 70% 30%", "70% 30% 30% 70%"]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#c9a227]/3 to-transparent"
                />

                {/* Botanical Decorations */}
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 right-16 text-6xl opacity-10 hidden lg:block"
                >
                    🍃
                </motion.div>
                <motion.div
                    animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 left-20 text-5xl opacity-10 hidden lg:block"
                >
                    🌿
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "3rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="h-px bg-[#c9a227] mb-6"
                        />
                        <span className="text-[#c9a227] uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">
                            Explore Collections
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a2e1f] leading-tight">
                            Shop by{' '}
                            <span className="relative inline-block italic text-[#c9a227]">
                                Category
                                {/* Shimmer Effect */}
                                <motion.span
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                    style={{ WebkitBackgroundClip: "text" }}
                                />
                            </span>
                        </h2>
                    </div>
                    <Link
                        href="/collections/all"
                        className="group flex items-center gap-2 text-[#1a2e1f] text-sm tracking-widest uppercase hover:text-[#c9a227] transition-colors"
                    >
                        <span>View All</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </Link>
                </motion.div>

                {/* Category Grid - Refined Asymmetric Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {categories.map((category, i) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            className={i === 1 ? 'md:mt-12' : ''}
                        >
                            <Link href={category.link} className="group block relative">
                                {/* Main Card Container */}
                                <div className="relative aspect-[4/3] md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-md">
                                    {/* Image with Parallax Effect */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>

                                    {/* Gradient Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1f] via-[#1a2e1f]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Animated Border Glow */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 border-2 border-[#c9a227]/50 shadow-[0_0_30px_rgba(201,162,39,0.3)]"
                                    />

                                    {/* Floating Product Count Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="absolute top-6 right-6 bg-[#c9a227] text-[#1a2e1f] px-4 py-2 z-20"
                                    >
                                        <p className="text-2xl font-serif font-bold">{category.productCount}</p>
                                        <p className="text-[9px] uppercase tracking-widest">Products</p>
                                    </motion.div>

                                    {/* Category Icon - Floating */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 5, 0]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-6 left-6 text-5xl opacity-30 group-hover:opacity-50 transition-opacity z-20"
                                    >
                                        {category.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                        {/* Decorative Line */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "3rem" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 + i * 0.1 }}
                                            className="h-px bg-[#c9a227] mb-4 group-hover:w-24 transition-all duration-500"
                                        />

                                        {/* Title with Stagger Effect */}
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                                            {category.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/70 text-sm md:text-base tracking-wide mb-4">
                                            {category.description}
                                        </p>

                                        {/* Explore Button */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileHover={{ x: 10 }}
                                            className="flex items-center gap-2 text-white text-xs uppercase tracking-widest group-hover:text-[#c9a227] transition-colors"
                                        >
                                            <span>Explore Collection</span>
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.div>
                                    </div>

                                    {/* Decorative Corner Elements */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 0.3 }}
                                        className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#c9a227]"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 0.3 }}
                                        className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#c9a227]"
                                    />
                                </div>

                                {/* Shadow Card - Depth Effect */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1, x: 8, y: 8 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-[#c9a227]/10 -z-10"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Decorative Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.05 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center overflow-hidden"
                >
                    <p className="text-[#1a2e1f] text-8xl md:text-9xl font-serif italic">
                        Ayurveda
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
