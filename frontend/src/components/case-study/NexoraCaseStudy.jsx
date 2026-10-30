import React, { useState } from 'react'
import { NEXORA_CASE_STUDY } from '@/data/projects'
import { NexoraVisualGallery } from './NexoraVisualGallery'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Layers, Cpu, Database, Layout, ChevronDown, ChevronUp } from 'lucide-react'

export function NexoraCaseStudy() {
  const { title, subtitle, badge, shortDescription, screens, studySections, technologies } =
    NEXORA_CASE_STUDY

  const [expandedCaseStudy, setExpandedCaseStudy] = useState(false)

  return (
    <section id="featured" className="py-20 border-t border-white/[0.06] relative">
      <div className="container mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Real products and interfaces built around business problems.
          </h2>
        </div>

        {/* Flagship Case Study Header Banner */}
        <div className="rounded-2xl border border-white/10 bg-[#0B0F16] p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <Badge variant="default" className="text-xs uppercase tracking-wider font-semibold">
                {badge}
              </Badge>
              <span className="text-xs text-slate-400 font-mono">Full-Stack & AI Systems Sample</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              {title}
            </h3>
            <p className="text-lg font-medium text-blue-400 mb-4">
              {subtitle}
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              {shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => setExpandedCaseStudy((prev) => !prev)}
                className="group"
              >
                {expandedCaseStudy ? 'Collapse Case Study' : 'Read Full Case Study'}
                {expandedCaseStudy ? (
                  <ChevronUp className="h-4 w-4 ml-2" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
                )}
              </Button>

              <a href="#contact">
                <Button variant="outline" size="lg">
                  Discuss a Similar Solution <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Expandable 8-Stage Detailed Technical Case Study - Shown right under the banner */}
        {expandedCaseStudy && (
          <div className="rounded-2xl border border-white/10 bg-[#0B0F16] p-6 sm:p-12 mb-12 animate-fade-in shadow-2xl">
            <div className="border-b border-white/[0.08] pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block mb-1">
                  Technical Retrospective
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Comprehensive Case Study: Nexora AI
                </h3>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setExpandedCaseStudy(false)}
                className="self-start sm:self-center text-xs flex items-center gap-1.5 border-white/15 hover:bg-white/5 cursor-pointer text-slate-300 hover:text-white"
              >
                <span>Collapse Case Study</span>
                <ChevronUp className="h-3.5 w-3.5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* 01 Overview */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">01</span>
                  <h4 className="text-lg font-semibold text-white">Overview</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {studySections.overview}
                </p>
              </div>

              {/* 02 The Challenge */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">02</span>
                  <h4 className="text-lg font-semibold text-white">The Challenge</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {studySections.challenge}
                </p>
              </div>

              {/* 03 The Solution */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">03</span>
                  <h4 className="text-lg font-semibold text-white">The Solution</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {studySections.solution}
                </p>
              </div>

              {/* 04 Product Experience */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">04</span>
                  <h4 className="text-lg font-semibold text-white">Product Experience</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {studySections.productExperience}
                </p>
              </div>

              {/* 05 My Contribution */}
              <div className="space-y-3 md:col-span-2 border-t border-white/[0.06] pt-6">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">05</span>
                  <h4 className="text-lg font-semibold text-white">My Contribution</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {studySections.myContribution}
                </p>
              </div>

              {/* 06 Technology Stack */}
              <div className="space-y-4 md:col-span-2 border-t border-white/[0.06] pt-6">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">06</span>
                  <h4 className="text-lg font-semibold text-white">Technology Architecture</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {studySections.technology.map((techItem) => (
                    <div
                      key={techItem.name}
                      className="p-4 rounded-xl bg-[#101722] border border-white/[0.06]"
                    >
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                        {techItem.name}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {techItem.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07 Key Takeaways */}
              <div className="space-y-3 md:col-span-2 border-t border-white/[0.06] pt-6">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">07</span>
                  <h4 className="text-lg font-semibold text-white">Key Takeaways</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {studySections.keyTakeaways.map((takeaway, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#101722]/80 border border-white/[0.05] flex items-start space-x-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-300 leading-relaxed">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 08 Action / Conversation */}
              <div className="md:col-span-2 border-t border-white/[0.06] pt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">08</span>
                  <span className="text-sm font-semibold text-white">Ready to implement a similar architecture?</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedCaseStudy(false)}
                    className="text-xs cursor-pointer border-white/15 hover:bg-white/5 text-slate-300 hover:text-white"
                  >
                    <span>Collapse</span>
                    <ChevronUp className="h-3.5 w-3.5 ml-1" />
                  </Button>
                  <a href="#contact">
                    <Button variant="default" size="sm">
                      Inquire About Next Project <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 6 High-Fidelity Sequence Visuals */}
        <NexoraVisualGallery screens={screens} />

      </div>
    </section>
  )
}
