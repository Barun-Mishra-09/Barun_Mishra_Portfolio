import React from 'react'
import { motion } from 'framer-motion'
import { SERVICES } from '@/data/services'
import { Check, ArrowRight } from 'lucide-react'
import { EASE_EXPERT } from '@/components/ui/motion'

export function ServicesSection() {
  return (
    <section id="services" className="py-20 border-t border-white/[0.06]">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>Service Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            What I Can Build For Your Business
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            I build practical digital products designed around real business needs.
          </p>
        </div>

        {/* 6 Elegant Lightweight Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <motion.div
              key={service.number}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: EASE_EXPERT } }}
              className="rounded-2xl border border-white/10 bg-[#0B0F16] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-white/20 hover:bg-[#0E1420] group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                    {service.number}
                  </span>
                  <span className="text-xs text-slate-500 group-hover:text-blue-400 transition-colors">
                    End-to-End
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 border-t border-white/[0.06] pt-4 mb-6">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
                      <Check className="h-3.5 w-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  <span>Request this service</span>
                  <ArrowRight className="h-3 w-3 ml-1 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
