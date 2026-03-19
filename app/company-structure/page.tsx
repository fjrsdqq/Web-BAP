'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeft, X, Building2, Wrench, Shield, Lightbulb } from 'lucide-react'
import Navbar from '@/components/Navbar'

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
    photo: '/images/Company Structure/Achmad Chaerudin.jpeg',
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
    photo: '/images/Company Structure/Ferrial Sunaryo.jpeg',
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
    photo: '/images/Company Structure/Hendri Arifin.jpeg',
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
    role: 'Direktur Teknis / Operasional',
    tier: 'director',
    photo: '/images/Company Structure/Rahmat Hidayat.jpeg',
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

const tierStyle = {
  komisaris: {
    cardBg: 'linear-gradient(145deg, #1a2a4a 0%, #0f1f3d 100%)',
    photoBorder: '#c9a84c',
    badge: { bg: '#c9a84c', text: '#0f1f3d' },
    nameCls: 'text-white',
    subtitleCls: 'text-white/60',
  },
  president: {
    cardBg: 'linear-gradient(145deg, #0f1f3d 0%, #091530 100%)',
    photoBorder: '#c9a84c',
    badge: { bg: '#c9a84c', text: '#0f1f3d' },
    nameCls: 'text-white',
    subtitleCls: 'text-white/60',
  },
  advisor: {
    cardBg: 'linear-gradient(145deg, #ffffff 0%, #f5f3ef 100%)',
    photoBorder: '#0f1f3d',
    badge: { bg: '#0f1f3d', text: '#ffffff' },
    nameCls: 'text-[#0f1f3d]',
    subtitleCls: 'text-gray-400',
  },
  director: {
    cardBg: 'linear-gradient(145deg, #1e3160 0%, #152548 100%)',
    photoBorder: '#c9a84c',
    badge: { bg: '#c9a84c', text: '#0f1f3d' },
    nameCls: 'text-white',
    subtitleCls: 'text-white/60',
  },
}

const TierIcon = { komisaris: Shield, president: Building2, advisor: Lightbulb, director: Wrench }

/* Small org card (in chart) — hover triggers zoom overlay */
function OrgCard({
  member,
  onHover,
  onLeave,
  onClick,
}: {
  member: Member
  onHover: (m: Member) => void
  onLeave: () => void
  onClick: (m: Member) => void
}) {
  const s = tierStyle[member.tier]
  const Icon = TierIcon[member.tier]
  const isAdvisor = member.tier === 'advisor'

  return (
    <button
      onMouseEnter={() => onHover(member)}
      onMouseLeave={onLeave}
      onClick={() => onClick(member)}
      className="org-card flex flex-col items-center text-center cursor-pointer"
      style={{ background: s.cardBg }}
    >
      {/* Full-width portrait photo — no crop */}
      <div
        className="w-full overflow-hidden flex items-center justify-center"
        style={{
          height: 160,
          borderBottom: `2px solid ${s.photoBorder}`,
          background: isAdvisor ? 'rgba(15,31,61,0.06)' : 'rgba(201,168,76,0.08)',
        }}
      >
        {member.photo ? (
          <Image src={member.photo} alt={member.name} width={176} height={160} className="w-full h-full object-cover object-top" />
        ) : (
          <Icon size={44} style={{ color: s.photoBorder }} strokeWidth={1.1} />
        )}
      </div>
      {/* Gold accent line */}
      <div className="w-8 h-0.5 mt-4 mb-2" style={{ background: s.photoBorder }} />
      <p className={`font-heading font-bold text-sm leading-tight px-4 mb-2 ${s.nameCls}`}>{member.name}</p>
      <span className="text-[10px] font-bold tracking-wide px-3 py-1 mb-5" style={{ background: s.badge.bg, color: s.badge.text }}>
        {member.role}
      </span>
    </button>
  )
}

