'use client'

import React from 'react'
import Image from 'next/image'

interface ProductCardImageProps {
    image: string
    name: string
}

export default function ProductCardImage({ image, name }: ProductCardImageProps) {
    return (
        <div className="w-full h-full relative bg-[#F9F5EC] overflow-hidden group">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
            />
        </div>
    )
}
