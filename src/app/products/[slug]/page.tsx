import type { Metadata } from 'next'
import { PRODUCTS } from '@/data/products'
import ProductPageContent from '@/components/ProductPageContent'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    // read route params
    const { slug } = await params

    // fetch data
    const product = PRODUCTS.find((p) => p.slug === slug)

    if (!product) {
        return {
            title: 'Product Not Found',
        }
    }

    return {
        title: product.name,
        description: product.shortDescription,
        openGraph: {
            images: product.images,
        },
    }
}

export default async function Page({ params }: Props) {
    const { slug } = await params
    return <ProductPageContent slug={slug} />
}
