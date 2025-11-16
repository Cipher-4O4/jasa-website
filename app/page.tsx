import Hero from './components/hero'
import Services from './components/service'
import Portfolio from './components/portofolio'
import Testimonials from './components/testimonials'
import Process from './components/process'
import Contact from './components/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Contact />
    </main>
  )
}