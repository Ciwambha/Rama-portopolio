import { Cog, BarChart3, Cpu } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { aboutConcepts } from '@/lib/portfolio-data'

const iconMap = { Cog, BarChart3, Cpu }

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow="About" title="Engineer in the making." />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            <Reveal>
              <p>
                I am currently pursuing a Bachelor&apos;s degree in Industrial
                Engineering at{' '}
                <span className="text-foreground">President University</span>,
                with hands-on experience across Trial Engineering and Process
                Engineering.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                My first internship at PT Indoprima Gemilang gave me experience
                in digitalizing trial monitoring. I am now continuing my
                manufacturing journey as a Process Engineering Intern at{' '}
                <span className="text-foreground">Schlemmer</span>.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                I like working at the intersection of process, data, and
                technology — especially when a messy operational problem can be
                turned into something structured and measurable.
              </p>
            </Reveal>
          </div>

          {/* concept cards connected by lines */}
          <div className="relative">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <line
                x1="18%"
                y1="18%"
                x2="18%"
                y2="82%"
                className="animate-dash stroke-cyan/40"
                strokeWidth="1.5"
              />
            </svg>

            <div className="space-y-4">
              {aboutConcepts.map((c, i) => {
                const Icon = iconMap[c.icon as keyof typeof iconMap]
                return (
                  <Reveal key={c.title} delay={i * 100}>
                    <div className="group glass relative ml-4 flex gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:glow-ring">
                      <div className="relative">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                          <Icon size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display font-semibold">
                          {c.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {c.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
