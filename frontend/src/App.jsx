import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/portfolio/Hero'
import { TechStrip } from '@/components/portfolio/TechStrip'
import { NexoraCaseStudy } from '@/components/case-study/NexoraCaseStudy'
import { OtherProjects } from '@/components/projects/OtherProjects'
import { ServicesSection } from '@/components/portfolio/ServicesSection'
import { ProblemSolution } from '@/components/portfolio/ProblemSolution'
import { WhyWorkWithMe } from '@/components/portfolio/WhyWorkWithMe'
import { ProcessSection } from '@/components/portfolio/ProcessSection'
import { ExperienceSection } from '@/components/portfolio/ExperienceSection'
import { AboutSection } from '@/components/portfolio/AboutSection'
import { CtaBanner } from '@/components/portfolio/CtaBanner'
import { ContactSection } from '@/components/portfolio/ContactSection'
import { Footer } from '@/components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#05070B] text-[#F8FAFC] flex flex-col font-sans selection:bg-blue-600/30 selection:text-white">
      {/* 01 Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 02 Hero Section with custom product showcase */}
        <Hero />

        {/* 03 Capability / Tech Strip */}
        <TechStrip />

        {/* 04 Featured Nexora AI Case Study */}
        <NexoraCaseStudy />

        {/* 05 Selected Projects (JobSpot, ChatRecruit) with filtering */}
        <OtherProjects />

        {/* 06 Services Section */}
        <ServicesSection />

        {/* 07 Problem → Solution Scenarios */}
        <ProblemSolution />

        {/* 08 Why Work With Me */}
        <WhyWorkWithMe />

        {/* 09 Process Timeline */}
        <ProcessSection />

        {/* 10 Experience Section */}
        <ExperienceSection />

        {/* 11 About Section */}
        <AboutSection />

        {/* 12 Freelance Service Call to Action */}
        <CtaBanner />

        {/* 13 Contact Section & Inquiry Form */}
        <ContactSection />
      </main>

      {/* 14 Minimalist Editorial Footer */}
      <Footer />
    </div>
  )
}

export default App
