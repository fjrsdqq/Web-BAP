import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, CheckCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kebijakan Perusahaan',
  description:
    'Kebijakan resmi PT Batavia Asia Project meliputi Kebijakan Mutu, K3, Lingkungan, dan Tata Kelola Perusahaan.',
  alternates: { canonical: 'https://bataviaasiaproject.com/company-policy' },
}

const policies = [
  {
    number: '1',
    title: 'Kebijakan Mutu (Quality Policy)',
    items: [
      'Kami berdedikasi untuk memberikan hasil konstruksi yang memenuhi, bahkan melampaui, ekspektasi klien dan spesifikasi teknis yang disepakati.',
      'Menerapkan standar pengendalian mutu (Quality Control) yang ketat pada setiap fase proyek, mulai dari pemilihan material hingga tahap serah terima (handover).',
      'Melakukan evaluasi dan inovasi metode kerja secara berkala untuk meningkatkan efisiensi dan keandalan bangunan.',
    ],
  },
  {
    number: '2',
    title: 'Kebijakan Keselamatan & Kesehatan Kerja (HSE Policy)',
    items: [
      'Nyawa dan kesehatan setiap pekerja adalah prioritas utama yang tidak bisa ditawar. Kami menargetkan Zero Accident (Nihil Kecelakaan) di setiap lokasi proyek.',
      'Menyediakan lingkungan kerja yang aman dan sehat bagi seluruh pekerja, staf, maupun pihak ketiga yang berada di area konstruksi.',
      'Mewajibkan penggunaan Alat Pelindung Diri (APD) standar konstruksi dan memastikan seluruh personel memahami prosedur K3 (Keselamatan dan Kesehatan Kerja).',
      'Mengidentifikasi, mengendalikan, dan meminimalisir segala potensi risiko bahaya di lapangan kerja.',
    ],
  },
  {
    number: '3',
    title: 'Kebijakan Lingkungan (Environmental Policy)',
    items: [
      'Kami bertanggung jawab untuk meminimalkan dampak negatif konstruksi terhadap lingkungan sekitar.',
      'Mengelola limbah sisa konstruksi (puing, sisa material, limbah cair) secara bertanggung jawab dan sesuai dengan regulasi lingkungan hidup yang berlaku.',
      'Mengoptimalkan penggunaan sumber daya alam dan energi secara efisien di setiap area operasional perusahaan.',
    ],
  },
  {
    number: '4',
    title: 'Kebijakan Tata Kelola & Etika Bisnis (Good Corporate Governance)',
    items: [
      'PT. BATAVIA ASIA PROJECT menjalankan bisnis dengan prinsip transparansi, akuntabilitas, dan integritas penuh.',
      'Toleransi Nol terhadap Korupsi: Kami melarang keras segala bentuk suap, gratifikasi, pungutan liar, maupun komisi terselubung (kickback) dari dan kepada pihak manapun, termasuk vendor, sub-kontraktor, maupun klien.',
      'Benturan Kepentingan: Seluruh keputusan perusahaan, mulai dari pengadaan barang hingga penandatanganan kontrak, dilakukan secara objektif oleh manajemen pusat demi melindungi kepentingan klien dan aset perusahaan.',
      'Menjaga kerahasiaan seluruh data proyek dan informasi strategis milik klien kami.',
    ],
  },
]

export default function CompanyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f5f3ef] font-body">

      {/* Top Nav Bar */}
      <div className="bg-navy py-4 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/BATAVIA_ASIA_PROJECT_.png"
            alt="PT Batavia Asia Project"
            width={536}
            height={466}
            className="h-[50px] w-auto object-contain"
            priority
          />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="bg-navy text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 px-4 py-1.5 mb-6">
            <Shield size={14} className="text-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Kebijakan Perusahaan
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-5">
            Company <span className="text-gold">Policy</span>
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
            Di PT. BATAVIA ASIA PROJECT, kami meyakini bahwa mahakarya konstruksi yang sukses
            tidak hanya dinilai dari hasil akhir yang berdiri megah, tetapi juga dari bagaimana
            proses pembangunan itu dijalankan. Kami berkomitmen penuh untuk menerapkan standar
            operasional tertinggi dalam setiap proyek yang kami tangani.
          </p>
          <p className="text-gray-600 leading-relaxed text-base mt-4">
            Kebijakan Perusahaan ini menjadi landasan mutlak bagi seluruh jajaran Direksi,
            manajemen, staf, serta mitra kerja (vendor dan sub-kontraktor) kami di lapangan.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10">
          {policies.map((policy) => (
            <div key={policy.number} className="bg-white shadow-sm overflow-hidden">
              {/* Section Header */}
              <div className="bg-navy px-8 py-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-gold flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-navy text-lg">{policy.number}</span>
                </div>
                <h2 className="font-heading font-bold text-white text-lg leading-snug">
                  {policy.title}
                </h2>
              </div>

              {/* Section Items */}
              <ul className="px-8 py-6 space-y-4">
                {policy.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-gold mt-0.5 shrink-0"
                      strokeWidth={2}
                    />
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
            Komitmen Manajemen
          </h3>
          <p className="text-white/70 leading-relaxed text-sm max-w-2xl mx-auto">
            Kebijakan ini didukung sepenuhnya oleh jajaran Manajemen Utama PT. BATAVIA ASIA
            PROJECT dan akan terus disosialisasikan, dipantau, serta disempurnakan seiring dengan
            perkembangan perusahaan dan regulasi pemerintah.
          </p>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="font-heading font-bold text-white text-base">Hammam Rhofi</p>
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
  )
}
