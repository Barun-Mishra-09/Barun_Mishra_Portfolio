import React, { useState, useEffect } from 'react'
import { Terminal, Menu, ArrowRight, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/context/ThemeContext'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

const NAV_LINKS = [
  { label: 'Featured', href: '#featured' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = ['featured', 'projects', 'services', 'process', 'about']
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070B]/85 backdrop-blur-md border-b border-white/[0.08] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between">
        
        {/* Brand Logo / Left */}
        <a
          href="#"
          className="flex items-center space-x-2 text-sm sm:text-base font-bold tracking-wider text-white hover:text-blue-400 transition-colors uppercase"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400">
            <Terminal className="h-4 w-4" />
          </span>
          <span>Barun Mishra</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Primary CTA & Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="theme-toggle-btn h-9 w-9 rounded-xl border border-white/10 bg-[#0B0F16] flex items-center justify-center text-slate-300 transition-all cursor-pointer shadow-sm"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-blue-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          <a href="#contact">
            <Button variant="default" size="sm" className="group">
              <span>Start a Project</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Mobile Navigation & Theme Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Theme Toggle Button Mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="theme-toggle-btn h-9 w-9 rounded-xl border border-white/10 bg-[#0B0F16] flex items-center justify-center text-slate-300 transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-blue-600" />
            )}
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col justify-between pt-12">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left font-bold tracking-wider text-white uppercase text-base flex items-center space-x-2">
                  <Terminal className="h-4 w-4 text-blue-400" />
                  <span>Barun Mishra</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-3">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <a
                      href={link.href}
                      className="px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 mt-auto">
                <SheetClose asChild>
                  <a href="#contact" className="w-full block">
                    <Button variant="default" className="w-full justify-center">
                      <span>Start a Project</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                </SheetClose>
                <p className="text-[11px] text-slate-500 text-center mt-3">
                  Available for freelance projects
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
