'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  label: string
  sublabel: string
}

const stats: Stat[] = [
  { value: 3, suffix: '', label: 'Projects Completed', sublabel: 'Across various scales' },
]

function useCounter(end: number, duration: number, isActive: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [end, duration, isActive])

  return count
}

function StatCard({ stat, isActive }: { stat: Stat; isActive: boolean }) {
  const count = useCounter(stat.value, 2200, isActive)

  return (
    <div className="text-center px-4 py-8 border-b border-white/10 lg:border-b-0 lg:border-r last:border-r-0">
      <div className="font-heading text-5xl lg:text-6xl font-bold text-gold mb-2 tabular-nums">
        {count}
        {stat.suffix}
      </div>
      <div className="font-heading text-white text-lg font-semibold mb-1">
        {stat.label}
      </div>
      <div className="font-body text-white/50 text-xs">
        {stat.sublabel}
      </div>
    </div>
  )
}

function VisitorCard({ isActive }: { isActive: boolean }) {
  const [visitorCount, setVisitorCount] = useState<number>(0)
  const [animatedCount, setAnimatedCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const registered = useRef(false)

  // Register visit once per session + poll every 30s for real-time updates
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

    // Poll every 30 seconds for real-time updates
    const interval = setInterval(() => fetchCount('GET'), 30_000)
    return () => clearInterval(interval)
  }, [])

  // Animate count when section comes into view (once)
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

  // After animation: keep display in sync with live count
  useEffect(() => {
    if (hasAnimated) setAnimatedCount(visitorCount)
  }, [visitorCount, hasAnimated])

  return (
    <div className="text-center px-4 py-8 border-b border-white/10 lg:border-b-0 lg:border-r last:border-r-0">
      <div className="font-heading text-5xl lg:text-6xl font-bold text-gold mb-2 tabular-nums">
        {animatedCount > 0 ? animatedCount.toLocaleString() : '—'}
      </div>
      <div className="font-heading text-white text-lg font-semibold mb-1">
        Website Visitors
      </div>
      <div className="font-body text-white/50 text-xs">
        Total visitors to our site
      </div>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-navy section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2
                      w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2
                      w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-section relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">The Numbers Speak</p>
          <h2 className="section-title-white">
            A Track Record We Are{' '}
            <span className="text-gold">Proud Of</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2
                     border border-white/10 divide-x-0 sm:divide-x divide-white/10"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isActive={isInView} />
          ))}
          <VisitorCard isActive={isInView} />
        </div>
      </div>
    </section>
  )
}
