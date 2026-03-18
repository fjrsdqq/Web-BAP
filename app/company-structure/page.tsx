'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeft, X, Building2, Wrench, Shield, Lightbulb } from 'lucide-react'

interface Member {
  id: string
  name: string
  role: string
  tier: 'president' | 'director' | 'komisaris' | 'advisor'
  photo: string | null
  description: string
  responsibilities: string[]
}

const members: Member[] = [
  {
    id: 'hammam',
    name: 'Hammam Rhofi',
    role: 'President Direktur',
    tier: 'president',
    photo: null,
    description:
      'Memimpin PT Batavia Asia Project dengan visi membangun infrastruktur dan properti berkualitas tinggi di Indonesia. Bertanggung jawab penuh atas arah strategis dan kebijakan perusahaan.',
    responsibilities: [
      'Menetapkan visi, misi, dan strategi jangka panjang perusahaan',
      'Memimpin seluruh jajaran manajemen dan operasional',
      'Mewakili perusahaan dalam hubungan dengan klien strategis dan mitra utama',
      'Memastikan tata kelola perusahaan berjalan sesuai prinsip GCG',
    ],
  },
  {
    id: 'rahmat',
    name: 'Rahmat Hidayat',
    role: 'Direktur Teknis/Operasional',
    tier: 'director',
    photo: null,
    description:
      'Mengawasi seluruh aspek teknis dan operasional proyek-proyek PT Batavia Asia Project. Memastikan setiap proyek dikerjakan sesuai standar mutu, tepat waktu, dan efisien.',
    responsibilities: [
      'Mengawasi perencanaan dan pelaksanaan seluruh proyek konstruksi',
      'Mengelola tim teknis, engineer, dan tenaga lapangan',
      'Memastikan penerapan standar mutu dan keselamatan kerja (K3)',
      'Mengkoordinasikan pengadaan material dan manajemen vendor',
    ],
  },
  {
    id: 'achmad',
    name: 'Achmad Chaerudin',
    role: 'Komisaris',
    tier: 'komisaris',
    photo: null,
    description:
      'Menjalankan fungsi pengawasan terhadap kebijakan direksi dan jalannya kegiatan usaha PT Batavia Asia Project untuk kepentingan perusahaan dan seluruh pemangku kepentingan.',
    responsibilities: [
      'Mengawasi pelaksanaan kebijakan dan keputusan Direksi',
      'Memberikan nasihat strategis kepada Direksi',
      'Memastikan kepatuhan perusahaan terhadap regulasi dan hukum yang berlaku',
      'Menjaga kepentingan seluruh pemegang saham',
    ],
  },
  {
    id: 'ferrial',
    name: 'Ferrial Sunaryo',
    role: 'Penasihat',
    tier: 'advisor',
    photo: null,
    description:
      'Memberikan masukan dan arahan strategis kepada manajemen PT Batavia Asia Project berdasarkan keahlian dan pengalamannya di industri konstruksi dan properti.',
    responsibilities: [
      'Memberikan saran strategis dalam pengembangan bisnis',
      'Mendukung jaringan kemitraan dan relasi industri',
      'Memberikan masukan dalam pengambilan keputusan strategis',
    ],
  },
  {
    id: 'hendri',
    name: 'Hendri Arifin',
    role: 'Penasihat',
    tier: 'advisor',
    photo: null,
    description:
      'Berkontribusi dalam memberikan pandangan strategis dan rekomendasi kepada manajemen PT Batavia Asia Project untuk mendukung pertumbuhan perusahaan yang berkelanjutan.',
    responsibilities: [
      'Memberikan saran strategis dalam pengembangan bisnis',
      'Mendukung jaringan kemitraan dan relasi industri',
      'Memberikan masukan dalam pengambilan keputusan strategis',
    ],
  },
]

const tierStyle = {
  president: {
    bg: 'bg-navy',
    text: 'text-white',
    badge: 'bg-gold text-navy',
    border: 'border-gold',
  },
  director: {
    bg: 'bg-navy/90',
    text: 'text-white',
    badge: 'bg-white/20 text-white',
    border: 'border-white/30',
  },
  komisaris: {
    bg: 'bg-[#1a2a4a]',
    text: 'text-white',
    badge: 'bg-gold/20 text-gold',
    border: 'border-gold/30',
  },
  advisor: {
    bg: 'bg-white',
    text: 'text-navy',
    badge: 'bg-navy/10 text-navy',
    border: 'border-navy/20',
  },
}

const tierIcon = {
  president: Building2,
  director: Wrench,
  komisaris: Shield,
  advisor: Lightbulb,
}

