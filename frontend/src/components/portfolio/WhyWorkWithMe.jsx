import React from 'react'
import { WHY_WORK_WITH_ME } from '@/data/whyWorkWithMe'

export function WhyWorkWithMe() {
  return (
    <section className="py-20 border-t border-white/[0.06]">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>Collaboration Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Why Work With Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical engineering principles focused on business impact, technical longevity, and seamless communication.
          </p>
        </div>

        {/* 6 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-2xl border border-white/10 bg-[#0B0F16] p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-white/20 hover:bg-[#0E1420]"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20 mb-4 inline-block">
                  {pillar.number}
                </span>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-blue-400 mb-3 italic">
                  "{pillar.quote}"
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
