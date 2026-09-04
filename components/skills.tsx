import { Wrench, Database, Terminal } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/portfolio-data'

const iconMap = { Wrench, Database, Terminal }

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="blueprint-bg absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow="Skills" title="Things I work with." />

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon as keyof typeof iconMap]
            return (
              <Reveal key={group.title} delay={i * 100}>
                <div className="glass h-full rounded-2xl p-6 transition-all hover:glow-ring">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-semibold">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-lg border border-border bg-background/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-cyan/40 hover:text-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
