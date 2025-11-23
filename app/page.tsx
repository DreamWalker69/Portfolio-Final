import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { CareerObjective } from '@/components/career-objective'
import { SkillsSection } from '@/components/skills-section'
import { ExperienceSection } from '@/components/experience-section'
import { EducationSection } from '@/components/education-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { ChatBot } from '@/components/chat-bot'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <CareerObjective />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}
