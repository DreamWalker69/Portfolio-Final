import { resumeData } from '@/data/resume'
import { GraduationCap } from 'lucide-react'

export function EducationSection() {
  return (
    <section className="section-container" id="education">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
      
      <div className="bg-card rounded-lg p-8 border border-border">
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <div className="flex gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl">
                  {edu.school}
                </h3>
                <p className="text-accent font-medium text-lg">
                  {edu.degree}
                </p>
                <p className="text-muted-foreground mt-1">
                  {edu.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
