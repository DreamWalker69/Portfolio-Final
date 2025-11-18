'use client'

import { ThemeToggle } from './theme-toggle'
import { resumeData } from '@/data/resume'
import Link from 'next/link'

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-5xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg hover:text-primary transition-colors">
          {resumeData.name}
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-sm font-medium hover:text-primary transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </button>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  )
}
