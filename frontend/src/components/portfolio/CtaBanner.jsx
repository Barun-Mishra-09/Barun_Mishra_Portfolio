import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="py-20 border-t border-white/[0.06] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/[0.08] blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto">
        <div className="rounded-3xl border border-white/10 bg-[#0B0F16] p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl relative">
          
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>Ready To Collaborate</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Have a project in mind?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Tell me what you're building, what problem you're trying to solve, or what you want to improve.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
            >
              <Button variant="default" size="lg" className="group">
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#featured"
            >
              <Button variant="outline" size="lg">
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.a>
          </div>

          <p className="text-xs text-slate-500">
            Let's start with a straightforward conversation about your project.
          </p>

        </div>
      </div>
    </section>
  )
}
