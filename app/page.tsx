import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MitraSlide from '@/components/MitraSlide'
import OurService from '@/components/OurService'
import Portfolio from '@/components/Portfolio'
import Keunggulan from '@/components/Keunggulan'
import StatsSection from '@/components/StatsSection'
import CareerSection from '@/components/CareerSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MitraSlide />
      <OurService />
      <Portfolio />
      <Keunggulan />
      <StatsSection />
      <CareerSection />
      <CTASection />
      <Footer />
    </main>
  )
}
