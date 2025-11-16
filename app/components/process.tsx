'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Palette, Code2, Eye, Rocket, Zap } from 'lucide-react'

const processSteps = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    step: "01",
    title: "Konsultasi & Analisis",
    description: "Diskusi kebutuhan, target audience, dan goals website. Analisis kompetitor dan penyusunan project plan.",
    duration: "1-2 Hari",
    deliverables: ["Project Brief", "Wireframe", "Timeline"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    step: "02",
    title: "UI/UX Design",
    description: "Pembuatan mockup dan design system. Proses iterasi design sampai client approve.",
    duration: "3-5 Hari",
    deliverables: ["Mockup Design", "Design System", "Asset Preparation"]
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    step: "03",
    title: "Development",
    description: "Coding website dengan teknologi terbaru. Progressive development dengan update berkala.",
    duration: "7-14 Hari",
    deliverables: ["Frontend Development", "Backend Integration", "Responsive Testing"]
  },
  {
    icon: <Eye className="w-8 h-8" />,
    step: "04",
    title: "Review & Revisi",
    description: "Client testing dan feedback. Proses revisi sampai semua requirements terpenuhi.",
    duration: "2-3 Hari",
    deliverables: ["Quality Assurance", "Client Review", "Final Revisions"]
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    step: "05",
    title: "Launch & Deployment",
    description: "Deploy website ke server production. Optimasi performance dan security check.",
    duration: "1 Hari",
    deliverables: ["Domain Setup", "Hosting Deployment", "SSL Installation"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    step: "06",
    title: "Support & Maintenance",
    description: "Layanan purna jual termasuk maintenance, update, dan technical support.",
    duration: "Ongoing",
    deliverables: ["Technical Support", "Security Update", "Performance Monitoring"]
  }
]

export default function Process() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Proses <span className="text-blue-600">Pengerjaan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Workflow terstruktur yang memastikan project berjalan lancar dari awal sampai launch, 
            dengan transparansi penuh kepada client.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800 transform lg:-translate-x-1/2"></div>

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 transform lg:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} ml-16 lg:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-lg"
                  >
                    {/* Step Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                          Step {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Durasi: <span className="font-semibold text-blue-600">{step.duration}</span>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Yang akan Anda dapatkan:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Siap Memulai Project Anda?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Konsultasi gratis tanpa biaya. Diskusikan ide dan kebutuhan website Anda, 
              kami akan siapkan solusi terbaik dengan timeline dan budget yang jelas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Mulai Konsultasi Sekarang
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Lihat Portfolio Lengkap
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}