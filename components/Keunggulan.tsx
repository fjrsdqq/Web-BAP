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

interface Advantage {
  icon: LucideIcon
  title: string
  description: string
}

const advantages: Advantage[] = [
  {
    icon: Shield,
    title: 'Full Warranty',
    description: 'Every project comes with a 1–5 year workmanship and materials warranty.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Our projects are completed on schedule, every time.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'ISO 9001:2015 certified for a world-class quality management system.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'More than 200 experienced specialists in civil engineering, architecture, and MEP.',
  },
  {
    icon: Layers,
    title: 'Modern Technology',
    description: 'We utilize BIM (Building Information Modeling) and cutting-edge construction equipment.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assured',
    description: 'Rigorous quality control at every project phase with regular inspections.',
  },
]

export default function Keunggulan() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
              Why Choose Us
            </motion.p>
            <motion.h2
              className="section-title mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The Edge That{' '}
              <span className="text-gold">Sets Us Apart</span>
            </motion.h2>
            <motion.p
              className="font-body text-gray-500 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              PT Batavia Asia Project is built on a foundation of quality, integrity,
              and innovation. We don&apos;t just build structures — we create lasting spaces
              that deliver the best investment value for our clients.
            </motion.p>

            {/* Decorative gold blockquote */}
            <motion.blockquote
              className="border-l-4 border-gold pl-6 py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <p className="font-heading text-navy text-lg italic leading-relaxed">
                &ldquo;Every detail we deliver reflects our unwavering
                dedication to excellence.&rdquo;
              </p>
              <footer className="font-body text-sm text-gray-400 mt-2">
                — Hammam Rhofi, President Director, PT Batavia Asia Project
              </footer>
            </motion.blockquote>
          </div>

          {/* Right — Advantages grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((adv, index) => (
              <AdvantageCard key={adv.title} adv={adv} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AdvantageCard({
  adv,
  index,
  isInView,
}: {
  adv: Advantage
  index: number
  isInView: boolean
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
      <div
        className="w-11 h-11 bg-gold/10 group-hover:bg-gold/20
                   flex items-center justify-center shrink-0
                   transition-colors duration-300"
      >
        <Icon className="text-gold w-5 h-5" strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="font-heading font-semibold text-navy text-base mb-1">
          {adv.title}
        </h4>
        <p className="font-body text-gray-500 text-sm leading-relaxed">
          {adv.description}
        </p>
      </div>
    </motion.div>
  )
}
