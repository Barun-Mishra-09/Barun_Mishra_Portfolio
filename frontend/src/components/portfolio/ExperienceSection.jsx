import React from 'react'
import { Briefcase, CheckCircle2, ShieldCheck, Code, Layers } from 'lucide-react'

export function ExperienceSection() {
  return (
    <section className="py-20 border-t border-white/[0.06]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>Career & Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Professional Experience & Work Standards
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Focused on engineering production-grade web applications, maintainable code architectures, and measurable business solutions.
            </p>
          </div>

          {/* Right Column: Truthful Timeline & What I Bring to Every Project */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Experience Card */}
            <div className="rounded-2xl border border-white/10 bg-[#0B0F16] p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Full-Stack Developer
                  </h3>
                  <p className="text-xs text-blue-400 font-medium mt-0.5">
                    Web Applications, APIs & Digital Products
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06]">
                  Production Development
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hands-on development of modern client-facing applications, RESTful microservices, real-time messaging systems, and structured database schemas. Prioritizing modular code, fast load times, and intuitive user experiences.
              </p>
            </div>

            {/* What I Bring To Every Project (Replaces Fake Social Proof) */}
            <div className="rounded-2xl border border-white/10 bg-[#0B0F16] p-6 sm:p-7">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4 flex items-center space-x-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>What I Bring To Every Engagement</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-[#101722] border border-white/[0.04] flex items-start space-x-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Production-ready, accessible, and responsive codebases.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#101722] border border-white/[0.04] flex items-start space-x-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Direct, transparent communication and regular progress builds.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#101722] border border-white/[0.04] flex items-start space-x-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Pragmatic architectures that avoid unnecessary complexity.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#101722] border border-white/[0.04] flex items-start space-x-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Commitment to clean handoff, documentation, and support.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
