'use client'

import Link from 'next/link'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { useLang } from '@/contexts/LanguageContext'

const policies = {
  en: [
    {
      number: '1',
      title: 'Quality Policy',
      items: [
        'We are dedicated to delivering construction results that meet — and even exceed — client expectations and agreed technical specifications.',
        'Applying strict Quality Control standards at every project phase, from material selection through to the final handover stage.',
        'Conducting regular evaluation and innovation of working methods to improve efficiency and structural reliability.',
      ],
    },
    {
      number: '2',
      title: 'Health, Safety & Environment (HSE) Policy',
      items: [
        'The life and health of every worker is our non-negotiable top priority. We target Zero Accident at every project site.',
        'Providing a safe and healthy working environment for all workers, staff, and third parties present in the construction area.',
        'Mandating the use of standard construction Personal Protective Equipment (PPE) and ensuring all personnel understand OHS procedures.',
        'Identifying, controlling, and minimising all potential hazard risks at the worksite.',
      ],
    },
    {
      number: '3',
      title: 'Environmental Policy',
      items: [
        'We are responsible for minimising the negative environmental impact of our construction activities on the surrounding area.',
        'Managing construction waste (rubble, leftover materials, liquid waste) responsibly and in compliance with applicable environmental regulations.',
        'Optimising the use of natural resources and energy efficiently across all company operational areas.',
      ],
    },
    {
      number: '4',
      title: 'Good Corporate Governance & Business Ethics Policy',
      items: [
        'PT. BATAVIA ASIA PROJECT conducts its business with the principles of transparency, accountability, and full integrity.',
        'Zero Tolerance for Corruption: We strictly prohibit all forms of bribery, gratuity, illegal levies, or kickbacks to and from any party — including vendors, sub-contractors, and clients.',
        'Conflict of Interest: All company decisions — from procurement to contract signing — are made objectively by central management to protect client interests and company assets.',
        'Maintaining the confidentiality of all project data and strategic information belonging to our clients.',
      ],
    },
  ],
  id: [
    {
      number: '1',
      title: 'Kebijakan Mutu',
      items: [
        'Kami berdedikasi menghadirkan sistem MEP HVAC & Civil dan infrastruktur yang memenuhi — bahkan melampaui — ekspektasi klien serta spesifikasi teknis yang telah disepakati',
        'Menerapkan standar Kontrol Kualitas yang ketat di setiap fase, mulai dari pemilihan komponen teknis (kabel, pipa, perangkat mekanikal) hingga tahap uji fungsi (commissioning test) sebelum serah terima',
        'Melakukan evaluasi berkala pada sistem yang telah terpasang melalui layanan perawatan dan perbaikan untuk memastikan efisiensi energi dan keandalan sistem jangka panjang',
      ],
    },
    {
      number: '2',
      title: 'Kebijakan Kesehatan, Keselamatan & Lingkungan (K3L)',
      items: [
        'Jiwa dan kesehatan setiap pekerja adalah prioritas utama. Kami menerapkan protokol keselamatan khusus untuk pekerjaan berisiko tinggi seperti instalasi elektrikal, mekanikal, dan konstruksi fisik.',
        'Menyediakan lingkungan kerja yang aman dan sehat bagi seluruh personel, dengan target Zero Accident di setiap lokasi proyek dan area perawatan',
        'Mewajibkan penggunaan Alat Pelindung Diri (APD) standar teknis dan memastikan seluruh personel memahami prosedur keselamatan kerja pada sistem kelistrikan dan perpipaan',
        'Mengidentifikasi dan meminimalkan potensi risiko bahaya teknis di lokasi kerja secara proaktif.',
      ],
    },
    {
      number: '3',
      title: 'Kebijakan Lingkungan Hidup',
      items: [
        'Kami bertanggung jawab untuk meminimalkan dampak negatif kegiatan MEP HVAC & Civil dan konstruksi terhadap lingkungan sekitar',
        'Mengoptimalkan penggunaan sumber daya alam dan energi melalui desain sistem MEP HVAC & Civil yang efisien dan ramah lingkungan (energy saving).',
        'Mengelola limbah teknis, sisa material konstruksi, dan limbah cair secara bertanggung jawab sesuai dengan peraturan lingkungan yang berlaku',
      ],
    },
    {
      number: '4',
      title: 'Kebijakan Tata Kelola Perusahaan yang Baik & Etika Bisnis',
      items: [
        'PT. BATAVIA ASIA PROJECT menjalankan bisnis dengan prinsip transparansi, akuntabilitas, dan integritas penuh, terutama dalam penentuan spesifikasi material teknik',
        'Zero Tolerance Korupsi: Kami melarang segala bentuk suap, gratifikasi, atau kickback dalam pengadaan material MEP HVAC & Civil maupun jasa konstruksi',
        'Benturan Kepentingan: Menjamin setiap keputusan perusahaan diambil secara objektif untuk melindungi kepentingan klien dan aset perusahaan',
        '•	Menjaga kerahasiaan data proyek, skema sistem bangunan, dan informasi strategis milik klien kami.',
      ],
    },
  ],
}

