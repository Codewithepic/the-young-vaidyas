'use client'

import Link from 'next/link'
import { Instagram, Mail, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="bg-[#1a2e1f] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-3xl font-serif mb-3 md:mb-4 text-white">
                Join Our <span className="italic text-[#c9a227]">Wellness</span> Journey
              </h3>
              <p className="text-white/60 text-xs md:text-sm mb-6 md:mb-8 px-4">
                Receive exclusive insights on Ayurvedic practices
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#c9a227] focus:outline-none transition-colors text-sm"
                />
                <button className="px-6 py-3 bg-[#c9a227] text-[#1a2e1f] text-xs md:text-sm tracking-widest uppercase font-medium hover:bg-[#d4af37] transition-colors rounded-lg">
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer - Desktop */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-6">
              <img
                src="/images/PNG_logo_shaved.png"
                alt="The Young Vaidyas"
                className="h-40 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Pure Ayurvedic formulations crafted by student scholars of traditional medicine.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/the_young_vaidyas" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#c9a227] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:theyoungvaidyas@gmail.com" className="text-white/40 hover:text-[#c9a227] transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c9a227] mb-6">Shop</h4>
            <ul className="space-y-3">
              {['All Products', 'Hair Care', 'Skin Care', 'Wellness'].map((item) => (
                <li key={item}>
                  <Link href={`/collections/${item.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c9a227] mb-6">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Philosophy', 'Reviews', 'Journal', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c9a227] mb-6">Help</h4>
            <ul className="space-y-3">
              {['Shipping', 'Returns', 'FAQ', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Footer - Mobile (Accordion) */}
      <div className="md:hidden max-w-7xl mx-auto px-6 py-12">
        {/* Brand */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block mb-4">
            <img
              src="/images/PNG_logo_shaved.png"
              alt="The Young Vaidyas"
              className="h-32 w-auto object-contain mx-auto"
            />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
            Pure Ayurvedic formulations crafted by student scholars
          </p>
          <div className="flex gap-6 justify-center">
            <a href="https://www.instagram.com/the_young_vaidyas" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c9a227] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="mailto:theyoungvaidyas@gmail.com" className="text-white/60 hover:text-[#c9a227] transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-3">
          {/* Shop */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection('shop')}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-[#c9a227] font-medium">Shop</span>
              <ChevronDown
                size={18}
                className={`text-white/60 transition-transform duration-300 ${openSection === 'shop' ? 'rotate-180' : ''}`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: openSection === 'shop' ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <ul className="space-y-3 pb-4">
                {['All Products', 'Hair Care', 'Skin Care', 'Wellness'].map((item) => (
                  <li key={item}>
                    <Link href={`/collections/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-white text-sm transition-colors block py-1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-[#c9a227] font-medium">Company</span>
              <ChevronDown
                size={18}
                className={`text-white/60 transition-transform duration-300 ${openSection === 'company' ? 'rotate-180' : ''}`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: openSection === 'company' ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <ul className="space-y-3 pb-4">
                {['Our Story', 'Philosophy', 'Reviews', 'Journal', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-white text-sm transition-colors block py-1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Help */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection('help')}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-[#c9a227] font-medium">Help</span>
              <ChevronDown
                size={18}
                className={`text-white/60 transition-transform duration-300 ${openSection === 'help' ? 'rotate-180' : ''}`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: openSection === 'help' ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <ul className="space-y-3 pb-4">
                {['Shipping', 'Returns', 'FAQ', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-white text-sm transition-colors block py-1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p className="text-center md:text-left">© 2026 The Young Vaidyas. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Shipping across India
          </p>
        </div>
      </div>
    </footer>
  )
}