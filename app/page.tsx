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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://bataviaasiaproject.com/#business',
      name: 'PT Batavia Asia Project',
      alternateName: 'Batavia Asia Project',
      url: 'https://bataviaasiaproject.com',
      logo: 'https://bataviaasiaproject.com/images/BATAVIA_ASIA_PROJECT_.png',
      image: 'https://bataviaasiaproject.com/images/BATAVIA_ASIA_PROJECT_.png',
      description:
        'PT Batavia Asia Project adalah perusahaan kontraktor dan developer profesional di Jakarta Timur, spesialis renovasi rumah, instalasi pipa gas, sistem drainase, lift & eskalator, dan mekanikal elektrikal.',
      telephone: '+62823-1380-8775',
      email: 'bataviaasiaproject@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Tanah Manisan No.25E, RT.3/RW.6, Cipinang Cempedak',
        addressLocality: 'Jatinegara',
        addressRegion: 'Jakarta Timur',
        postalCode: '13340',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -6.2146,
        longitude: 106.8699,
      },
      areaServed: {
        '@type': 'City',
        name: 'Jakarta',
      },
      priceRange: '$$',
      currenciesAccepted: 'IDR',
      paymentAccepted: 'Cash, Bank Transfer',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '13:00',
        },
      ],
      sameAs: ['https://wa.me/6282313808775'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Layanan Konstruksi',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Renovasi Rumah' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Instalasi Pipa Gas' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sistem Drainase' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lift & Eskalator' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mekanikal Elektrikal' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penggantian Pipa Chiller' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://bataviaasiaproject.com/#website',
      url: 'https://bataviaasiaproject.com',
      name: 'PT Batavia Asia Project',
      description: 'Kontraktor & Developer Profesional Jakarta',
      publisher: { '@id': 'https://bataviaasiaproject.com/#business' },
      inLanguage: 'id-ID',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://bataviaasiaproject.com/#webpage',
      url: 'https://bataviaasiaproject.com',
      name: 'PT Batavia Asia Project — Kontraktor & Developer Profesional Jakarta',
      isPartOf: { '@id': 'https://bataviaasiaproject.com/#website' },
      about: { '@id': 'https://bataviaasiaproject.com/#business' },
      description:
        'PT Batavia Asia Project adalah perusahaan kontraktor dan developer profesional di Jakarta Timur.',
      inLanguage: 'id-ID',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  )
}
