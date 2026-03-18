'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, Clock, Briefcase, ChevronLeft, ChevronRight,
  ArrowRight, Calculator, DollarSign,
} from 'lucide-react'

interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string        // Full-time / Part-time / Contract
  level: string       // Junior / Mid / Senior
  icon: React.ElementType
  tags: string[]
  deadline: string
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Accounting Staff',
    department: 'Finance & Accounting',
    location: 'Jakarta Timur',
    type: 'Full-time',
    level: 'Mid Level',
    icon: Calculator,
    tags: ['Akuntansi', 'SAP', 'Laporan Keuangan'],
    deadline: 'Apr 30, 2025',
  },
  {
    id: 2,
    title: 'Finance Officer',
    department: 'Finance & Accounting',
    location: 'Jakarta Timur',
    type: 'Full-time',
    level: 'Mid Level',
    icon: DollarSign,
    tags: ['Cash Flow', 'Anggaran', 'Analisis Keuangan'],
    deadline: 'Apr 30, 2025',
  },
]

const ITEMS_PER_PAGE = 5

const levelColor: Record<string, string> = {
  'Junior Level': 'bg-emerald-500/10 text-emerald-600',
  'Mid Level':    'bg-blue-500/10 text-blue-600',
  'Senior Level': 'bg-gold/10 text-gold',
}

