import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Facebook, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Services', href: '#layanan' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Us', href: '#keunggulan' },
  { label: 'Contact', href: '#kontak' },
]

const serviceLinks = [
  'Building Construction',
  'Renovation & Retrofit',
  'Interior Design',
  'Project Management',
  'Property Development',
  'Technical Consulting',
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

const contactInfo = [
  { icon: MapPin, text: 'Jl. Tanah Manisan No.25E, RT.3/RW.6,\nCipinang Cempedak, Kec. Jatinegara,\nJakarta Timur 13340' },
  { icon: Phone, text: '+62 823-1380-8775' },
  { icon: Mail, text: 'bataviaasiaproject@gmail.com' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="container-section py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/LOGO.png"
                alt="Batavia Asia Project"
                width={100}
                height={100}
                className="object-contain brightness-0 invert"
              />
              <div className="leading-tight">
                <div className="font-heading font-bold text-white tracking-wide">
                  BATAVIA ASIA
                </div>
                <div className="font-body text-white/50 text-xs tracking-[0.15em] uppercase">
                  Project
                </div>
              </div>
            </div>

            <p className="font-body text-white/55 text-sm leading-relaxed mb-6">
              Your trusted partner in construction, project management, and
              property development to international standards since 2012.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-gold flex items-center
                             justify-center transition-colors duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-base">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/55 hover:text-gold
                               transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-gold opacity-0 group-hover:opacity-100
                                 -translate-x-1 group-hover:translate-x-0
                                 transition-all duration-200 shrink-0"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-base">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#layanan"
                    className="font-body text-sm text-white/55 hover:text-gold
                               transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-gold opacity-0 group-hover:opacity-100
                                 -translate-x-1 group-hover:translate-x-0
                                 transition-all duration-200 shrink-0"
                    />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-base">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={14} className="text-gold" />
                  </div>
                  <span className="font-body text-sm text-white/55 leading-relaxed whitespace-pre-line">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Working hours */}
            <div className="mt-6 p-4 bg-white/5 border border-white/10">
              <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-2">
                Office Hours
              </p>
              <p className="font-body text-sm text-white/70">
                Monday – Friday: 08:00 – 17:00
              </p>
              <p className="font-body text-sm text-white/70">
                Saturday: 09:00 – 13:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-section py-5 flex flex-col sm:flex-row
                        justify-between items-center gap-3">
          <p className="font-body text-xs text-white/40">
            © {currentYear} PT Batavia Asia Project. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms & Conditions'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
