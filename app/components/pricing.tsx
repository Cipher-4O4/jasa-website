'use client'

import { motion } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const pricingPackages = [
  {
    id: 1,
    name: 'Paket Hemat UMKM',
    subtitle: 'Rekomendasi untuk UMKM/Yayasan yang baru memulai Go-Digital',
    price: 'Rp. 525.000',
    renewal: '700.000 di tahun berikutnya',
    badge: null,
    features: [
      '1 Halaman Website',
      'Free Domain .com',
      'Aktif 1 Tahun',
      'Basic Landing Page Design',
      'Basic Copy Writing'
    ]
  },
  {
    id: 2,
    name: 'Paket UMKM',
    subtitle: 'Rekomendasi untuk UMKM yang ingin mengoptimalkan produknya dengan catalog lengkap',
    price: 'Rp. 1.000.000',
    renewal: '700.000 di tahun berikutnya',
    badge: 'Most Popular',
    features: [
      '3 Halaman Website',
      'Free Domain .com',
      'Aktif 1 Tahun',
      'Basic Web Design',
      'Advanced Copy Writing'
    ]
  },
  {
    id: 3,
    name: 'Paket Website Untung',
    subtitle: 'Rekomendasi untuk bisnis UMKM yg fokus perkenalkan produknya',
    price: 'Rp. 1.500.000',
    renewal: '800.000 di tahun berikutnya',
    badge: null,
    features: [
      '5 Halaman Website',
      'Free Domain .com',
      'Shared Hosting',
      'Aktif 1 Tahun',
      'Basic Web Design',
      'Free Logo Design',
      'Advanced Copy Writing'
    ]
  },
  {
    id: 4,
    name: 'Paket Bisnis',
    subtitle: 'Cocok untuk Profile Bisnis, Website Katalog, Portal Berita, Sekolah/Yayasan, Portofolio',
    price: 'Rp. 2.525.000',
    renewal: '1.000.000 di tahun berikutnya',
    badge: null,
    features: [
      '10 Halaman Website',
      'Contoh: Home, Service, About, Contact, Blog',
      'Free Domain .com .id .org .or.id',
      'Shared Hosting',
      'Aktif 1 Tahun',
      'Custom Web Design',
      'Free Logo Design',
      'Advanced Copy Writing'
    ]
  },
  {
    id: 5,
    name: 'Paket Bisnis Plus',
    subtitle: 'Cocok untuk Profesional Bisnis Website Profile Bisnis, Website Katalog, Portal Berita, Sekolah/Yayasan, Portofolio',
    price: 'Rp. 5.000.000',
    renewal: '2.000.000 di tahun berikutnya',
    badge: 'Best Choice',
    features: [
      '20 Halaman Website',
      'Contoh: Home, Service, About, Contact, Blog',
      'Free Domain .com .id .org .or.id',
      'Dedicated Hosting',
      'Aktif 1 Tahun',
      'Custom Web Design',
      'Free Logo Design',
      'Advanced Copy Writing',
      '*Setting Iklan Google Ads'
    ]
  },
  {
    id: 6,
    name: 'Paket Bisnis High',
    subtitle: 'Cocok untuk Profesional Bisnis Website Profile Bisnis, Website Katalog, Portal Berita, Sekolah/Yayasan, Portofolio',
    price: 'Rp. 7.500.000',
    renewal: '3.500.000 di tahun berikutnya',
    badge: null,
    features: [
      '30+ Halaman Website',
      'Contoh: Home, Service, About, Contact, Blog, Product, Team',
      'Free Domain .com .id .org .or.id .co.id',
      'Dedicated Hosting',
      'Aktif 1 Tahun',
      'Custom Web Design',
      'Free Logo Design',
      'Advanced Copy Writing',
      'Live Chat Integrasi Apps',
      'Mutli Bahasa',
      '*Setting Iklan Google Ads'
    ]
  },
  {
    id: 7,
    name: 'Paket Toko WA UMKM',
    subtitle: 'Cocok website toko online dengan fitur checkout via whatsapp',
    price: 'Rp. 2.525.000',
    renewal: '1.000.000 di tahun berikutnya',
    badge: null,
    features: [
      '10 Halaman Website',
      'Contoh: Home, Product, About, Contact, Blog',
      'Free Domain .com .id .org .or.id',
      'Shared Hosting',
      'Aktif 1 Tahun',
      'Custom Web Design',
      'Katalog Product',
      'Checkout Via Whatsapp',
      'Bantu Upload 10 Produk',
      'Free Logo Design',
      'Advanced Copy Writing'
    ]
  },
  {
    id: 8,
    name: 'Paket Toko Bisnis',
    subtitle: 'Cocok untuk website Toko Online dengan checkout via payment gateway',
    price: 'Rp. 3.500.000',
    renewal: '2.000.000 di tahun berikutnya',
    badge: null,
    features: [
      '15 Halaman Website',
      'Contoh: Home, Product, About, Contact, Blog',
      'Free Domain .com .id .org .or.id',
      'Dedicated Hosting',
      'Aktif 1 Tahun',
      'Custom Web Design',
      'Katalog Product',
      'Checkout Via Payment Gateway: Midtrans, Xendit, Tripay, Duitku dll',
      'Bantu Upload 20 Produk',
      'Free Logo Design',
      'Advanced Copy Writing'
    ]
  },
  {
    id: 9,
    name: 'Paket Toko High',
    subtitle: 'Cocok untuk Profesional Bisnis Website checkout payment gateway, multi bahasa',
    price: 'Rp. 7.500.000',
    renewal: '3.500.000 di tahun berikutnya',
    badge: 'Best Choice',
    features: [
      '30+ Halaman Website',
      'Contoh: Home, Product, About, Contact, Blog',
      'Free Domain .com .id .org .or.id',
      'Dedicated Hosting',
      'Aktif 1 Tahun',
      'Custom Web Design',
      'Katalog Product',
      'Checkout Via Payment Gateway: Midtrans, Xendit, Tripay, Duitku dll',
      'Bantu Upload 40 Produk',
      'Free Logo Design',
      'Multi Bahasa',
      'Live Chat Integrasi Apps',
      'Advanced Copy Writing'
    ]
  },
  {
    id: 10,
    name: 'Paket Custom Fitur Website',
    subtitle: 'Cocok website dengan fitur custom',
    price: 'Rp. Call Us',
    renewal: null,
    badge: null,
    features: [
      'Semua Fitur Pada Paket High',
      'Free Domain .com .id .org .or.id',
      'Dedicated Hosting',
      'Aktif 1 Tahun',
      'Plus Fitur Tambahan:',
      '- LMS/Online Class',
      '- Donation Website',
      '- Company with different Maps Listing',
      '- Hotel Booking Date + Payment Gateway',
      '- Job listing+Profile Builder',
      '- Bookstore Website',
      '- Company/Medical Appointment',
      '- Video Listing Website'
    ]
  }
]

