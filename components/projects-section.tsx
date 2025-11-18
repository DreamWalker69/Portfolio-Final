'use client'

import { resumeData } from '@/data/resume'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function ProjectsSection() {
  const [filter, setFilter] = useState<string | null>(null)

  const categories = [...new Set(resumeData.projects.map(p => p.category))]
  
  const filteredProjects = filter
    ? resumeData.projects.filter(p => p.category === filter)
    : resumeData.projects

  return (
    <section className="section-container" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects & Portfolio</h2>
      
      <div className="flex flex-wrap gap-2 mb-12">
        <Button
          variant={filter === null ? 'default' : 'outline'}
          onClick={() => setFilter(null)}
          size="sm"
        >
          All
        </Button>
        {categories.map(category => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="flex-1"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="flex-1"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
