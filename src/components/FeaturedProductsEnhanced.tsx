'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PRODUCTS } from '@/data/products'
import ThreeProductCard from '@/components/hita/ThreeProductCard'

// Select specific products to feature - for now, taking the first two
const products = PRODUCTS.slice(0, 2).map(p => ({
  id: parseInt(p.id),
  name: p.name,
  price: p.price,
  image: p.images[0],
  link: `/products/${p.slug}`,
  badge: p.badge || (p.id === '1' ? 'Bestseller' : 'Trending')
}))

export default function FeaturedProductsEnhanced() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-secondary-50">
      <div className="container-max px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-secondary-600 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block"
          >
            Curated Formulations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif text-primary-900 mb-8"
          >
            Ayurvedic Essentials
          </motion.h2>
          <div className="w-16 h-[2px] bg-secondary-400 mx-auto opacity-30"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={product.link} className="block relative">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-white mb-8 border border-primary-900/5 group-hover:border-primary-900/10 transition-colors duration-500">
                  <div className="absolute inset-4 bg-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-0 right-0 bg-primary-900 text-secondary-100 text-[10px] uppercase tracking-[0.2em] px-4 py-2 z-20">
                      {product.badge}
                    </div>
                  )}

                  {/* 3D Card Effect Wrapper */}
                  <div className="relative z-10 w-full h-full transform transition-transform duration-700 group-hover:scale-105">
                    <ThreeProductCard image={product.image} name={product.name} />
                  </div>
                </div>

                {/* Product Details */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-serif text-primary-900 group-hover:text-secondary-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-primary-800/60 font-sans text-sm tracking-widest uppercase">
                    Rs. {product.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* View All Card - Clean Minimalist Style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center bg-white border border-secondary-200 aspect-[4/5] p-12 text-center group hover:bg-secondary-500 hover:border-secondary-500 transition-all duration-500"
          >
            <Link href="/collections/all" className="block w-full h-full flex flex-col items-center justify-center">
              <span className="text-5xl lg:text-6xl font-serif text-secondary-400 mb-6 group-hover:text-primary-900 transition-colors duration-500">
                ✦
              </span>
              <h3 className="text-3xl font-serif text-primary-900 mb-4 group-hover:text-white transition-colors duration-500">
                View Collection
              </h3>
              <p className="text-primary-800/60 font-sans text-sm leading-relaxed mb-8 group-hover:text-primary-900/80 transition-colors duration-500">
                Discover our complete range of pure Ayurvedic formulations.
              </p>
              <div className="inline-block border-b border-primary-900 text-primary-900 pb-1 text-xs uppercase tracking-widest group-hover:text-white group-hover:border-white transition-all">
                Shop All Products
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

