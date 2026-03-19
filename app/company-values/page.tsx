'use client'

import Link from 'next/link'
import { ArrowLeft, Lightbulb, Users, ShieldCheck, Heart, Star } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { useLang } from '@/contexts/LanguageContext'

const values = {
  en: [
    {
      letter: 'B', keyword: 'Brilliance', subtitle: 'Excellence & Innovation', icon: Lightbulb,
      description: 'We do not just build — we deliver solutions. Our expert team always works with intelligence and innovation to bring efficiency at every stage of construction, from planning to handover, ensuring final results that exceed expectations.',
    },
    {
      letter: 'U', keyword: 'Unity', subtitle: 'Collaboration & Teamwork', icon: Users,
      description: 'The success of a project is the result of solid teamwork. We uphold a spirit of harmonious collaboration between management, field experts, vendors, sub-contractors, and our clients — ensuring every project runs smoothly and hits its targets.',
    },
    {
      letter: 'I', keyword: 'Integrity', subtitle: 'Integrity & Transparency', icon: ShieldCheck,
      description: 'Your trust is our greatest asset. We conduct business with the highest level of honesty, strict professional ethics, and full transparency — in project budgets, material specifications, and field progress reporting. There is no compromise on quality and honesty.',
    },
    {
      letter: 'L', keyword: 'Loyalty', subtitle: 'Loyalty to Commitment', icon: Heart,
      description: 'We dedicate ourselves fully to every agreement made. Our loyalty is demonstrated through on-time project completion and an unwavering commitment to delivering added value to your property and infrastructure investment.',
    },
    {
      letter: 'D', keyword: 'Dedication', subtitle: 'Dedication to Quality & Safety', icon: Star,
      description: 'We place quality standards and Occupational Health & Safety (OHS) above all else. Our dedication is to create a safe working environment (Zero Accident) and ensure every detail of a building stands strong, functional, and durable.',
    },
  ],
  id: [
    {
      letter: 'B', keyword: 'Brilliance', subtitle: 'Keunggulan & Inovasi', icon: Lightbulb,
      description: 'Kami tidak sekadar membangun — kami menghadirkan solusi. Tim ahli kami selalu bekerja dengan kecerdasan dan inovasi untuk menghadirkan efisiensi di setiap tahap konstruksi, dari perencanaan hingga serah terima, memastikan hasil akhir yang melampaui ekspektasi.',
    },
    {
      letter: 'U', keyword: 'Unity', subtitle: 'Kolaborasi & Kerja Tim', icon: Users,
      description: 'Keberhasilan sebuah proyek merupakan hasil kerja tim yang solid. Kami menjunjung tinggi semangat kolaborasi yang harmonis antara manajemen, tenaga ahli lapangan, vendor, sub-kontraktor, dan klien kami — memastikan setiap proyek berjalan lancar dan mencapai target.',
    },
    {
      letter: 'I', keyword: 'Integrity', subtitle: 'Integritas & Transparansi', icon: ShieldCheck,
      description: 'Kepercayaan Anda adalah aset terbesar kami. Kami menjalankan bisnis dengan tingkat kejujuran tertinggi, etika profesional yang ketat, dan transparansi penuh — dalam anggaran proyek, spesifikasi material, dan pelaporan progres lapangan. Tidak ada kompromi dalam hal kualitas dan kejujuran.',
    },
    {
      letter: 'L', keyword: 'Loyalty', subtitle: 'Loyalitas terhadap Komitmen', icon: Heart,
      description: 'Kami mendedikasikan diri sepenuhnya pada setiap kesepakatan yang dibuat. Loyalitas kami tercermin melalui penyelesaian proyek tepat waktu dan komitmen yang tak tergoyahkan untuk menghadirkan nilai tambah bagi investasi properti dan infrastruktur Anda.',
    },
    {
      letter: 'D', keyword: 'Dedication', subtitle: 'Dedikasi terhadap Kualitas & Keselamatan', icon: Star,
      description: 'Kami menempatkan standar kualitas dan Keselamatan dan Kesehatan Kerja (K3) di atas segalanya. Dedikasi kami adalah menciptakan lingkungan kerja yang aman (Zero Accident) dan memastikan setiap detail bangunan berdiri kokoh, fungsional, dan tahan lama.',
    },
  ],
}

