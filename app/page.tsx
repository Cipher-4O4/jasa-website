import Hero from './components/hero'
import Pricing from './components/pricing'
import Portfolio from './components/portofolio'
import Testimonials from './components/testimonials'
import Process from './components/process'
import Contact from './components/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Process />
      <Contact />
    </main>
  )
}