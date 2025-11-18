import { resumeData } from '@/data/resume'

export function CareerObjective() {
  return (
    <section className="section-container" id="objective">
      <div className="bg-card rounded-lg p-8 md:p-10 border border-border">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Career Objective</h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          {resumeData.objective}
        </p>
      </div>
    </section>
  )
}
