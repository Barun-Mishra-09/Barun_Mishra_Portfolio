import React, { useState, useEffect } from 'react'
import {
  MessageSquare,
  Sparkles,
  Bot,
  Zap,
  TrendingUp,
  User,
  CheckCircle2,
  Workflow,
  BarChart3,
  Mic,
  ArrowRight,
  ShieldCheck,
  Clock,
  Send,
  Sliders,
  UserCheck,
  Target,
  SlidersHorizontal,
  ChevronDown,
  ChevronRight,
  Search,
  Mail,
  Phone,
  MapPin,
  LayoutDashboard,
  Users,
  Calendar,
  Download,
  Filter,
  X,
  ExternalLink,
  Check,
  Bell,
  Menu,
  PieChart,
  Layers,
  MessageCircle,
  FileText,
  Plus,
  Play,
  Pause,
  Volume2,
  Smile,
  Activity,
  Eye,
  PhoneCall,
  Save,
  Maximize2,
  ZoomIn,
  ZoomOut,
  GitBranch,
  CornerDownRight,
  Tag
} from 'lucide-react'
import { MOCK_CONVERSATIONS } from '../../data/inboxConversations'
import { MOCK_LEADS, TEAM_MEMBERS } from '../../data/leads'
import {
  MOCK_AUTOMATION_STATS,
  MOCK_TRIGGERS,
  MOCK_ACTIONS,
  MOCK_RECENT_RUNS,
  MOCK_TEMPLATES
} from '../../data/automations'
import {
  MOCK_ANALYTICS_KPIS,
  MOCK_VOICE_SESSIONS,
  MOCK_AI_INSIGHTS
} from '../../data/analyticsVoice'

