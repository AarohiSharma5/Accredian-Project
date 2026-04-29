import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
