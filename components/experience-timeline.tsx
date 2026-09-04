import { Briefcase, Check, Circle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { FlowDiagram } from '@/components/flow-diagram'
import { experiences } from '@/lib/portfolio-data'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="blueprint-bg absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow="Experience" title="Real-world exposure." />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan via-violet to-transparent md:left-6" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 100}>
                <div className="relative pl-12 md:pl-16">
                  {/* node */}
                  <div className="absolute left-0 top-1 flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-violet md:left-2">
                    <Briefcase size={16} className="text-primary-foreground" />
                    {exp.ongoing && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-cyan/40" />
                    )}
                  </div>

                  <div className="glass rounded-2xl p-6 transition-all hover:glow-ring md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-cyan">
                          {exp.id.replace('exp-', 'Experience ')}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-bold md:text-2xl">
                          {exp.position}
                        </h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="font-mono text-xs text-muted-foreground">
                          {exp.period}
                        </span>
                        {exp.ongoing && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/15 px-2.5 py-0.5 text-xs font-medium text-cyan">
                            <Circle size={8} className="fill-cyan" />
                            Ongoing
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    <ul className="mt-5 grid gap-2.5">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm">
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-violet"
                          />
                          <span className="text-muted-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.flow && (
                      <div className="mt-6 rounded-xl border border-border bg-background/30 p-4">
                        <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          Process
                        </p>
                        <FlowDiagram steps={exp.flow} />
                      </div>
                    )}

                    {exp.tools && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.tools.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
