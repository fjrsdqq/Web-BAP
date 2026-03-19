'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, Clock, Briefcase, ChevronLeft, ChevronRight,
  ArrowRight, Calculator, DollarSign,
} from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

interface Job {
  id: number
  title: string
  department: string
  location: string
  type: { en: string; id: string }
  level: { en: string; id: string }
  icon: React.ElementType
  tags: { en: string; id: string }[]
  deadline: string
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Accounting Staff',
    department: 'Finance & Accounting',
    location: 'Jakarta Timur',
    type: { en: 'Full-time', id: 'Penuh Waktu' },
    level: { en: 'Mid Level', id: 'Tingkat Menengah' },
    icon: Calculator,
    tags: [
      { en: 'Accounting', id: 'Akuntansi' },
      { en: 'SAP', id: 'SAP' },
      { en: 'Financial Reporting', id: 'Laporan Keuangan' },
    ],
    deadline: 'Apr 30, 2026',
  },
  {
    id: 2,
    title: 'Finance Officer',
    department: 'Finance & Accounting',
    location: 'Jakarta Timur',
    type: { en: 'Full-time', id: 'Penuh Waktu' },
    level: { en: 'Mid Level', id: 'Tingkat Menengah' },
    icon: DollarSign,
    tags: [
      { en: 'Cash Flow', id: 'Arus Kas' },
      { en: 'Budgeting', id: 'Anggaran' },
      { en: 'Financial Analysis', id: 'Analisis Keuangan' },
    ],
    deadline: 'Apr 30, 2026',
  },
]

const ITEMS_PER_PAGE = 5

const levelColor: Record<string, string> = {
  'Mid Level':    'bg-blue-500/10 text-blue-600',
  'Senior Level': 'bg-gold/10 text-gold',
  'Junior Level': 'bg-emerald-500/10 text-emerald-600',
}

export default function CareerSection() {
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<Job | null>(null)
  const { lang } = useLang()
  const t = (en: string, id: string) => lang === 'en' ? en : id

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
          <p className="section-label mb-3">{t('Join Our Team', 'Bergabung dengan Kami')}</p>
          <h2 className="section-title mb-5">
            {t('Career', 'Peluang')} <span className="text-gold">{t('Opportunities', 'Karir')}</span>
          </h2>
          <p className="font-body text-gray-500 leading-relaxed">
            {t(
              'Be part of a growing team dedicated to delivering excellence in construction and property development across Indonesia.',
              'Jadilah bagian dari tim yang berkembang dan berdedikasi menghadirkan keunggulan dalam konstruksi dan pengembangan properti di seluruh Indonesia.'
            )}
          </p>
        </div>

        {/* Job List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {paginated.map((job) => {
            const Icon = job.icon
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-light-gray hover:border-gold/40
                           hover:shadow-md transition-all duration-200 p-6 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-navy/5 group-hover:bg-gold/10
                                  flex items-center justify-center shrink-0 transition-colors">
                    <Icon size={22} className="text-navy/60 group-hover:text-gold transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-heading font-bold text-navy text-lg leading-tight">
                          {job.title}
                        </h3>
                        <p className="font-body text-sm text-gray-400 mt-0.5">{job.department}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-sm ${levelColor[job.level.en] ?? 'bg-gray-100 text-gray-500'}`}>
                        {lang === 'en' ? job.level.en : job.level.id}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={12} /> {lang === 'en' ? job.type.en : job.type.id}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} /> {t('Deadline', 'Batas Waktu')}: {job.deadline}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag) => (
                        <span key={tag.en} className="text-xs bg-navy/5 text-navy/60 px-2.5 py-1">
                          {lang === 'en' ? tag.en : tag.id}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelected(job)}
                      className="inline-flex items-center gap-1.5 font-body text-sm font-medium
                                 text-gold hover:text-navy transition-colors duration-200"
                    >
                      {t('Apply Now', 'Lamar Sekarang')} <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
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
          {t('Showing', 'Menampilkan')} {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, jobs.length)} {t('of', 'dari')} {jobs.length} {t('positions', 'posisi')}
        </p>
      </div>

      {/* Apply Modal */}
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
                      <Briefcase size={10} /> {lang === 'en' ? selected.type.en : selected.type.id}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> {t('Deadline', 'Batas Waktu')}: {selected.deadline}
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
                  {t(
                    'Interested in joining? Fill out the form below and send us your CV. Our HR team will contact you within 3–5 working days.',
                    'Tertarik bergabung? Isi formulir di bawah dan kirimkan CV kamu. Tim HR kami akan menghubungi kamu dalam 3–5 hari kerja.'
                  )}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-gray-500 block mb-1.5">
                      {t('Full Name', 'Nama Lengkap')} <span className="text-gold">*</span>
                    </label>
                    <input type="text" placeholder={t('Your full name', 'Nama lengkap Anda')}
                      className="w-full border border-light-gray px-3 py-2.5 font-body text-sm
                                 text-navy placeholder-gray-400 focus:outline-none focus:border-gold
                                 transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-xs text-gray-500 block mb-1.5">
                      {t('Phone', 'Telepon')} <span className="text-gold">*</span>
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
                    {t('Position Applied', 'Posisi yang Dilamar')}
                  </label>
                  <input type="text" value={selected.title} readOnly
                    className="w-full border border-light-gray bg-offwhite px-3 py-2.5
                               font-body text-sm text-navy/60" />
                </div>

                <div>
                  <label className="font-body text-xs text-gray-500 block mb-1.5">
                    {t('Cover Letter / Message', 'Surat Lamaran / Pesan')}
                  </label>
                  <textarea rows={4} placeholder={t("Tell us about yourself and why you're a great fit...", 'Ceritakan tentang diri Anda dan mengapa Anda cocok untuk posisi ini...')}
                    className="w-full border border-light-gray px-3 py-2.5 font-body text-sm
                               text-navy placeholder-gray-400 focus:outline-none focus:border-gold
                               transition-colors resize-none" />
                </div>

                <a
                  href={`mailto:bataviaasiaproject@gmail.com?subject=Job Application – ${selected.title}&body=Hi PT Batavia Asia Project,%0A%0AI would like to apply for the ${selected.title} position.%0A%0APlease find my application details attached.`}
                  className="w-full btn-primary justify-center"
                  onClick={() => setSelected(null)}
                >
                  {t('Send Application via Email', 'Kirim Lamaran via Email')}
                  <ArrowRight size={16} />
                </a>

                <p className="font-body text-xs text-center text-gray-400">
                  {t('Or send your CV directly to', 'Atau kirim CV Anda langsung ke')}{' '}
                  <span className="text-gold">bataviaasiaproject@gmail.com</span>
                  {' '}{t('with subject:', 'dengan subjek:')} <em>Apply – {selected.title}</em>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
