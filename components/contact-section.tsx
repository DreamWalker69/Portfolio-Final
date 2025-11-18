import { resumeData } from '@/data/resume'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="section-container" id="contact">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello!
        </p>

        <div className="space-y-4 mb-8">
          <a
            href={resumeData.social.email}
            className="flex items-center gap-4 group hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>{resumeData.email}</span>
          </a>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>{resumeData.phone}</span>
          </div>
        </div>

        <div className="flex gap-4 mb-12">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90"
          >
            <a href={resumeData.social.email}>
              Send Email
            </a>
          </Button>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Follow me on social media
          </p>
          <div className="flex gap-4">
            <a
              href={resumeData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={resumeData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={resumeData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
