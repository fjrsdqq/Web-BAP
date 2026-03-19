'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown, Building2, Users, Star, FileText, Wrench, Zap, Layers, PaintBucket } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.95 },
  visible: { opacity: 1, y: 0, scaleY: 1 },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const { lang, setLang } = useLang()

  const t = (en: string, id: string) => lang === 'en' ? en : id

  const aboutItems = [
    { label: t('Company Profile', 'Profil Perusahaan'), href: '/company-profile', icon: FileText },
    { label: t('Company Structure', 'Struktur Organisasi'), href: '/company-structure', icon: Users },
    { label: t('Company Values', 'Nilai Perusahaan'), href: '/company-values', icon: Star },
    { label: t('Company Policy', 'Kebijakan Perusahaan'), href: '/company-policy', icon: FileText },
  ]

  const serviceItems = [
    { label: t('Building Construction', 'Konstruksi Gedung'), href: '#layanan', tab: 'building', icon: Building2 },
    { label: t('MEP & Building Systems', 'MEP & Sistem Bangunan'), href: '#layanan', tab: 'mep', icon: Zap },
    { label: t('Finishing & Interior Works', 'Finishing & Interior'), href: '#layanan', tab: 'finishing', icon: PaintBucket },
    { label: t('Repair & Maintenance', 'Perbaikan & Perawatan'), href: '#layanan', tab: 'repair', icon: Wrench },
    { label: t('Civil & Road Works', 'Pekerjaan Sipil & Jalan'), href: '#layanan', tab: 'building', icon: Layers },
  ]

  const simpleLinks = [
    { label: t('Portfolio', 'Portfolio'), href: '#portfolio' },
    { label: t('Why Us', 'Mengapa Kami'), href: '#keunggulan' },
    { label: t('Career', 'Karir'), href: '#career' },
    { label: t('Contact', 'Kontak'), href: '#kontak' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }

  const handleServiceTabClick = (tab: string) => {
    handleLinkClick()
    window.dispatchEvent(new CustomEvent('service-tab-change', { detail: tab }))
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-section h-[80px] lg:h-[120px] flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="flex items-center group shrink-0"
        >
          <Image
            src="/images/BATAVIA_ASIA_PROJECT_.png"
            alt="PT Batavia Asia Project"
            width={536}
            height={466}
            className="h-[60px] lg:w-[150px] lg:h-[100px] w-auto object-contain
                       drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]
                       group-hover:drop-shadow-[0_0_16px_rgba(201,168,76,0.45)]
                       group-hover:scale-[1.03] transition-all duration-300 ease-out"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">

          {/* About Us Dropdown */}
          <DropdownItem
            label={t('About Us', 'Tentang Kami')}
            id="about"
            items={aboutItems}
            active={activeDropdown === 'about'}
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
            onLinkClick={handleLinkClick}
          />

          {/* Services Dropdown */}
          <DropdownItem
            label={t('Services', 'Layanan')}
            id="services"
            items={serviceItems}
            active={activeDropdown === 'services'}
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
            onLinkClick={handleLinkClick}
            onItemClick={handleServiceTabClick}
          />

          {/* Simple links */}
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="font-body text-sm font-medium text-white/80 hover:text-gold
                         transition-colors duration-200 relative group px-4 py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold scale-x-0
                               group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Language Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center border border-white/30 overflow-hidden text-xs font-bold">
            <button
              onClick={() => setLang('id')}
              className={`px-2.5 py-1.5 transition-all duration-200 ${
                lang === 'id' ? 'bg-gold text-navy' : 'text-white/60 hover:text-white'
              }`}
            >
              ID
            </button>
            <div className="w-px h-3.5 bg-white/20" />
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1.5 transition-all duration-200 ${
                lang === 'en' ? 'bg-gold text-navy' : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="https://wa.me/6282313808775"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5"
          >
            <Phone size={15} />
            {t('Contact Us', 'Hubungi Kami')}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 hover:text-gold transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-navy-dark border-t border-white/10"
          >
            <div className="container-section py-5 flex flex-col">

              {/* About Us accordion */}
              <MobileAccordion
                label={t('About Us', 'Tentang Kami')}
                id="about"
                items={aboutItems}
                expanded={mobileExpanded === 'about'}
                onToggle={() => setMobileExpanded(mobileExpanded === 'about' ? null : 'about')}
                onLinkClick={handleLinkClick}
              />

              {/* Services accordion */}
              <MobileAccordion
                label={t('Services', 'Layanan')}
                id="services"
                items={serviceItems}
                expanded={mobileExpanded === 'services'}
                onToggle={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                onLinkClick={handleLinkClick}
                onItemClick={handleServiceTabClick}
              />

              {/* Simple links */}
              {simpleLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block font-body font-medium text-white/80 hover:text-gold
                               transition-colors py-3 border-b border-white/10"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                <span className="font-body text-xs text-white/50">Language:</span>
                <div className="flex items-center border border-white/30 overflow-hidden text-xs font-bold">
                  <button
                    onClick={() => { setLang('id'); handleLinkClick() }}
                    className={`px-3 py-1.5 transition-all duration-200 ${
                      lang === 'id' ? 'bg-gold text-navy' : 'text-white/60'
                    }`}
                  >
                    ID
                  </button>
                  <div className="w-px h-3.5 bg-white/20" />
                  <button
                    onClick={() => { setLang('en'); handleLinkClick() }}
                    className={`px-3 py-1.5 transition-all duration-200 ${
                      lang === 'en' ? 'bg-gold text-navy' : 'text-white/60'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <a
                href="https://wa.me/6282313808775"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 justify-center text-sm"
                onClick={handleLinkClick}
              >
                <Phone size={15} />
                {t('Contact Us', 'Hubungi Kami')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ── Desktop Dropdown ── */
interface DropdownItemProps {
  label: string
  id: string
  items: { label: string; href: string; tab?: string; icon: React.ElementType }[]
  active: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onLinkClick: () => void
  onItemClick?: (tab: string) => void
}

function DropdownItem({ label, items, active, onMouseEnter, onMouseLeave, onLinkClick, onItemClick }: DropdownItemProps) {
  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        className={`flex items-center gap-1.5 font-body text-sm font-medium px-4 py-2
                    transition-colors duration-200 relative group
                    ${active ? 'text-gold' : 'text-white/80 hover:text-gold'}`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${active ? 'rotate-180 text-gold' : ''}`}
        />
        <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gold transition-transform duration-300 origin-left
                          ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute top-full left-0 mt-2 w-56 bg-navy-dark border border-white/10
                       shadow-2xl overflow-hidden z-50"
          >
            <div className="h-0.5 bg-gradient-gold w-full" />
            <ul className="py-2">
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        if (item.tab && onItemClick) onItemClick(item.tab)
                        else onLinkClick()
                      }}
                      className="flex items-center gap-3 px-5 py-3 font-body text-sm
                                 text-white/70 hover:text-white hover:bg-white/5
                                 transition-all duration-150 group/item"
                    >
                      <Icon
                        size={15}
                        className="text-gold/60 group-hover/item:text-gold shrink-0 transition-colors"
                      />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Mobile Accordion ── */
interface MobileAccordionProps {
  label: string
  id: string
  items: { label: string; href: string; tab?: string; icon: React.ElementType }[]
  expanded: boolean
  onToggle: () => void
  onLinkClick: () => void
  onItemClick?: (tab: string) => void
}

function MobileAccordion({ label, items, expanded, onToggle, onLinkClick, onItemClick }: MobileAccordionProps) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between font-body font-medium
                   text-white/80 hover:text-gold transition-colors py-3"
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${expanded ? 'rotate-180 text-gold' : ''}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="pb-2 pl-3 space-y-0.5">
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        if (item.tab && onItemClick) onItemClick(item.tab)
                        else onLinkClick()
                      }}
                      className="flex items-center gap-3 py-2.5 font-body text-sm
                                 text-white/60 hover:text-gold transition-colors"
                    >
                      <Icon size={14} className="text-gold/50 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
