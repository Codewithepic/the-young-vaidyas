'use client'

import { useState } from 'react'

interface QuantitySelectorProps {
    initialQuantity?: number
    onQuantityChange?: (quantity: number) => void
}

export default function QuantitySelector({
    initialQuantity = 1,
    onQuantityChange
}: QuantitySelectorProps) {
    const [quantity, setQuantity] = useState(initialQuantity)

    const decrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1
            setQuantity(newQuantity)
            onQuantityChange?.(newQuantity)
        }
    }

    const increase = () => {
        const newQuantity = quantity + 1
        setQuantity(newQuantity)
        onQuantityChange?.(newQuantity)
    }

    return (
        <div className="flex items-center">
            <span className="mr-4 text-xs tracking-widest font-sans uppercase text-gray-500">Quantity</span>
            <div className="flex items-center border border-gray-300 rounded-sm h-10 w-32">
                <button
                    onClick={decrease}
                    className="flex-1 h-full flex items-center justify-center text-gray-600 hover:text-hita-green transition-colors"
                    aria-label="Decrease quantity"
                >
                    -
                </button>
                <div className="flex-1 h-full flex items-center justify-center text-sm font-medium text-hita-green border-x border-gray-200 bg-hita-cream/30">
                    {quantity}
                </div>
                <button
                    onClick={increase}
                    className="flex-1 h-full flex items-center justify-center text-gray-600 hover:text-hita-green transition-colors"
                    aria-label="Increase quantity"
                >
                    +
                </button>
            </div>
        </div>
    )
}
