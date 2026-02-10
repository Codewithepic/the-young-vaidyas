import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'

export const metadata = {
    title: 'Customer Reviews | The Young Vaidyas',
    description: 'Read authentic reviews from our customers about their experience with our Ayurvedic products.',
}

export default function ReviewsPage() {
    return (
        <div className="min-h-screen">
            <Header />

            <main className="pt-32 pb-20">
                <Testimonials />
            </main>

            <Footer />
        </div>
    )
}