export default function CompanyPolicyPage() {
  const { lang } = useLang()
  const t = (en: string, id: string) => lang === 'en' ? en : id
  const activePolicies = policies[lang]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f3ef] font-body">

      {/* Hero Banner */}
      <div className="bg-navy text-white pt-[96px] lg:pt-[136px] pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-5">
            {t('Company', 'Kebijakan')} <span className="text-gold">{t('Policy', 'Perusahaan')}</span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
            PT. Batavia Asia Project
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Opening Statement */}
        <div className="bg-white border-l-4 border-gold p-8 mb-12 shadow-sm">
          <p className="text-gray-600 leading-relaxed text-base">
            {t(
              'At PT. BATAVIA ASIA PROJECT, we believe that a successful construction masterpiece is not only measured by the grandeur of the final result, but also by how the building process is carried out. We are fully committed to applying the highest operational standards in every project we handle.',
              'Di PT. BATAVIA ASIA PROJECT, kami percaya bahwa keberhasilan sebuah bangunan tidak hanya dinilai dari kemegahan fisiknya, tetapi dari keandalan sistem internal yang menggerakkannya. Kami berkomitmen penuh untuk menerapkan standar operasional tertinggi pada setiap instalasi MEP HVAC & Civil, layanan perawatan, serta pengerjaan konstruksi dan desain yang kami tangani.'
            )}
          </p>
          <p className="text-gray-600 leading-relaxed text-base mt-4">
            {t(
              'This Company Policy serves as the absolute foundation for all Directors, management, staff, and our field partners (vendors and sub-contractors).',
              'Kebijakan Perusahaan ini merupakan landasan mutlak bagi seluruh Direktur, manajemen, staf, dan mitra lapangan kami (vendor dan sub-kontraktor).'
            )}
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10">
          {activePolicies.map((policy) => (
            <div key={policy.number} className="bg-white shadow-sm overflow-hidden">
              <div className="bg-navy px-8 py-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-gold flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-navy text-lg">{policy.number}</span>
                </div>
                <h2 className="font-heading font-bold text-white text-lg leading-snug">
                  {policy.title}
                </h2>
              </div>
              <ul className="px-8 py-6 space-y-4">
                {policy.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" strokeWidth={2} />
                    <p className="text-gray-600 leading-relaxed text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Commitment Footer */}
        <div className="mt-12 bg-navy text-white p-8 text-center">
          <h3 className="font-heading font-bold text-xl mb-4 text-gold">
            {t('Management Commitment', 'Komitmen Manajemen')}
          </h3>
          <p className="text-white/70 leading-relaxed text-sm max-w-2xl mx-auto">
            {t(
              'This policy is fully supported by the Senior Management of PT. BATAVIA ASIA PROJECT and will continue to be communicated, monitored, and refined in line with the company\'s growth and government regulations.',
              'Kebijakan ini sepenuhnya didukung oleh Manajemen Senior PT. BATAVIA ASIA PROJECT dan akan terus dikomunikasikan, dipantau, dan disempurnakan seiring perkembangan teknologi MEP HVAC & Civil serta peraturan pemerintah.'
            )}
          </p>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="font-heading font-bold text-white text-base">Hammam Rhofi</p>
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
