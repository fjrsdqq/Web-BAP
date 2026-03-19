import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Lightbulb, Users, ShieldCheck, Heart, Star } from 'lucide-react'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Company Values',
  description:
    'Nilai-nilai inti PT Batavia Asia Project yang terangkum dalam filosofi B.U.I.L.D — Brilliance, Unity, Integrity, Loyalty, Dedication.',
  alternates: { canonical: 'https://bataviaasiaproject.com/company-values' },
}

const values = [
  {
    letter: 'B',
    keyword: 'Brilliance',
    subtitle: 'Keunggulan & Inovasi',
    icon: Lightbulb,
    description:
      'Kami tidak hanya membangun, kami memberikan solusi. Tim ahli kami selalu bekerja dengan cerdas dan inovatif untuk menghadirkan efisiensi dalam setiap tahapan konstruksi, mulai dari perencanaan hingga serah terima, guna memberikan hasil akhir yang melampaui ekspektasi.',
  },
  {
    letter: 'U',
    keyword: 'Unity',
    subtitle: 'Kolaborasi & Kesatuan Tim',
    icon: Users,
    description:
      'Keberhasilan sebuah proyek adalah hasil dari kerja sama tim yang solid. Kami menjunjung tinggi semangat kolaborasi yang harmonis antara manajemen, tenaga ahli di lapangan, vendor, sub-kontraktor, dan tentunya klien kami, untuk memastikan setiap proyek berjalan lancar dan tepat sasaran.',
  },
  {
    letter: 'I',
    keyword: 'Integrity',
    subtitle: 'Integritas & Transparansi',
    icon: ShieldCheck,
    description:
      'Kepercayaan Anda adalah aset terbesar kami. Kami menjalankan bisnis dengan tingkat kejujuran tertinggi, etika profesional yang ketat, dan transparansi penuh—baik dalam hal Rencana Anggaran Biaya (RAB), spesifikasi material, maupun pelaporan progres di lapangan. Tidak ada kompromi untuk kualitas dan kejujuran.',
  },
  {
    letter: 'L',
    keyword: 'Loyalty',
    subtitle: 'Loyalitas pada Komitmen',
    icon: Heart,
    description:
      'Kami mendedikasikan diri sepenuhnya pada setiap kesepakatan yang telah dibuat. Loyalitas kami wujudkan melalui ketepatan waktu penyelesaian proyek dan dedikasi untuk selalu memberikan nilai tambah bagi investasi properti dan infrastruktur Anda.',
  },
  {
    letter: 'D',
    keyword: 'Dedication',
    subtitle: 'Dedikasi pada Kualitas & Keselamatan',
    icon: Star,
    description:
      'Kami menempatkan standar kualitas dan Keselamatan dan Kesehatan Kerja (K3) di atas segalanya. Dedikasi kami adalah menciptakan lingkungan kerja yang aman (Zero Accident) dan memastikan setiap detail bangunan berdiri kokoh, fungsional, serta tahan lama.',
  },
]

export default function CompanyValuesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f3ef] font-body">

      {/* Hero Banner — covers transparent navbar */}
      <div className="bg-navy text-white pt-[96px] lg:pt-[136px] pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-5">
            Nilai-Nilai <span className="text-gold">Kami</span>
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Fondasi Kuat untuk Setiap Mahakarya
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Opening Statement */}
        <div className="bg-white border-l-4 border-gold p-8 mb-14 shadow-sm">
          <p className="text-gray-600 leading-relaxed text-base">
            Di PT. BATAVIA ASIA PROJECT, kami percaya bahwa konstruksi yang hebat tidak hanya
            dibangun di atas fondasi beton dan baja, melainkan di atas fondasi nilai-nilai yang
            kokoh. Sebagai mitra tepercaya dalam mewujudkan pembangunan infrastruktur dan properti
            berskala nasional, setiap langkah yang kami ambil selalu berpedoman pada prinsip
            integritas, kualitas, dan keselamatan.
          </p>
          <p className="text-gray-600 leading-relaxed text-base mt-4">
            Nilai-nilai inti perusahaan kami terangkum dalam filosofi{' '}
            <span className="font-bold text-navy">B.U.I.L.D</span>, yang menjadi komitmen nyata
            kami kepada setiap klien, mitra, dan lingkungan di mana kami beroperasi.
          </p>
        </div>

        {/* B.U.I.L.D Philosophy Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            {['B', 'U', 'I', 'L', 'D'].map((l) => (
              <div
                key={l}
                className="w-12 h-12 bg-navy flex items-center justify-center"
              >
                <span className="font-heading font-bold text-gold text-xl">{l}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm tracking-widest uppercase font-medium">
            Filosofi Inti Perusahaan
          </p>
        </div>

        {/* Values Cards */}
        <div className="space-y-6">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div key={v.letter} className="bg-white shadow-sm overflow-hidden flex">
                {/* Left accent */}
                <div className="bg-navy w-20 shrink-0 flex flex-col items-center justify-center py-8 gap-3">
                  <span className="font-heading font-bold text-gold text-4xl leading-none">
                    {v.letter}
                  </span>
                  <Icon size={20} className="text-white/40" strokeWidth={1.5} />
                </div>

                {/* Content */}
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
            Membangun Masa Depan{' '}
            <span className="text-gold">Bersama Kami</span>
          </h3>
          <p className="text-white/70 leading-relaxed text-sm max-w-2xl mx-auto">
            Bagi kami, setiap proyek adalah amanah. Filosofi B.U.I.L.D memastikan bahwa
            PT. BATAVIA ASIA PROJECT akan selalu menjadi kontraktor yang dapat Anda andalkan
            hari ini, esok, dan di masa depan.
          </p>
          <p className="text-gold font-heading font-semibold text-lg mt-6">
            Mari wujudkan visi pembangunan Anda bersama kami.
          </p>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-heading font-bold text-white">Hammam Rhofi</p>
            <p className="text-gold text-sm mt-1">President Director, PT Batavia Asia Project</p>
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
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
