import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Lightbulb, Users, ShieldCheck, Heart, Star } from 'lucide-react'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Company Values',
  description:
    'Core values of PT Batavia Asia Project encapsulated in the B.U.I.L.D philosophy — Brilliance, Unity, Integrity, Loyalty, Dedication.',
  alternates: { canonical: 'https://bataviaasiaproject.com/company-values' },
}

const values = [
  {
    letter: 'B',
    keyword: 'Brilliance',
    subtitle: 'Excellence & Innovation',
    icon: Lightbulb,
    description:
      'We do not just build — we deliver solutions. Our expert team always works with intelligence and innovation to bring efficiency at every stage of construction, from planning to handover, ensuring final results that exceed expectations.',
  },
  {
    letter: 'U',
    keyword: 'Unity',
    subtitle: 'Collaboration & Teamwork',
    icon: Users,
    description:
      'The success of a project is the result of solid teamwork. We uphold a spirit of harmonious collaboration between management, field experts, vendors, sub-contractors, and our clients — ensuring every project runs smoothly and hits its targets.',
  },
  {
    letter: 'I',
    keyword: 'Integrity',
    subtitle: 'Integrity & Transparency',
    icon: ShieldCheck,
    description:
      'Your trust is our greatest asset. We conduct business with the highest level of honesty, strict professional ethics, and full transparency — in project budgets, material specifications, and field progress reporting. There is no compromise on quality and honesty.',
  },
  {
    letter: 'L',
    keyword: 'Loyalty',
    subtitle: 'Loyalty to Commitment',
    icon: Heart,
    description:
      'We dedicate ourselves fully to every agreement made. Our loyalty is demonstrated through on-time project completion and an unwavering commitment to delivering added value to your property and infrastructure investment.',
  },
  {
    letter: 'D',
    keyword: 'Dedication',
    subtitle: 'Dedication to Quality & Safety',
    icon: Star,
    description:
      'We place quality standards and Occupational Health & Safety (OHS) above all else. Our dedication is to create a safe working environment (Zero Accident) and ensure every detail of a building stands strong, functional, and durable.',
  },
]

export default function CompanyValuesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f3ef] font-body">

      {/* Hero Banner */}
      <div className="bg-navy text-white pt-[96px] lg:pt-[136px] pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-5">
            Our <span className="text-gold">Values</span>
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            A Strong Foundation for Every Masterpiece
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Opening Statement */}
        <div className="bg-white border-l-4 border-gold p-8 mb-14 shadow-sm">
          <p className="text-gray-600 leading-relaxed text-base">
            At PT. BATAVIA ASIA PROJECT, we believe that great construction is not only built
            on foundations of concrete and steel, but on a foundation of strong values. As a
            trusted partner in delivering national-scale infrastructure and property development,
            every step we take is guided by the principles of integrity, quality, and safety.
          </p>
          <p className="text-gray-600 leading-relaxed text-base mt-4">
            Our core company values are encapsulated in the{' '}
            <span className="font-bold text-navy">B.U.I.L.D</span> philosophy — our real
            commitment to every client, partner, and community in which we operate.
          </p>
        </div>

        {/* B.U.I.L.D Philosophy Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            {['B', 'U', 'I', 'L', 'D'].map((l) => (
              <div key={l} className="w-12 h-12 bg-navy flex items-center justify-center">
                <span className="font-heading font-bold text-gold text-xl">{l}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm tracking-widest uppercase font-medium">
            Company Core Philosophy
          </p>
        </div>

        {/* Values Cards */}
        <div className="space-y-6">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div key={v.letter} className="bg-white shadow-sm overflow-hidden flex">
                <div className="bg-navy w-20 shrink-0 flex flex-col items-center justify-center py-8 gap-3">
                  <span className="font-heading font-bold text-gold text-4xl leading-none">
                    {v.letter}
                  </span>
                  <Icon size={20} className="text-white/40" strokeWidth={1.5} />
                </div>
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
            Building the Future{' '}
            <span className="text-gold">Together</span>
          </h3>
          <p className="text-white/70 leading-relaxed text-sm max-w-2xl mx-auto">
            For us, every project is a trust. The B.U.I.L.D philosophy ensures that
            PT. BATAVIA ASIA PROJECT will always be the contractor you can rely on —
            today, tomorrow, and in the future.
          </p>
          <p className="text-gold font-heading font-semibold text-lg mt-6">
            Let us bring your construction vision to life together.
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
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
