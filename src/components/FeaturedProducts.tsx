'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Shat Dhauta Ghrit',
    description: 'Skin elixir washed 100 times',
    price: 'Rs. 1,500',
    image: '/images/product_oil.jpg',
    category: 'Skincare',
    slug: 'shat-dhauta-ghrit'
  },
  {
    id: 2,
    name: 'Keshya Mangal Hair Oil',
    description: 'Root-nourishing stress-relief oil',
    price: 'Rs. 850',
    image: '/images/keshya_mangal_oil_v2.jpeg',
    category: 'Hair Care',
    slug: 'keshya-mangal-hair-oil'
  },
  {
    id: 3,
    name: 'Kamal Nayan Kajal',
    description: 'Ayurvedic eye wellness kajal',
    price: 'Rs. 450',
    image: '/images/product_kajal.jpg',
    category: 'Eye Care',
    slug: 'kamal-nayan-kajal'
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#c9a227] uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">
              Curated Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a2e1f] mb-4">
              Our <span className="italic">Bestsellers</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Time-honored formulations prepared with care and precision
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/products/${product.slug}`}>
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-[#1a2e1f] text-[10px] uppercase tracking-widest px-3 py-1">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-serif text-[#1a2e1f] group-hover:text-[#c9a227] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {product.description}
                  </p>
                  <p className="text-[#1a2e1f] font-medium">
                    {product.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/collections/all"
            className="inline-flex items-center gap-2 text-[#1a2e1f] text-sm tracking-widest uppercase hover:text-[#c9a227] transition-colors group"
          >
            View All Products
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}