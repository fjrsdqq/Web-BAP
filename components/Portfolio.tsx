'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface PortfolioItem {
  id: number
  title: string
  caption?: string
  location: string
  image: string
  detailImages?: string[]
  local?: boolean
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Batavia Asia Project',
    caption: 'Home Renovation',
    location: 'Jakarta',
    image: '/images/portfolio/Projek 1/image1.jpg',
    detailImages: [
      '/images/portfolio/Projek 1/image2.jpg',
      '/images/portfolio/Projek 1/image3.jpeg',
    ],
    local: true,
  },
  {
    id: 9,
    title: 'Projek 3',
    caption: 'We are in the initial phase of the chiller pipe replacement.',
    location: 'Jakarta',
    image: '/images/portfolio/Projek 3/Projek 3.jpeg',
    detailImages: [
      '/images/portfolio/Projek 3/Projek 4.jpeg',
      '/images/portfolio/Projek 3/Projek 5.jpeg',
      '/images/portfolio/Projek 3/Projek 6.jpeg',
      '/images/portfolio/Projek 3/Projek 7.jpeg',
      '/images/portfolio/Projek 3/Projek 8.jpeg',
      '/images/portfolio/Projek 3/Projek 9.jpeg',
      '/images/portfolio/Projek 3/Projek 10.jpeg',
    ],
    local: true,
  },
  {
    id: 8,
    title: 'Projek 2',
    caption: 'Exposed Plumbing Installation',
    location: 'Jakarta',
    image: '/images/portfolio/Projek 2/Projek 1.jpeg',
    detailImages: [
      '/images/portfolio/Projek 2/Projek 2.jpeg',
      '/images/portfolio/Projek 2/Projek 3.jpeg',
      '/images/portfolio/Projek 2/Projek 4.jpeg',
      '/images/portfolio/Projek 2/Projek 5.jpeg',
      '/images/portfolio/Projek 2/Projek 6.jpeg',
      '/images/portfolio/Projek 2/Projek 7.jpeg',
    ],
    local: true,
  },
  {
    id: 2,
    title: 'Sudirman Office Tower',
    location: 'Central Jakarta',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1031&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Emerald Cluster Housing',
    location: 'Tangerang',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Grand Batavia Hotel Renovation',
    location: 'West Jakarta',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1032&auto=format&fit=crop',
  },
]

interface LightboxState {
  item: PortfolioItem
  imageIndex: number
}

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const open = (item: PortfolioItem) => setLightbox({ item, imageIndex: 0 })
  const close = () => setLightbox(null)

  const imgs = lightbox
    ? [lightbox.item.image, ...(lightbox.item.detailImages ?? [])]
    : []
  const goTo = (i: number) => setLightbox((prev) => prev ? { ...prev, imageIndex: i } : null)
  const prev = () => goTo((lightbox!.imageIndex - 1 + imgs.length) % imgs.length)
  const next = () => goTo((lightbox!.imageIndex + 1) % imgs.length)

  return (
    <section id="portfolio" className="bg-offwhite section-padding">
      <div className="container-section">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-label mb-3">Our Portfolio</p>
          <h2 className="section-title mb-5">
            Projects We Are{' '}
            <span className="text-gold">Proud Of</span>
          </h2>
          <p className="font-body text-gray-500 leading-relaxed">
            Our track record speaks for itself — projects completed with the
            highest quality and unwavering client satisfaction.
          </p>
        </div>

        {/* Grid — semua proyek tanpa filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative overflow-hidden group cursor-pointer h-64 md:h-72"
              onClick={() => open(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized={!!item.local}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Zoom overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40
                              transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn size={22} className="text-white" />
                </div>
              </div>

              {/* Badge foto detail */}
              {item.detailImages && item.detailImages.length > 0 && (
                <div className="absolute top-3 right-3 z-10 bg-black/60 text-white
                                font-body text-xs px-2 py-1 flex items-center gap-1">
                  <ZoomIn size={10} />
                  {item.detailImages.length} photos
                </div>
              )}

              {/* Hover info */}
              <div className="absolute inset-0 flex items-end pointer-events-none">
                <div className="w-full bg-gradient-to-t from-black/70 to-transparent
                                px-5 py-4 translate-y-2 opacity-0 group-hover:translate-y-0
                                group-hover:opacity-100 transition-all duration-300">
                  <p className="font-body text-gold text-xs uppercase tracking-widest mb-0.5">
                    {item.location}
                  </p>
                  <h3 className="font-heading text-white text-base leading-tight">
                    {item.caption ?? item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Lightbox ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col
                       items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center
                         bg-white/10 hover:bg-white/20 text-white/70 hover:text-white
                         transition-colors z-20"
              onClick={close}
            >
              <X size={20} />
            </button>

            {/* Main image */}
            <div
              className="relative flex items-center justify-center w-full px-16"
              onClick={(e) => e.stopPropagation()}
            >
              {imgs.length > 1 && (
                <button
                  className="absolute left-4 w-10 h-10 flex items-center justify-center
                             bg-white/10 hover:bg-white/20 text-white/70 hover:text-white
                             transition-colors z-10"
                  onClick={prev}
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={lightbox.imageIndex}
                  className="relative w-full max-w-4xl aspect-video"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={imgs[lightbox.imageIndex]}
                    alt={`${lightbox.item.title} ${lightbox.imageIndex + 1}`}
                    fill
                    unoptimized={!!lightbox.item.local}
                    className="object-contain"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>

              {imgs.length > 1 && (
                <button
                  className="absolute right-4 w-10 h-10 flex items-center justify-center
                             bg-white/10 hover:bg-white/20 text-white/70 hover:text-white
                             transition-colors z-10"
                  onClick={next}
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Thumbnail strip */}
            {imgs.length > 1 && (
              <div
                className="flex gap-2 mt-5"
                onClick={(e) => e.stopPropagation()}
              >
                {imgs.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`relative w-16 h-11 overflow-hidden border-2 transition-all duration-200 ${
                      i === lightbox.imageIndex
                        ? 'border-gold opacity-100'
                        : 'border-white/20 opacity-50 hover:opacity-80'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Thumb ${i + 1}`}
                      fill
                      unoptimized={!!lightbox.item.local}
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Caption */}
            {lightbox.item.caption && (
              <p className="mt-3 font-body text-white/70 text-sm text-center px-6">
                {lightbox.item.caption}
              </p>
            )}

            {imgs.length > 1 && (
              <p className="mt-2 font-body text-white/40 text-xs">
                {lightbox.imageIndex + 1} / {imgs.length}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
