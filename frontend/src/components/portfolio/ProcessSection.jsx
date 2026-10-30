import React from 'react'
import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/data/process'
import { EASE_EXPERT } from '@/components/ui/motion'

export function ProcessSection() {
  return (
    <section id="process" className="py-20 border-t border-white/[0.06] bg-[#070A0F]/50">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>Structured Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            How We Work Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A clear, predictable roadmap from initial concept to a battle-tested production release.
          </p>
        </div>

        {/* Horizontal Timeline on Desktop / Vertical Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Connecting line across desktop */}
          <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-500/60 to-blue-500/20 origin-left -z-0" />

          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.step}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: EASE_EXPERT } }}
              className="relative z-10 flex flex-col rounded-2xl border border-white/10 bg-[#0B0F16] p-6 transition-all duration-200 hover:border-white/20 hover:bg-[#0E1420] group"
            >
              <div className="flex items-center justify-between md:justify-start md:space-x-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101722] border border-white/10 font-mono text-sm font-bold text-blue-400 shadow-sm group-hover:border-blue-500/40 group-hover:text-blue-300 transition-colors">
                  {step.step}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-widest md:hidden font-mono">
                  Phase {step.step}
                </span>
              </div>

              <h3 className="text-lg font-bold tracking-tight text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                {step.title}
              </h3>

              <p className="text-xs font-medium text-blue-400 mb-3">
                {step.tagline}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