export function NexoraVisualMock({ type = 'overview', isModal = false }) {
  const [selectedId, setSelectedId] = useState('aryan-chandra')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterTab, setFilterTab] = useState('all')

  const activeConversation =
    MOCK_CONVERSATIONS.find((c) => c.id === selectedId) || MOCK_CONVERSATIONS[0]

  const filteredConversations = MOCK_CONVERSATIONS.filter((c) => {
    const matchesFilter =
      filterTab === 'all'
        ? true
        : filterTab === 'open'
        ? c.status === 'open'
        : c.status === 'closed'
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.interestedService.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })
  const containerClasses = isModal
    ? 'w-full bg-[#070A0F] rounded-xl border border-white/10 p-6 md:p-8 text-slate-100 overflow-hidden'
    : 'w-full bg-[#070A0F] rounded-xl border border-white/10 p-5 md:p-6 text-slate-100 overflow-hidden transition-all duration-300'

  if (type === 'overview') {
    return (
      <div className={containerClasses}>
        {/* Workspace Header Bar */}
        <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-white/[0.08] gap-3">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 border border-blue-400/30 flex items-center justify-center text-white shadow-lg shadow-blue-500/10">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="text-sm font-bold text-white tracking-tight">Nexora AI Workspace</h4>
                <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 font-mono font-medium">
                  Command Center
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Real-time customer engagement intelligence</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-[#0D131D] px-3 py-1.5 rounded-lg border border-white/[0.06]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-slate-300 font-medium">System Status: <span className="text-emerald-400 font-semibold">Operational</span></span>
            </div>
          </div>
        </div>

        {/* Hero Product Area: Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
          {/* Main AI Engagement Activity (8 Cols) */}
          <div className="lg:col-span-8 bg-[#0D131D] border border-white/[0.06] rounded-xl p-4 md:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider">AI Engagement Activity</h5>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Live Dialogue Stream</span>
              </div>
              
              <div className="space-y-3 text-xs">
                {/* Chat Turn 1: Visitor */}
                <div className="flex items-start space-x-3">
                  <div className="h-7 w-7 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700 shrink-0 shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                      alt="Yogendra Kumar"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-[#101824] border border-white/[0.05] p-3 rounded-2xl rounded-tl-xs max-w-[85%] text-slate-200">
                    <p className="font-semibold text-slate-300 text-[11px] mb-0.5">Yogendra Kumar (SaaS Lead)</p>
                    <p>I’m interested in your AI chatbot for automated customer onboarding and lead qualification.</p>
                  </div>
                </div>

                {/* Event Badge */}
                <div className="flex items-center space-x-2 pl-10 my-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span className="text-[10px] text-blue-400 font-mono bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    Intent Detected: Commercial Inquiry
                  </span>
                </div>

                {/* Chat Turn 2: AI Assistant */}
                <div className="flex items-start space-x-3">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="bg-blue-600/10 border border-blue-500/20 p-3 rounded-2xl rounded-tl-xs max-w-[85%] text-slate-100">
                    <p className="font-semibold text-blue-400 text-[11px] mb-0.5">Nexora Assistant</p>
                    <p>Absolutely. Nexora AI handles high-intent visitor routing and integrates with your CRM. Would you like to view our enterprise pricing tiers or book a 1-on-1 demo with our engineering team?</p>
                  </div>
                </div>

                {/* Connected System Events */}
                <div className="pl-10 space-y-1.5 pt-1">
                  <div className="flex items-center justify-between bg-[#141C2B]/80 border border-white/[0.04] p-2 rounded-lg text-[11px]">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-slate-300 font-medium">Lead captured: <span className="text-white">yogendra.kumar@techcorp.in</span></span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      CRM Synced
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-[#141C2B]/80 border border-white/[0.04] p-2 rounded-lg text-[11px]">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-3.5 w-3.5 text-amber-400" />
                      <span className="text-slate-300 font-medium">Next Action: <span className="text-white">Human handover recommended</span></span>
                    </div>
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      Routing to Sales
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center text-slate-300"><ShieldCheck className="h-3.5 w-3.5 text-blue-400 mr-1.5" /> End-to-end LLM guardrails active</span>
              <span className="font-mono text-slate-400">Response time: 240ms</span>
            </div>
          </div>

          {/* AI Intelligence Side Panel (4 Cols) */}
          <div className="lg:col-span-4 bg-[#0D131D] border border-white/[0.06] rounded-xl p-4 md:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-3.5 w-3.5 text-violet-400" />
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider">AI Intelligence</h5>
                </div>
                <span className="text-[10px] text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20 font-mono">
                  Live Analysis
                </span>
              </div>

              <div className="space-y-3">
                <div className="bg-[#101824] border border-white/[0.04] p-3 rounded-lg">
                  <span className="text-[11px] text-slate-400 block mb-1">Customer Intent</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">High Commercial Intent</span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">98%</span>
                  </div>
                </div>

                <div className="bg-[#101824] border border-white/[0.04] p-3 rounded-lg">
                  <span className="text-[11px] text-slate-400 block mb-1">Lead Qualification</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-400">Qualified Enterprise Lead</span>
                    <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Score: A+</span>
                  </div>
                </div>

                <div className="bg-[#101824] border border-white/[0.04] p-3 rounded-lg">
                  <span className="text-[11px] text-slate-400 block mb-1">Sentiment Tone</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">Positive & Solution-Seeking</span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">+4.8 / 5</span>
                  </div>
                </div>

                <div className="bg-[#101824] border border-white/[0.04] p-3 rounded-lg">
                  <span className="text-[11px] text-slate-400 block mb-1">Recommended Next Action</span>
                  <p className="text-xs font-medium text-slate-200">Offer custom deployment plan & initiate human handover.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06]">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Model Confidence</span>
                <span className="text-slate-200 font-mono font-semibold">99.4%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          <div className="bg-[#0D131D] border border-white/[0.06] rounded-xl p-3.5">
            <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
              <span>Total Conversations</span>
              <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
            </div>
            <div className="text-lg md:text-xl font-extrabold text-white">8,429</div>
            <div className="text-[10px] text-emerald-400 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-0.5" /> +34% MoM
            </div>
          </div>

          <div className="bg-[#0D131D] border border-white/[0.06] rounded-xl p-3.5">
            <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
              <span>Autonomous Resolution</span>
              <Bot className="h-3.5 w-3.5 text-blue-400" />
            </div>
            <div className="text-lg md:text-xl font-extrabold text-blue-400">94.2%</div>
            <div className="text-[10px] text-slate-400 mt-1">&lt; 0.4s avg latency</div>
          </div>

          <div className="bg-[#0D131D] border border-white/[0.06] rounded-xl p-3.5">
            <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
              <span>Qualified Leads</span>
              <UserCheck className="h-3.5 w-3.5 text-violet-400" />
            </div>
            <div className="text-lg md:text-xl font-extrabold text-white">1,120</div>
            <div className="text-[10px] text-blue-400 mt-1">High commercial intent</div>
          </div>

          <div className="bg-[#0D131D] border border-white/[0.06] rounded-xl p-3.5">
            <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
              <span>Avg Response</span>
              <Zap className="h-3.5 w-3.5 text-emerald-400" />
            </div>
            <div className="text-lg md:text-xl font-extrabold text-emerald-400">0.32s</div>
            <div className="text-[10px] text-slate-400 mt-1">Streaming token pipeline</div>
          </div>
        </div>

        {/* Active Customer Journeys Section */}
        <div className="mt-4 rounded-xl bg-[#0D131D] border border-white/[0.06] p-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Active Customer Journeys</h5>
              <p className="text-[11px] text-slate-400">Real-time pipeline progression linking conversations to resolution</p>
            </div>
            <span className="text-[11px] text-blue-400 font-mono bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
              4 Active Pipelines
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-[#101824] border border-white/[0.04] gap-2 hover:border-white/10 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-semibold shrink-0">
                  JS
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">SaaS Platform Integration Inquiry</p>
                  <p className="text-[11px] text-slate-400">Visitor exploring custom support agent integration</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 self-end sm:self-center">
                <span className="text-[10px] text-slate-400 font-mono hidden md:inline">Step: AI Intelligence</span>
                <span className="text-[10px] font-medium bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/20">
                  Lead Captured
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-[#101824] border border-white/[0.04] gap-2 hover:border-white/10 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-semibold shrink-0">
                  EM
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Custom Pricing & Architecture Query</p>
                  <p className="text-[11px] text-slate-400">Customer requested enterprise SLA & security details</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 self-end sm:self-center">
                <span className="text-[10px] text-slate-400 font-mono hidden md:inline">Step: Automated Workflow</span>
                <span className="text-[10px] font-medium bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20">
                  AI Handled
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-[#101824] border border-white/[0.04] gap-2 hover:border-white/10 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-semibold shrink-0">
                  AR
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Consultation & Voice Demo Request</p>
                  <p className="text-[11px] text-slate-400">High-intent lead requesting immediate sales contact</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 self-end sm:self-center">
                <span className="text-[10px] text-slate-400 font-mono hidden md:inline">Step: Agent Transfer</span>
                <span className="text-[10px] font-medium bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded border border-amber-500/20">
                  Human Handover
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // PREMIUM CHATBOT BUILDER INTERFACE (Linear / Vercel / Stripe inspired SaaS visual)
  if (type === 'builder') {
    return (
      <div className={containerClasses}>
        
        {/* Workspace Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-white/[0.08] gap-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 border border-blue-400/30 flex items-center justify-center text-white shadow-sm">
              <Bot className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="text-sm font-bold text-white tracking-tight">Nexora AI Builder</h4>
                <span className="text-[10px] text-slate-400 bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.08] font-mono">
                  v2.4
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Visual conversation rules, lead capture & AI model orchestration</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2.5 text-xs">
            <span className="text-[11px] text-slate-400 bg-[#0D131D] px-2.5 py-1 rounded-lg border border-white/[0.06] flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2" /> Changes Saved
            </span>
            <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-lg font-mono">
              Model: GPT-4o
            </span>
          </div>
        </div>

        {/* 3 Visual Zones Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
          
          {/* ZONE 1: Left Navigation / Setup Sections (3 Cols on lg) */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold block px-1 mb-1">
              Configuration Steps
            </span>
            
            {/* Identity & Persona - Active */}
            <div className="p-2.5 rounded-xl bg-blue-600/15 border border-blue-500/30 text-xs flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-2.5">
                <Bot className="h-3.5 w-3.5 text-blue-400" />
                <span className="font-semibold text-white">1. Bot Persona</span>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            </div>

            {/* Behavior & Response Rules */}
            <div className="p-2.5 rounded-xl bg-[#0D131D] border border-white/[0.05] text-xs flex items-center justify-between text-slate-400 hover:text-slate-200 transition-colors">
              <div className="flex items-center space-x-2.5">
                <Sliders className="h-3.5 w-3.5 text-slate-500" />
                <span className="font-medium">2. Response Rules</span>
              </div>
            </div>

            {/* Lead Capture */}
            <div className="p-2.5 rounded-xl bg-[#0D131D] border border-white/[0.05] text-xs flex items-center justify-between text-slate-400 hover:text-slate-200 transition-colors">
              <div className="flex items-center space-x-2.5">
                <UserCheck className="h-3.5 w-3.5 text-slate-500" />
                <span className="font-medium">3. Lead Capture</span>
              </div>
              <span className="text-[9px] font-mono font-semibold text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                ACTIVE
              </span>
            </div>

            {/* Human Handover */}
            <div className="p-2.5 rounded-xl bg-[#0D131D] border border-white/[0.05] text-xs flex items-center justify-between text-slate-400 hover:text-slate-200 transition-colors">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-500" />
                <span className="font-medium">4. Human Escalation</span>
              </div>
              <span className="text-[9px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                ENABLED
              </span>
            </div>

            {/* AI Model & Context */}
            <div className="p-2.5 rounded-xl bg-[#0D131D] border border-white/[0.05] text-xs flex items-center justify-between text-slate-400 hover:text-slate-200 transition-colors">
              <div className="flex items-center space-x-2.5">
                <Sparkles className="h-3.5 w-3.5 text-slate-500" />
                <span className="font-medium">5. LLM Model</span>
              </div>
            </div>
          </div>

          {/* ZONE 2: Center / Main Workspace Controls (5 Cols on lg) */}
          <div className="lg:col-span-5 space-y-4 bg-[#0D131D]/90 border border-white/[0.06] rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-base font-bold text-white tracking-tight">Customer Support Assistant</h4>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" /> Active Agent
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-4">Configure how your AI assistant communicates with customers.</p>

              {/* Form Controls */}
              <div className="space-y-3.5 pt-3 border-t border-white/[0.06]">
                
                {/* AI Model Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium block">
                    AI Model Selection
                  </label>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#101824] border border-blue-500/30 text-xs">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                      <span className="font-semibold text-white">GPT-4o (Context-Optimized)</span>
                    </div>
                    <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>

                {/* Personality & Response Style */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium block">
                      Personality
                    </label>
                    <div className="p-2 rounded-lg bg-[#101824] border border-white/[0.06] text-xs text-slate-200 font-medium truncate flex items-center justify-between">
                      <span>Professional & Friendly</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium block">
                      Response Style
                    </label>
                    <div className="p-2 rounded-lg bg-[#101824] border border-white/[0.06] text-xs text-slate-200 font-medium truncate flex items-center justify-between">
                      <span>Concise & Helpful</span>
                    </div>
                  </div>
                </div>

                {/* Initial Welcome Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium block">
                    Welcome Message
                  </label>
                  <div className="p-2.5 rounded-lg bg-[#101824] border border-white/[0.06] text-xs text-slate-300 font-mono leading-relaxed">
                    "Hi! 👋 Welcome to Nexora AI. How can I help you today?"
                  </div>
                </div>

                {/* Feature Toggles */}
                <div className="pt-2 border-t border-white/[0.06] space-y-2">
                  
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#101824] border border-white/[0.04]">
                    <div className="flex items-center space-x-2">
                      <UserCheck className="h-3.5 w-3.5 text-blue-400" />
                      <span className="text-xs font-medium text-slate-200">Lead Capture Form</span>
                    </div>
                    <div className="w-7 h-4 rounded-full bg-blue-600 p-0.5 flex items-center justify-end">
                      <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#101824] border border-white/[0.04]">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-xs font-medium text-slate-200">Human Escalation Trigger</span>
                    </div>
                    <div className="w-7 h-4 rounded-full bg-blue-600 p-0.5 flex items-center justify-end">
                      <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <div className="text-[11px] text-slate-500 font-mono text-right pt-2 border-t border-white/[0.04]">
              Workflow: Configure AI → Test AI → Capture Lead → Handover
            </div>
          </div>

          {/* ZONE 3: Right / Live Interactive Preview Widget (4 Cols on lg - Focal Point) */}
          <div className="lg:col-span-4">
            <div className="rounded-xl border border-blue-500/30 bg-[#0B0F17] shadow-2xl p-4 flex flex-col justify-between h-full relative overflow-hidden">
              
              {/* Top Accent Light Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400" />

              <div>
                {/* Widget Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Nexora Support AI</h5>
                      <div className="flex items-center space-x-1 text-[10px] text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Online • Instant Reply</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                    Live Preview
                  </span>
                </div>

                {/* Conversation Stream */}
                <div className="space-y-3 text-xs">
                  
                  {/* AI Greeting */}
                  <div className="flex items-start space-x-2">
                    <div className="bg-[#101824] border border-white/[0.06] rounded-2xl rounded-tl-sm p-2.5 text-slate-200 leading-relaxed max-w-[90%] text-xs">
                      Hi! 👋 Welcome to Nexora AI. How can I help you today?
                    </div>
                  </div>

                  {/* Suggested Question Pills */}
                  <div className="flex flex-wrap gap-1.5 pl-1">
                    <span className="text-[10px] text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full cursor-pointer hover:bg-blue-500/20 transition-colors">
                      Tell me about your services
                    </span>
                    <span className="text-[10px] text-slate-300 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-full cursor-pointer hover:bg-white/[0.08] transition-colors">
                      Can I book a consultation?
                    </span>
                  </div>

                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm p-2.5 max-w-[85%] text-xs shadow-sm">
                      I want to know more about your services.
                    </div>
                  </div>

                  {/* AI Response + Embedded Lead Capture Card (Focal Point) */}
                  <div className="flex items-start space-x-2">
                    <div className="space-y-2.5 max-w-[95%]">
                      
                      <div className="bg-[#101824] border border-white/[0.06] rounded-2xl rounded-tl-sm p-2.5 text-slate-200 leading-relaxed text-xs">
                        Absolutely! We build custom web applications, AI chatbots, SaaS dashboards and business automations.
                      </div>

                      {/* Embedded Lead Capture Card */}
                      <div className="rounded-xl bg-[#090D14] border border-blue-500/30 p-3 space-y-2.5 shadow-md">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-white">Request a Consultation</span>
                          <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">
                            Auto-CRM Sync
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <input
                            type="text"
                            readOnly
                            value="Alex Morgan"
                            className="w-full bg-[#101824] border border-white/10 rounded-md px-2.5 py-1.5 text-[11px] text-slate-200 focus:outline-none"
                          />
                          <input
                            type="email"
                            readOnly
                            value="alex@startup.io"
                            className="w-full bg-[#101824] border border-white/10 rounded-md px-2.5 py-1.5 text-[11px] text-slate-200 focus:outline-none"
                          />
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-1.5 rounded-md transition-colors flex items-center justify-center space-x-1 cursor-pointer">
                          <span>Continue</span>
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="mt-4 pt-2.5 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <input
                  type="text"
                  readOnly
                  placeholder="Type your message..."
                  className="w-full bg-[#101824] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-400 focus:outline-none"
                />
                <div className="h-7 w-7 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <Send className="h-3.5 w-3.5" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    )
  }

  if (type === 'inbox') {
    return (
      <div className={containerClasses}>
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight">Nexora Unified AI Inbox</h4>
              <p className="text-[11px] text-slate-400">
                Real-time conversation management, automated lead extraction & human handover
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-medium font-mono">Live Sync • 24 Inquiries</span>
          </div>
        </div>

        {/* 3-Panel Dynamic Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 mt-4">
          
          {/* LEFT PANEL: Conversation List (3 cols on lg) */}
          <div className="lg:col-span-3 bg-[#0D131D] border border-white/[0.06] rounded-xl p-3 flex flex-col space-y-3">
            {/* Header + Count */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-white">Inbox</span>
                <span className="text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full font-mono">
                  {filteredConversations.length} Active
                </span>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="h-3.5 w-3.5 absolute left-2.5 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#101824] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center space-x-1 p-1 bg-[#101824] rounded-lg border border-white/[0.04]">
              {['all', 'open', 'closed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilterTab(tab)}
                  className={`flex-1 text-[11px] font-medium py-1 rounded-md capitalize transition-all cursor-pointer ${
                    filterTab === tab
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Conversation List */}
            <div className="space-y-1.5 overflow-y-auto max-h-[440px] pr-0.5 custom-scrollbar">
              {filteredConversations.map((conv) => {
                const isActive = conv.id === activeConversation.id
                return (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedId(conv.id)}
                    className={`w-full text-left p-2.5 rounded-lg transition-all cursor-pointer block border ${
                      isActive
                        ? 'bg-blue-600/15 border-blue-500/40 shadow-sm'
                        : 'bg-[#101824]/60 border-white/[0.04] hover:bg-[#101824] hover:border-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`h-7 w-7 rounded-full flex items-center justify-center overflow-hidden shrink-0 ${
                            isActive
                              ? 'ring-2 ring-blue-500'
                              : 'border border-slate-300 dark:border-white/10'
                          }`}
                        >
                          {conv.avatarUrl ? (
                            <img
                              src={conv.avatarUrl}
                              alt={conv.name}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-xs font-bold text-slate-300">{conv.avatar}</span>
                          )}
                        </div>
                        <div>
                          <span
                            className={`text-xs font-semibold block leading-tight ${
                              isActive ? 'text-white' : 'text-slate-200'
                            }`}
                          >
                            {conv.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {conv.timestamp}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        {conv.unread && (
                          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                        )}
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded font-mono ${
                            conv.badge === 'NEW'
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : conv.badge === 'QUALIFIED'
                              ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                              : conv.badge === 'ENTERPRISE'
                              ? 'bg-purple-500/15 text-purple-400 border border-purple-500/30'
                              : 'bg-slate-700/40 text-slate-400 border border-white/10'
                          }`}
                        >
                          {conv.badge}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 line-clamp-1 pl-9">
                      {conv.preview}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* CENTER PANEL: Conversation Thread (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#0D131D] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-between space-y-4">
            
            <div>
              {/* Thread Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center space-x-2.5">
                  <div className="h-8 w-8 rounded-full overflow-hidden shrink-0 border border-slate-300 dark:border-white/10 shadow-sm">
                    {activeConversation.avatarUrl ? (
                      <img
                        src={activeConversation.avatarUrl}
                        alt={activeConversation.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                        {activeConversation.avatar}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h5 className="text-xs font-bold text-white">{activeConversation.name}</h5>
                      <span className="text-[9px] font-semibold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20 font-mono">
                        {activeConversation.badge}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {activeConversation.interestedService} • {activeConversation.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" /> AI Agent Active
                  </span>
                </div>
              </div>

              {/* Message Stream */}
              <div className="mt-3.5 space-y-3 overflow-y-auto max-h-[360px] pr-1 custom-scrollbar">
                {activeConversation.messages.map((msg, idx) => {
                  if (msg.type === 'event') {
                    return (
                      <div
                        key={idx}
                        className="my-2 p-3 rounded-xl bg-[#101824] border border-blue-500/30 text-xs space-y-1.5 shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white flex items-center">
                            <UserCheck className="h-3.5 w-3.5 text-blue-400 mr-1.5" />
                            {msg.title}
                          </span>
                          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            CRM SYNCED
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300 pt-1 border-t border-white/[0.06]">
                          <div><span className="text-slate-500">Name:</span> {msg.data.name}</div>
                          <div><span className="text-slate-500">Email:</span> {msg.data.email}</div>
                          {msg.data.phone && (
                            <div><span className="text-slate-500">Phone:</span> {msg.data.phone}</div>
                          )}
                          {msg.data.slot && (
                            <div><span className="text-slate-500">Slot:</span> {msg.data.slot}</div>
                          )}
                        </div>
                      </div>
                    )
                  }

                  if (msg.type === 'handover') {
                    return (
                      <div
                        key={idx}
                        className="my-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs flex items-center justify-between text-emerald-300"
                      >
                        <div className="flex items-center space-x-2">
                          <ShieldCheck className="h-4 w-4 text-emerald-400" />
                          <div>
                            <span className="font-semibold text-emerald-200 block">{msg.title}</span>
                            <span className="text-[10px] text-emerald-400">{msg.details}</span>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">
                          HANDOVER ACTIVE
                        </span>
                      </div>
                    )
                  }

                  const isUser = msg.sender === 'user'
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl p-2.5 text-xs leading-relaxed ${
                          isUser
                            ? 'user-chat-bubble bg-blue-600 text-white rounded-tr-xs shadow-sm'
                            : 'bg-[#101824] border border-white/[0.06] text-slate-200 rounded-tl-xs'
                        }`}
                      >
                        {!isUser && (
                          <div className="flex items-center space-x-1 text-[10px] text-blue-400 font-semibold mb-1">
                            <Sparkles className="h-3 w-3" />
                            <span>Nexora AI</span>
                          </div>
                        )}
                        <p>{msg.text}</p>
                      </div>
                      <span className="text-[9px] text-slate-500 mt-1 font-mono px-1">
                        {msg.time}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Bottom Message Input Bar */}
            <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between gap-2">
              <input
                type="text"
                readOnly
                placeholder={`Reply to ${activeConversation.name}...`}
                className="w-full bg-[#101824] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none"
              />
              <button className="h-7 w-7 rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer">
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

          {/* RIGHT PANEL: Lead & Customer Profile (4 cols on lg) */}
          <div className="lg:col-span-4 bg-[#0D131D] border border-white/[0.06] rounded-xl p-4 space-y-4">
            
            {/* Customer Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full overflow-hidden shrink-0 border border-slate-300 dark:border-white/10 shadow-md">
                  {activeConversation.avatarUrl ? (
                    <img
                      src={activeConversation.avatarUrl}
                      alt={activeConversation.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                      {activeConversation.avatar}
                    </div>
                  )}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white leading-tight">
                    {activeConversation.name}
                  </h5>
                  <span className="text-[10px] text-slate-400 block font-mono">
                    ID: {activeConversation.id}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-blue-500/15 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-mono">
                {activeConversation.leadStatus}
              </span>
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                Contact Details
              </span>
              <div className="bg-[#101824] border border-white/[0.04] rounded-lg p-2.5 space-y-2 text-xs">
                <div className="flex items-center text-slate-300">
                  <Mail className="h-3.5 w-3.5 text-blue-400 mr-2.5 flex-shrink-0" />
                  <span className="truncate">{activeConversation.email}</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="h-3.5 w-3.5 text-emerald-400 mr-2.5 flex-shrink-0" />
                  <span>{activeConversation.phone}</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-amber-400 mr-2.5 flex-shrink-0" />
                  <span>{activeConversation.location}</span>
                </div>
              </div>
            </div>

            {/* Lead Information */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                Lead Information
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#101824] border border-white/[0.04] p-2 rounded-lg">
                  <span className="text-[10px] text-slate-400 block">Interested Service</span>
                  <span className="font-semibold text-white truncate block mt-0.5">
                    {activeConversation.interestedService}
                  </span>
                </div>
                <div className="bg-[#101824] border border-white/[0.04] p-2 rounded-lg">
                  <span className="text-[10px] text-slate-400 block">Lead Source</span>
                  <span className="font-semibold text-blue-400 truncate block mt-0.5">
                    {activeConversation.leadSource}
                  </span>
                </div>
                <div className="bg-[#101824] border border-white/[0.04] p-2 rounded-lg">
                  <span className="text-[10px] text-slate-400 block">Lead Status</span>
                  <span className="font-semibold text-emerald-400 truncate block mt-0.5">
                    {activeConversation.leadStatus}
                  </span>
                </div>
                <div className="bg-[#101824] border border-white/[0.04] p-2 rounded-lg">
                  <span className="text-[10px] text-slate-400 block">Assigned To</span>
                  <span className="font-semibold text-slate-200 truncate block mt-0.5">
                    {activeConversation.assignedTo}
                  </span>
                </div>
              </div>
            </div>

            {/* Conversation Context */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                Conversation Context
              </span>
              <div className="bg-[#101824] border border-white/[0.04] p-2.5 rounded-lg text-xs text-slate-300 leading-relaxed font-sans">
                "{activeConversation.summary}"
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                Activity
              </span>
              <div className="space-y-1.5">
                {activeConversation.activity.map((act, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-xs bg-[#101824]/60 p-2 rounded-md border border-white/[0.02]"
                  >
                    <span className="text-slate-300 font-medium">{act.title}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }

  if (type === 'leads') {
    return <LeadManagementFullDemo isModal={isModal} />
  }

  if (type === 'automation') {
    return <AutomationFullDemo isModal={isModal} />
  }

  return <AnalyticsVoiceFullDemo isModal={isModal} />
}

function LeadManagementFullDemo({ isModal }) {
  const [leads, setLeads] = useState(MOCK_LEADS)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')
  const [selectedLead, setSelectedLead] = useState(null)
  const [exportNotice, setExportNotice] = useState(false)

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus =
      statusFilter === 'all' ? true : lead.status.toLowerCase() === statusFilter.toLowerCase()
    const matchesSource =
      sourceFilter === 'all' ? true : lead.source.toLowerCase() === sourceFilter.toLowerCase()
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.service.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSource && matchesSearch
  })

  const handleStatusChange = (id, newStatus) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    )
  }

  const handleAssignChange = (id, newAssignee) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, assignedTo: newAssignee } : l))
    )
  }

  const triggerExport = () => {
    setExportNotice(true)
    setTimeout(() => setExportNotice(false), 3000)
  }

  return (
    <div className="w-full bg-[#F8FAFC] text-slate-900 rounded-xl border border-slate-200 overflow-hidden font-sans shadow-lg relative">
      
      {/* EXPORT DEMO NOTIFICATION BANNER */}
      {exportNotice && (
        <div className="absolute top-3 right-3 z-50 bg-emerald-600 text-white text-xs px-3.5 py-2 rounded-lg shadow-xl flex items-center space-x-2 animate-bounce">
          <Check className="h-4 w-4" />
          <span>Demo Action: Exported {filteredLeads.length} lead records to CSV</span>
        </div>
      )}

      {/* TOP NAVBAR */}
      <header className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              <Zap className="h-4 w-4" />
            </div>
            <span className="text-sm font-extrabold text-slate-900 tracking-tight">Nexora AI</span>
          </div>
          <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">
            Enterprise CRM
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="h-3.5 w-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              readOnly
              placeholder="Search counsellors, conversations, contacts..."
              className="w-full bg-slate-100/80 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-700 focus:outline-none"
            />
          </div>
        </div>

        {/* User & Notifications */}
        <div className="flex items-center space-x-3">
          <div className="relative p-1.5 text-slate-500 hover:text-slate-700 cursor-pointer">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600" />
          </div>
          <div className="flex items-center space-x-2 pl-2 border-l border-slate-200">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center">
              BM
            </div>
            <div className="hidden sm:block text-left">
              <span className="text-xs font-bold text-slate-900 block leading-none">Barun Mishra</span>
              <span className="text-[10px] text-slate-500 block leading-none mt-0.5">Nexora AI</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN APPLICATION CONTAINER */}
      <div className="flex min-h-[580px]">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-52 bg-white border-r border-slate-200 p-3 space-y-4 hidden md:block flex-shrink-0">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 block mb-1">
              Menu
            </span>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <LayoutDashboard className="h-4 w-4 text-slate-500" />
              <span>Dashboard</span>
            </a>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <MessageSquare className="h-4 w-4 text-slate-500" />
              <span>Inbox</span>
            </a>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <Users className="h-4 w-4 text-slate-500" />
              <span>Counsellors</span>
            </a>

            {/* Active Parent Item: Leads */}
            <div className="space-y-0.5 pt-1">
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold">
                <div className="flex items-center space-x-2.5">
                  <UserCheck className="h-4 w-4 text-blue-600" />
                  <span>Leads</span>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-blue-600" />
              </div>
              
              {/* Sub items */}
              <div className="pl-6 space-y-0.5 pt-0.5">
                <a href="#demo" className="block px-2.5 py-1 rounded-md text-xs font-bold text-blue-600 bg-blue-100/60 border-l-2 border-blue-600">
                  Lead Management
                </a>
                <a href="#demo" className="block px-2.5 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-800">
                  Lead List
                </a>
              </div>
            </div>

            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <Bot className="h-4 w-4 text-slate-500" />
              <span>Chatbots</span>
            </a>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <Phone className="h-4 w-4 text-slate-500" />
              <span>Calls</span>
            </a>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <Send className="h-4 w-4 text-slate-500" />
              <span>Campaigns</span>
            </a>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <BarChart3 className="h-4 w-4 text-slate-500" />
              <span>Reports</span>
            </a>
          </div>

          <div className="pt-3 border-t border-slate-200">
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <Sliders className="h-4 w-4 text-slate-500" />
              <span>Settings</span>
            </a>
          </div>
        </aside>

        {/* CONTENT WORKSPACE */}
        <main className="flex-1 p-4 md:p-5 space-y-4 overflow-x-hidden">
          
          {/* PAGE HEADER */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-md bg-blue-100 text-blue-600">
                  <UserCheck className="h-4 w-4" />
                </div>
                <h2 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">Lead Management</h2>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Monitor, manage and assign leads to counsellors for follow-up and conversion.
              </p>
            </div>

            {/* Date Selector */}
            <div className="flex items-center space-x-2 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
              <Calendar className="h-3.5 w-3.5 text-blue-600" />
              <div className="text-left">
                <span className="text-[9px] font-mono text-slate-400 uppercase font-semibold block leading-none">Date Range</span>
                <span className="text-xs font-bold text-slate-800 leading-tight">01 Oct 2026 – 31 Oct 2026</span>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400 ml-1" />
            </div>
          </div>

          {/* 5 KPI CARDS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs relative overflow-hidden border-t-4 border-t-blue-600">
              <span className="text-[11px] font-semibold text-slate-500 block">New Leads</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xl font-extrabold text-slate-900">128</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  +18.4%
                </span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">vs. last period</span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs relative overflow-hidden border-t-4 border-t-purple-600">
              <span className="text-[11px] font-semibold text-slate-500 block">Contacted</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xl font-extrabold text-slate-900">82</span>
                <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">
                  +12.1%
                </span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">vs. last period</span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs relative overflow-hidden border-t-4 border-t-emerald-600">
              <span className="text-[11px] font-semibold text-slate-500 block">Qualified</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xl font-extrabold text-slate-900">46</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  +9.7%
                </span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">vs. last period</span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs relative overflow-hidden border-t-4 border-t-orange-500">
              <span className="text-[11px] font-semibold text-slate-500 block">Converted</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xl font-extrabold text-slate-900">18</span>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
                  +5.9%
                </span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">vs. last period</span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs relative overflow-hidden border-t-4 border-t-sky-500 col-span-2 sm:col-span-1">
              <span className="text-[11px] font-semibold text-slate-500 block">Conversion Rate</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xl font-extrabold text-blue-600">14.1%</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  +2.4%
                </span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">vs. last period</span>
            </div>
          </div>

          {/* FUNNEL & SOURCE BREAKDOWN ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
            
            {/* Lead Pipeline Funnel (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 flex items-center">
                    <Layers className="h-3.5 w-3.5 text-blue-600 mr-1.5" />
                    Lead Pipeline Funnel
                  </h4>
                  <p className="text-[11px] text-slate-500">Total leads across different stages</p>
                </div>
                <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Stage Conversion
                </span>
              </div>

              {/* Visual Funnel Bars */}
              <div className="space-y-2.5 pt-1">
                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span className="text-slate-700">New Leads</span>
                    <span className="font-bold text-slate-900">128 (100%)</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-md overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-md w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span className="text-slate-700">Contacted</span>
                    <span className="font-bold text-slate-900">82 (64%)</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-md overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-md w-[64%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span className="text-slate-700">Qualified</span>
                    <span className="font-bold text-slate-900">46 (36%)</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-md overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-md w-[36%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span className="text-slate-700">Converted</span>
                    <span className="font-bold text-slate-900">18 (14%)</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-md overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-md w-[14%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Source Breakdown (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center">
                      <PieChart className="h-3.5 w-3.5 text-blue-600 mr-1.5" />
                      Lead Source Breakdown
                    </h4>
                    <p className="text-[11px] text-slate-500">Where your leads are coming from</p>
                  </div>
                </div>

                {/* SVG Donut Chart + Legend */}
                <div className="flex items-center justify-around py-2">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-blue-600"
                        strokeDasharray="52, 100"
                        strokeWidth="4"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-500"
                        strokeDasharray="14, 100"
                        strokeDashoffset="-52"
                        strokeWidth="4"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-purple-600"
                        strokeDasharray="21, 100"
                        strokeDashoffset="-66"
                        strokeWidth="4"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-base font-extrabold text-slate-900 block leading-none">128</span>
                      <span className="text-[9px] text-slate-400 font-medium">Total Leads</span>
                    </div>
                  </div>

                  {/* Legend List */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                      <span className="text-slate-600">Website: <strong className="text-slate-900">52%</strong></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-purple-600" />
                      <span className="text-slate-600">Social: <strong className="text-slate-900">21%</strong></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span className="text-slate-600">Chatbot: <strong className="text-slate-900">14%</strong></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                      <span className="text-slate-600">Referral: <strong className="text-slate-900">8%</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* LEAD MANAGEMENT DATA TABLE */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
            
            {/* Table Header & Actions */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2">
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-bold text-slate-900">Lead Records</h3>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  {filteredLeads.length} Items
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Search Input */}
                <div className="relative">
                  <Search className="h-3.5 w-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search name, email, phone..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 w-44 sm:w-56"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="converted">Converted</option>
                </select>

                {/* Export Button */}
                <button
                  onClick={triggerExport}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1 cursor-pointer shadow-2xs"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Export</span>
                </button>
              </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-2.5 px-3 w-8">#</th>
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3">Email</th>
                    <th className="py-2.5 px-3">Phone</th>
                    <th className="py-2.5 px-3">Service</th>
                    <th className="py-2.5 px-3">Source</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3">Assign To</th>
                    <th className="py-2.5 px-3">Added</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredLeads.map((lead, idx) => (
                    <tr
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className="hover:bg-blue-50/50 transition-colors cursor-pointer"
                    >
                      <td className="py-2.5 px-3 font-mono text-slate-400 text-[11px]">{idx + 1}</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900 flex items-center space-x-2">
                        <div className="h-6 w-6 rounded-full bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center">
                          {lead.avatar}
                        </div>
                        <span>{lead.name}</span>
                      </td>
                      <td className="py-2.5 px-3 text-slate-600 font-mono text-[11px]">{lead.email}</td>
                      <td className="py-2.5 px-3 text-slate-600">{lead.phone}</td>
                      <td className="py-2.5 px-3 text-slate-800 font-medium">{lead.service}</td>
                      <td className="py-2.5 px-3">
                        <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {lead.source}
                        </span>
                      </td>
                      <td className="py-2.5 px-3" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded border focus:outline-none cursor-pointer ${
                            lead.status === 'New'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : lead.status === 'Contacted'
                              ? 'bg-purple-50 text-purple-700 border-purple-200'
                              : lead.status === 'Qualified'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-orange-50 text-orange-700 border-orange-200'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Qualified">Qualified</option>
                          <option value="Converted">Converted</option>
                        </select>
                      </td>
                      <td className="py-2.5 px-3" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={lead.assignedTo}
                          onChange={(e) => handleAssignChange(lead.id, e.target.value)}
                          className="text-xs bg-white border border-slate-200 rounded px-2 py-0.5 text-slate-700 focus:outline-none cursor-pointer"
                        >
                          {TEAM_MEMBERS.map((member) => (
                            <option key={member} value={member}>
                              {member}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="py-2.5 px-3 text-slate-400 font-mono text-[11px]">{lead.added}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>Showing 1 to {filteredLeads.length} of {leads.length} entries</span>
              <div className="flex items-center space-x-1">
                <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50">
                  Previous
                </button>
                <button className="px-2.5 py-1 rounded bg-blue-600 text-white font-semibold shadow-2xs">
                  1
                </button>
                <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>

          </div>

        </main>
      </div>

      {/* LEAD DETAIL OVERLAY DRAWER */}
      {selectedLead && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex justify-end animate-in fade-in">
          <div className="w-full max-w-md bg-white h-full border-l border-slate-200 p-5 space-y-4 shadow-2xl overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-blue-600 text-white font-bold text-base flex items-center justify-center shadow-md">
                  {selectedLead.avatar}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{selectedLead.name}</h3>
                  <span className="text-xs text-slate-500 font-mono">{selectedLead.location}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 text-xs">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Contact Information</span>
              <div className="flex items-center space-x-2 text-slate-700">
                <Mail className="h-3.5 w-3.5 text-blue-600" />
                <span className="font-mono">{selectedLead.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <Phone className="h-3.5 w-3.5 text-emerald-600" />
                <span>{selectedLead.phone}</span>
              </div>
            </div>

            {/* Lead Meta */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <span className="text-[10px] text-slate-400 block font-medium">Interested Service</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{selectedLead.service}</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <span className="text-[10px] text-slate-400 block font-medium">Lead Source</span>
                <span className="font-bold text-blue-600 mt-0.5 block">{selectedLead.source}</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <span className="text-[10px] text-slate-400 block font-medium">Assigned Counsellor</span>
                <span className="font-bold text-slate-800 mt-0.5 block">{selectedLead.assignedTo}</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <span className="text-[10px] text-slate-400 block font-medium">Priority</span>
                <span className="font-bold text-emerald-600 mt-0.5 block">{selectedLead.priority}</span>
              </div>
            </div>

            {/* Conversation Summary */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">AI Conversation Summary</span>
              <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-3 text-xs text-slate-700 leading-relaxed font-sans">
                "{selectedLead.summary}"
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Activity Timeline</span>
              <div className="space-y-2">
                {selectedLead.activity.map((act, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs">
                    <span className="h-2 w-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-800 block">{act.title}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{act.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

function AutomationFullDemo({ isModal }) {
  const [activeWorkflow, setActiveWorkflow] = useState({
    title: 'New Lead Nurture Flow',
    status: 'Active',
    created: '05 Oct 2026',
    modified: '12 Oct 2026',
    runs: 842,
    successRate: '96.2%',
  })
  const [isTesting, setIsTesting] = useState(false)
  const [isSavedNotice, setIsSavedNotice] = useState(false)
  const [activeToggle, setActiveToggle] = useState(true)
  const [zoomLevel, setZoomLevel] = useState(100)
  const [selectedNode, setSelectedNode] = useState('trigger-1')
  const [toastMessage, setToastMessage] = useState(null)

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  const handleTestRun = () => {
    setIsTesting(true)
    showToast('Simulating workflow run across 4 nodes...')
    setTimeout(() => {
      setIsTesting(false)
      showToast('Workflow test succeeded! All 4 nodes executed cleanly.')
    }, 2000)
  }

  const handleSave = () => {
    setIsSavedNotice(true)
    showToast('Workflow changes saved to Nexora AI cloud.')
    setTimeout(() => setIsSavedNotice(false), 2500)
  }

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(150, Math.max(70, prev + delta)))
  }

  const loadTemplate = (tpl) => {
    setActiveWorkflow((prev) => ({ ...prev, title: tpl.title }))
    showToast(`Loaded template: "${tpl.title}" into canvas.`)
  }

  return (
    <div className="w-full bg-[#F8FAFC] text-slate-900 rounded-xl border border-slate-200 overflow-hidden font-sans shadow-lg relative">
      
      {/* TOAST FEEDBACK NOTIFICATION */}
      {toastMessage && (
        <div className="absolute top-3 right-3 z-50 bg-blue-600 text-white text-xs px-3.5 py-2 rounded-lg shadow-xl flex items-center space-x-2 animate-bounce">
          <Sparkles className="h-4 w-4 text-blue-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP NAVBAR */}
      <header className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              <Zap className="h-4 w-4" />
            </div>
            <span className="text-sm font-extrabold text-slate-900 tracking-tight">Nexora AI</span>
          </div>
          <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">
            Workflow Engine
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="h-3.5 w-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              readOnly
              placeholder="Search workflows, triggers, actions..."
              className="w-full bg-slate-100/80 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-700 focus:outline-none"
            />
          </div>
        </div>

        {/* User & Notifications */}
        <div className="flex items-center space-x-3">
          <div className="relative p-1.5 text-slate-500 hover:text-slate-700 cursor-pointer">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600" />
          </div>
          <div className="flex items-center space-x-2 pl-2 border-l border-slate-200">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center">
              BM
            </div>
            <div className="hidden sm:block text-left">
              <span className="text-xs font-bold text-slate-900 block leading-none">Barun Mishra</span>
              <span className="text-[10px] text-slate-500 block leading-none mt-0.5">Nexora AI</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN APPLICATION CONTAINER */}
      <div className="flex min-h-[620px]">
        
        {/* SIDEBAR NAVIGATION (CLEAN NO PROMOTIONAL BANNER) */}
        <aside className="w-52 bg-white border-r border-slate-200 p-3 space-y-4 hidden md:block flex-shrink-0">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 block mb-1">
              Platform Menu
            </span>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <LayoutDashboard className="h-4 w-4 text-slate-500" />
              <span>Dashboard</span>
            </a>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <MessageSquare className="h-4 w-4 text-slate-500" />
              <span>Inbox</span>
            </a>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <Bot className="h-4 w-4 text-slate-500" />
              <span>Chatbot Builder</span>
            </a>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <UserCheck className="h-4 w-4 text-slate-500" />
              <span>Leads</span>
            </a>

            {/* Active Parent Item: Automation */}
            <div className="space-y-0.5 pt-1">
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold">
                <div className="flex items-center space-x-2.5">
                  <Workflow className="h-4 w-4 text-blue-600" />
                  <span>Automation</span>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-blue-600" />
              </div>
              
              {/* Sub items */}
              <div className="pl-6 space-y-0.5 pt-0.5">
                <a href="#demo" className="block px-2.5 py-1 rounded-md text-xs font-bold text-blue-600 bg-blue-100/60 border-l-2 border-blue-600">
                  Workflows
                </a>
                <a href="#demo" className="block px-2.5 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-800">
                  Templates
                </a>
                <a href="#demo" className="block px-2.5 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-800">
                  Integrations
                </a>
              </div>
            </div>

            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <Phone className="h-4 w-4 text-slate-500" />
              <span>Calls</span>
            </a>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <Send className="h-4 w-4 text-slate-500" />
              <span>Campaigns</span>
            </a>
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <BarChart3 className="h-4 w-4 text-slate-500" />
              <span>Analytics</span>
            </a>
          </div>

          <div className="pt-3 border-t border-slate-200">
            <a href="#demo" className="flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
              <Sliders className="h-4 w-4 text-slate-500" />
              <span>Settings</span>
            </a>
          </div>
        </aside>

        {/* WORKSPACE MAIN */}
        <main className="flex-1 p-4 md:p-5 space-y-4 overflow-x-hidden flex flex-col justify-between">
          
          <div className="space-y-4">
            
            {/* PAGE HEADER */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-md bg-blue-100 text-blue-600">
                    <Workflow className="h-4 w-4" />
                  </div>
                  <h2 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">Automation</h2>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Create powerful automation workflows to save time and convert more leads.
                </p>
              </div>

              <button
                onClick={() => showToast('New workflow builder canvas initialized.')}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors flex items-center space-x-1.5 shadow-sm cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span>Create Workflow</span>
              </button>
            </div>

            {/* 4 KPI METRICS CARDS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs relative overflow-hidden border-t-4 border-t-blue-600">
                <span className="text-[11px] font-semibold text-slate-500 block">Active Workflows</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl font-extrabold text-slate-900">12</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    +20% vs last month
                  </span>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs relative overflow-hidden border-t-4 border-t-purple-600">
                <span className="text-[11px] font-semibold text-slate-500 block">Leads Processed</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl font-extrabold text-slate-900">842</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    +32% vs last month
                  </span>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs relative overflow-hidden border-t-4 border-t-emerald-600">
                <span className="text-[11px] font-semibold text-slate-500 block">Time Saved</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl font-extrabold text-slate-900">28.5 hrs</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    +45% vs last month
                  </span>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs relative overflow-hidden border-t-4 border-t-teal-500">
                <span className="text-[11px] font-semibold text-slate-500 block">Automation Success Rate</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl font-extrabold text-blue-600">96.2%</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    +4% vs last month
                  </span>
                </div>
              </div>
            </div>

            {/* 3-COLUMN WORKFLOW BUILDER WORKSPACE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
              
              {/* LEFT: TRIGGERS & ACTIONS LIBRARY (3 cols on lg) */}
              <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-3.5 space-y-4 shadow-2xs">
                
                {/* Triggers Section */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Triggers
                  </span>
                  <div className="space-y-1.5">
                    {MOCK_TRIGGERS.map((trig) => (
                      <button
                        key={trig.id}
                        onClick={() => showToast(`Selected trigger node: "${trig.title}"`)}
                        className="w-full text-left p-2 rounded-lg bg-slate-50 border border-slate-200 hover:bg-blue-50/60 hover:border-blue-300 transition-all cursor-pointer block"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="h-6 w-6 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                            <Zap className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-900 block leading-tight">{trig.title}</span>
                            <span className="text-[10px] text-slate-500 block leading-tight">{trig.desc}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions Section */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Actions
                  </span>
                  <div className="space-y-1.5">
                    {MOCK_ACTIONS.map((act) => (
                      <button
                        key={act.id}
                        onClick={() => showToast(`Added action node: "${act.title}"`)}
                        className="w-full text-left p-2 rounded-lg bg-slate-50 border border-slate-200 hover:bg-emerald-50/60 hover:border-emerald-300 transition-all cursor-pointer block"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="h-6 w-6 rounded-md bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                            <Workflow className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-900 block leading-tight">{act.title}</span>
                            <span className="text-[10px] text-slate-500 block leading-tight">{act.desc}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* CENTER: VISUAL WORKFLOW CANVAS (6 cols on lg) */}
              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between shadow-2xs space-y-3 min-h-[460px]">
                
                {/* Canvas Control Header */}
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xs font-bold text-slate-900">{activeWorkflow.title}</h3>
                    <button
                      onClick={() => setActiveToggle(!activeToggle)}
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border cursor-pointer ${
                        activeToggle
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                          : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      {activeToggle ? 'Active' : 'Paused'}
                    </button>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs">
                    <button
                      onClick={handleTestRun}
                      disabled={isTesting}
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <Play className="h-3 w-3 text-blue-600" />
                      <span>{isTesting ? 'Testing...' : 'Test'}</span>
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-2.5 py-1 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors flex items-center space-x-1 cursor-pointer shadow-2xs"
                    >
                      <Save className="h-3 w-3" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>

                {/* Canvas Body with Grid Pattern */}
                <div className="relative flex-1 rounded-lg border border-slate-200 bg-slate-50/50 p-4 flex flex-col items-center justify-center overflow-auto min-h-[360px] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]">
                  
                  {/* Canvas Controls overlay */}
                  <div className="absolute top-2 right-2 bg-white border border-slate-200 rounded-lg p-1 flex items-center space-x-1 text-slate-600 shadow-2xs z-10">
                    <button onClick={() => handleZoom(10)} className="p-1 hover:bg-slate-100 rounded cursor-pointer">
                      <ZoomIn className="h-3.5 w-3.5" />
                    </button>
                    <span className="text-[10px] font-mono font-bold px-1 text-slate-700">{zoomLevel}%</span>
                    <button onClick={() => handleZoom(-10)} className="p-1 hover:bg-slate-100 rounded cursor-pointer">
                      <ZoomOut className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => showToast('Expanded canvas view.')} className="p-1 hover:bg-slate-100 rounded cursor-pointer">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* WORKFLOW NODES & BRANCHING LOGIC FLOW */}
                  <div
                    style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                    className="space-y-3 w-full max-w-md transition-transform duration-200"
                  >
                    
                    {/* NODE 1: TRIGGER */}
                    <div
                      onClick={() => setSelectedNode('trigger-1')}
                      className={`p-3 rounded-xl bg-white border-2 shadow-sm cursor-pointer transition-all ${
                        selectedNode === 'trigger-1' ? 'border-blue-600 ring-2 ring-blue-100' : 'border-blue-200'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="h-7 w-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase text-blue-600 font-bold block leading-none">Trigger</span>
                          <h4 className="text-xs font-bold text-slate-900 mt-0.5">New Lead Captured</h4>
                          <span className="text-[10px] text-slate-500">From website chatbot widget</span>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Line Down */}
                    <div className="flex justify-center">
                      <div className="h-4 w-0.5 bg-blue-400" />
                    </div>

                    {/* NODE 2: CONDITION */}
                    <div
                      onClick={() => setSelectedNode('condition-1')}
                      className={`p-3 rounded-xl bg-white border-2 shadow-sm cursor-pointer transition-all ${
                        selectedNode === 'condition-1' ? 'border-purple-600 ring-2 ring-purple-100' : 'border-purple-200'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="h-7 w-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold">
                          <GitBranch className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase text-purple-600 font-bold block leading-none">Condition</span>
                          <h4 className="text-xs font-bold text-slate-900 mt-0.5">Interested in Demo?</h4>
                          <span className="text-[10px] text-slate-500">Intent score &gt; 75%</span>
                        </div>
                      </div>
                    </div>

                    {/* BRANCHING BRANCHES: YES / NO */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      
                      {/* YES BRANCH */}
                      <div className="space-y-2 border-l-2 border-emerald-400 pl-2">
                        <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                          YES PATH
                        </span>

                        <div className="p-2.5 rounded-lg bg-white border border-emerald-200 shadow-2xs text-left">
                          <span className="text-[9px] font-mono text-emerald-600 font-bold block">ACTION</span>
                          <h5 className="text-[11px] font-bold text-slate-900">Send Message</h5>
                          <p className="text-[10px] text-slate-500">Send demo details & calendar</p>
                        </div>

                        <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs text-left">
                          <span className="text-[9px] font-mono text-slate-400 font-bold block">WAIT</span>
                          <h5 className="text-[11px] font-bold text-slate-800">1 Day</h5>
                        </div>

                        <div className="p-2.5 rounded-lg bg-white border border-emerald-200 shadow-2xs text-left">
                          <span className="text-[9px] font-mono text-emerald-600 font-bold block">ACTION</span>
                          <h5 className="text-[11px] font-bold text-slate-900">Add Tag</h5>
                          <span className="text-[9px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-mono border border-emerald-200">
                            Demo Interested
                          </span>
                        </div>
                      </div>

                      {/* NO BRANCH */}
                      <div className="space-y-2 border-l-2 border-rose-400 pl-2">
                        <span className="text-[9px] font-bold bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded">
                          NO PATH
                        </span>

                        <div className="p-2.5 rounded-lg bg-white border border-rose-200 shadow-2xs text-left">
                          <span className="text-[9px] font-mono text-rose-600 font-bold block">ACTION</span>
                          <h5 className="text-[11px] font-bold text-slate-900">Send Message</h5>
                          <p className="text-[10px] text-slate-500">Send educational resources</p>
                        </div>

                        <div className="p-2.5 rounded-lg bg-white border border-rose-200 shadow-2xs text-left">
                          <span className="text-[9px] font-mono text-rose-600 font-bold block">ACTION</span>
                          <h5 className="text-[11px] font-bold text-slate-900">Add Tag</h5>
                          <span className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-mono border border-amber-200">
                            Need Follow Up
                          </span>
                        </div>

                        <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs text-left">
                          <span className="text-[9px] font-mono text-slate-400 font-bold block">WAIT</span>
                          <h5 className="text-[11px] font-bold text-slate-800">3 Days</h5>
                        </div>
                      </div>

                    </div>

                    {/* MERGE NODE: ASSIGNMENT */}
                    <div className="pt-2">
                      <div className="p-3 rounded-xl bg-white border-2 border-blue-300 shadow-xs text-center">
                        <span className="text-[10px] font-mono uppercase text-blue-600 font-bold block">Final Step</span>
                        <h4 className="text-xs font-bold text-slate-900">Assign to Team & Sync CRM</h4>
                        <p className="text-[10px] text-slate-500 mt-0.5">Route to Sarah Kumar & push event to CRM</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* RIGHT: WORKFLOW DETAILS & RECENT RUNS (3 cols on lg) */}
              <div className="lg:col-span-3 space-y-3">
                
                {/* Workflow Details Panel */}
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h4 className="text-xs font-bold text-slate-900">Workflow Details</h4>
                    <span className="text-[9px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                      ACTIVE
                    </span>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-900 leading-tight">{activeWorkflow.title}</h5>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Automated follow-up for new leads captured from website chatbot.
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs pt-1 border-t border-slate-100">
                    <div className="flex justify-between"><span className="text-slate-500">Created:</span> <span className="font-mono text-slate-800">{activeWorkflow.created}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Last Modified:</span> <span className="font-mono text-slate-800">{activeWorkflow.modified}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Total Runs:</span> <span className="font-bold text-slate-900">{activeWorkflow.runs}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Success Rate:</span> <span className="font-bold text-emerald-600">{activeWorkflow.successRate}</span></div>
                  </div>

                  <button
                    onClick={() => showToast('Workflow editor unlocked.')}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Edit Workflow
                  </button>
                </div>

                {/* Recent Runs Panel */}
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2 shadow-2xs">
                  <span className="text-xs font-bold text-slate-900 block border-b border-slate-100 pb-1.5">
                    Recent Runs Activity
                  </span>
                  <div className="space-y-2">
                    {MOCK_RECENT_RUNS.map((run) => (
                      <div key={run.id} className="flex items-start space-x-2 text-xs p-1.5 rounded bg-slate-50 border border-slate-100">
                        <span
                          className={`h-2 w-2 rounded-full mt-1 flex-shrink-0 ${
                            run.status === 'success' ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                        />
                        <div className="flex-1">
                          <span className="font-semibold text-slate-800 block leading-tight">{run.title}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{run.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* AUTOMATION TEMPLATES ROW (4 CARDS AT BOTTOM) */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Pre-Built Automation Templates</h3>
                  <p className="text-[11px] text-slate-500">Deploy tested workflows for instant lead qualification & follow-up</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {MOCK_TEMPLATES.map((tpl) => (
                  <div key={tpl.id} className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-col justify-between space-y-2 hover:border-blue-300 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900">{tpl.title}</span>
                        <span className="text-[9px] font-semibold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-200">
                          {tpl.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{tpl.desc}</p>
                    </div>

                    <button
                      onClick={() => loadTemplate(tpl)}
                      className="template-use-btn w-full bg-white hover:bg-blue-600 hover:text-white border border-slate-300 hover:border-blue-600 text-slate-800 text-xs font-semibold py-1.5 rounded-lg shadow-xs transition-all cursor-pointer"
                    >
                      Use Template
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </main>
      </div>

    </div>
  )
}

function AnalyticsVoiceFullDemo({ isModal }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(14)
  const [toastMsg, setToastMsg] = useState(null)
  const [activeSignal, setActiveSignal] = useState('intent')

  const showToast = (msg) => {
    setToastMsg(msg)
    setTimeout(() => setToastMsg(null), 3000)
  }

  // Audio Playback Simulator
  useEffect(() => {
    let timer
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 278) {
            setIsPlaying(false)
            return 14
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isPlaying])

  const formatAudioTime = (secs) => {
    const mins = Math.floor(secs / 60)
    const rem = secs % 60
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`
  }

  // AI Interpretation stage based on play time
  const getAiState = () => {
    if (currentTime < 20) return { label: 'Detecting Customer Intent...', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' }
    if (currentTime < 40) return { label: 'Pricing Inquiry Identified', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' }
    if (currentTime < 70) return { label: 'Positive Sentiment (+4.8/5.0)', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' }
    if (currentTime < 100) return { label: 'Qualified Enterprise Lead', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' }
    return { label: 'Human Handover Recommended', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' }
  }

  const currentAiState = getAiState()

  return (
    <div className="w-full bg-[#070A0F] text-slate-100 rounded-xl border border-white/10 p-5 md:p-7 overflow-hidden font-sans space-y-6 relative transition-all duration-300">
      
      {/* Toast Feedback */}
      {toastMsg && (
        <div className="absolute top-4 right-4 z-50 bg-blue-600 text-white text-xs px-3.5 py-2 rounded-lg shadow-xl flex items-center space-x-2 animate-bounce">
          <Sparkles className="h-4 w-4 text-blue-200" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* SECTION HEADER & INTRO BADGES */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-white/[0.08] gap-4">
        <div>
          <div className="flex items-center space-x-2.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 font-bold">
              06 ANALYTICS & VOICE
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-400 font-mono">Live Telemetry & Intelligence Flow</span>
          </div>
          <h3 className="text-lg md:text-2xl font-extrabold text-white tracking-tight mt-1.5">
            Turn every conversation into actionable intelligence.
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Nexora AI connects voice stream analysis, customer sentiment, automated lead scoring, and human escalation into a unified decision layer.
          </p>
        </div>

        {/* End-to-End Pipeline Signal Strip */}
        <div className="flex items-center space-x-1.5 bg-[#0D131D] border border-white/[0.06] p-2 rounded-xl text-[10px] text-slate-400 font-mono overflow-x-auto shrink-0">
          <span className="text-blue-400 font-semibold">Conversation</span>
          <span>→</span>
          <span className="text-violet-400 font-semibold">AI Analysis</span>
          <span>→</span>
          <span className="text-emerald-400 font-semibold">Lead Captured</span>
          <span>→</span>
        </div>
      </div>



      {/* MAIN HERO CONTENT COMPOSITION */}
      <div className="space-y-6">

        {/* 1. CENTRAL VOICE HERO + INTELLIGENCE SIGNAL MODULES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* LEFT 7 COLS: Central Voice Intelligence Hero */}
          <div className="lg:col-span-7 bg-[#0D131D] border border-blue-500/30 rounded-2xl p-5 md:p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            {/* Top Atmospheric Accent Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5">
              {/* Voice Card Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-500/20">
                    <Mic className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm md:text-base font-extrabold text-white tracking-tight">
                        Sarah Wilson
                      </h3>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" /> LIVE STREAM
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">+1 (202) 555-0143 • Enterprise Consultation</span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono block">Voice Stream</span>
                  <span className="text-xs font-mono font-bold text-blue-400">98.6% Accuracy</span>
                </div>
              </div>

              {/* Audio Waveform Control Bar */}
              <div className="bg-[#101824] border border-white/[0.06] rounded-xl p-4 space-y-3 shadow-inner">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="h-11 w-11 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center flex-shrink-0 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30 cursor-pointer"
                  >
                    {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 ml-0.5 fill-current" />}
                  </button>

                  <div className="flex-1 space-y-1.5">
                    {/* SVG Interactive Waveform */}
                    <div className="flex items-center space-x-1 h-9">
                      {[35, 60, 40, 85, 95, 50, 70, 90, 40, 75, 100, 60, 80, 45, 85, 95, 70, 40, 80, 90, 55, 70, 85, 40, 65, 90].map((heightPct, idx) => (
                        <div
                          key={idx}
                          style={{ height: `${heightPct}%` }}
                          className={`flex-1 rounded-full transition-colors duration-200 ${
                            (idx * 10) <= currentTime ? 'bg-gradient-to-t from-blue-600 to-cyan-400 shadow-xs shadow-cyan-400/50' : 'bg-slate-800'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span className="text-blue-400 font-bold">{formatAudioTime(currentTime)}</span>
                      <span>Audio Waveform • 00:04:38</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transcript Snippet */}
              <div className="bg-[#101824]/60 border border-white/[0.06] rounded-xl p-4 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  <span>Customer Excerpt</span>
                  <span className="text-slate-400">00:00:24</span>
                </div>
                <div className="space-y-1.5">
                  <p className="text-slate-300 font-sans italic leading-relaxed">
                    “I want to understand how your AI customer support solution works and if it can handle complex product queries.”
                  </p>
                  <div className="flex items-center space-x-2 text-[11px] text-blue-400 font-medium pt-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>AI Assistant responded with customized feature breakdown & pricing tier</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom AI Status Bar */}
            <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center space-x-2 text-slate-400">
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                <span>AI understood conversation context</span>
              </div>
              <span className="text-slate-500">Latency: <strong className="text-slate-300">410ms</strong></span>
            </div>
          </div>

          {/* RIGHT 5 COLS: Floating Intelligence Signal Modules */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 flex-col justify-between">

            {/* Signal 1: INTENT */}
            <div className="bg-[#0D131D] border border-white/[0.08] rounded-xl p-4 hover:border-blue-500/40 transition-colors shadow-lg group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center">
                  <Zap className="h-3 w-3 mr-1" /> INTENT DETECTED
                </span>
                <span className="text-[10px] font-mono text-slate-500">Confidence 98%</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                Pricing Inquiry & Demo Request
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                High commercial intent identified from keyword cluster analysis.
              </p>
            </div>

            {/* Signal 2: SENTIMENT */}
            <div className="bg-[#0D131D] border border-white/[0.08] rounded-xl p-4 hover:border-emerald-500/40 transition-colors shadow-lg group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center">
                  <Smile className="h-3 w-3 mr-1" /> SENTIMENT ANALYSIS
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  Positive (+4.8/5.0)
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                Confident & Engaged Tone
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Customer expressed satisfaction with response speed and technical accuracy.
              </p>
            </div>

            {/* Signal 3: LEAD SIGNAL */}
            <div className="bg-[#0D131D] border border-white/[0.08] rounded-xl p-4 hover:border-violet-500/40 transition-colors shadow-lg group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-violet-400 font-bold flex items-center">
                  <UserCheck className="h-3 w-3 mr-1" /> LEAD SIGNAL
                </span>
                <span className="text-[10px] font-mono text-violet-400 font-bold bg-violet-500/10 px-1.5 py-0.5 rounded border border-violet-500/20">
                  High Value
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                Qualified Enterprise Prospect
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Lead score updated to 88/100. CRM profile automatically enriched.
              </p>
            </div>

            {/* Signal 4: NEXT ACTION */}
            <div className="bg-[#0D131D] border border-white/[0.08] rounded-xl p-4 hover:border-cyan-500/40 transition-colors shadow-lg group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center">
                  <ShieldCheck className="h-3 w-3 mr-1" /> RECOMMENDED ACTION
                </span>
                <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                  Human Handover
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                Sales Follow-up Scheduled
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Warm handover packet dispatched to Account Executive team.
              </p>
            </div>

          </div>

        </div>

        {/* 2. REFINED BUSINESS INTELLIGENCE INSIGHTS AREA */}
        <div className="bg-[#0D131D] border border-white/[0.08] rounded-2xl p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center">
                <TrendingUp className="h-4 w-4 text-blue-400 mr-2" />
                Interpreted Business Intelligence
              </h3>
              <p className="text-xs text-slate-400">Qualitative AI insights derived from live customer touchpoints</p>
            </div>
            <span className="text-[10px] font-mono text-slate-500">4 Insights Active</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-[#101824] border border-white/[0.06] rounded-xl p-3.5 space-y-2 hover:border-white/[0.15] transition-colors">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold block">Pricing Trends</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Customer questions are increasingly focused on pricing tiers and enterprise scalability.
              </p>
            </div>

            <div className="bg-[#101824] border border-white/[0.06] rounded-xl p-3.5 space-y-2 hover:border-white/[0.15] transition-colors">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">Conversion Velocity</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                High-intent conversations are frequently followed by instant consultation booking requests.
              </p>
            </div>

            <div className="bg-[#101824] border border-white/[0.06] rounded-xl p-3.5 space-y-2 hover:border-white/[0.15] transition-colors">
              <span className="text-[10px] font-mono uppercase tracking-wider text-violet-400 font-bold block">Handover Triggers</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Human handover triggers smoothly when conversations require deeper custom solution architecture.
              </p>
            </div>

            <div className="bg-[#101824] border border-white/[0.06] rounded-xl p-3.5 space-y-2 hover:border-white/[0.15] transition-colors">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">Multimodal Depth</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Voice interactions provide richer sentiment context beyond plain text support channels.
              </p>
            </div>
          </div>
        </div>

        {/* 3. CASE STUDY CONVERGENCE SUMMARY & DEVELOPER CLOSING CTA */}
        <div className="bg-gradient-to-r from-blue-950/40 via-[#0D131D] to-indigo-950/40 border border-blue-500/20 rounded-2xl p-6 md:p-8 space-y-6 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-extrabold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
              CASE STUDY CONCLUSION
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
              From first message to qualified lead to automated action to intelligent conversation.
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nexora AI brings the entire customer journey together into a cohesive, measurable system.
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.08] max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-0.5">
              <h4 className="text-sm font-bold text-white">Need a system like this for your business?</h4>
              <p className="text-xs text-slate-400">I build AI-powered web applications & custom SaaS platforms.</p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center space-x-1.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

