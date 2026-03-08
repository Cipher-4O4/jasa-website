import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wricom - Jasa Pembuatan Website Profesional',
  description: 'Wricom - Create Your Own Software. Kami spesialis pembuatan website company profile, e-commerce, dan landing page untuk bisnis Anda.',
  icons: {
    icon: '/wricom-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}