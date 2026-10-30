import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NexoraVisualMock } from './NexoraVisualMock'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { EASE_EXPERT } from '@/components/ui/motion'

export function NexoraVisualGallery({ screens }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)

  if (!screens || screens.length === 0) return null

  const activeScreen = screens[activeScreenIndex] || screens[0]

  return (
    <div className="my-12">
      {/* 6 Section Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#0B0F16] border border-white/10 mb-8 overflow-x-auto relative">
        {screens.map((screen, idx) => {
          const isActive = idx === activeScreenIndex
          return (
            <button
              key={screen.step}
              type="button"
              onClick={() => setActiveScreenIndex(idx)}
              className={`relative flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-blue-700 dark:text-white font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-blue-50 border border-blue-200 dark:bg-blue-600/20 dark:border-blue-500/40 rounded-lg shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 font-mono text-[10px] px-1.5 py-0.5 rounded transition-colors ${
                  isActive
                    ? 'active-step-badge bg-blue-600 text-white font-bold shadow-sm'
                    : 'bg-slate-200 text-slate-700 dark:bg-white/[0.05] dark:text-slate-400 font-medium'
                }`}
              >
                {screen.step}
              </span>
              <span className="relative z-10 whitespace-nowrap">{screen.title}</span>
            </button>
          )
        })}
      </div>

      {/* SINGLE Preview & Content Container (Only ONE in the DOM) */}
      <div className="group relative">
        {/* Header & Subtitle for Currently Active Screen */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 gap-2">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-sm font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
              {activeScreen.step}
            </span>
            <h4 className="text-lg sm:text-2xl font-bold tracking-tight text-white">
              {activeScreen.title}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            {activeScreen.subtitle}
          </p>
        </div>

        {/* Large Visual Frame */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0B0F16] shadow-2xl p-2.5 sm:p-5 transition-all duration-300">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] mb-3">
            <div className="flex items-center space-x-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              <div className="ml-2 flex items-center space-x-1.5 text-[11px] font-sans font-medium text-slate-300">
                <Sparkles className="h-3 w-3 text-blue-400" />
                <span>Nexora AI</span>
              </div>
            </div>
            <span className="text-[11px] text-blue-400/80 font-mono">
              Live Preview Active
            </span>
          </div>

          {/* Visual Mock Showcase with Smooth Motion Transitions */}
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen.screenType}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE_EXPERT }}
              >
                <NexoraVisualMock
                  type={activeScreen.screenType}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Caption & Step Paging Controls */}
          <div className="mt-4 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 border-t border-white/[0.05] pt-3">
            <p className="text-xs text-slate-300 italic">
              {activeScreen.caption}
            </p>
            <div className="flex items-center justify-between sm:justify-end space-x-3 flex-shrink-0">
              <span className="text-[11px] text-slate-500 font-mono">
                Sequence {activeScreenIndex + 1} of {screens.length}
              </span>
              <div className="flex items-center space-x-1">
                <button
                  type="button"
                  disabled={activeScreenIndex === 0}
                  onClick={() => setActiveScreenIndex((prev) => Math.max(0, prev - 1))}
                  className="p-1.5 rounded-md bg-[#101722] border border-white/10 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                  aria-label="Previous screen"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  disabled={activeScreenIndex === screens.length - 1}
                  onClick={() => setActiveScreenIndex((prev) => Math.min(screens.length - 1, prev + 1))}
                  className="p-1.5 rounded-md bg-[#101722] border border-white/10 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                  aria-label="Next screen"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
