'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingBag, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Shat Dhauta Ghrit',
    description: 'Skin elixir washed 100 times',
    price: 'Rs. 1,500',
    image: '/images/product_oil.jpg',
    category: 'Skincare',
    slug: 'shat-dhauta-ghrit',
    rating: 5,
    reviews: 127
  },
  {
    id: 2,
    name: 'Keshya Mangal Hair Oil',
    description: 'Root-nourishing stress-relief oil',
    price: 'Rs. 850',
    image: '/images/keshya_mangal_oil_v2.jpeg',
    category: 'Hair Care',
    slug: 'keshya-mangal-hair-oil',
    rating: 5,
    reviews: 89
  },
  {
    id: 3,
    name: 'Kamal Nayan Kajal',
    description: 'Ayurvedic eye wellness kajal',
    price: 'Rs. 450',
    image: '/images/product_kajal.jpg',
    category: 'Eye Care',
    slug: 'kamal-nayan-kajal',
    rating: 5,
    reviews: 156
  }
]

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#faf8f5] via-white to-[#f5f3ef] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#c9a227]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1a2e1f]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#c9a227]/10 to-[#1a2e1f]/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#c9a227] rounded-full mr-3 animate-pulse"></span>
              <span className="text-[#1a2e1f] uppercase tracking-[0.3em] text-[10px] font-semibold">
                Curated Collection
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1a2e1f] mb-6">
              Our <span className="italic text-[#c9a227]">Bestsellers</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Time-honored formulations prepared with care and precision, loved by thousands
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-[#c9a227] to-[#1a2e1f] rounded-full mx-auto mt-8"></div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group"
            >
              <Link href={`/products/${product.slug}`}>
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-stone-100 to-stone-50 mb-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1f]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-[#1a2e1f] text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full font-semibold shadow-lg">
                      {product.category}
                    </span>
                  </div>

                  {/* Quick Shop Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      y: hoveredProduct === product.id ? 0 : 20
                    }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)]"
                  >
                    <button className="w-full px-6 py-3 bg-white text-[#1a2e1f] text-xs tracking-[0.2em] uppercase font-semibold rounded-full shadow-xl hover:bg-[#c9a227] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      <ShoppingBag size={16} />
                      Quick Shop
                    </button>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="text-center px-2">
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#c9a227] text-[#c9a227]" />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif text-[#1a2e1f] group-hover:text-[#c9a227] transition-colors mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <p className="text-[#1a2e1f] font-semibold text-lg">
                      {product.price}
                    </p>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-[#c9a227] uppercase tracking-wider font-medium">
                      Bestseller
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/collections/all"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1a2e1f] to-[#2a3e2f] text-white text-sm tracking-[0.2em] uppercase font-semibold hover:shadow-2xl transition-all duration-300 rounded-full relative overflow-hidden"
          >
            <span className="relative z-10">Explore All Products</span>
            <span className="group-hover:translate-x-1 transition-transform relative z-10">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}