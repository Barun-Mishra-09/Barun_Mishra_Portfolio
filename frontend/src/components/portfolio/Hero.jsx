import React from 'react'
import { motion } from 'framer-motion'
import { HeroProductVisual } from './HeroProductVisual'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react'
import { EASE_EXPERT } from '@/components/ui/motion'

export function Hero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Staggered Entrance */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Availability Status Badge & Eyebrow */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_EXPERT } },
              }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for freelance projects</span>
              </div>

              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                FULL-STACK DEVELOPER • AI • SAAS • AUTOMATION
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPERT } },
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Building digital products that solve{' '}
              <span className="text-gradient-blue inline-block">
                real business problems.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_EXPERT } },
              }}
              className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal"
            >
              I build modern web applications, AI-powered customer experiences, SaaS dashboards and business systems that help businesses operate, engage customers and grow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_EXPERT } },
              }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
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
                <Button variant="outline" size="lg" className="group">
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </motion.a>
            </motion.div>

            {/* Optional Discussion Link */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.4, ease: EASE_EXPERT } },
              }}
              className="pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <MessageCircle className="h-3.5 w-3.5 mr-1.5 text-blue-400" />
                <span>Let's discuss your idea</span>
                <ArrowUpRight className="h-3 w-3 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column: Sophisticated Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_EXPERT, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <HeroProductVisual />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
