'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, X, Target, Rocket, Star } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1.0] as number[] },
})

const missions = [
  { title: 'Quality & Timeliness', desc: 'Delivering construction services with the highest workmanship standards, efficiency, and on-time handover.' },
  { title: 'Health, Safety & Environment', desc: 'Enforcing strict HSE standards on every project to ensure a safe working environment and Zero Accident.' },
  { title: 'Professional Governance', desc: 'Leading with transparent, high-integrity project management to maintain client trust and operational excellence.' },
  { title: 'Client Satisfaction', desc: 'Building long-term strategic partnerships with clients, vendors, and sub-contractors based on mutual benefit and proactive communication.' },
  { title: 'Continuous Innovation', desc: 'Constantly adapting to advances in technology, materials, and construction methods to deliver the most effective, value-added solutions.' },
]

const coreValues = [
  { letter: 'B', word: 'Brilliance', desc: 'Working with intelligence and delivering outstanding results in every project.' },
  { letter: 'U', word: 'Unity', desc: 'Prioritizing solid teamwork between management and field experts.' },
  { letter: 'I', word: 'Integrity', desc: 'Upholding honesty and business ethics in every contract and commitment.' },
  { letter: 'L', word: 'Loyalty', desc: 'Fully committed to agreements and unwavering dedication to client satisfaction.' },
  { letter: 'D', word: 'Dedication', desc: 'Devoted to completing every project within budget and to technical specifications.' },
]

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const registered = useRef(false)

  useEffect(() => {
    const fetchCount = (method: 'GET' | 'POST') =>
      fetch('/api/visitors', { method, cache: 'no-store' })
        .then((r) => r.json())
        .then((d: { count: number }) => setVisitorCount(d.count))
        .catch(() => {})

    if (!registered.current) {
      registered.current = true
      const alreadyVisited = sessionStorage.getItem('bap_visited')
      fetchCount(alreadyVisited ? 'GET' : 'POST').then(() => {
        if (!alreadyVisited) sessionStorage.setItem('bap_visited', '1')
      })
    }

    const interval = setInterval(() => fetchCount('GET'), 30_000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section
        id="hero"
        className="relative h-screen min-h-[600px] max-h-[950px] overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
          alt="PT Batavia Asia Project — Professional Construction"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Directional gradient overlay */}
        <div className="absolute inset-0 overlay-navy" />

        {/* Decorative gold accent line */}
        <motion.div
          className="absolute left-0 top-0 h-full w-1 bg-gold"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: 'top' }}
        />

        {/* Content */}
        <div className="relative z-10 h-full container-section flex items-center">
          <div className="max-w-2xl">
            {/* Label */}
            <motion.p {...fadeUp(0.2)} className="section-label mb-4">
              Professional Contractor & Developer
            </motion.p>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.4)}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Building Your Vision{' '}
              <br />
              <span className="text-gold">With Quality</span>
            </motion.h1>

            {/* Subheading — condensed vision */}
            <motion.p
              {...fadeUp(0.55)}
              className="font-body text-white/75 text-base lg:text-lg leading-relaxed mb-3 max-w-xl"
            >
              A nationally trusted construction company — delivering excellence,
              innovation, and integrity across every infrastructure and property project.
            </motion.p>

            {/* See More link */}
            <motion.div {...fadeUp(0.62)} className="mb-8">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 font-body text-sm text-gold
                           hover:text-gold-light underline underline-offset-4
                           decoration-gold/40 hover:decoration-gold
                           transition-all duration-200"
              >
                View Vision, Mission & Core Values
                <ArrowRight size={13} />
              </button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-4">
              <a href="#portfolio" className="btn-primary">
                View Portfolio
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Stats mini */}
            <motion.div
              {...fadeUp(0.85)}
              className="flex gap-8 mt-10 pt-8 border-t border-white/20"
            >
              <div>
                <div className="font-heading text-2xl font-bold text-gold">3</div>
                <div className="font-body text-white/60 text-xs mt-0.5">Projects Completed</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-gold">
                  {visitorCount !== null ? visitorCount.toLocaleString() : '—'}
                </div>
                <div className="font-body text-white/60 text-xs mt-0.5">Website Visitors</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="font-body text-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown size={20} className="text-gold animate-bounce" />
        </motion.div>
      </section>

      {/* Modal — Vision, Mission & Core Values */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-2xl
                         bg-navy overflow-y-auto shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-navy border-b border-white/10 px-8 py-5
                              flex items-center justify-between z-10">
                <div>
                  <p className="section-label text-xs">Company Profile</p>
                  <h3 className="font-heading text-white text-xl mt-0.5">
                    PT Batavia Asia Project
                  </h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-9 h-9 bg-white/10 hover:bg-gold flex items-center
                             justify-center transition-colors duration-200"
                  aria-label="Close"
                >
                  <X size={16} className="text-white" />
                </button>
              </div>

              <div className="px-8 py-8 space-y-10">

                {/* Vision */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-gold/10 flex items-center justify-center shrink-0">
                      <Target size={18} className="text-gold" />
                    </div>
                    <h4 className="font-heading text-white text-xl">Vision</h4>
                  </div>
                  <div className="border-l-2 border-gold pl-5">
                    <p className="font-body text-white/70 leading-relaxed text-sm">
                      To become a nationally recognized construction company that is
                      superior, trusted, and innovative — serving as the primary partner
                      in delivering high-quality infrastructure and property development.
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-gold/10 flex items-center justify-center shrink-0">
                      <Rocket size={18} className="text-gold" />
                    </div>
                    <h4 className="font-heading text-white text-xl">Mission</h4>
                  </div>
                  <ul className="space-y-4">
                    {missions.map((m, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="w-6 h-6 rounded-full bg-gold/15 text-gold
                                         font-heading font-bold text-xs flex items-center
                                         justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-body font-semibold text-white text-sm mb-0.5">
                            {m.title}
                          </p>
                          <p className="font-body text-white/60 text-sm leading-relaxed">
                            {m.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Values */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-gold/10 flex items-center justify-center shrink-0">
                      <Star size={18} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-heading text-white text-xl">Core Values</h4>
                      <p className="font-body text-white/40 text-xs mt-0.5 tracking-widest uppercase">
                        B · U · I · L · D
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {coreValues.map((cv) => (
                      <div
                        key={cv.letter}
                        className="flex gap-4 p-4 bg-white/5 border border-white/10
                                   hover:border-gold/30 transition-colors duration-200"
                      >
                        <div className="w-10 h-10 bg-gold flex items-center justify-center
                                        font-heading font-bold text-navy text-lg shrink-0">
                          {cv.letter}
                        </div>
                        <div>
                          <p className="font-heading text-white font-semibold text-base">
                            {cv.word}
                          </p>
                          <p className="font-body text-white/55 text-sm leading-relaxed mt-0.5">
                            {cv.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