function OrgCard({ member, onClick }: { member: Member; onClick: () => void }) {
  const style = tierStyle[member.tier]
  const Icon = tierIcon[member.tier]
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center text-center px-6 py-5 w-52
                  border-2 ${style.border} ${style.bg} ${style.text}
                  hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
    >
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/60 mb-3 bg-gray-200 shrink-0">
        {member.photo ? (
          <Image src={member.photo} alt={member.name} width={64} height={64} className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gold/20">
            <Icon size={26} className="text-gold" strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Name */}
      <p className="font-heading font-bold text-sm leading-tight mb-1">{member.name}</p>

      {/* Role badge */}
      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-sm mt-1 ${style.badge}`}>
        {member.role}
      </span>

      {/* Hover hint */}
      <span className="absolute bottom-2 right-2 text-[9px] opacity-0 group-hover:opacity-60 transition-opacity">
        Lihat Profil →
      </span>
    </button>
  )
}

function ProfileModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const Icon = tierIcon[member.tier]
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white max-w-lg w-full shadow-2xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top navy bar */}
        <div className="bg-navy px-8 py-6 flex items-center gap-5">
          {/* Photo */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold shrink-0 bg-gray-200">
            {member.photo ? (
              <Image src={member.photo} alt={member.name} width={80} height={80} className="object-cover w-full h-full" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gold/20">
                <Icon size={34} className="text-gold" strokeWidth={1.5} />
              </div>
            )}
          </div>
          <div>
            <p className="font-heading font-bold text-white text-xl leading-tight">{member.name}</p>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mt-2">
              {member.role}
            </span>
          </div>
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.description}</p>

          <div>
            <p className="font-heading font-bold text-navy text-sm mb-3 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-gold inline-block" />
              Tanggung Jawab
            </p>
            <ul className="space-y-2">
              {member.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-8 pb-6 text-right">
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-navy transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CompanyStructurePage() {
  const [selected, setSelected] = useState<Member | null>(null)

  const president = members.find((m) => m.tier === 'president')!
  const director = members.find((m) => m.tier === 'director')!
  const komisaris = members.find((m) => m.tier === 'komisaris')!
  const advisors = members.filter((m) => m.tier === 'advisor')

  return (
    <div className="min-h-screen bg-[#f5f3ef] font-body">

      {/* Top Nav */}
      <div className="bg-navy py-4 px-6 flex items-center justify-between">
        <Link href="/">
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

      {/* Hero */}
      <div className="bg-navy text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 px-4 py-1.5 mb-6">
            <Building2 size={14} className="text-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Company Structure
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">
            Struktur <span className="text-gold">Organisasi</span>
          </h1>
          <p className="text-white/60 text-sm">
            Klik pada kartu untuk melihat profil lengkap
          </p>
        </div>
      </div>

      {/* Org Chart */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* President */}
        <div className="flex justify-center mb-0">
          <OrgCard member={president} onClick={() => setSelected(president)} />
        </div>

        {/* Vertical line from president down */}
        <div className="flex justify-center">
          <div className="w-0.5 h-10 bg-gold/50" />
        </div>

        {/* Horizontal line spanning director + komisaris */}
        <div className="flex justify-center">
          <div className="flex items-start">
            {/* Left branch to komisaris */}
            <div className="flex flex-col items-end">
              <div className="w-32 h-0.5 bg-gold/40 mt-0" />
              <div className="w-0.5 h-8 bg-gold/40" />
            </div>
            {/* Center vertical to director */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gold/50" />
            </div>
            {/* Right branch (empty for symmetry) */}
            <div className="flex flex-col items-start">
              <div className="w-32 h-0.5 bg-gold/0 mt-0" />
              <div className="w-0.5 h-8 bg-gold/0" />
            </div>
          </div>
        </div>

        {/* Director + Komisaris row */}
        <div className="flex justify-center items-start gap-24 mb-0">
          <div className="flex flex-col items-center">
            <OrgCard member={komisaris} onClick={() => setSelected(komisaris)} />
          </div>
          <div className="flex flex-col items-center">
            <OrgCard member={director} onClick={() => setSelected(director)} />
          </div>
        </div>

        {/* Line from director down to advisors */}
        <div className="flex justify-center">
          {/* offset to align with director (right side) */}
          <div className="w-52 mr-[-208px]" />
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-10 bg-gold/50" />
          </div>
        </div>

        {/* Advisors label */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center" style={{ marginLeft: '104px' }}>
            <div className="flex items-center gap-3">
              {advisors.map((_, i) => (
                <div key={i} className="w-0.5 h-6 bg-gold/40" />
              ))}
            </div>
          </div>
        </div>

        {/* Advisors row */}
        <div className="flex justify-center gap-8">
          {advisors.map((adv) => (
            <div key={adv.id} className="flex flex-col items-center">
              <OrgCard member={adv} onClick={() => setSelected(adv)} />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            { label: 'President Direktur', color: 'bg-navy border-gold' },
            { label: 'Direktur', color: 'bg-navy/90 border-white/30' },
            { label: 'Komisaris', color: 'bg-[#1a2a4a] border-gold/30' },
            { label: 'Penasihat', color: 'bg-white border-navy/20' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div className={`w-4 h-4 border-2 ${l.color}`} />
              <span className="text-xs text-gray-500 font-medium">{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Back */}
      <div className="text-center pb-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-navy text-navy px-6 py-3
                     font-body font-medium text-sm hover:bg-navy hover:text-white transition-all duration-200"
        >
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Modal */}
      {selected && (
        <ProfileModal member={selected} onClose={() => setSelected(null)} />
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out both; }
      `}</style>
    </div>
  )
}
