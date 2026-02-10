import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Journal() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20">
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container-max text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              Ayurvedic Journal
            </div>

            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-gray-900 mb-6">
              Coming Soon
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              We're crafting insightful articles on Ayurvedic wisdom, wellness tips, and traditional healing practices.
              Stay tuned for exclusive content from our BAMS-qualified doctors.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-12"></div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                ← Back to Home
              </Link>


            </div>

            {/* Decorative Element */}
            <div className="mt-16">
              <div className="text-6xl opacity-20 mb-4">📚</div>
              <p className="text-gray-500 text-sm">Wisdom is being crafted...</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
