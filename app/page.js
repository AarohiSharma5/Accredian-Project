import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Clients from '../components/Clients'
import Edge from '../components/Edge'
import DomainExpertise from '../components/DomainExpertise'
import Segmentation from '../components/Segmentation'
import CatFramework from '../components/CatFramework'
import Logos from '../components/Logos'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Faqs from '../components/Faqs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home(){
  return (
    <>
      <Hero />
      <Stats />
      <Clients />
      <Edge />
      <DomainExpertise />
      <Segmentation />
      <CatFramework />
      <Logos />
      <Features />
      <HowItWorks />
      <Faqs />
      <Testimonials />
      <CTA />
    </>
  )
}
