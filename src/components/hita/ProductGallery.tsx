'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductGalleryProps {
    images: {
        src: string
        alt: string
    }[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 h-full sticky top-24">
            {/* Thumbnails - Left side on desktop, Bottom on mobile */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:h-[calc(100vh-150px)] no-scrollbar py-2 px-1">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedImage === index
                            ? 'border-hita-green opacity-100 shadow-md'
                            : 'border-transparent opacity-70 hover:opacity-100'
                            }`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80px, 96px"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-[4/5] md:aspect-auto md:h-[calc(100vh-150px)] rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5">
                <div className="absolute inset-0">
                    <Image
                        src={images[selectedImage].src}
                        alt={images[selectedImage].alt}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Zoom hint or controls could go here */}
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    {/* Optional zoom icon */}
                </div>
            </div>
        </div>
    )
}
