'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2, Wrench, Palette, ClipboardList, Home, Zap,
  Droplets, Flame, Wind, ArrowUpDown, Square, PaintBucket,
  Layers, Brush, Settings, ArrowRight, type LucideIcon,
} from 'lucide-react'
import ShadeUpReveal from './ShadeUpReveal'

interface Service {
  code: string
  icon: LucideIcon
  title: string
  description: string
  image: string
  local?: boolean
}

interface Category {
  id: string
  label: string
  services: Service[]
}

const categories: Category[] = [
  {
    id: 'building',
    label: 'Building Construction',
    services: [
      {
        code: '41011',
        icon: Home,
        title: 'Residential Construction',
        description:
          'Construction of houses, townhouses, and multi-storey apartment buildings with high safety and comfort standards.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '41012',
        icon: Building2,
        title: 'Office Building Construction',
        description:
          'Development of private and government office buildings — from low-rise to high-rise — with modern structural systems.',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '41013',
        icon: Settings,
        title: 'Industrial Building Construction',
        description:
          'Construction of factories, warehouses, and workshops designed for heavy operational loads and industrial-grade durability.',
        image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '41014',
        icon: ClipboardList,
        title: 'Commercial Building Construction',
        description:
          'Development of malls, shophouses, and markets built to maximize commercial potential and foot traffic flow.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '41015',
        icon: Building2,
        title: 'Healthcare Facility Construction',
        description:
          'Construction of hospitals, clinics, and laboratories that comply with health regulations and sterile environment standards.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '41019',
        icon: Building2,
        title: 'Institutional Building Construction',
        description:
          'Construction of places of worship, schools, hotels, and other public facilities with tailored design and function.',
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '42101',
        icon: Layers,
        title: 'Civil & Road Construction',
        description:
          'Civil works including roads, bridges, drainage channels, and supporting infrastructure for residential and industrial areas.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'mep',
    label: 'MEP & Building Systems',
    services: [
      {
        code: '43211',
        icon: Zap,
        title: 'Electrical Installation',
        description:
          'Complete electrical system installation: cabling, switchboards, distribution panels, lighting, and power outlets to SNI standards.',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '43221',
        icon: Droplets,
        title: 'Plumbing, Heating & HVAC',
        description:
          'Installation of clean and waste water piping, water heater systems, and central air conditioning (HVAC) for all building types.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '43222',
        icon: Flame,
        title: 'Gas Pipeline Installation',
        description:
          'Safe installation of gas distribution piping for commercial kitchens and industrial facilities, following strict safety codes.',
        image: '/images/our service/gas pipeline.jpg',
        local: true,
      },
      {
        code: '43224',
        icon: Wind,
        title: 'Drainage System Installation',
        description:
          'Design and installation of indoor drainage and wastewater disposal systems to prevent flooding and maintain sanitation.',
        image: '/images/our service/drainage.png',
        local: true,
      },
      {
        code: '43291',
        icon: ArrowUpDown,
        title: 'Elevator & Escalator Installation',
        description:
          'Supply, installation, and commissioning of passenger elevators, cargo lifts, and escalators with certified safety systems.',
        image: '/images/our service/elevator.png',
        local: true,
      },
    ],
  },
  {
    id: 'finishing',
    label: 'Finishing & Interior Works',
    services: [
      {
        code: '43301',
        icon: Square,
        title: 'Glass & Aluminum Works',
        description:
          'Professional installation of glass windows, aluminum doors, glass partitions, and curtain wall facades for modern buildings.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '43302',
        icon: Layers,
        title: 'Floor, Wall & Ceiling Finishes',
        description:
          'Installation of ceramic and granite tiles, gypsum board ceilings, wall cladding panels, and architectural wallcoverings.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '43303',
        icon: PaintBucket,
        title: 'Painting & Coating Works',
        description:
          'Interior and exterior wall painting, decorative finishes, epoxy floor coating, and weatherproof protective coatings.',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '43304',
        icon: Palette,
        title: 'Interior Decoration',
        description:
          'Comprehensive interior fit-out and decoration: space planning, built-in furniture installation, and ambiance styling.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '43305',
        icon: Brush,
        title: 'Exterior Decoration',
        description:
          'Facade beautification, exterior cladding, landscape hardscaping, and front elevation finishing for a strong first impression.',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'repair',
    label: 'Repair & Maintenance',
    services: [
      {
        code: '33121',
        icon: Wrench,
        title: 'General Mechanical Repair',
        description:
          'Repair and servicing of mechanical equipment, building machinery, pumps, compressors, and industrial support systems.',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '33141',
        icon: Zap,
        title: 'Electrical Equipment Repair',
        description:
          'Repair and reconditioning of transformers, electric motors, generators, and power regulation equipment.',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
      },
      {
        code: '33149',
        icon: Settings,
        title: 'Other Electrical Component Repair',
        description:
          'Repair of lighting fixtures, electrical accessories, and other electrical components not classified elsewhere.',
        image: '/images/our service/male electrican.jpg',
        local: true,
      },
    ],
  },
]

export default function OurService() {
  const [activeTab, setActiveTab] = useState('building')

  const activeCategory = categories.find((c) => c.id === activeTab)!

  return (
    <section id="layanan" className="bg-white section-padding">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-label mb-3">Our Services</p>
          <h2 className="section-title mb-5">
            Comprehensive Construction{' '}
            <span className="text-gold">Solutions</span>
          </h2>
          <p className="font-body text-gray-500 leading-relaxed">
            We provide end-to-end construction and project management services
            tailored to the unique needs of every client.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`font-body text-sm font-medium px-5 py-2.5 border transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-navy/70 border-light-gray hover:border-navy hover:text-navy'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {activeCategory.services.map((service, index) => (
              <ShadeUpReveal key={service.code} delay={index * 0.06}>
                <ServiceCard service={service} />
              </ShadeUpReveal>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Total count */}
        <p className="text-center font-body text-gray-400 text-sm mt-10">
          Showing{' '}
          <span className="text-navy font-semibold">{activeCategory.services.length}</span>{' '}
          of{' '}
          <span className="text-navy font-semibold">
            {categories.reduce((acc, c) => acc + c.services.length, 0)}
          </span>{' '}
          total services
        </p>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <div
      className="group bg-white border border-light-gray hover:border-gold
                 hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300 cursor-default h-full flex flex-col overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          unoptimized={!!service.local}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-navy/35 group-hover:bg-navy/15 transition-colors duration-500" />

        {/* KBLI code badge */}
        <div className="absolute top-3 right-3 bg-gold/90 px-2 py-0.5">
          <span className="font-body text-white text-[10px] font-bold tracking-wider">
            {service.code}
          </span>
        </div>

        {/* Icon badge */}
        <div
          className="absolute bottom-0 left-0 w-11 h-11 bg-navy group-hover:bg-gold
                     flex items-center justify-center transition-colors duration-300"
        >
          <Icon
            className="text-gold group-hover:text-navy w-5 h-5 transition-colors duration-300"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="w-6 h-0.5 bg-gold mb-3 group-hover:w-12 transition-all duration-500" />
        <h3 className="font-heading text-base text-navy mb-2 leading-snug">{service.title}</h3>
        <p className="font-body text-gray-500 leading-relaxed text-xs flex-1">
          {service.description}
        </p>
        <div
          className="mt-4 flex items-center gap-1.5 text-gold font-body font-semibold
                     text-xs group-hover:gap-2.5 transition-all duration-300"
        >
          Learn More
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  )
}
