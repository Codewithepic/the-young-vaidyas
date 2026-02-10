import type { Metadata } from 'next'
import { CATEGORIES } from '@/data/products'
import CategoryPageContent from '@/components/CategoryPageContent'

type Props = {
    params: Promise<{ category: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    // read route params
    const { category: slug } = await params

    // fetch data
    const category = slug === 'all'
        ? { name: 'All Products', description: 'Explore our complete collection of Ayurvedic formulations.', slug: 'all', image: '/images/hero_bg_new.png' }
        : CATEGORIES.find((c) => c.slug === slug)

    if (!category) {
        return {
            title: 'Category Not Found',
        }
    }

    return {
        title: category.name,
        description: category.description,
        openGraph: {
            images: [category.image], // Assuming category has an image property
        },
    }
}

export default async function Page({ params }: Props) {
    const { category: slug } = await params
    return <CategoryPageContent slug={slug} />
}