export default function CareerSection() {
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<Job | null>(null)

  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE)
  const paginated = jobs.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const goPage = (p: number) => {
    setPage(p)
    document.getElementById('career')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="career" className="bg-white section-padding">
      <div className="container-section">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Join Our Team</p>
          <h2 className="section-title mb-5">
            Career <span className="text-gold">Opportunities</span>
          </h2>
          <p className="font-body text-gray-500 leading-relaxed">
            Be part of a growing team dedicated to delivering excellence in
            construction and property development across Indonesia.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: jobs.length + '+', label: 'Open Positions' },
            { value: '5+', label: 'Departments' },
            { value: 'Jakarta', label: 'Primary Location' },
          ].map((s) => (
            <div key={s.label}
              className="text-center py-5 border border-light-gray bg-offwhite">
              <div className="font-heading text-2xl font-bold text-gold mb-1">{s.value}</div>
              <div className="font-body text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Job list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 mb-8"
          >
            {paginated.map((job, i) => {
              const Icon = job.icon
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="group flex flex-col sm:flex-row sm:items-center gap-5
                             border border-light-gray bg-white hover:border-gold/40
                             hover:shadow-md transition-all duration-300 p-5 md:p-6"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gold/10 group-hover:bg-gold/20
                                  flex items-center justify-center shrink-0
                                  transition-colors duration-300">
                    <Icon size={20} className="text-gold" strokeWidth={1.5} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-heading font-semibold text-navy text-base">
                        {job.title}
                      </h3>
                      <span className={`font-body text-xs px-2 py-0.5 rounded-sm font-medium
                                        ${levelColor[job.level]}`}>
                        {job.level}
                      </span>
                    </div>

                    <p className="font-body text-xs text-gray-400 mb-3">{job.department}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-gold shrink-0" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={11} className="text-gold shrink-0" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} className="text-gold shrink-0" />
                        Deadline: {job.deadline}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {job.tags.map((tag) => (
                        <span key={tag}
                          className="bg-offwhite border border-light-gray font-body
                                     text-xs text-navy/60 px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply CTA */}
                  <button
                    onClick={() => setSelected(job)}
                    className="shrink-0 flex items-center gap-2 font-body text-sm font-medium
                               text-gold border border-gold/40 hover:bg-gold hover:text-white
                               hover:border-gold px-5 py-2.5 transition-all duration-200
                               whitespace-nowrap self-start sm:self-center"
                  >
                    Apply Now
                    <ArrowRight size={14} />
                  </button>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => goPage(page - 1)}
              disabled={page === 1}
              className="w-9 h-9 flex items-center justify-center border border-light-gray
                         text-navy/50 hover:border-gold hover:text-gold disabled:opacity-30
                         disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goPage(p)}
                className={`w-9 h-9 font-body text-sm font-medium border transition-all duration-200
                  ${p === page
                    ? 'bg-navy text-white border-navy'
                    : 'border-light-gray text-navy/60 hover:border-gold hover:text-gold'
                  }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => goPage(page + 1)}
              disabled={page === totalPages}
              className="w-9 h-9 flex items-center justify-center border border-light-gray
                         text-navy/50 hover:border-gold hover:text-gold disabled:opacity-30
                         disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        <p className="text-center font-body text-xs text-gray-400 mt-3">
          Showing {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, jobs.length)} of {jobs.length} positions
        </p>
      </div>

      {/* ── Apply Modal ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm
                       flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="bg-navy px-6 py-5 flex items-start justify-between gap-4">
                <div>
                  <p className="section-label text-xs mb-1">{selected.department}</p>
                  <h3 className="font-heading text-white text-xl">{selected.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2 text-white/50 text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin size={10} /> {selected.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase size={10} /> {selected.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> Deadline: {selected.deadline}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white/50 hover:text-white transition-colors mt-1 shrink-0"
                >
                  ✕
                </button>
              </div>

              {/* Form */}
              <div className="px-6 py-6 space-y-4">
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  Tertarik bergabung? Isi formulir di bawah dan kirimkan CV kamu.
                  Tim HR kami akan menghubungi kamu dalam 3–5 hari kerja.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-gray-500 block mb-1.5">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input type="text" placeholder="Your full name"
                      className="w-full border border-light-gray px-3 py-2.5 font-body text-sm
                                 text-navy placeholder-gray-400 focus:outline-none focus:border-gold
                                 transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-xs text-gray-500 block mb-1.5">
                      Phone <span className="text-gold">*</span>
                    </label>
                    <input type="tel" placeholder="+62 8xx xxxx xxxx"
                      className="w-full border border-light-gray px-3 py-2.5 font-body text-sm
                                 text-navy placeholder-gray-400 focus:outline-none focus:border-gold
                                 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs text-gray-500 block mb-1.5">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input type="email" placeholder="email@example.com"
                    className="w-full border border-light-gray px-3 py-2.5 font-body text-sm
                               text-navy placeholder-gray-400 focus:outline-none focus:border-gold
                               transition-colors" />
                </div>

                <div>
                  <label className="font-body text-xs text-gray-500 block mb-1.5">
                    Position Applied
                  </label>
                  <input type="text" value={selected.title} readOnly
                    className="w-full border border-light-gray bg-offwhite px-3 py-2.5
                               font-body text-sm text-navy/60" />
                </div>

                <div>
                  <label className="font-body text-xs text-gray-500 block mb-1.5">
                    Cover Letter / Message
                  </label>
                  <textarea rows={4} placeholder="Tell us about yourself and why you're a great fit..."
                    className="w-full border border-light-gray px-3 py-2.5 font-body text-sm
                               text-navy placeholder-gray-400 focus:outline-none focus:border-gold
                               transition-colors resize-none" />
                </div>

                <a
                  href={`mailto:bataviaasiaproject@gmail.com?subject=Job Application – ${selected.title}&body=Hi PT Batavia Asia Project,%0A%0AI would like to apply for the ${selected.title} position.%0A%0APlease find my application details attached.`}
                  className="w-full btn-primary justify-center"
                  onClick={() => setSelected(null)}
                >
                  Send Application via Email
                  <ArrowRight size={16} />
                </a>

                <p className="font-body text-xs text-center text-gray-400">
                  Or send your CV directly to{' '}
                  <span className="text-gold">bataviaasiaproject@gmail.com</span>
                  {' '}with subject: <em>Apply – {selected.title}</em>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
