'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Target, Rocket, Star, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { useLang } from '@/contexts/LanguageContext'

const data = {
  en: {
    missions: [
      { title: 'Quality & Timeliness', desc: 'Providing building and civil construction services with the highest workmanship standards, operational efficiency, and on-time project handover.' },
      { title: 'Health, Safety & Environment (HSE)', desc: 'Enforcing strict HSE standards on every project to create a safe working environment and achieve Zero Accident at all construction sites.' },
      { title: 'Professional Governance', desc: 'Leading with professional, transparent, and high-integrity project management to maintain client trust and ensure smooth company operations.' },
      { title: 'Client Satisfaction', desc: 'Building long-term strategic partnerships with clients, vendors, and sub-contractors based on mutual benefit and proactive communication.' },
      { title: 'Continuous Innovation', desc: 'Constantly adapting to advances in technology, materials, and modern construction methods to deliver the most effective and value-added solutions.' },
    ],
    buildValues: [
      { letter: 'B', word: 'Brilliance', desc: 'Working with intelligence and delivering outstanding results in every project undertaken.' },
      { letter: 'U', word: 'Unity', desc: 'Prioritizing solid teamwork between management and field experts to achieve shared goals.' },
      { letter: 'I', word: 'Integrity', desc: 'Upholding honesty and business ethics in every contract and professional relationship.' },
      { letter: 'L', word: 'Loyalty', desc: 'Fully committed to every agreement and always placing client satisfaction first.' },
      { letter: 'D', word: 'Dedication', desc: 'Devoted to completing every project within budget and in accordance with technical specifications.' },
    ],
    vision: 'To become a nationally recognized construction company that is superior, trusted, and innovative — serving as the primary partner in delivering high-quality infrastructure and property development.',
    heroSub: 'A professional contractor and developer committed to delivering high-quality construction with integrity and innovation in every project.',
  },
  id: {
    missions: [
      { title: 'Kualitas & Ketepatan Waktu', desc: 'Menyediakan layanan konstruksi bangunan dan sipil dengan standar pengerjaan tertinggi, efisiensi operasional, dan serah terima proyek tepat waktu.' },
      { title: 'Kesehatan, Keselamatan & Lingkungan (K3L)', desc: 'Menerapkan standar K3L yang ketat di setiap proyek untuk menciptakan lingkungan kerja yang aman dan mencapai Zero Accident di semua lokasi konstruksi.' },
      { title: 'Tata Kelola Profesional', desc: 'Memimpin dengan manajemen proyek profesional, transparan, dan berintegritas tinggi untuk menjaga kepercayaan klien dan kelancaran operasional perusahaan.' },
      { title: 'Kepuasan Klien', desc: 'Membangun kemitraan strategis jangka panjang dengan klien, vendor, dan sub-kontraktor berdasarkan manfaat bersama dan komunikasi proaktif.' },
      { title: 'Inovasi Berkelanjutan', desc: 'Terus beradaptasi dengan kemajuan teknologi, material, dan metode konstruksi modern untuk menghadirkan solusi yang paling efektif dan bernilai tambah.' },
    ],
    buildValues: [
      { letter: 'B', word: 'Brilliance', desc: 'Bekerja dengan kecerdasan dan menghadirkan hasil luar biasa di setiap proyek yang dikerjakan.' },
      { letter: 'U', word: 'Unity', desc: 'Mengutamakan kerja tim yang solid antara manajemen dan tenaga ahli lapangan untuk mencapai tujuan bersama.' },
      { letter: 'I', word: 'Integrity', desc: 'Menjunjung tinggi kejujuran dan etika bisnis dalam setiap kontrak dan hubungan profesional.' },
      { letter: 'L', word: 'Loyalty', desc: 'Berkomitmen penuh pada setiap perjanjian dan selalu mengutamakan kepuasan klien.' },
      { letter: 'D', word: 'Dedication', desc: 'Berdedikasi menyelesaikan setiap proyek sesuai anggaran dan spesifikasi teknis yang ditetapkan.' },
    ],
    vision: 'Menjadi perusahaan konstruksi yang diakui secara nasional, unggul, terpercaya, dan inovatif — sebagai mitra utama dalam menghadirkan infrastruktur dan pengembangan properti berkualitas tinggi.',
    heroSub: 'Kontraktor dan developer profesional yang berkomitmen menghadirkan konstruksi berkualitas tinggi dengan integritas dan inovasi di setiap proyeknya.',
  },
}

