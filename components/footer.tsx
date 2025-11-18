import { resumeData } from '@/data/resume'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 bg-card/50">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">{resumeData.name}</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer crafting beautiful and functional web experiences.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href={resumeData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={resumeData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={resumeData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={resumeData.social.email}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {resumeData.name}. All rights reserved.</p>
          <p>Crafted with care using Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
