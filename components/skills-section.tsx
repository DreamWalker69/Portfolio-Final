import { resumeData } from '@/data/resume'
import { Badge } from '@/components/ui/badge'

export function SkillsSection() {
  return (
    <section className="section-container" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>
      
      <div className="bg-card rounded-lg p-8 border border-border space-y-8">
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm py-2 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
