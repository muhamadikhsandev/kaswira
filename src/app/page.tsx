import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import About from '@/components/landing/About'
import Features from '@/components/landing/Features'
import Pricing from '@/components/landing/Pricing'
import Help from '@/components/landing/Help'
import Footer from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-orange-500/30">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Help />
      <Footer />
    </main>
  )
}