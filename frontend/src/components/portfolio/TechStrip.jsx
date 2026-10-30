import React from 'react'
import { TECH_CAPABILITIES } from '@/data/capabilities'

export function TechStrip() {
  return (
    <div className="border-y border-white/[0.06] bg-[#070A0F]/50 py-4 sm:py-5 overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center flex-nowrap overflow-x-auto no-scrollbar gap-x-2.5 sm:gap-x-3 text-center">
          
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-slate-500 font-mono whitespace-nowrap font-medium shrink-0">
            Core Technical Capabilities
          </span>

          <span className="text-slate-400 dark:text-slate-700 select-none shrink-0">•</span>

          <div className="flex items-center justify-center flex-nowrap gap-x-2.5 sm:gap-x-3 text-xs sm:text-[13px] text-slate-300 shrink-0 whitespace-nowrap">
            {TECH_CAPABILITIES.map((tech, index) => (
              <React.Fragment key={tech.name}>
                <span className="font-medium text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
                  {tech.name}
                </span>
                {index < TECH_CAPABILITIES.length - 1 && (
                  <span className="text-slate-400 dark:text-slate-700 select-none">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
