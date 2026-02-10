export default function About() {
  return (
    <section id="about-us" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl text-primary-300">ॐ</div>
        <div className="absolute bottom-20 right-10 text-4xl text-secondary-300">🌿</div>
        <div className="absolute top-1/2 left-1/4 text-5xl text-accent-300">🕉️</div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Our Story
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
            About The Young Vaidyas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                The Young Vaidyas is a student-led Ayurvedic startup founded by passionate
                <span className="font-semibold text-primary-700"> BAMS scholars</span>.
                We bridge the gap between ancient Ayurvedic wisdom and modern wellness needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Rooted in classical texts like <span className="font-medium">Charaka Samhita</span> and
                <span className="font-medium"> Sushruta Samhita</span>, we create formulations using
                traditional preparation methods. No shortcuts, no unnecessary chemicals – just
                <span className="font-semibold text-primary-700"> pure, authentic Ayurveda</span>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to make genuine Ayurvedic healthcare accessible to everyone,
                combining time-tested knowledge with contemporary understanding of wellness.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl border border-primary-200">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm font-medium text-primary-800">Natural Ingredients</div>
                <div className="text-xs text-primary-600 mt-1">No chemicals, ever</div>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl border border-secondary-200">
                <div className="text-3xl font-bold text-secondary-600 mb-2">500+</div>
                <div className="text-sm font-medium text-secondary-800">Happy Customers</div>
                <div className="text-xs text-secondary-600 mt-1">Growing community</div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-gray-900">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">A</span>
                  </div>
                  <span className="text-gray-700">Authenticity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                    <span className="text-secondary-600 font-semibold">T</span>
                  </div>
                  <span className="text-gray-700">Tradition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                    <span className="text-accent-600 font-semibold">Q</span>
                  </div>
                  <span className="text-gray-700">Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">I</span>
                  </div>
                  <span className="text-gray-700">Innovation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-3xl p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="text-8xl">🌱</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  Traditional Wisdom
                </h3>
                <p className="text-gray-600 text-lg">Modern Application</p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-3xl mb-2">📚</div>
                    <div className="text-sm font-medium text-gray-700">Classical Texts</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-3xl mb-2">🔬</div>
                    <div className="text-sm font-medium text-gray-700">Scientific Approach</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  )
}