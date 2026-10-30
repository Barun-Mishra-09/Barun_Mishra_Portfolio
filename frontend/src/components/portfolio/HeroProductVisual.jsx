import React from 'react'
import { Sparkles, MessageSquare, TrendingUp, Zap, CheckCircle2, User, ArrowUpRight } from 'lucide-react'

export function HeroProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Main product preview frame */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-[#0A0D14] shadow-xl p-5 transition-all duration-300">
        
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-3 mb-4">
          <div className="flex items-center space-x-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <div className="ml-2 flex items-center space-x-1.5 text-xs font-medium text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>Nexora AI</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-medium text-emerald-400/90 tracking-wide uppercase">Engine Active</span>
          </div>
        </div>

        {/* High-Level Product Metrics Strip */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          <div className="rounded-lg border border-white/[0.06] bg-[#0E131D] p-3">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-medium tracking-wide text-slate-400">Conversations</span>
              <MessageSquare className="h-3 w-3 text-slate-400" />
            </div>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">1,482</div>
            <div className="text-[10px] text-emerald-400 flex items-center font-medium mt-0.5">
              <TrendingUp className="h-3 w-3 mr-0.5" /> +28% this week
            </div>
          </div>

          <div className="rounded-lg border border-white/[0.06] bg-[#0E131D] p-3">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-medium tracking-wide text-slate-400">Lead Volume</span>
              <Zap className="h-3 w-3 text-slate-400" />
            </div>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">342</div>
            <div className="text-[10px] text-blue-400 font-medium mt-0.5">High Intent</div>
          </div>

          <div className="rounded-lg border border-white/[0.06] bg-[#0E131D] p-3">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-medium tracking-wide text-slate-400">AI Resolution</span>
              <Sparkles className="h-3.5 w-3.5 text-slate-400" />
            </div>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">94.8%</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Instant triage</div>
          </div>
        </div>

        {/* Live Conversational & Automated Extraction Showcase */}
        <div className="rounded-xl border border-white/[0.06] bg-[#0E131D]/80 p-4 space-y-3.5">
          {/* Incoming Customer Message */}
          <div className="flex items-start space-x-3">
            <div className="h-7 w-7 rounded-full hero-user-avatar bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0 text-slate-300">
              <User className="h-3.5 w-3.5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200">Prospective Client</span>
                <span className="text-[10px] text-slate-500 font-mono">Just now</span>
              </div>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed bg-[#070A0F] rounded-lg p-2.5 border border-white/[0.05]">
                “We need a custom dashboard with real-time customer data streaming and automated lead alerts for our team.”
              </p>
            </div>
          </div>

          {/* AI Autonomous Handover & Qualification Event */}
          <div className="ml-4 pl-4 border-l border-white/[0.1] space-y-2">
            <div className="flex items-center space-x-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/[0.05] text-blue-400">
                <Sparkles className="h-3 w-3" />
              </span>
              <span className="text-[11px] font-medium text-slate-300">
                Intent Detected: <strong className="text-white font-semibold">Custom SaaS & Lead Automation</strong>
              </span>
            </div>

            <div className="hero-autoscore-box rounded-lg bg-[#070A0F] border border-white/[0.08] p-2.5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="hero-autoscore-icon h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                <span className="hero-autoscore-text text-xs text-slate-300 font-medium">Auto-scored & routed to high-priority sales queue</span>
              </div>
              <span className="hero-autoscore-badge text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 font-mono">
                0.28s
              </span>
            </div>
          </div>
        </div>

        {/* Visual Automation Status Pill */}
        <div className="mt-3.5 pt-3 border-t border-white/[0.07] flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-slate-400 text-[11px]">Real-time pipeline with WebSocket sync</span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono">v2.4 Production</span>
        </div>

      </div>
    </div>
  )
}
