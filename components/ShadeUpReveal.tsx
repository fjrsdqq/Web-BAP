'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ShadeUpRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function ShadeUpReveal({
  children,
  delay = 0,
  className = '',
}: ShadeUpRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px 0px',
  })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Content layer — fades + slides up */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{
          duration: 0.65,
          delay: delay + 0.1,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
      >
        {children}
      </motion.div>

      {/* Dark shade overlay — wipes upward to reveal */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 bg-navy"
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{
          duration: 0.75,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ transformOrigin: 'bottom' }}
      />
    </div>
  )
}
