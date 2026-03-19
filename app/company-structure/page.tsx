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

function OrgCard({ member, onClick }: { member: Member; onClick: () => void }) {
  const s = tierStyle[member.tier]
  const Icon = TierIcon[member.tier]
  const isAdvisor = member.tier === 'advisor'

  return (
    <button
      onClick={onClick}
      className="org-card group flex flex-col items-center text-center cursor-pointer"
      style={{ background: s.cardBg }}
    >
      {/* Top accent bar */}
      <div className="w-full h-1" style={{ background: s.photoBorder }} />

      {/* Photo */}
      <div className="mt-6 mb-4 relative">
        <div
          className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center"
          style={{
            border: `3px solid ${s.photoBorder}`,
            background: isAdvisor ? 'rgba(15,31,61,0.08)' : 'rgba(201,168,76,0.12)',
            boxShadow: `0 0 0 6px ${s.photoBorder}20`,
          }}
        >
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          ) : (
            <Icon size={36} style={{ color: s.photoBorder }} strokeWidth={1.2} />
          )}
        </div>
        {/* Online dot */}
        <span
          className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 border-white"
          style={{ background: '#c9a84c' }}
        />
      </div>

      {/* Name */}
      <p className={`font-heading font-bold text-sm leading-tight px-4 mb-2 ${s.nameCls}`}>
        {member.name}
      </p>

      {/* Role badge */}
      <span
        className="text-[10px] font-bold tracking-wide px-3 py-1 mb-5"
        style={{ background: s.badge.bg, color: s.badge.text }}
      >
        {member.role}
      </span>

      {/* Hover hint */}
      <div
        className="w-full py-2 text-[10px] font-semibold tracking-widest uppercase
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200
                   border-t"
        style={{
          borderColor: `${s.photoBorder}30`,
          color: s.photoBorder,
          background: `${s.photoBorder}10`,
        }}
      >
        Lihat Profil →
      </div>
    </button>
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
  const get = (id: string) => members.find((m) => m.id === id)!

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f0ede8] font-body">

        {/* Hero */}
        <div className="bg-navy text-white pt-[94px] lg:pt-[134px] pb-16 px-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full border border-gold/10" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border border-gold/10" />
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-4 py-1.5 mb-5">
              <Building2 size={13} className="text-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase">Company Structure</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">
              Struktur <span className="text-gold">Organisasi</span>
            </h1>
            <p className="text-white/50 text-sm">Klik kartu untuk melihat profil lengkap</p>
          </div>
        </div>

        {/* ── Org Chart ── */}
        <div className="py-20 px-6 overflow-x-auto">
          <div className="org-wrap">

            {/* Row 1 — Komisaris */}
            <div className="row1">
              <div className="komisaris-node">
                <OrgCard member={get('achmad')} onClick={() => setSelected(get('achmad'))} />
              </div>
            </div>

            {/* Connector: komisaris → row2 */}
            <div className="v-connector" />

            {/* Row 2 — Advisor | President | Advisor */}
            <div className="row2">
              {/* H-bar spanning full width */}
              <div className="h-bar" />

              <div className="row2-inner">
                {/* Left advisor */}
                <div className="advisor-col">
                  <div className="v-drop-left" />
                  <OrgCard member={get('ferrial')} onClick={() => setSelected(get('ferrial'))} />
                </div>

                {/* President center */}
                <div className="president-col">
                  <OrgCard member={get('hammam')} onClick={() => setSelected(get('hammam'))} />
                </div>

                {/* Right advisor */}
                <div className="advisor-col">
                  <div className="v-drop-right" />
                  <OrgCard member={get('hendri')} onClick={() => setSelected(get('hendri'))} />
                </div>
              </div>
            </div>

            {/* Connector: president → row3 */}
            <div className="v-connector center-only" />

            {/* Row 3 — Director */}
            <div className="row3">
              <OrgCard member={get('rahmat')} onClick={() => setSelected(get('rahmat'))} />
            </div>

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
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 16px 40px rgba(201,168,76,0.3), 0 4px 16px rgba(15,31,61,0.2);
        }

        /* ── CHART WRAPPER ── */
        .org-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 700px;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Row 1 */
        .row1 {
          display: flex;
          justify-content: center;
        }
        .komisaris-node {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Vertical connector (komisaris → row2 h-bar) */
        .v-connector {
          width: 2px;
          height: 48px;
          background: #c9a84c;
        }

        /* Row 2 */
        .row2 {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        /* Horizontal bar spanning advisors + president */
        .h-bar {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 460px;
          height: 2px;
          background: #c9a84c;
        }

        .row2-inner {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 80px;
          padding-top: 0;
        }

        /* Advisor column: v-drop then card */
        .advisor-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .v-drop-left,
        .v-drop-right {
          width: 2px;
          height: 48px;
          border-left: 2px dashed rgba(15,31,61,0.4);
        }

        /* President sits right at the h-bar */
        .president-col {
          margin-top: 0;
        }

        /* Vertical connector from president down (center only) */
        .v-connector.center-only {
          background: #c9a84c;
        }

        /* Row 3 */
        .row3 {
          display: flex;
          justify-content: center;
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