export default function Pricing() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pilih <span className="text-blue-600">Paket</span> yang Cocok
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tim profesional kami akan bantu wujudkan website anda dengan memilih paket yang tepat. Konsultasi Gratis! hingga website anda tayang
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl border transition-all duration-300 overflow-hidden group ${
                pkg.badge === 'Best Choice' || pkg.badge === 'Most Popular'
                  ? 'border-blue-300 dark:border-blue-600 shadow-lg shadow-blue-500/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {/* Top Border Color */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                pkg.badge === 'Best Choice' ? 'bg-gradient-to-r from-gray-700 to-gray-800' :
                pkg.badge === 'Most Popular' ? 'bg-gradient-to-r from-blue-600 to-blue-700' :
                'bg-gradient-to-r from-red-500 to-red-600'
              }`}></div>

              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold ${
                    pkg.badge === 'Best Choice' ? 'bg-gray-700' : 'bg-blue-600'
                  }`}>
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="p-6 pt-8">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  {pkg.subtitle}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {pkg.price}
                  </div>
                  {pkg.renewal && (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {pkg.renewal}
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="mb-8 space-y-3">
                  {pkg.features.slice(0, 5).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  {/* Expandable Features */}
                  {pkg.features.length > 5 && (
                    <div>
                      {expandedId === pkg.id && (
                        <>
                          {pkg.features.slice(5).map((feature, idx) => (
                            <div key={idx + 5} className="flex items-start gap-3 mt-3">
                              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </>
                      )}
                      <button
                        onClick={() => setExpandedId(expandedId === pkg.id ? null : pkg.id)}
                        className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 font-semibold text-sm transition-colors"
                      >
                        <span>{expandedId === pkg.id ? 'Sembunyikan' : 'Lihat Selengkapnya'}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedId === pkg.id ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/628898153569?text=Saya%20ingin%20memilih%20paket%20${pkg.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-xl font-semibold text-center transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  Pilih Paket
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Tidak menemukan paket yang cocok? Hubungi kami untuk konsultasi gratis!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/628898153569?text=Saya%20ingin%20berkonsultasi%20tentang%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            Konsultasi Gratis Sekarang
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
