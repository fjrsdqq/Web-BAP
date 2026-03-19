'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Target, Rocket, Star, CheckCircle2, Building2 } from 'lucide-react'
import Navbar from '@/components/Navbar'

const missions = [
  {
    title: 'Kualitas & Ketepatan Waktu',
    desc: 'Menyediakan layanan jasa konstruksi gedung dan sipil dengan standar kualitas pengerjaan terbaik, efisien, dan serah terima yang tepat waktu.',
  },
  {
    title: 'Keselamatan Kerja (HSE)',
    desc: 'Menerapkan standar Keselamatan dan Kesehatan Kerja (K3) yang ketat dalam setiap proyek untuk mewujudkan lingkungan kerja yang aman dan Zero Accident.',
  },
  {
    title: 'Tata Kelola Profesional',
    desc: 'Mengedepankan manajemen proyek yang profesional, transparan, dan berintegritas tinggi guna menjaga kepercayaan klien serta kelancaran operasional perusahaan.',
  },
  {
    title: 'Kepuasan Pelanggan',
    desc: 'Membangun kemitraan strategis jangka panjang dengan klien, vendor, dan sub-kontraktor berdasarkan prinsip saling menguntungkan dan komunikasi yang proaktif.',
  },
  {
    title: 'Inovasi Berkelanjutan',
    desc: 'Terus beradaptasi dengan perkembangan teknologi, material, dan metode konstruksi modern untuk memberikan solusi pembangunan yang paling efektif dan bernilai tambah.',
  },
]

const buildValues = [
  {
    letter: 'B',
    word: 'Brilliance',
    desc: 'Bekerja dengan cerdas dan memberikan hasil kerja yang cemerlang dalam setiap proyek yang dikerjakan.',
  },
  {
    letter: 'U',
    word: 'Unity',
    desc: 'Mengutamakan kerja sama tim yang solid antara manajemen dan tenaga ahli di lapangan.',
  },
  {
    letter: 'I',
    word: 'Integrity',
    desc: 'Menjunjung tinggi kejujuran dan etika bisnis dalam setiap kontrak kerja dan hubungan profesional.',
  },
  {
    letter: 'L',
    word: 'Loyalty',
    desc: 'Berkomitmen penuh terhadap kesepakatan dan selalu mendahulukan kepuasan klien.',
  },
  {
    letter: 'D',
    word: 'Dedication',
    desc: 'Berdedikasi tinggi untuk menyelesaikan setiap proyek sesuai Rencana Anggaran Biaya dan spesifikasi teknis.',
  },
]

export default function CompanyProfilePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f3ef] font-body">

        {/* ── Hero ── */}
        <div className="bg-navy text-white pt-[96px] lg:pt-[136px] pb-20 px-6 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full border border-gold/10 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full border border-gold/10 pointer-events-none" />
          {/* Gold left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/BATAVIA_ASIA_PROJECT_.png"
                alt="PT Batavia Asia Project"
                width={480}
                height={200}
                className="object-contain transition-transform duration-300 ease-out hover:scale-110 cursor-pointer"
                priority
              />
            </div>
            <p className="text-white/55 text-base max-w-2xl mx-auto leading-relaxed">
              Kontraktor dan developer profesional yang berkomitmen menghadirkan konstruksi
              berkualitas tinggi dengan integritas dan inovasi di setiap proyeknya.
            </p>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* ── VISI ── */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                <Target size={22} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-0.5">01</p>
                <h2 className="font-heading text-2xl font-bold text-navy">Visi</h2>
              </div>
            </div>

            <div className="relative bg-navy text-white rounded-sm overflow-hidden">
              {/* Gold top bar */}
              <div className="h-1 bg-gold w-full" />
              <div className="px-10 py-10">
                <div className="absolute top-8 right-8 opacity-5">
                  <Target size={100} className="text-gold" />
                </div>
                <p className="font-heading text-xl md:text-2xl leading-relaxed text-white/90 italic relative z-10">
                  &ldquo;Menjadi perusahaan konstruksi berskala nasional yang unggul, terpercaya,
                  dan inovatif, serta menjadi mitra utama dalam mewujudkan pembangunan
                  infrastruktur dan properti yang berkualitas tinggi.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* ── MISI ── */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                <Rocket size={22} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-0.5">02</p>
                <h2 className="font-heading text-2xl font-bold text-navy">Misi</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {missions.map((m, i) => (
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

          {/* ── NILAI INTI (B.U.I.L.D) ── */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                <Star size={22} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-0.5">03</p>
                <h2 className="font-heading text-2xl font-bold text-navy">Nilai Inti</h2>
                <p className="text-gray-400 text-xs tracking-[0.15em] uppercase mt-0.5">
                  B · U · I · L · D
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {buildValues.map((v, i) => (
                <div
                  key={v.letter}
                  className="flex items-start gap-5 bg-white border border-gray-100 p-6
                             hover:border-gold/40 hover:shadow-md transition-all duration-200 group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Letter badge */}
                  <div
                    className="w-14 h-14 bg-navy flex items-center justify-center shrink-0
                               group-hover:bg-gold transition-colors duration-200"
                  >
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
              {buildValues.map((v) => (
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
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
        </div>
      </div>
    </>
  )
}
