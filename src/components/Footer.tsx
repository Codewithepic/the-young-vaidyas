'use client'

import Link from 'next/link'
import { Instagram, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#1a2e1f] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-serif mb-4">
                Join Our <span className="italic text-[#c9a227]">Wellness</span> Journey
              </h3>
              <p className="text-white/60 text-sm mb-8">
                Receive exclusive insights on Ayurvedic practices and early access to new formulations.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-[#c9a227] focus:outline-none transition-colors text-sm"
                />
                <button className="px-8 py-3 bg-[#c9a227] text-[#1a2e1f] text-sm tracking-widest uppercase font-medium hover:bg-[#d4af37] transition-colors">
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-6">
              <img
                src="/images/PNG_logo_shaved.png"
                alt="The Young Vaidyas"
                className="h-48 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Pure Ayurvedic formulations crafted by student scholars of traditional medicine.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-[#c9a227] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:hello@theyoungvaidyas.com" className="text-white/40 hover:text-[#c9a227] transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c9a227] mb-6">Shop</h4>
            <ul className="space-y-3">
              {['All Products', 'Hair Care', 'Skin Care', 'Body Care', 'Wellness'].map((item) => (
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
              {['Our Story', 'Philosophy', 'Journal', 'Contact'].map((item) => (
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

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 The Young Vaidyas. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Shipping across India
          </p>
        </div>
      </div>
    </footer>
  )
}