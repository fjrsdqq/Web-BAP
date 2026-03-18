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

const cardCfg = {
  komisaris: { bg: '#1a2a4a', text: '#fff',     border: '#c9a84c', badgeBg: '#c9a84c', badgeText: '#1a2a4a' },
  president: { bg: '#0f1f3d', text: '#fff',     border: '#c9a84c', badgeBg: '#c9a84c', badgeText: '#0f1f3d' },
  advisor:   { bg: '#ffffff', text: '#0f1f3d',  border: '#0f1f3d', badgeBg: '#e8e4da', badgeText: '#0f1f3d' },
  director:  { bg: '#1e3160', text: '#fff',     border: '#c9a84c', badgeBg: 'rgba(255,255,255,0.15)', badgeText: '#fff' },
}
const TierIcon = { komisaris: Shield, president: Building2, advisor: Lightbulb, director: Wrench }

function OrgCard({ member, onClick }: { member: Member; onClick: () => void }) {
  const c = cardCfg[member.tier]
  const Icon = TierIcon[member.tier]
  return (
    <button
      onClick={onClick}
      title="Lihat profil"
      style={{ background: c.bg, color: c.text, borderColor: c.border }}
      className="group relative flex flex-col items-center text-center px-5 py-5 w-40 border-2
                 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-sm cursor-pointer"
    >
      {/* Avatar */}
      <div className="w-14 h-14 rounded-full overflow-hidden mb-3 flex items-center justify-center"
           style={{ background: 'rgba(201,168,76,0.15)', border: `2px solid ${c.border}` }}>
        {member.photo
          ? <Image src={member.photo} alt={member.name} width={56} height={56} className="object-cover w-full h-full" />
          : <Icon size={22} style={{ color: c.border }} strokeWidth={1.5} />
        }
      </div>
      <p className="font-heading font-bold text-xs leading-tight mb-2">{member.name}</p>
      <span className="text-[9px] font-bold px-2 py-0.5 rounded-sm"
            style={{ background: c.badgeBg, color: c.badgeText }}>
        {member.role}
      </span>
      <span className="absolute bottom-1.5 right-2 text-[8px] opacity-0 group-hover:opacity-40 transition-opacity"
            style={{ color: c.border }}>
        Profil →
      </span>
    </button>
  )
}

function ProfileModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const Icon = TierIcon[member.tier]
  const c = cardCfg[member.tier]
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-[#0f1f3d]/75 backdrop-blur-sm" />
      <div
        className="relative bg-white max-w-lg w-full shadow-2xl overflow-hidden rounded-sm"
        style={{ animation: 'modalIn .22s ease-out both' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-8 py-6 flex items-center gap-5" style={{ background: c.bg }}>
          <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 flex items-center justify-center"
               style={{ border: `2px solid ${c.border}`, background: 'rgba(201,168,76,0.15)' }}>
            {member.photo
              ? <Image src={member.photo} alt={member.name} width={80} height={80} className="object-cover w-full h-full" />
              : <Icon size={32} style={{ color: c.border }} strokeWidth={1.5} />
            }
          </div>
          <div>
            <p className="font-heading font-bold text-white text-xl leading-tight">{member.name}</p>
            <span className="inline-block text-xs font-bold px-3 py-1 mt-2 rounded-sm"
                  style={{ background: c.border, color: c.badgeText }}>
              {member.role}
            </span>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="px-8 py-6">
          <p className="text-gray-500 text-sm leading-relaxed mb-6">{member.description}</p>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-gold inline-block" style={{ background: '#c9a84c' }} />
            <p className="font-heading font-bold text-navy text-sm">Tanggung Jawab</p>
          </div>
          <ul className="space-y-2">
            {member.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: '#c9a84c' }} />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-8 pb-5 text-right border-t border-gray-100 pt-4">
          <button onClick={onClose} className="text-xs text-gray-400 hover:text-navy transition-colors">Tutup ✕</button>
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
      <div className="min-h-screen bg-[#f5f3ef] font-body pt-[80px] lg:pt-[120px]">

        {/* Hero */}
        <div className="bg-navy text-white py-14 px-6 relative overflow-hidden">
          {/* decorative circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border border-gold/10" />
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
        <div className="py-16 px-4 overflow-x-auto">
          <div className="org-tree flex flex-col items-center" style={{ minWidth: 560 }}>

            {/* ── Level 1: Komisaris ── */}
            <div className="node-komisaris">
              <OrgCard member={get('achmad')} onClick={() => setSelected(get('achmad'))} />
            </div>

            {/* ── Level 2: President + Penasihat ── */}
            {/*
              Layout:
                  Komisaris
                      |
              ┌───────┼───────┐
           Penasihat Presdir Penasihat
                      |
                 Dir.Teknis
            */}
            <div className="level2-wrapper">
              {/* left advisory branch */}
              <div className="advisor-branch left-branch">
                <div className="h-line" />
                <div className="v-drop" />
                <OrgCard member={get('ferrial')} onClick={() => setSelected(get('ferrial'))} />
              </div>

              {/* center column: President + line down */}
              <div className="center-col">
                <div className="v-from-top" />
                <OrgCard member={get('hammam')} onClick={() => setSelected(get('hammam'))} />
                <div className="v-to-bottom" />
              </div>

              {/* right advisory branch */}
              <div className="advisor-branch right-branch">
                <div className="h-line" />
                <div className="v-drop" />
                <OrgCard member={get('hendri')} onClick={() => setSelected(get('hendri'))} />
              </div>
            </div>

            {/* ── Level 3: Direktur ── */}
            <OrgCard member={get('rahmat')} onClick={() => setSelected(get('rahmat'))} />

          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 pb-8">
          {[
            { label: 'Komisaris',          bg: '#1a2a4a' },
            { label: 'President Direktur', bg: '#0f1f3d' },
            { label: 'Penasihat',          bg: '#ffffff', border: '1px solid #0f1f3d' },
            { label: 'Direktur Teknis',    bg: '#1e3160' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-sm" style={{ background: l.bg, border: l.border ?? 'none' }} />
              <span className="text-xs text-gray-500 font-medium">{l.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <div className="w-8 h-0 border-t-2 border-dashed border-gray-400" />
            <span className="text-xs text-gray-500 font-medium">Hubungan Advisory</span>
          </div>
        </div>

        {/* Back */}
        <div className="text-center py-10">
          <Link href="/"
            className="inline-flex items-center gap-2 border border-navy text-navy px-6 py-3
                       text-sm font-medium hover:bg-navy hover:text-white transition-all duration-200">
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
        </div>
      </div>

      {selected && <ProfileModal member={selected} onClose={() => setSelected(null)} />}

      <style jsx global>{`
        /* ── GOLD COLOR ── */
        .text-gold { color: #c9a84c; }

        /* ── ORG CHART TREE ── */
        .org-tree {
          gap: 0;
        }

        /* Komisaris node — add bottom connector */
        .node-komisaris {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .node-komisaris::after {
          content: '';
          width: 2px;
          height: 36px;
          background: #c9a84c;
        }

        /* Level 2 row */
        .level2-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        /* Center column */
        .center-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .v-from-top {
          width: 2px;
          height: 0;      /* already provided by node-komisaris::after */
        }
        .v-to-bottom {
          width: 2px;
          height: 36px;
          background: #c9a84c;
        }

        /* Advisory branch (left & right) */
        .advisor-branch {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding-top: 0;
        }
        .right-branch {
          align-items: flex-start;
        }

        /* Horizontal dashed line connecting advisor to president */
        .h-line {
          height: 2px;
          width: 56px;
          border-top: 2px dashed rgba(15,31,61,0.35);
          /* position it vertically at center of card avatar area */
          margin-top: 62px;  /* aligns with center of card roughly */
        }

        /* Vertical drop from h-line to advisor card */
        .v-drop {
          display: none; /* not needed — card sits beside the h-line */
        }

        /* Re-layout: advisor cards sit beside president on the same row */
        .advisor-branch {
          flex-direction: row;
          align-items: center;
          padding-top: 0;
        }
        .left-branch {
          flex-direction: row-reverse;
        }
        .h-line {
          margin-top: 0;
        }

        /* Modal animation */
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  )
}
