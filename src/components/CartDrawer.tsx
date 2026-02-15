'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CartDrawer() {
    const router = useRouter()
    const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, toggleCart } = useCart()

    // Prevent scrolling when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isCartOpen])

    const handleCheckout = () => {
        toggleCart() // Close the cart
        router.push('/checkout') // Navigate to checkout page
    }

    if (!isCartOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity"
                onClick={toggleCart}
            />

            {/* Drawer */}
            <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-serif text-hita-green">Your Cart</h2>
                    <button
                        onClick={toggleCart}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                            <span className="text-4xl opacity-50">🛒</span>
                            <p className="text-gray-500 font-sans">Your cart is empty.</p>
                            <button
                                onClick={toggleCart}
                                className="text-hita-gold hover:underline underline-offset-4"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-gray-100">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-serif text-gray-900 line-clamp-1">{item.name}</h3>
                                        <p className="text-hita-gold font-medium">₹{item.price}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-lg border border-gray-200 shadow-sm">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-hita-green"
                                            >
                                                -
                                            </button>
                                            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-hita-green"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-gray-100 bg-gray-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-2xl font-serif text-hita-green">₹{cartTotal.toLocaleString('en-IN')}</span>
                        </div>
                        <p className="text-xs text-center text-gray-500 mb-4">
                            Shipping calculated at checkout.
                        </p>
                        <button
                            onClick={handleCheckout}
                            className="w-full bg-gradient-to-r from-hita-green to-[#2C5F2D] text-white py-4 rounded-xl font-medium tracking-wide shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98]"
                        >
                            PLACE ORDER REQUEST
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
