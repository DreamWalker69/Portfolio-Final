import { resumeData } from '@/data/resume'

export function ExperienceSection() {
  return (
    <section className="section-container" id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
      
      <div className="space-y-8">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-accent">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[11px] top-2" />
            
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">
                  {exp.role}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              
              <p className="text-accent font-medium mb-2">
                {exp.company}
              </p>
              
              <p className="text-muted-foreground mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
