'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type CartItem = {
    id: string
    name: string
    price: number
    image: string
    quantity: number
    slug: string
}

type CartContextType = {
    cartItems: CartItem[]
    addToCart: (product: any, quantity: number) => void
    removeFromCart: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    cartTotal: number
    cartCount: number
    isCartOpen: boolean
    toggleCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isClient, setIsClient] = useState(false)

    // Load cart from localStorage on mount
    useEffect(() => {
        setIsClient(true)
        const savedCart = localStorage.getItem('tyv-cart')
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart))
            } catch (e) {
                console.error('Failed to parse cart', e)
            }
        }
    }, [])

    // Save cart to localStorage on change
    useEffect(() => {
        if (isClient) {
            localStorage.setItem('tyv-cart', JSON.stringify(cartItems))
        }
    }, [cartItems, isClient])

    const addToCart = (product: any, quantity: number) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id)
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            }
            return [...prev, {
                id: product.id,
                name: product.name,
                price: typeof product.price === 'string'
                    ? parseInt(product.price.replace(/[^0-9]/g, ''))
                    : product.price,
                image: product.image || (product.images && product.images.length > 0 ? product.images[0] : ''),
                slug: product.slug,
                quantity
            }]
        })
        setIsCartOpen(true)
    }

    const removeFromCart = (productId: string) => {
        setCartItems(prev => prev.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1) return
        setCartItems(prev =>
            prev.map(item => item.id === productId ? { ...item, quantity } : item)
        )
    }

    const clearCart = () => setCartItems([])

    const toggleCart = () => setIsCartOpen(prev => !prev)

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount,
            isCartOpen,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
