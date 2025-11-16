'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    company: "CV. Maju Jaya Konstruksi",
    position: "Direktur",
    image: "/api/placeholder/100/100",
    rating: 5,
    content: "Website yang dibuat sangat profesional dan responsive. Proses pengerjaan cepat dan tim sangat komunikatif. Traffic website kami meningkat 300% dalam 3 bulan!",
    project: "Company Profile Website"
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    company: "Boutique Seruni",
    position: "Owner",
    image: "/api/placeholder/100/100",
    rating: 5,
    content: "E-commerce store yang dibuat sangat user friendly. Fitur payment gateway lengkap dan admin dashboard mudah digunakan. Penjualan online kami naik signifikan!",
    project: "E-Commerce Store"
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    company: "Klinik Sehat Bahagia",
    position: "Manager",
    image: "/api/placeholder/100/100",
    rating: 5,
    content: "Sangat puas dengan aplikasi booking system yang dibuat. Pasien jadi lebih mudah membuat janji dan management jadwal dokter menjadi efisien.",
    project: "Medical Booking System"
  },
  {
    id: 4,
    name: "Lisa Permata",
    company: "Kursus Bahasa Global",
    position: "Founder",
    image: "/api/placeholder/100/100",
    rating: 5,
    content: "Platform e-learning yang powerful dan mudah digunakan. Fitur video conference dan progress tracking sangat membantu proses belajar mengajar.",
    project: "E-Learning Platform"
  },
  {
    id: 5,
    name: "David Lee",
    company: "Restaurant Oriental",
    position: "Owner",
    image: "/api/placeholder/100/100",
    rating: 5,
    content: "Website restaurant dengan online ordering system sangat membantu selama pandemi. Order online meningkat drastis dan operational jadi lebih smooth.",
    project: "Restaurant Website + Ordering"
  },
  {
    id: 6,
    name: "Maria Garcia",
    company: "PT. Tekno Inovasi",
    position: "CTO",
    image: "/api/placeholder/100/100",
    rating: 5,
    content: "Tim developer sangat professional dan mengerti kebutuhan bisnis. Hasil akhir exceed expectation dan support setelah launch sangat responsif.",
    project: "Enterprise Management System"
  }
]

export default function Testimonials() {
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
            Kata <span className="text-blue-600">Client</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Bukti nyata kepuasan client yang telah mempercayakan project website mereka kepada kami.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                <Quote className="w-6 h-6" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.position} • {testimonial.company}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-1">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Project Selesai</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">45+</div>
              <div className="text-blue-100">Client Bahagia</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Kepuasan Client</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}