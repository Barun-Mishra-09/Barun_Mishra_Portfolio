import React from 'react'
import { PROBLEM_SOLUTIONS } from '@/data/problemSolutions'
import { ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react'

export function ProblemSolution() {
  return (
    <section className="py-20 border-t border-white/[0.06] bg-[#070A0F]/60">
      <div className="container mx-auto">
        
        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>Problem → Solution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Have a Business Problem?{' '}
            <span className="text-gradient-blue block sm:inline">
              Let's Turn It Into a Product.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Technology is only valuable when it eliminates bottlenecks, drives revenue, or gives your team their hours back.
          </p>
        </div>

        {/* 4 Interactive Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEM_SOLUTIONS.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#0B0F16] p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-white/20"
            >
              {/* Problem Statement */}
              <div>
                <div className="flex items-start space-x-3 mb-4">
                  <div className="h-7 w-7 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-medium block">
                      The Business Bottleneck
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {item.problem}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-10 mb-6">
                  {item.painPoint}
                </p>
              </div>

              {/* Solution Statement */}
              <div className="pt-5 border-t border-white/[0.08]">
                <div className="flex items-start space-x-3">
                  <div className="h-7 w-7 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-medium block">
                      Engineered Solution
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {item.solution}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1.5">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
