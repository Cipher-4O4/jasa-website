'use client'

import { motion } from 'framer-motion'
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white">
                <Code2 className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">WebDev<span className="text-blue-400">Agency</span></div>
                <div className="text-sm text-gray-400 -mt-1">Professional Web Solutions</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Kami adalah agency spesialis pembuatan website profesional yang membantu bisnis 
              tumbuh melalui solusi digital inovatif dan hasil-driven.
            </p>
            
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-xl flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Menu Cepat</h3>
            <ul className="space-y-3">
              {[
                { name: 'Beranda', href: '#home' },
                { name: 'Layanan', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Testimoni', href: '#testimonials' },
                { name: 'Proses Kerja', href: '#process' },
                { name: 'Kontak', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Layanan Kami</h3>
            <ul className="space-y-3">
              {[
                'Website Development',
                'E-Commerce Solutions',
                'SEO Optimization',
                'Mobile App Development',
                'Website Maintenance',
                'Digital Consultation'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Kontak Kami</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Telepon/WhatsApp</div>
                  <div className="font-semibold">+62 812-3456-7890</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-semibold">hello@webdevagency.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Alamat Kantor</div>
                  <div className="font-semibold">Jakarta Selatan, Indonesia</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <div className="text-sm font-semibold mb-2">Jam Operasional</div>
              <div className="text-xs text-gray-400 space-y-1">
                <div>Senin - Jumat: 08:00 - 17:00</div>
                <div>Sabtu: 08:00 - 15:00</div>
                <div>Minggu: Tutup</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              © 2024 WebDev Agency. All rights reserved. | 
              <a href="#" className="hover:text-blue-400 transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-blue-400 transition-colors ml-1">Terms of Service</a>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Made with ❤️ in Indonesia</span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}