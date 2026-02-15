export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    category: 'skincare' | 'hair-care' | 'wellness';
    description: string;
    shortDescription: string;
    images: string[];
    badge?: string;
    details: {
        ingredients: string;
        benefits: string;
        howToUse: string;
    };
    variants?: {
        size: string;
        price: number;
    }[];
    process?: string;
}

export const PRODUCTS: Product[] = [
    {
        id: '1',
        slug: 'shat-dhauta-ghrit',
        name: 'Shat Dhauta Ghrit',
        price: 300,
        category: 'skincare',
        description: "A traditional Ayurvedic skin elixir made by washing Gir Cow Ghee 100 times in a copper vessel. This rigorous process transforms the ghee into a cooling, lightweight cream that penetrates deep into the skin layers. Infused with pure Rose Water, it heals, moisturizes, and creates a natural glow without clogging pores.",
        shortDescription: "100-times washed Ghee skin elixir.",
        images: ['/images/products/1770791300096.png'],
        badge: 'Signature',
        variants: [
            { size: "10gm", price: 100 },
            { size: "30gm", price: 300 }
        ],
        details: {
            ingredients: "Gir Cow Ghee (washed 100 times), Rose Water.",
            benefits: "Deep hydration, cools inflamed skin, reduces dark circles, anti-aging properties.",
            howToUse: "Apply a small amount to clean face morning and night. Massage gently until absorbed."
        }
    },
    {
        id: '2',
        slug: 'keshya-mangal-hair-oil',
        name: 'Keshya Mangal Hair Oil',
        price: 449,
        category: 'hair-care',
        description: "Derived from the principle that hair health reflects digestion and mental balance. This potent blend nourishes the roots, calms stress, and improves circulation. It is not just an oil, but a ritual to ground yourself.",
        shortDescription: "Root-nourishing stress-relief oil.",
        images: ['/images/keshya_mangal_oil_v2.jpeg'],
        badge: 'Bestseller',
        process: "Processed acc to sharangdhar samhita attaining tail siddhi lakshan",
        variants: [
            { size: "50ml", price: 100 },
            { size: "200ml", price: 449 },
            { size: "450ml", price: 900 }
        ],
        details: {
            ingredients: "Amla, Bhringraj, Jatamansi, Mulethi, Neem, Aloe Vera, Cold Pressed Coconut Oil.",
            benefits: "Strengthens roots, reduces hair fall, calms the mind, improves scalp health.",
            howToUse: "Massage warm oil into scalp and leave for at least 1 hour or overnight before washing."
        }
    },
    {
        id: '3',
        slug: 'manjistha-lip-balm',
        name: 'Manjistha Lip Balm',
        price: 79,
        category: 'skincare',
        description: "A healing balm designed to restore the natural texture and color of your lips. Manjistha, known for its blood-purifying properties, helps reduce pigmentation and heal cracks, while Ghee locks in moisture.",
        shortDescription: "Pigmentation-correcting healing balm.",
        images: ['/images/products/1770791905176.png'],
        variants: [
            { size: "8gm", price: 79 }
        ],
        details: {
            ingredients: "Gir Cow Ghee, Coconut Oil, Sesame Oil, Beeswax, Manjistha.",
            benefits: "Heals chapped lips, reduces pigmentation, long-lasting moisture.",
            howToUse: "Apply liberally on lips as needed throughout the day."
        }
    },
    {
        id: '4',
        slug: 'ubtan-bathing-bar',
        name: 'Ubtan Bathing Bar',
        price: 99,
        category: 'skincare',
        description: "Where traditional ubtan meets daily convenience. This bathing bar gently exfoliates and cleanses without stripping natural oils. It brings the radiance of a wedding ubtan to your daily shower ritual.",
        shortDescription: "Radiance-boosting herbal soap.",
        images: ['/images/products/1770792132799.png'],
        variants: [
            { size: "100gm", price: 99 }
        ],
        details: {
            ingredients: "Traditional herbal ubtan blend, Vegetable Oil base.",
            benefits: "Gentle exfoliation, brightens skin tone, natural cleansing.",
            howToUse: "Lather on wet skin and rinse off thoroughly."
        }
    },
    {
        id: '5',
        slug: 'rose-lip-balm',
        name: 'Rose Lip Balm',
        price: 119,
        category: 'skincare',
        description: "A luxurious rose-infused lip balm that combines the nourishing power of Gir Cow Ghee with the soothing essence of rose. This premium balm provides deep hydration and a subtle natural tint while protecting your lips from environmental damage.",
        shortDescription: "Luxurious rose-infused lip care.",
        images: ['/images/products/1770795359872.png'],
        variants: [
            { size: "8gm", price: 119 }
        ],
        details: {
            ingredients: "Gir Cow Ghee, Coconut Oil, Sesame Oil, Beeswax, Rose Extract.",
            benefits: "Deep hydration, natural tint, protects from environmental damage, long-lasting moisture.",
            howToUse: "Apply liberally on lips as needed throughout the day for soft, rosy lips."
        }
    },
    {
        id: '6',
        slug: 'ubtan-powder',
        name: 'Ubtan Powder',
        price: 79,
        category: 'skincare',
        description: "Traditional herbal face pack powder handmade with authentic Ayurvedic herbs. This ubtan powder brings the ancient beauty ritual to your modern skincare routine, providing natural skin brightening and deep cleansing suitable for all skin types.",
        shortDescription: "Traditional herbal face pack for natural glow.",
        images: ['/images/products/1770791448264.png'],
        variants: [
            { size: "50gm", price: 79 }
        ],
        details: {
            ingredients: "Handmade blend of traditional Ayurvedic herbs including turmeric, sandalwood, chickpea flour, and rose petals.",
            benefits: "Natural skin brightening, deep cleansing, improves skin texture, suitable for all skin types.",
            howToUse: "Mix 1-2 teaspoons with water, milk, or rose water to form a paste. Apply to face and neck, leave for 10-15 minutes, then rinse with lukewarm water."
        }
    }
];

export const CATEGORIES = [
    {
        id: 'skincare',
        name: 'Skin Care',
        slug: 'skincare',
        description: 'Pure botanical formulations',
        image: '/images/category_skin.jpg'
    },
    {
        id: 'hair-care',
        name: 'Hair Care',
        slug: 'hair-care',
        description: 'Ancient oils & elixirs',
        image: '/images/category_hair.jpg'
    },
    {
        id: 'wellness',
        name: 'Wellness Tools',
        slug: 'wellness',
        description: 'Traditional tools for holistic well-being.',
        image: '/images/product_oil.jpg'
    }
];
