'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeft, X, Building2, Wrench, Shield, Lightbulb } from 'lucide-react'

interface Member {
  id: string
  name: string
  role: string
  tier: 'komisaris' | 'president' | 'advisor' | 'director'
  photo: string | null
  description: string
  responsibilities: string[]
}

const members: Member[] = [
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
]

const cardStyle: Record<Member['tier'], { bg: string; text: string; badge: string; avatar: string; icon: string }> = {
  komisaris: { bg: 'bg-[#1a2a4a]',  text: 'text-white', badge: 'bg-gold text-navy',        avatar: 'border-gold',        icon: 'text-gold' },
  president: { bg: 'bg-navy',       text: 'text-white', badge: 'bg-gold text-navy',        avatar: 'border-gold',        icon: 'text-gold' },
  advisor:   { bg: 'bg-white',      text: 'text-navy',  badge: 'bg-navy/10 text-navy',     avatar: 'border-navy/30',     icon: 'text-navy/60' },
  director:  { bg: 'bg-navy/85',    text: 'text-white', badge: 'bg-white/20 text-white',   avatar: 'border-white/40',    icon: 'text-white/70' },
}

const tierIcon = {
  komisaris: Shield,
  president: Building2,
  advisor:   Lightbulb,
  director:  Wrench,
}

/* ── Card ── */
function OrgCard({ member, onClick }: { member: Member; onClick: () => void }) {
  const s = cardStyle[member.tier]
  const Icon = tierIcon[member.tier]
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center text-center px-5 py-4 w-44
                  ${s.bg} ${s.text} border-2 border-gold/30
                  hover:scale-105 hover:shadow-2xl hover:border-gold
                  transition-all duration-300 cursor-pointer`}
    >
      <div className={`w-14 h-14 rounded-full overflow-hidden border-2 ${s.avatar} mb-3 bg-white/10 shrink-0 flex items-center justify-center`}>
        {member.photo
          ? <Image src={member.photo} alt={member.name} width={56} height={56} className="object-cover w-full h-full" />
          : <Icon size={24} className={s.icon} strokeWidth={1.5} />
        }
      </div>
      <p className="font-heading font-bold text-xs leading-tight mb-2">{member.name}</p>
      <span className={`text-[9px] font-bold px-2 py-0.5 ${s.badge}`}>{member.role}</span>
      <span className="absolute bottom-1.5 right-2 text-[8px] opacity-0 group-hover:opacity-50 transition-opacity">
        Profil →
      </span>
    </button>
  )
}

/* ── Modal ── */
function ProfileModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const Icon = tierIcon[member.tier]
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" />
      <div
        className="relative bg-white max-w-lg w-full shadow-2xl overflow-hidden"
        style={{ animation: 'fadeIn .2s ease-out both' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-navy px-8 py-6 flex items-center gap-5">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold shrink-0 bg-white/10 flex items-center justify-center">
            {member.photo
              ? <Image src={member.photo} alt={member.name} width={80} height={80} className="object-cover w-full h-full" />
              : <Icon size={34} className="text-gold" strokeWidth={1.5} />
            }
          </div>
          <div>
            <p className="font-heading font-bold text-white text-xl leading-tight">{member.name}</p>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 mt-2">{member.role}</span>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="px-8 py-6">
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.description}</p>
          <p className="font-heading font-bold text-navy text-sm mb-3 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-gold inline-block" /> Tanggung Jawab
          </p>
          <ul className="space-y-2">
            {member.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />{r}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-8 pb-5 text-right">
          <button onClick={onClose} className="text-xs text-gray-400 hover:text-navy transition-colors">Tutup</button>
        </div>
      </div>
    </div>
  )
}

/* ── Connector helpers ── */
const VLine = ({ h = 10 }: { h?: number }) => (
  <div className="flex justify-center" style={{ height: h }}>
    <div className="w-px bg-gold/50" style={{ height: h }} />
  </div>
)

export default function CompanyStructurePage() {
  const [selected, setSelected] = useState<Member | null>(null)

  const get = (id: string) => members.find((m) => m.id === id)!

  return (
    <div className="min-h-screen bg-[#f5f3ef] font-body">

      {/* Nav */}
      <div className="bg-navy py-4 px-6 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/BATAVIA_ASIA_PROJECT_.png" alt="PT Batavia Asia Project" width={536} height={466}
            className="h-[50px] w-auto object-contain" priority />
        </Link>
        <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>
      </div>

      {/* Hero */}
      <div className="bg-navy text-white py-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 px-4 py-1.5 mb-6">
          <Building2 size={14} className="text-gold" />
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Company Structure</span>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Struktur <span className="text-gold">Organisasi</span>
        </h1>
        <p className="text-white/50 text-sm">Klik kartu untuk melihat profil lengkap</p>
      </div>

      {/* ── Org Chart ── */}
      <div className="py-16 px-4 overflow-x-auto">
        <div className="min-w-[560px] flex flex-col items-center">

          {/* Tier 1: Komisaris */}
          <OrgCard member={get('achmad')} onClick={() => setSelected(get('achmad'))} />

          {/* Line down */}
          <VLine h={40} />

          {/* Tier 2: Penasihat — President — Penasihat */}
          {/* Horizontal rail */}
          <div className="flex items-start">

            {/* Penasihat 1 */}
            <div className="flex flex-col items-center">
              {/* Horizontal line to center */}
              <div className="flex items-center" style={{ height: 1 }}>
                <div className="w-24 border-t border-dashed border-gold/40" />
              </div>
              {/* Drop line */}
              <VLine h={20} />
              <OrgCard member={get('ferrial')} onClick={() => setSelected(get('ferrial'))} />
            </div>

            {/* Center vertical (under president) */}
            <div className="flex flex-col items-center">
              {/* Horizontal rail spanning between penasihat */}
              <div className="w-48 border-t-2 border-gold/50" />
              <VLine h={20} />
              <OrgCard member={get('hammam')} onClick={() => setSelected(get('hammam'))} />
              {/* Line down to director */}
              <VLine h={40} />
            </div>

            {/* Penasihat 2 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center" style={{ height: 1 }}>
                <div className="w-24 border-t border-dashed border-gold/40" />
              </div>
              <VLine h={20} />
              <OrgCard member={get('hendri')} onClick={() => setSelected(get('hendri'))} />
            </div>
          </div>

          {/* Tier 3: Direktur — sits below President */}
          <OrgCard member={get('rahmat')} onClick={() => setSelected(get('rahmat'))} />

          <div className="h-16" />
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-5 pb-6">
        {[
          { label: 'Komisaris',         bg: 'bg-[#1a2a4a]' },
          { label: 'President Direktur',bg: 'bg-navy' },
          { label: 'Penasihat',         bg: 'bg-white border border-navy/20' },
          { label: 'Direktur Teknis',   bg: 'bg-navy/85' },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-2">
            <div className={`w-4 h-4 ${l.bg}`} />
            <span className="text-xs text-gray-500 font-medium">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Back */}
      <div className="text-center py-10">
        <Link href="/"
          className="inline-flex items-center gap-2 border border-navy text-navy px-6 py-3
                     text-sm font-medium hover:bg-navy hover:text-white transition-all duration-200">
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>
      </div>

      {/* Modal */}
      {selected && <ProfileModal member={selected} onClose={() => setSelected(null)} />}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity:0; transform:scale(.96); }
          to   { opacity:1; transform:scale(1); }
        }
      `}</style>
    </div>
  )
}
