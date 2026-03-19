'use client'

import {
  Shield,
  Clock,
  Award,
  Users,
  Layers,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'

interface Advantage {
  icon: LucideIcon
  title: { en: string; id: string }
  description: { en: string; id: string }
}

const advantages: Advantage[] = [
  {
    icon: Shield,
    title: { en: 'Full Warranty', id: 'Garansi Penuh' },
    description: {
      en: 'Every project comes with a 1–5 year workmanship and materials warranty.',
      id: 'Setiap proyek dilengkapi garansi pengerjaan dan material selama 1–5 tahun.',
    },
  },
  {
    icon: Clock,
    title: { en: 'On-Time Delivery', id: 'Tepat Waktu' },
    description: {
      en: 'Our projects are completed on schedule, every time.',
      id: 'Proyek kami diselesaikan sesuai jadwal, setiap saat.',
    },
  },
  {
    icon: Award,
    title: { en: 'ISO Certified', id: 'Bersertifikat ISO' },
    description: {
      en: 'ISO 9001:2015 certified for a world-class quality management system.',
      id: 'Bersertifikat ISO 9001:2015 untuk sistem manajemen mutu kelas dunia.',
    },
  },
  {
    icon: Users,
    title: { en: 'Professional Team', id: 'Tim Profesional' },
    description: {
      en: 'More than 200 experienced specialists in civil engineering, architecture, and MEP.',
      id: 'Lebih dari 200 spesialis berpengalaman di bidang teknik sipil, arsitektur, dan MEP.',
    },
  },
  {
    icon: Layers,
    title: { en: 'Modern Technology', id: 'Teknologi Modern' },
    description: {
      en: 'We utilize BIM (Building Information Modeling) and cutting-edge construction equipment.',
      id: 'Kami menggunakan BIM (Building Information Modeling) dan peralatan konstruksi mutakhir.',
    },
  },
  {
    icon: CheckCircle,
    title: { en: 'Quality Assured', id: 'Kualitas Terjamin' },
    description: {
      en: 'Rigorous quality control at every project phase with regular inspections.',
      id: 'Kontrol kualitas ketat di setiap fase proyek dengan inspeksi rutin.',
    },
  },
]

export default function Keunggulan() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { lang } = useLang()
  const t = (en: string, id: string) => lang === 'en' ? en : id

  return (
    <section id="keunggulan" className="bg-white section-padding">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text block */}
          <div ref={ref}>
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {t('Why Choose Us', 'Mengapa Pilih Kami')}
            </motion.p>
            <motion.h2
              className="section-title mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('The Edge That', 'Keunggulan yang')}{' '}
              <span className="text-gold">{t('Sets Us Apart', 'Membedakan Kami')}</span>
            </motion.h2>
            <motion.p
              className="font-body text-gray-500 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t(
                "PT Batavia Asia Project is built on a foundation of quality, integrity, and innovation. We don\u2019t just build structures \u2014 we create lasting spaces that deliver the best investment value for our clients.",
                'PT Batavia Asia Project dibangun di atas fondasi kualitas, integritas, dan inovasi. Kami tidak hanya membangun struktur \u2014 kami menciptakan ruang abadi yang memberikan nilai investasi terbaik bagi klien kami.'
              )}
            </motion.p>

            <motion.blockquote
              className="border-l-4 border-gold pl-6 py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <p className="font-heading text-navy text-lg italic leading-relaxed">
                {t(
                  '\u201cEvery detail we deliver reflects our unwavering dedication to excellence.\u201d',
                  '\u201cSetiap detail yang kami hadirkan mencerminkan dedikasi kami yang tak tergoyahkan terhadap keunggulan.\u201d'
                )}
              </p>
              <footer className="font-body text-sm text-gray-400 mt-2">
                — Hammam Rhofi, {t('President Director', 'President Direktur')}, PT Batavia Asia Project
              </footer>
            </motion.blockquote>
          </div>

          {/* Right — Advantages grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((adv, index) => (
              <AdvantageCard key={adv.title.en} adv={adv} index={index} isInView={isInView} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AdvantageCard({
  adv, index, isInView, lang,
}: {
  adv: Advantage; index: number; isInView: boolean; lang: string
}) {
  const Icon = adv.icon
  return (
    <motion.div
      className="flex gap-4 items-start p-5 bg-offwhite hover:bg-navy/5
                 border border-transparent hover:border-gold/20
                 transition-all duration-300 group"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.07 }}
    >
      <div className="w-11 h-11 bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center shrink-0 transition-colors duration-300">
        <Icon className="text-gold w-5 h-5" strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="font-heading font-semibold text-navy text-base mb-1">
          {lang === 'en' ? adv.title.en : adv.title.id}
        </h4>
        <p className="font-body text-gray-500 text-sm leading-relaxed">
          {lang === 'en' ? adv.description.en : adv.description.id}
        </p>
      </div>
    </motion.div>
  )
}
