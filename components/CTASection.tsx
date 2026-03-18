'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Mail, ArrowRight, MapPin, Phone } from 'lucide-react'

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="kontak" className="bg-gradient-navy section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-48 -top-48 w-[500px] h-[500px]
                      rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 -bottom-32 w-80 h-80
                      rounded-full bg-gold/5 blur-3xl" />

      {/* Gold border top */}
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
              Start Your Project
            </motion.p>
            <motion.h2
              className="section-title-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Bring Your{' '}
              <span className="text-gold">Dream Project</span>{' '}
              to Life?
            </motion.h2>
            <motion.p
              className="font-body text-white/70 leading-relaxed mb-10 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contact our team now for a free consultation. We are ready to help
              you plan and execute your project efficiently, with quality results
              and within budget.
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
                href="https://wa.me/6282313808775?text=Hello%20PT%20Batavia%20Asia%20Project%2C%20I%20would%20like%20to%20consult%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href="mailto:bataviaasiaproject@gmail.com"
                className="btn-outline-white"
              >
                <Mail size={18} />
                Send an Email
              </a>
            </motion.div>
          </div>

          {/* Right — Simple contact form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-heading text-white text-2xl mb-6">
              Send a Message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-white/60 text-xs block mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/10 border border-white/20 text-white
                               placeholder-white/30 font-body text-sm px-4 py-3
                               focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-white/60 text-xs block mb-1.5">
                    Phone Number
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
                  Email Address
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
                  Project Type
                </label>
                <select
                  className="w-full bg-white/10 border border-white/20 text-white/70
                             font-body text-sm px-4 py-3
                             focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="" className="text-navy bg-white">Select project type</option>
                  <option value="construction" className="text-navy bg-white">Building Construction</option>
                  <option value="renovation" className="text-navy bg-white">Renovation</option>
                  <option value="interior" className="text-navy bg-white">Interior Design</option>
                  <option value="management" className="text-navy bg-white">Project Management</option>
                  <option value="other" className="text-navy bg-white">Other</option>
                </select>
              </div>
              <div>
                <label className="font-body text-white/60 text-xs block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project needs..."
                  className="w-full bg-white/10 border border-white/20 text-white
                             placeholder-white/30 font-body text-sm px-4 py-3
                             focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                Send Message
                <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
