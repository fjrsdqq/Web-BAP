'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'

function VisitorCard({ isActive }: { isActive: boolean }) {
  const [visitorCount, setVisitorCount] = useState<number>(0)
  const [animatedCount, setAnimatedCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const registered = useRef(false)
  const { lang } = useLang()
  const t = (en: string, id: string) => lang === 'en' ? en : id

  useEffect(() => {
    const fetchCount = (method: 'GET' | 'POST') =>
      fetch('/api/visitors', { method, cache: 'no-store' })
        .then((r) => r.json())
        .then((data: { count: number }) => setVisitorCount(data.count))
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

  useEffect(() => {
    if (!isActive || visitorCount === 0 || hasAnimated) return
    setHasAnimated(true)

    let startTime: number | null = null
    const duration = 2200
    const start = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setAnimatedCount(Math.floor(start + eased * (visitorCount - start)))
      if (progress < 1) requestAnimationFrame(step)
      else setAnimatedCount(visitorCount)
    }

    requestAnimationFrame(step)
  }, [isActive, visitorCount, hasAnimated])

  useEffect(() => {
    if (hasAnimated) setAnimatedCount(visitorCount)
  }, [visitorCount, hasAnimated])

  return (
    <div className="text-center px-4 py-8 border-b border-white/10 lg:border-b-0 lg:border-r last:border-r-0">
      <div className="font-heading text-5xl lg:text-6xl font-bold text-gold mb-2 tabular-nums">
        {animatedCount > 0 ? animatedCount.toLocaleString() : '—'}
      </div>
      <div className="font-heading text-white text-lg font-semibold mb-1">
        {t('Website Visitors', 'Pengunjung Website')}
      </div>
      <div className="font-body text-white/50 text-xs">
        {t('Total visitors to our site', 'Total pengunjung situs kami')}
      </div>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const t = (en: string, id: string) => lang === 'en' ? en : id

  return (
    <section className="bg-navy section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2
                      w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2
                      w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-section relative z-10">
        <div className="text-center mb-16">
          <p className="section-label mb-3">{t('The Numbers Speak', 'Angka Berbicara')}</p>
          <h2 className="section-title-white">
            {t('A Track Record We Are', 'Rekam Jejak yang Membuat Kami')}{' '}
            <span className="text-gold">{t('Proud Of', 'Bangga')}</span>
          </h2>
        </div>

        <div ref={ref} className="border border-white/10 max-w-sm mx-auto">
          <VisitorCard isActive={isInView} />
        </div>
      </div>
    </section>
  )
}
