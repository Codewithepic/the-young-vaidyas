'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import { Package, MapPin, User, Phone, Mail, MessageSquare } from 'lucide-react'
import Image from 'next/image'

export default function CheckoutPage() {
    const router = useRouter()
    const { cartItems, cartTotal, clearCart } = useCart()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        // Customer Info
        name: '',
        email: '',
        phone: '',
        // Shipping Address
        address: '',
        city: '',
        state: '',
        pincode: '',
        country: 'India',
        // Notes
        notes: ''
    })

    // Redirect if cart is empty (but not during submission)
    useEffect(() => {
        if (cartItems.length === 0 && !isSubmitting) {
            router.push('/collections/all')
        }
    }, [cartItems, router, isSubmitting])

    const subtotal = cartTotal
    const shipping = cartTotal >= 500 ? 0 : 50
    const total = subtotal + shipping

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const orderData = {
                customerInfo: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone
                },
                shippingAddress: {
                    address: formData.address,
                    city: formData.city,
                    state: formData.state,
                    pincode: formData.pincode,
                    country: formData.country
                },
                items: cartItems.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    image: item.image
                })),
                subtotal,
                shipping,
                total,
                notes: formData.notes
            }

            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            })

            const result = await response.json()

            if (result.success) {
                // Store order reference for success page
                localStorage.setItem('lastOrderRef', result.orderRef)
                localStorage.setItem('lastOrderEmail', result.emailBody)

                // Navigate to success page BEFORE clearing cart
                // This prevents the useEffect from redirecting to collections
                router.push('/order-success')

                // Clear cart after a small delay to ensure navigation happens first
                setTimeout(() => {
                    clearCart()
                }, 100)
            } else {
                alert('Failed to submit order. Please try again.')
                setIsSubmitting(false)
            }
        } catch (error) {
            console.error('Error submitting order:', error)
            alert('An error occurred. Please try again.')
            setIsSubmitting(false)
        }
    }

    if (cartItems.length === 0 && !isSubmitting) {
        return null // Will redirect
    }

    return (
        <div className="min-h-screen bg-[#faf8f5]">
            <Header />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif text-[#1a2e1f] mb-4">
                            Place Order <span className="italic text-[#c9a227]">Request</span>
                        </h1>
                        <p className="text-gray-600">Fill in your details and we'll contact you to confirm your order and payment</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Order Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Customer Information */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <User className="text-[#c9a227]" size={24} />
                                        <h2 className="text-2xl font-serif text-[#1a2e1f]">Customer Information</h2>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#1a2e1f] mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-[#1a2e1f] mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-[#1a2e1f] mb-2">Phone *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Shipping Address */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <MapPin className="text-[#c9a227]" size={24} />
                                        <h2 className="text-2xl font-serif text-[#1a2e1f]">Shipping Address</h2>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#1a2e1f] mb-2">Street Address *</label>
                                            <input
                                                type="text"
                                                name="address"
                                                required
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition"
                                                placeholder="House no., Building name, Street"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-[#1a2e1f] mb-2">City *</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    required
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition"
                                                    placeholder="City"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-[#1a2e1f] mb-2">State *</label>
                                                <input
                                                    type="text"
                                                    name="state"
                                                    required
                                                    value={formData.state}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition"
                                                    placeholder="State"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-[#1a2e1f] mb-2">PIN Code *</label>
                                                <input
                                                    type="text"
                                                    name="pincode"
                                                    required
                                                    value={formData.pincode}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition"
                                                    placeholder="560001"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-[#1a2e1f] mb-2">Country</label>
                                                <input
                                                    type="text"
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 outline-none"
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Notes */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <MessageSquare className="text-[#c9a227]" size={24} />
                                        <h2 className="text-2xl font-serif text-[#1a2e1f]">Order Notes (Optional)</h2>
                                    </div>

                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none transition resize-none"
                                        placeholder="Any special requests or delivery instructions..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-[#1a2e1f] to-[#2a3e2f] text-white text-sm tracking-widest uppercase font-semibold hover:shadow-xl transition-all duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Order Request'}
                                </button>
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <Package className="text-[#c9a227]" size={24} />
                                    <h2 className="text-2xl font-serif text-[#1a2e1f]">Order Summary</h2>
                                </div>

                                {/* Cart Items */}
                                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={64}
                                                    height={64}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-sm font-medium text-[#1a2e1f]">{item.name}</h3>
                                                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                                <p className="text-sm font-semibold text-[#c9a227]">₹{item.price * item.quantity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Price Breakdown */}
                                <div className="border-t border-gray-200 pt-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium text-[#1a2e1f]">₹{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium text-[#1a2e1f]">
                                            {shipping === 0 ? (
                                                <span className="text-green-600">Free</span>
                                            ) : (
                                                `₹${shipping}`
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-200">
                                        <span className="text-[#1a2e1f]">Total</span>
                                        <span className="text-[#c9a227]">₹{total}</span>
                                    </div>
                                </div>

                                {shipping === 0 && (
                                    <p className="text-xs text-green-600 mt-4 text-center">
                                        🎉 You qualify for free shipping!
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
