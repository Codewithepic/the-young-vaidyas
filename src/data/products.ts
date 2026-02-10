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
        price: 1500, // Estimated price based on premium nature
        category: 'skincare',
        description: "A traditional Ayurvedic skin elixir made by washing Gir Cow Ghee 100 times in a copper vessel. This rigorous process transforms the ghee into a cooling, lightweight cream that penetrates deep into the skin layers. Infused with pure Rose Water, it heals, moisturizes, and creates a natural glow without clogging pores.",
        shortDescription: "100-times washed Ghee skin elixir.",
        images: ['/images/product_oil.jpg'], // Placeholder
        badge: 'Signature',
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
        price: 850,
        category: 'hair-care',
        description: "Derived from the principle that hair health reflects digestion and mental balance. This potent blend nourishes the roots, calms stress, and improves circulation. It is not just an oil, but a ritual to ground yourself.",
        shortDescription: "Root-nourishing stress-relief oil.",
        images: ['/images/keshya_mangal_oil_v2.jpeg'],
        badge: 'Bestseller',
        process: "Processed acc to sharangdhar samhita attaining tail siddhi lakshan",
        variants: [
            { size: "50ml", price: 100 },
            { size: "200ml", price: 400 },
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
        price: 350,
        category: 'skincare',
        description: "A healing balm designed to restore the natural texture and color of your lips. Manjistha, known for its blood-purifying properties, helps reduce pigmentation and heal cracks, while Ghee locks in moisture.",
        shortDescription: "Pigmentation-correcting healing balm.",
        images: ['/images/category_skin.jpg'], // Placeholder
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
        price: 250,
        category: 'skincare',
        description: "Where traditional ubtan meets daily convenience. This bathing bar gently exfoliates and cleanses without stripping natural oils. It brings the radiance of a wedding ubtan to your daily shower ritual.",
        shortDescription: "Radiance-boosting herbal soap.",
        images: ['/images/category_skin.jpg'], // Placeholder
        details: {
            ingredients: "Traditional herbal ubtan blend, Vegetable Oil base.",
            benefits: "Gentle exfoliation, brightens skin tone, natural cleansing.",
            howToUse: "Lather on wet skin and rinse off thoroughly."
        }
    }
];

export const CATEGORIES = [
    {
        id: 'skincare',
        name: 'Ayurvedic Skincare',
        slug: 'skincare',
        description: 'Pure formulations for radiant, healthy skin.',
        image: '/images/category_skin.jpg'
    },
    {
        id: 'hair-care',
        name: 'Hair Care Essentials',
        slug: 'hair-care',
        description: 'Ancient secrets for strong, lustrous hair.',
        image: '/images/category_hair.jpg'
    },

    {
        id: 'wellness',
        name: 'Wellness Tools',
        slug: 'wellness',
        description: 'Traditional tools for holistic well-being.',
        image: '/images/product_oil.jpg' // Placeholder
    }
];
