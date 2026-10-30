import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Check, User, Code2, Server, Database, BrainCircuit, Globe, Layers } from 'lucide-react'
import { EASE_EXPERT } from '@/components/ui/motion'

export function AboutSection() {
  const capabilities = [
    { title: 'Frontend', desc: 'React, Tailwind CSS, Accessible Primitives' },
    { title: 'Backend', desc: 'Node.js, Express.js, Microservices' },
    { title: 'Databases', desc: 'MySQL, MongoDB, Schema Design' },
    { title: 'APIs', desc: 'REST APIs, Real-time WebSockets' },
    { title: 'AI Integrations', desc: 'LLM Orchestration, Prompt Engineering' },
    { title: 'Business Systems', desc: 'Dashboards, Workflow Automations' },
  ]

  return (
    <section id="about" className="py-20 border-t border-white/[0.06] bg-[#070A0F]/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Refined Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-[#0B0F16] p-8 shadow-2xl relative overflow-hidden text-center sm:text-left">
              
              {/* Profile Avatar Graphic */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-6">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-0.5 shadow-lg flex-shrink-0">
                  <div className="h-full w-full rounded-[14px] bg-[#0B0F16] flex items-center justify-center text-blue-400">
                    <span className="text-2xl font-bold font-mono">BM</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">Barun Mishra</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mt-0.5">
                    Full-Stack Developer
                  </p>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 mt-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                    <span>Open to Client Projects</span>
                  </div>
                </div>
              </div>

              {/* Status Points */}
              <div className="border-t border-white/[0.06] pt-5 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Core Focus</span>
                  <span className="font-medium text-white">Web Apps & AI Systems</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Delivery Workflow</span>
                  <span className="font-medium text-white">Independent & Fast-Paced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Timezone Compatibility</span>
                  <span className="font-medium text-emerald-400">Global Remote Support</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Content & Capability Matrix */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>About Developer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Engineering modern digital products that solve real business problems.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              I build modern web applications, SaaS interfaces, dashboards, AI-powered customer experiences and custom business systems. My work bridges intuitive user interface design with rock-solid full-stack backend development.
            </p>

            {/* Core Capability Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {capabilities.map((cap) => (
                <motion.div
                  key={cap.title}
                  whileHover={{ y: -3, transition: { duration: 0.18, ease: EASE_EXPERT } }}
                  className="rounded-xl border border-white/[0.06] bg-[#0B0F16] p-3.5 hover:border-white/15 transition-colors"
                >
                  <span className="text-xs font-bold text-white block mb-0.5">
                    {cap.title}
                  </span>
                  <span className="text-[11px] text-slate-400 block leading-tight">
                    {cap.desc}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
