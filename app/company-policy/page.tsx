import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Company Policy',
  description:
    'Official company policy of PT Batavia Asia Project covering Quality, HSE, Environmental, and Good Corporate Governance policies.',
  alternates: { canonical: 'https://bataviaasiaproject.com/company-policy' },
}

const policies = [
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
]

export default function CompanyPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f3ef] font-body">

      {/* Hero Banner */}
      <div className="bg-navy text-white pt-[96px] lg:pt-[136px] pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
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
            At PT. BATAVIA ASIA PROJECT, we believe that a successful construction masterpiece
            is not only measured by the grandeur of the final result, but also by how the
            building process is carried out. We are fully committed to applying the highest
            operational standards in every project we handle.
          </p>
          <p className="text-gray-600 leading-relaxed text-base mt-4">
            This Company Policy serves as the absolute foundation for all Directors, management,
            staff, and our field partners (vendors and sub-contractors).
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10">
          {policies.map((policy) => (
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
            Management Commitment
          </h3>
          <p className="text-white/70 leading-relaxed text-sm max-w-2xl mx-auto">
            This policy is fully supported by the Senior Management of PT. BATAVIA ASIA PROJECT
            and will continue to be communicated, monitored, and refined in line with the
            company&apos;s growth and government regulations.
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
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
