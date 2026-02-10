'use client'

import { motion } from 'framer-motion'
import CounterAnimation from './CounterAnimation'
import ScrollReveal from './ScrollReveal'
import GlassmorphismCard from './GlassmorphismCard'
import TextReveal from './TextReveal'

export default function AboutEnhanced() {
  const stats = [
    { label: 'Natural Ingredients', value: 100, suffix: '%' },
    { label: 'BAMS Doctors', value: 5, suffix: '+' },
    { label: 'Happy Customers', value: 1000, suffix: '+' },
    { label: 'Years in Practice', value: 3, suffix: '+' },
  ]

  const values = [
    { icon: '🌿', title: 'Authenticity', description: 'Rooted in classical Ayurvedic texts' },
    { icon: '💚', title: 'Purity', description: 'No shortcuts or unnecessary chemicals' },
    { icon: '🎯', title: 'Excellence', description: 'BAMS-qualified healthcare professionals' },
    { icon: '🌍', title: 'Accessibility', description: 'Bringing wellness to everyone' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about-us" className="section-padding relative overflow-hidden">
      {/* Static gradient background for performance */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-200 to-primary-100 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            <TextReveal text="Our Story" />
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-gray-900 mb-6">
            <TextReveal text="About The Young Vaidyas" />
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <ScrollReveal>
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  The Young Vaidyas is a student-led Ayurvedic startup founded by passionate
                  <span className="font-semibold text-primary-700"> BAMS scholars</span>. We bridge the gap
                  between ancient Ayurvedic wisdom and modern wellness needs.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Rooted in classical texts like <span className="font-medium">Charaka Samhita</span> and
                  <span className="font-medium"> Sushruta Samhita</span>, we create formulations using
                  traditional preparation methods. No shortcuts, no unnecessary chemicals – just
                  <span className="font-semibold text-primary-700"> pure, authentic Ayurveda</span>.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to make genuine Ayurvedic healthcare accessible to everyone,
                  combining time-tested knowledge with contemporary understanding of wellness.
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Animated Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <GlassmorphismCard key={index} delay={index * 0.1} className="p-6 text-center hover-glow">
                <motion.div
                  className="text-4xl font-bold text-primary-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <CounterAnimation endValue={stat.value} />
                  {stat.suffix}
                </motion.div>
                <p className="text-sm font-medium text-gray-700">{stat.label}</p>
              </GlassmorphismCard>
            ))}
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div className="mb-20">
          <motion.h3
            className="text-3xl font-serif font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our <span className="text-primary-600">Core Values</span>
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <GlassmorphismCard key={index} delay={index * 0.1} className="p-8 text-center group">
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                ></motion.div>
              </GlassmorphismCard>
            ))}
          </motion.div>
        </motion.div>

        {/* Timeline/Journey */}
        <motion.div
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12 border border-primary-200/30 glass-effect"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Our Journey</h3>
          <div className="space-y-6">
            {[
              { year: '2021', event: 'Founded by BAMS scholars with a vision for authentic Ayurveda' },
              { year: '2022', event: 'Launched first line of handmade herbal formulations' },
              { year: '2023', event: 'Expanded to wellness consultations with certified doctors' },
              { year: '2024', event: 'Reached 1000+ satisfied customers across the country' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-6 pb-6 border-b border-primary-200/30 last:border-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold"
                    whileHover={{ scale: 1.2 }}
                  >
                    {index + 1}
                  </motion.div>
                </div>
                <div>
                  <p className="font-semibold text-primary-700">{item.year}</p>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
