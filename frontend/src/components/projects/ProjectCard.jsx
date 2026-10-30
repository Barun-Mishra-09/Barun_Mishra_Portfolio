import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MessageSquare, ArrowRight, CheckCircle2, Search, Building, UserCheck, ChevronDown, ChevronUp, ExternalLink, Sparkles, ShoppingBag, Briefcase, Utensils } from 'lucide-react'
import { EASE_EXPERT } from '@/components/ui/motion'

export function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2, ease: EASE_EXPERT } }}
      className="rounded-2xl border border-white/10 bg-[#0B0F16] overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-2xl group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Left Side: Content Details Area (Image 3) */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              <Badge variant="secondary" className="text-[11px]">
                {project.category}
              </Badge>
            </div>

            <p className="text-sm font-medium text-slate-400 mb-3">
              {project.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Inline Expanded Architectural Details with AnimatePresence */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: EASE_EXPERT }}
                  className="space-y-3 pt-3 border-t border-white/[0.08] mb-5 text-xs text-slate-300 overflow-hidden"
                >
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                    Key Architectural Highlights
                  </h5>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start space-x-2 p-2 rounded-lg bg-[#101722] border border-white/[0.05]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-200 leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDetails((prev) => !prev)}
                className="flex-1 justify-between text-xs cursor-pointer min-w-[140px]"
              >
                <span>{showDetails ? 'Hide Details' : 'View Project Details'}</span>
                {showDetails ? <ChevronUp className="h-3.5 w-3.5 ml-1" /> : <ChevronDown className="h-3.5 w-3.5 ml-1" />}
              </Button>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <Button variant="outline" size="sm" className="text-xs text-blue-400 border-blue-500/30 hover:bg-blue-500/10 cursor-pointer">
                    <span>Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                  </Button>
                </a>
              )}
              <a href="#contact" className="flex-shrink-0">
                <Button variant="default" size="sm" className="text-xs">
                  Inquire
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Preview Area (Image 4) */}
        <div className="relative bg-[#070A0F] border-t lg:border-t-0 lg:border-l border-white/[0.08] p-5 sm:p-6 lg:p-8 flex flex-col justify-center overflow-hidden">
          {/* Subtle hover gradient */}
          <div className="absolute inset-0 bg-blue-500/[0.02] group-hover:bg-blue-500/[0.05] transition-colors" />

          <div className="relative z-10 w-full max-w-lg mx-auto">
            {/* Browser Window Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-xs text-slate-500 font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                <div className="ml-2 flex items-center space-x-1.5 text-slate-300 font-sans">
                  {project.id === 'jobspot' && <Briefcase className="h-3 w-3 text-blue-400" />}
                  {project.id === 'chefnova' && <Utensils className="h-3 w-3 text-emerald-400" />}
                  {project.id === 'chatrecruit' && <MessageSquare className="h-3 w-3 text-indigo-400" />}
                  <span className="font-medium text-slate-200">{project.title}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowDetails((prev) => !prev)}
                className="text-[11px] text-blue-400 font-sans hover:underline flex items-center cursor-pointer bg-transparent border-none p-0"
              >
                <span>{showDetails ? 'Show Preview' : 'Inspect Details'}</span>
                <ArrowRight className="h-3 w-3 ml-1" />
              </button>
            </div>

            {/* Realistic Visual Mock based on project */}
            {project.id === 'jobspot' ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#101722] border border-white/[0.06]">
                  <div className="flex items-center space-x-2 text-xs text-slate-300">
                    <Search className="h-3.5 w-3.5 text-blue-400" />
                    <span>Frontend • Full-Stack • Remote</span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded">
                    24 New Listings
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#0F1622] border border-white/[0.05] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">Senior Platform Engineer</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Active Posting</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Scale distributed cloud microservices & GraphQL endpoints</p>
                  <div className="flex items-center space-x-2 pt-1 text-[10px] text-slate-400">
                    <span className="flex items-center"><Building className="h-3 w-3 mr-1 text-slate-500" /> TechScale</span>
                    <span className="text-slate-600">•</span>
                    <span>React, Node.js, MongoDB</span>
                  </div>
                </div>
              </div>
            ) : project.id === 'chefnova' ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#101722] border border-white/[0.06]">
                  <div className="flex items-center space-x-2 text-xs text-slate-300">
                    <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                    <span>AI Personalized Recommendation</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Groq AI Active
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#0F1622] border border-white/[0.05] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Suggested: Artisanal Protein Bowl</span>
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">Match: 98%</span>
                  </div>
                  <div className="p-2 rounded bg-[#070A0F] border border-white/[0.04] text-[11px] text-slate-300">
                    "High protein, gluten-free preference matched based on dietary profile and past orders."
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                    <span className="flex items-center text-emerald-400 font-medium">
                      <ShoppingBag className="h-3 w-3 mr-1" /> Cart Ready • Vercel Deployed
                    </span>
                    <span className="text-slate-500 font-mono">TanStack + Supabase</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#101722] border border-white/[0.06]">
                  <div className="flex items-center space-x-2 text-xs text-slate-300">
                    <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
                    <span>Live Candidate Screening Room</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Online
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#0F1622] border border-white/[0.05] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Candidate: Senior React Developer</span>
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">Score: 92/100</span>
                  </div>
                  <div className="p-2 rounded bg-[#070A0F] border border-white/[0.04] text-[11px] text-slate-300">
                    "Implemented state hydration & custom socket synchronization hooks for multi-user canvas."
                  </div>
                  <div className="flex items-center space-x-2 text-[10px] text-emerald-400 font-medium">
                    <UserCheck className="h-3 w-3 mr-0.5" /> Technical Stage Cleared
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  )
}
