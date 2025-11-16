'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Code, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Menerima Project Website Baru</span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Transformasi Digital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300">
                Bisnis Anda
              </span>{' '}
              Dimulai Dari Sini
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Kami spesialis pembuatan website profesional, cepat, dan hasil-driven. 
              Dari company profile hingga e-commerce, kami siap membantu bisnis Anda 
              tumbuh lebih pesat.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all shadow-lg shadow-blue-500/25"
              >
                Konsultasi Gratis
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <Play className="mr-2" size={20} />
                Lihat Portfolio
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-500 mb-1">50+</div>
                <div className="text-gray-400 text-sm">Project Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-amber-500 mb-1">98%</div>
                <div className="text-gray-400 text-sm">Client Puas</div>
              </div>
              <div className="text-center col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-amber-500 mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              {/* Main Website Mockup */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="bg-white rounded-xl p-1 shadow-2xl">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 p-4 border-b">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded px-3 py-1.5 text-xs text-gray-600">
                      www.bisnisanda.com
                    </div>
                  </div>
                  
                  {/* Website Content */}
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                    <div className="h-24 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mt-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-800">Hero Section</div>
                        <div className="text-sm text-gray-600">Website Profesional</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg"
              >
                <Code className="text-amber-500" size={24} />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg"
              >
                <Globe className="text-green-400" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}