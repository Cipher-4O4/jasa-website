'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "E-Commerce Fashion",
    description: "Toko online fashion dengan integrasi payment gateway dan inventory management system.",
    category: "E-Commerce",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Company Profile - Construction",
    description: "Website company profile untuk perusahaan konstruksi dengan portfolio project yang interaktif.",
    category: "Company Profile",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Restaurant Booking System",
    description: "Sistem reservasi restoran dengan table management dan notification system.",
    category: "Web App",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Educational Platform",
    description: "Platform pembelajaran online dengan video streaming dan progress tracking.",
    category: "Web App",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Prisma", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Real Estate Portal",
    description: "Portal properti dengan advanced search, virtual tour, dan agent management.",
    category: "Portal",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Firebase", "Google Maps"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 6,
    title: "Health & Wellness App",
    description: "Aplikasi kesehatan dengan appointment booking dan telemedicine features.",
    category: "Mobile App",
    image: "/api/placeholder/600/400",
    technologies: ["Flutter", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
  ,
  {
    id: 7,
    title: "Family Laundry",
    description: "Website layanan laundry online dengan fitur pemesanan, tracking, dan informasi layanan. Dibangun menggunakan Node.js, Tailwind, dan MySQL.",
    category: "Website",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Tailwind", "MySQL"],
    liveUrl: "https://familylaundry.my.id",
    githubUrl: "#",
    featured: true
  },
  {
    id: 8,
    title: "Spanda Coffee Shop",
    description: "Website toko kopi modern dengan katalog produk, sistem pemesanan online, dan informasi lokasi toko. Desain interaktif dengan user experience yang optimal untuk pelanggan kopi.",
    category: "Cafe Shop",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Tailwind", "React"],
    liveUrl: "https://spanda-coffee.vercel.app/",
    githubUrl: "#",
    featured: true
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Project <span className="text-blue-600">Unggulan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Lihat beberapa project terbaik yang telah kami selesaikan untuk client dari berbagai industri.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">{project.title}</div>
                    <div className="text-blue-100">{project.category}</div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="flex gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Eye className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl || '#'}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl || '#'}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-12 h-12 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Lihat Semua Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}