import { resumeData } from '@/data/resume'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="section-container pt-24 md:pt-32">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-pretty mb-2">
            {resumeData.name}
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            {resumeData.title}
          </p>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          {resumeData.summary}
        </p>

        <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-medium">{resumeData.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-accent" />
            <a href={`tel:${resumeData.phone}`} className="hover:text-primary transition-colors font-medium">
              {resumeData.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-accent" />
            <a href={`mailto:${resumeData.email}`} className="hover:text-primary transition-colors font-medium text-blue-600 dark:text-blue-400">
              {resumeData.email}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90"
          >
            <a href={`mailto:${resumeData.email}`}>
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
          >
            <a href={resumeData.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="flex gap-4 pt-2">
          <a
            href={resumeData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={resumeData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={resumeData.social.email}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
