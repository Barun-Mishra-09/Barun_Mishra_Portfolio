import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare, RotateCcw } from 'lucide-react'

const PROJECT_TYPES = [
  'Business Website',
  'AI Chatbot',
  'SaaS Dashboard',
  'Custom Web Application',
  'Automation',
  'API / AI Integration',
  'Website Redesign',
  'Other',
]

const BUDGET_RANGES = [
  'Under ₹10k',
  '₹10k–₹25k',
  '₹25k–₹50k',
  '₹50k+',
  'Not Sure Yet',
]

const rawApiUrl = import.meta.env.VITE_API_BASE_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '')
const API_BASE_URL = rawApiUrl.replace(/\/+$/, '')

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    projectDetails: '',
    website: '', // Invisible honeypot field
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please tell me a little about your project.'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'We couldn\'t send your inquiry right now. Please try again or email me directly.')
      }

      setIsSubmitting(false)
      setIsSuccess(true)
    } catch (err) {
      console.error('[Contact Submission Error]', err)
      setIsSubmitting(false)
      setErrors({
        form: err.message || 'We couldn\'t send your inquiry right now. Please try again or email me directly at barun.mishraofficial1505@gmail.com.',
      })
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-white/[0.06] relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>Direct Project Inquiry</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's Build Something That Matters.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Have an idea, a business problem, or an existing product that needs improvement? Share the details and let's structure a roadmap that fits your timeline and requirements.
            </p>

            <div className="pt-4 space-y-4 border-t border-white/[0.06]">
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Fast Response SLA
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    I personally review all project inquiries within 24 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Direct Technical Advice
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Clear assessment of feasibility, architecture, and realistic time estimates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#0B0F16] p-6 sm:p-10 shadow-2xl">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been recorded. I will review your requirements and reach out via <strong className="text-white">{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsSuccess(false)
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          projectType: '',
                          budget: '',
                          projectDetails: '',
                          website: '',
                        })
                      }}
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Invisible Honeypot Field for Security */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex="-1"
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => handleChange('website', e.target.value)}
                    />
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        placeholder="e.g. Barun Mishra"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={errors.name ? 'border-rose-500/50 focus-visible:border-rose-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 flex items-center mt-1">
                          <AlertCircle className="h-3 w-3 mr-1" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="barun@developer.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={errors.email ? 'border-rose-500/50 focus-visible:border-rose-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 flex items-center mt-1">
                          <AlertCircle className="h-3 w-3 mr-1" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company / Business */}
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company / Organization (Optional)</Label>
                    <Input
                      id="company"
                      placeholder="e.g. Studio Vertex / Early-Stage Startup"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                    />
                  </div>

                  {/* Project Type & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>Project Type</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(val) => handleChange('projectType', val)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type of work" />
                        </SelectTrigger>
                        <SelectContent>
                          {PROJECT_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Estimated Budget</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(val) => handleChange('budget', val)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {BUDGET_RANGES.map((b) => (
                            <SelectItem key={b} value={b}>
                              {b}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <Label htmlFor="projectDetails">Project Details *</Label>
                    <Textarea
                      id="projectDetails"
                      rows={4}
                      placeholder="Briefly describe what you're building, the business problem to solve, or target release timeline..."
                      value={formData.projectDetails}
                      onChange={(e) => handleChange('projectDetails', e.target.value)}
                      className={errors.projectDetails ? 'border-rose-500/50 focus-visible:border-rose-500' : ''}
                    />
                    {errors.projectDetails && (
                      <p className="text-[11px] text-rose-400 flex items-center mt-1">
                        <AlertCircle className="h-3 w-3 mr-1" /> {errors.projectDetails}
                      </p>
                    )}
                  </div>

                  {/* Inline Failure Error Box */}
                  {errors.form && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 space-y-2">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{errors.form}</span>
                      </div>
                      <div className="flex items-center space-x-3 pt-1 border-t border-rose-500/20">
                        <button
                          type="submit"
                          className="text-xs font-bold text-rose-300 hover:text-white underline cursor-pointer flex items-center"
                        >
                          <RotateCcw className="h-3 w-3 mr-1" /> Retry
                        </button>
                        <a
                          href="mailto:barun.mishraofficial1505@gmail.com"
                          className="text-xs font-bold text-blue-400 hover:text-blue-300 underline cursor-pointer flex items-center"
                        >
                          <Mail className="h-3 w-3 mr-1" /> Email Directly
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Let's Build Something</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    Direct communication. No spam, no intermediaries.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