export default function CompanyValuesPage() {
  const { lang } = useLang()
  const t = (en: string, id: string) => lang === 'en' ? en : id
  const activeValues = values[lang]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f3ef] font-body">

      {/* Hero Banner */}
      <div className="bg-navy text-white pt-[96px] lg:pt-[136px] pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-5">
            {t('Our', 'Nilai')} <span className="text-gold">{t('Values', 'Perusahaan')}</span>
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            {t('A Strong Foundation for Every Masterpiece', 'Fondasi Kuat di Balik Setiap Mahakarya')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Opening Statement */}
        <div className="bg-white border-l-4 border-gold p-8 mb-14 shadow-sm">
          <p className="text-gray-600 leading-relaxed text-base">
            {t(
              'At PT. BATAVIA ASIA PROJECT, we believe that great construction is not only built on foundations of concrete and steel, but on a foundation of strong values. As a trusted partner in delivering national-scale infrastructure and property development, every step we take is guided by the principles of integrity, quality, and safety.',
              'Di PT. BATAVIA ASIA PROJECT, kami percaya bahwa konstruksi yang hebat tidak hanya dibangun di atas fondasi beton dan baja, melainkan di atas fondasi nilai-nilai yang kuat. Sebagai mitra terpercaya dalam menghadirkan infrastruktur dan pengembangan properti skala nasional, setiap langkah kami dipandu oleh prinsip integritas, kualitas, dan keselamatan.'
            )}
          </p>
          <p className="text-gray-600 leading-relaxed text-base mt-4">
            {t(
              'Our core company values are encapsulated in the ',
              'Nilai inti perusahaan kami terangkum dalam filosofi '
            )}
            <span className="font-bold text-navy">B.U.I.L.D</span>
            {t(
              ' philosophy — our real commitment to every client, partner, and community in which we operate.',
              ' — komitmen nyata kami kepada setiap klien, mitra, dan komunitas tempat kami beroperasi.'
            )}
          </p>
        </div>

        {/* B.U.I.L.D Philosophy Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            {['B', 'U', 'I', 'L', 'D'].map((l) => (
              <div key={l} className="w-12 h-12 bg-navy flex items-center justify-center">
                <span className="font-heading font-bold text-gold text-xl">{l}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm tracking-widest uppercase font-medium">
            {t('Company Core Philosophy', 'Filosofi Inti Perusahaan')}
          </p>
        </div>

        {/* Values Cards */}
        <div className="space-y-6">
          {activeValues.map((v) => {
            const Icon = v.icon
            return (
              <div key={v.letter} className="bg-white shadow-sm overflow-hidden flex">
                <div className="bg-navy w-20 shrink-0 flex flex-col items-center justify-center py-8 gap-3">
                  <span className="font-heading font-bold text-gold text-4xl leading-none">
                    {v.letter}
                  </span>
                  <Icon size={20} className="text-white/40" strokeWidth={1.5} />
                </div>
                <div className="px-8 py-7 flex flex-col justify-center">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h2 className="font-heading font-bold text-navy text-xl">{v.keyword}</h2>
                    <span className="text-gold text-sm font-medium">{v.subtitle}</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <p className="text-gray-600 leading-relaxed text-sm">{v.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-14 bg-navy text-white p-10 text-center">
          <h3 className="font-heading font-bold text-2xl mb-4">
            {t('Building the Future', 'Membangun Masa Depan')}{' '}
            <span className="text-gold">{t('Together', 'Bersama')}</span>
          </h3>
          <p className="text-white/70 leading-relaxed text-sm max-w-2xl mx-auto">
            {t(
              'For us, every project is a trust. The B.U.I.L.D philosophy ensures that PT. BATAVIA ASIA PROJECT will always be the contractor you can rely on — today, tomorrow, and in the future.',
              'Bagi kami, setiap proyek adalah sebuah kepercayaan. Filosofi B.U.I.L.D memastikan bahwa PT. BATAVIA ASIA PROJECT akan selalu menjadi kontraktor yang dapat Anda andalkan — hari ini, esok, dan di masa depan.'
            )}
          </p>
          <p className="text-gold font-heading font-semibold text-lg mt-6">
            {t(
              'Let us bring your construction vision to life together.',
              'Mari kita wujudkan visi konstruksi Anda bersama-sama.'
            )}
          </p>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-heading font-bold text-white">Hammam Rhofi</p>
            <p className="text-gold text-sm mt-1">{t('President Director', 'President Direktur')}, PT Batavia Asia Project</p>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-navy text-navy px-6 py-3
                       font-body font-medium text-sm hover:bg-navy hover:text-white transition-all duration-200"
          >
            <ArrowLeft size={16} />
            {t('Back to Home', 'Kembali ke Beranda')}
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
