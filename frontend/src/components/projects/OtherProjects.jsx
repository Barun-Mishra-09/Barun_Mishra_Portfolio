import React, { useState } from 'react'
import { OTHER_PROJECTS, PROJECT_FILTERS } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function OtherProjects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = OTHER_PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true
    return project.categories.includes(activeFilter)
  })

  return (
    <section id="projects" className="py-20 border-t border-white/[0.06]">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>Full-Stack Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Other Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Production web applications engineered for scalability, real-time sync, and user workflows.
            </p>
          </div>

          {/* Instant Category Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0B0F16] border border-white/10 self-start md:self-auto">
            {PROJECT_FILTERS.map((filter) => {
              const isActive = activeFilter === filter
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#101722] text-white border border-white/15 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>

        {/* Project List - Stacked vertically */}
        <div className="flex flex-col gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}
