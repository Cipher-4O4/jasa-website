'use client'

import { motion } from 'framer-motion'
import { Code, ShoppingCart, Search, Smartphone, Zap, Users } from 'lucide-react'

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Website Development",
    description: "Website company profile custom dengan design modern dan responsive untuk bisnis Anda.",
    features: ["Responsive Design", "SEO Friendly", "Fast Loading"]
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce",
    description: "Toko online lengkap dengan payment gateway, inventory management, dan dashboard admin.",
    features: ["Payment Gateway", "Stock Management", "Order Tracking"]
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Optimasi website untuk ranking terbaik di Google dan mesin pencari lainnya.",
    features: ["Keyword Research", "Technical SEO", "Content Strategy"]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App",
    description: "Aplikasi mobile native dan hybrid untuk iOS dan Android.",
    features: ["Cross Platform", "Native Performance", "App Store Ready"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Website Maintenance",
    description: "Layanan maintenance dan update berkala untuk menjaga website tetap optimal.",
    features: ["Security Update", "Performance Check", "Backup Regular"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consultation",
    description: "Konsultasi gratis untuk strategi digital dan solusi teknologi bisnis Anda.",
    features: ["Free Consultation", "Tech Strategy", "Digital Transformation"]
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Layanan <span className="text-blue-600">Profesional</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Kami menyediakan solusi digital lengkap untuk segala kebutuhan bisnis Anda, 
            dari website sederhana hingga platform enterprise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Siap Transformasi Bisnis Anda?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Konsultasi gratis dengan tim ahli kami. Diskusikan kebutuhan website Anda 
              dan dapatkan solusi terbaik.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Jadwalkan Konsultasi
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}