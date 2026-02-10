'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import ProductGallery from '@/components/hita/ProductGallery'
import QuantitySelector from '@/components/hita/QuantitySelector'
import HitaAccordion from '@/components/hita/Accordion'
import Toast from '@/components/Toast'
import { useCart } from '@/context/CartContext'
import { PRODUCTS, Product } from '@/data/products'

interface ProductPageContentProps {
    slug: string
}

export default function ProductPageContent({ slug }: ProductPageContentProps) {
    const product = PRODUCTS.find(p => p.slug === slug)

    // Find related products (same category, excluding current)
    const relatedProducts = PRODUCTS.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 3)

    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)
    const [showToast, setShowToast] = useState(false)
    const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null)

    // Reset variant when product changes
    useEffect(() => {
        if (product) {
            setSelectedVariant(product.variants?.[0] || null)
        }
    }, [product])

    if (!product) {
        return (
            <div className="min-h-screen bg-hita-cream flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center pt-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-cormorant text-hita-green mb-4">Product Not Found</h1>
                        <Link href="/collections/all" className="text-hita-gold hover:underline">Browse Collection</Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    const handleAddToCart = () => {
        if (selectedVariant) {
            addToCart({
                ...product,
                id: `${product.id}-${selectedVariant.size}`,
                name: `${product.name} - ${selectedVariant.size}`,
                price: selectedVariant.price,
                selectedVariant
            }, quantity)
        } else {
            addToCart(product, quantity)
        }
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
    }

    const accordions = [
        { title: "Ingredients", content: <p>{product.details.ingredients}</p> },
        { title: "Benefits", content: <p>{product.details.benefits}</p> },
        { title: "How to Use", content: <p>{product.details.howToUse}</p> }
    ]

    const currentPrice = selectedVariant ? selectedVariant.price : product.price

    return (
        <div className="bg-hita-cream min-h-screen font-sans selection:bg-hita-gold selection:text-white flex flex-col">
            <Header />
            <AnimatePresence>
                {showToast && <Toast message={`Added ${product.name} to cart`} type="success" />}
            </AnimatePresence>

            <main className="flex-grow pt-24 pb-16 lg:pt-32">
                <div className="container-max px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="text-xs tracking-widest text-gray-500 mb-8 uppercase">
                        <Link href="/" className="hover:text-hita-green transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href={`/collections/${product.category}`} className="hover:text-hita-green transition-colors">{product.category.replace('-', ' ')}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-hita-green font-medium">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left: Gallery */}
                        <div className="w-full">
                            {/* Map simplified string images to object structure if needed by Gallery, or update Gallery to handle strings. 
                            Assuming ProductGallery expects {src, alt}. */}
                            <ProductGallery images={product.images.map(src => ({ src, alt: product.name }))} />
                        </div>

                        {/* Right: Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col space-y-8"
                        >
                            <div className="border-b border-hita-green/10 pb-8">
                                {product.badge && (
                                    <span className="inline-block bg-hita-gold/20 text-hita-green text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-4 rounded-sm">
                                        {product.badge}
                                    </span>
                                )}
                                <h1 className="font-cormorant text-4xl lg:text-5xl text-hita-green font-medium mb-4 leading-tight">
                                    {product.name}
                                </h1>
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-medium tracking-wide text-gray-900">
                                        Rs. {currentPrice.toLocaleString('en-IN')}.00
                                    </span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                                        Tax included
                                    </span>
                                </div>
                            </div>

                            <div className="prose prose-sm text-gray-600 font-light leading-relaxed">
                                <p className="text-base">{product.description}</p>
                                {product.process && (
                                    <p className="text-sm italic text-hita-gold mt-2">
                                        "{product.process}"
                                    </p>
                                )}
                            </div>

                            <div className="space-y-6 pt-2">
                                {/* Variant Selector */}
                                {product.variants && (
                                    <div className="flex flex-wrap gap-3">
                                        {product.variants.map((variant) => (
                                            <button
                                                key={variant.size}
                                                onClick={() => setSelectedVariant(variant)}
                                                className={`px-4 py-2 border text-xs uppercase tracking-widest transition-all ${selectedVariant?.size === variant.size
                                                    ? 'border-hita-green bg-hita-green text-white'
                                                    : 'border-hita-green/30 text-hita-green hover:border-hita-green'
                                                    }`}
                                            >
                                                {variant.size}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                <QuantitySelector
                                    initialQuantity={1}
                                    onQuantityChange={setQuantity}
                                />

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={handleAddToCart}
                                        className="flex-1 py-4 px-8 border border-hita-green text-hita-green bg-transparent hover:bg-hita-green hover:text-white font-sans text-xs uppercase tracking-[0.15em] transition-all duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={handleAddToCart}
                                        className="flex-1 py-4 px-8 bg-hita-green text-white hover:bg-hita-green-dragongreen font-sans text-xs uppercase tracking-[0.15em] shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>

                            <div className="pt-4">
                                <HitaAccordion items={accordions} />
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-hita-green/10 text-center opacity-80">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="text-2xl">🌱</div>
                                    <span className="text-[10px] uppercase tracking-widest text-hita-green">100% Natural</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="text-2xl">🐰</div>
                                    <span className="text-[10px] uppercase tracking-widest text-hita-green">Cruelty Free</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="text-2xl">🤲</div>
                                    <span className="text-[10px] uppercase tracking-widest text-hita-green">Handcrafted</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-24 pt-16 border-t border-hita-green/10">
                            <h2 className="text-3xl font-cormorant text-hita-green text-center mb-12">You May Also Like</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedProducts.map(rp => (
                                    <Link key={rp.id} href={`/products/${rp.slug}`} className="group block">
                                        <div className="aspect-[4/5] bg-white relative overflow-hidden mb-4 rounded-sm">
                                            {/* Simple image for related products to avoid heavy WebGL on one page if needed, 
                                            or reuse ThreeProductCard if performance allows. Using simple image for now for speed. */}
                                            <div className="relative w-full h-full">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={rp.images[0]}
                                                    alt={rp.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-cormorant text-gray-900 group-hover:text-hita-green transition-colors">{rp.name}</h3>
                                        <p className="text-sm text-gray-500">Rs. {rp.price.toLocaleString('en-IN')}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )
}
