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
        description: 'Ancient oils & elixirs'
    },
    {
        id: 2,
        title: 'Skin Care',
        image: '/images/category_skin.jpg',
        link: '/collections/skincare',
        description: 'Pure botanical formulations'
    }
]

export default function CategoryGrid() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                    <div>
                        <span className="text-[#c9a227] uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">
                            Explore
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1a2e1f]">
                            Shop by <span className="italic">Category</span>
                        </h2>
                    </div>
                    <Link
                        href="/collections/all"
                        className="text-[#1a2e1f] text-sm tracking-widest uppercase hover:text-[#c9a227] transition-colors"
                    >
                        View All →
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category, i) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={category.link} className="group block relative">
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1f]/80 via-[#1a2e1f]/20 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-2xl font-serif text-white mb-1">
                                            {category.title}
                                        </h3>
                                        <p className="text-white/60 text-sm">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