export default function CompanyProfilePage() {
  const { lang } = useLang()
  const t = (en: string, id: string) => lang === 'en' ? en : id
  const d = data[lang]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f3ef] font-body">

        {/* Hero */}
        <div className="bg-navy text-white pt-[96px] lg:pt-[136px] pb-20 px-6 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full border border-gold/10 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full border border-gold/10 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

          <div className="relative max-w-4xl mx-auto text-center">
            {/* Code-based logo — centered, logo on top, text below */}
            <div className="flex flex-col items-center mb-8">
              <Image
                src="/images/LOGO_WHITE.png"
                alt="PT Batavia Asia Project"
                width={130}
                height={130}
                className="object-contain mb-5"
                priority
              />
              <div className="font-heading font-bold text-white tracking-[0.2em] text-3xl md:text-4xl leading-none">
                PT. BATAVIA ASIA PROJECT
              </div>
            </div>
            <p className="text-white/55 text-base max-w-2xl mx-auto leading-relaxed">
              {d.heroSub}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* VISION */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                <Target size={22} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-0.5">01</p>
                <h2 className="font-heading text-2xl font-bold text-navy">{t('Vision', 'Visi')}</h2>
              </div>
            </div>

            <div className="relative bg-navy text-white rounded-sm overflow-hidden">
              <div className="h-1 bg-gold w-full" />
              <div className="px-10 py-10">
                <div className="absolute top-8 right-8 opacity-5">
                  <Target size={100} className="text-gold" />
                </div>
                <p className="font-heading text-xl md:text-2xl leading-relaxed text-white/90 italic relative z-10">
                  &ldquo;{d.vision}&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* MISSION */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                <Rocket size={22} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-0.5">02</p>
                <h2 className="font-heading text-2xl font-bold text-navy">{t('Mission', 'Misi')}</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {d.missions.map((m, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 p-6 hover:border-gold/40
                             hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gold/10 border border-gold/20 flex items-center
                                    justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <CheckCircle2 size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-navy text-sm mb-1.5">{m.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CORE VALUES (B.U.I.L.D) */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                <Star size={22} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-0.5">03</p>
                <h2 className="font-heading text-2xl font-bold text-navy">{t('Core Values', 'Nilai Inti')}</h2>
                <p className="text-gray-400 text-xs tracking-[0.15em] uppercase mt-0.5">
                  B · U · I · L · D
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {d.buildValues.map((v, i) => (
                <div
                  key={v.letter}
                  className="flex items-start gap-5 bg-white border border-gray-100 p-6
                             hover:border-gold/40 hover:shadow-md transition-all duration-200 group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-14 h-14 bg-navy flex items-center justify-center shrink-0
                                 group-hover:bg-gold transition-colors duration-200">
                    <span className="font-heading font-bold text-gold text-2xl group-hover:text-navy transition-colors duration-200">
                      {v.letter}
                    </span>
                  </div>
                  <div className="pt-1">
                    <p className="font-heading font-bold text-navy text-base mb-1">
                      {v.letter} — <span className="text-gold">{v.word}</span>
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* B.U.I.L.D summary strip */}
            <div className="mt-8 bg-navy flex overflow-hidden">
              {d.buildValues.map((v) => (
                <div
                  key={v.letter}
                  className="flex-1 flex flex-col items-center py-5 border-r border-white/10
                             last:border-r-0 hover:bg-gold/10 transition-colors group cursor-default"
                >
                  <span className="font-heading font-bold text-gold text-2xl">{v.letter}</span>
                  <span className="text-white/50 text-[10px] tracking-widest uppercase mt-1">
                    {v.word}
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Back */}
        <div className="text-center pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy
                       px-8 py-3 text-sm font-semibold hover:bg-navy hover:text-white
                       transition-all duration-200"
          >
            <ArrowLeft size={16} /> {t('Back to Home', 'Kembali ke Beranda')}
          </Link>
        </div>
      </div>
    </>
  )
}