/* Zoom preview overlay shown on hover */
function HoverPreview({ member, onClose, onClick }: { member: Member; onClose: () => void; onClick: () => void }) {
  const s = tierStyle[member.tier]
  const Icon = TierIcon[member.tier]

  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center"
      onMouseLeave={onClose}
    >
      {/* Blur backdrop */}
      <div className="absolute inset-0 bg-[#0f1f3d]/60 backdrop-blur-md" onClick={onClose} />

      {/* Zoomed card */}
      <div
        className="relative flex flex-col items-center text-center overflow-hidden cursor-pointer"
        style={{
          background: s.cardBg,
          width: 320,
          borderRadius: 2,
          boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 0 2px ${s.photoBorder}`,
          animation: 'zoomIn .2s ease-out both',
        }}
        onClick={onClick}
      >
        {/* Full-width portrait photo */}
        <div
          className="w-full overflow-hidden flex items-center justify-center"
          style={{
            height: 280,
            borderBottom: `3px solid ${s.photoBorder}`,
            background: 'rgba(201,168,76,0.08)',
          }}
        >
          {member.photo ? (
            <Image src={member.photo} alt={member.name} width={320} height={280} className="w-full h-full object-cover object-top" />
          ) : (
            <Icon size={80} style={{ color: s.photoBorder }} strokeWidth={1.0} />
          )}
        </div>

        {/* Gold accent */}
        <div className="w-10 h-0.5 mt-6 mb-3" style={{ background: s.photoBorder }} />
        <p className={`font-heading font-bold text-xl leading-tight px-6 mb-3 ${s.nameCls}`}>{member.name}</p>
        <span className="text-xs font-bold tracking-wide px-4 py-1.5 mb-4" style={{ background: s.badge.bg, color: s.badge.text }}>
          {member.role}
        </span>

        {/* Click hint */}
        <div
          className="w-full py-3 text-xs font-semibold tracking-widest uppercase border-t"
          style={{ borderColor: `${s.photoBorder}30`, color: s.photoBorder, background: `${s.photoBorder}15` }}
        >
          Klik untuk lihat profil →
        </div>
      </div>
    </div>
  )
}

function ProfileModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const Icon = TierIcon[member.tier]
  const s = tierStyle[member.tier]
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-[#0f1f3d]/80 backdrop-blur-sm" />
      <div
        className="relative bg-white max-w-2xl w-full shadow-2xl overflow-hidden flex"
        style={{ animation: 'modalIn .22s ease-out both', minHeight: 360 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT — Photo */}
        <div
          className="w-52 shrink-0 flex flex-col items-center justify-center py-10 px-5 gap-5"
          style={{ background: s.cardBg }}
        >
          <div
            className="w-36 h-44 overflow-hidden flex items-center justify-center"
            style={{ border: `3px solid ${s.photoBorder}`, background: 'rgba(201,168,76,0.1)' }}
          >
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                width={144}
                height={176}
                className="object-cover w-full h-full"
              />
            ) : (
              <Icon size={52} style={{ color: s.photoBorder }} strokeWidth={1.1} />
            )}
          </div>
          <div className="text-center">
            <p className={`font-heading font-bold text-sm leading-tight mb-2 ${s.nameCls}`}>
              {member.name}
            </p>
            <span
              className="inline-block text-[10px] font-bold px-3 py-1"
              style={{ background: s.badge.bg, color: s.badge.text }}
            >
              {member.role}
            </span>
          </div>
        </div>

        {/* RIGHT — Info */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-300 hover:text-gray-600 transition-colors"
          >
            <X size={18} />
          </button>

          <div className="px-8 pt-8 pb-4 flex-1">
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{member.description}</p>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-0.5 inline-block" style={{ background: '#c9a84c' }} />
              <p className="font-heading font-bold text-sm text-[#0f1f3d]">Tanggung Jawab</p>
            </div>
            <ul className="space-y-3">
              {member.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ background: '#c9a84c' }}
                  />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 pb-5 pt-3 text-right border-t border-gray-100">
            <button
              onClick={onClose}
              className="text-xs text-gray-400 hover:text-[#0f1f3d] transition-colors"
            >
              Tutup ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CompanyStructurePage() {
  const [selected, setSelected] = useState<Member | null>(null)
  const [hovered, setHovered] = useState<Member | null>(null)
  const get = (id: string) => members.find((m) => m.id === id)!

  const cardProps = (id: string) => ({
    member: get(id),
    onHover: (m: Member) => setHovered(m),
    onLeave: () => setHovered(null),
    onClick: (m: Member) => { setHovered(null); setSelected(m) },
  })

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f0ede8] font-body">

        {/* Hero */}
        <div className="bg-navy text-white pt-[94px] lg:pt-[134px] pb-16 px-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full border border-gold/10" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border border-gold/10" />
          <div className="relative max-w-3xl mx-auto text-center">

            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">
              Struktur <span className="text-gold">Organisasi</span>
            </h1>
            <p className="text-white/50 text-sm">Klik kartu untuk melihat profil lengkap</p>
          </div>
        </div>

        {/* ── Org Chart ── */}
        {/* Card width=176, gap=80 → row total=688, card-center offset=88 */}
        <div className="py-20 px-6 overflow-x-auto">
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', minWidth:760 }}>

            {/* Row 1 — Komisaris */}
            <OrgCard {...cardProps('achmad')} />

            {/* Solid line down from Komisaris */}
            <div style={{ width:2, height:48, background:'#c9a84c' }} />

            {/* Branch connector + Row 2 cards in one 688px container */}
            <div style={{ width:688, position:'relative' }}>

              {/* H-bar: from center-of-left-card to center-of-right-card */}
              <div style={{ position:'relative', height:48, marginLeft:88, marginRight:88 }}>
                {/* Horizontal gold bar */}
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'#c9a84c' }} />
                {/* Left vertical drop — dashed (advisor) */}
                <div style={{ position:'absolute', top:0, left:-1, width:2, height:48, borderLeft:'2px dashed rgba(15,31,61,0.45)' }} />
                {/* Center vertical drop — solid (president) */}
                <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-1px)', width:2, height:48, background:'#c9a84c' }} />
                {/* Right vertical drop — dashed (advisor) */}
                <div style={{ position:'absolute', top:0, right:-1, width:2, height:48, borderLeft:'2px dashed rgba(15,31,61,0.45)' }} />
              </div>

              {/* Three cards */}
              <div style={{ display:'flex', gap:80, alignItems:'flex-start' }}>
                <OrgCard {...cardProps('ferrial')} />
                <OrgCard {...cardProps('hammam')} />
                <OrgCard {...cardProps('hendri')} />
              </div>
            </div>

            {/* Solid line down from President → Director */}
            <div style={{ width:2, height:48, background:'#c9a84c' }} />

            {/* Row 3 — Director */}
            <OrgCard {...cardProps('rahmat')} />

          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-8 pb-12">
          {[
            { label: 'Komisaris',          bg: '#1a2a4a' },
            { label: 'President Direktur', bg: '#0f1f3d' },
            { label: 'Penasihat',          bg: '#ffffff', border: '2px solid #0f1f3d' },
            { label: 'Direktur Teknis',    bg: '#1e3160' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-sm" style={{ background: l.bg, border: l.border ?? 'none' }} />
              <span className="text-xs text-gray-500 font-medium">{l.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-0 border-t-2 border-dashed border-gray-400" />
            <span className="text-xs text-gray-500 font-medium">Hubungan Penasihat</span>
          </div>
        </div>

        {/* Back */}
        <div className="text-center pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border-2 border-[#0f1f3d] text-[#0f1f3d]
                       px-8 py-3 text-sm font-semibold hover:bg-[#0f1f3d] hover:text-white
                       transition-all duration-200"
          >
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
        </div>
      </div>

      {hovered && !selected && (
        <HoverPreview
          member={hovered}
          onClose={() => setHovered(null)}
          onClick={() => { setSelected(hovered); setHovered(null) }}
        />
      )}
      {selected && <ProfileModal member={selected} onClose={() => setSelected(null)} />}

      <style jsx global>{`
        /* ── ORG CARD ── */
        .org-card {
          width: 176px;
          border-radius: 2px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(15,31,61,0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          z-index: 10;
        }
        .org-card:hover {
          box-shadow: 0 8px 32px rgba(201,168,76,0.35);
        }

        /* Hover zoom animation */
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* Modal animation */
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .text-gold { color: #c9a84c; }
        .bg-gold   { background: #c9a84c; }
      `}</style>
    </>
  )
}
