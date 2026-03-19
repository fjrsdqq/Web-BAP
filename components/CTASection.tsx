'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Mail, ArrowRight, MapPin, Phone } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const t = (en: string, id: string) => lang === 'en' ? en : id

  return (
    <section id="kontak" className="bg-gradient-navy section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -right-48 -top-48 w-[500px] h-[500px]
                      rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 -bottom-32 w-80 h-80
                      rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="container-section relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — CTA text */}
          <div>
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {t('Start Your Project', 'Mulai Proyek Anda')}
            </motion.p>
            <motion.h2
              className="section-title-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('Ready to Bring Your', 'Siap Mewujudkan')}{' '}
              <span className="text-gold">{t('Dream Project', 'Proyek Impian Anda')}</span>{' '}
              {t('to Life?', '?')}
            </motion.h2>
            <motion.p
              className="font-body text-white/70 leading-relaxed mb-10 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t(
                'Contact our team now for a free consultation. We are ready to help you plan and execute your project efficiently, with quality results and within budget.',
                'Hubungi tim kami sekarang untuk konsultasi gratis. Kami siap membantu Anda merencanakan dan melaksanakan proyek secara efisien, dengan hasil berkualitas dan sesuai anggaran.'
              )}
            </motion.p>

            {/* Contact info */}
            <motion.div
              className="space-y-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { icon: MapPin, text: 'Jl. Tanah Manisan No.25E, RT.3/RW.6, Cipinang Cempedak, Kec. Jatinegara, Jakarta Timur 13340' },
                { icon: Phone, text: '+62 823-1380-8775' },
                { icon: Mail, text: 'bataviaasiaproject@gmail.com' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-white/70">
                  <div className="w-9 h-9 bg-white/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <span className="font-body text-sm">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href={`https://wa.me/6282313808775?text=${encodeURIComponent(t(
                  'Hello PT Batavia Asia Project, I would like to consult about a project.',
                  'Halo PT Batavia Asia Project, saya ingin berkonsultasi mengenai proyek.'
                ))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                {t('WhatsApp Us', 'WhatsApp Kami')}
              </a>
              <a
                href="mailto:bataviaasiaproject@gmail.com"
                className="btn-outline-white"
              >
                <Mail size={18} />
                {t('Send an Email', 'Kirim Email')}
              </a>
            </motion.div>
          </div>

          {/* Right — Contact form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-heading text-white text-2xl mb-6">
              {t('Send a Message', 'Kirim Pesan')}
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-white/60 text-xs block mb-1.5">
                    {t('Full Name', 'Nama Lengkap')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('John Doe', 'Nama Anda')}
                    className="w-full bg-white/10 border border-white/20 text-white
                               placeholder-white/30 font-body text-sm px-4 py-3
                               focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-white/60 text-xs block mb-1.5">
                    {t('Phone Number', 'Nomor Telepon')}
                  </label>
                  <input
                    type="tel"
                    placeholder="+62 8xx xxxx xxxx"
                    className="w-full bg-white/10 border border-white/20 text-white
                               placeholder-white/30 font-body text-sm px-4 py-3
                               focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-white/60 text-xs block mb-1.5">
                  {t('Email Address', 'Alamat Email')}
                </label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="w-full bg-white/10 border border-white/20 text-white
                             placeholder-white/30 font-body text-sm px-4 py-3
                             focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-white/60 text-xs block mb-1.5">
                  {t('Project Type', 'Jenis Proyek')}
                </label>
                <select
                  className="w-full bg-white/10 border border-white/20 text-white/70
                             font-body text-sm px-4 py-3
                             focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="" className="text-navy bg-white">{t('Select project type', 'Pilih jenis proyek')}</option>
                  <option value="construction" className="text-navy bg-white">{t('Building Construction', 'Konstruksi Gedung')}</option>
                  <option value="renovation" className="text-navy bg-white">{t('Renovation', 'Renovasi')}</option>
                  <option value="interior" className="text-navy bg-white">{t('Interior Design', 'Desain Interior')}</option>
                  <option value="management" className="text-navy bg-white">{t('Project Management', 'Manajemen Proyek')}</option>
                  <option value="other" className="text-navy bg-white">{t('Other', 'Lainnya')}</option>
                </select>
              </div>
              <div>
                <label className="font-body text-white/60 text-xs block mb-1.5">
                  {t('Message', 'Pesan')}
                </label>
                <textarea
                  rows={4}
                  placeholder={t('Tell us about your project needs...', 'Ceritakan kebutuhan proyek Anda...')}
                  className="w-full bg-white/10 border border-white/20 text-white
                             placeholder-white/30 font-body text-sm px-4 py-3
                             focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                {t('Send Message', 'Kirim Pesan')}
                <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
