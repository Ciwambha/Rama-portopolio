'use client'

import { useState } from 'react'
import { ArrowDown, ChevronDown, Layers } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ProjectGallery } from '@/components/project-gallery'
import { featuredProject } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function FeaturedProject() {
  const { title, category, description, workflow, tools, caseStudy } =
    featuredProject
  const [active, setActive] = useState(0)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Featured Project"
          title="Something I built."
        />

        <Reveal>
          <div className="glass overflow-hidden rounded-3xl">
            <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-10">
              {/* details */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan/15 to-violet/15 px-3 py-1.5">
                  <Layers size={14} className="text-cyan" />
                  <span className="text-xs text-muted-foreground">
                    {category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
                  {title}
                </h3>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {description}
                </p>

                {/* case study tabs */}
                <div className="mt-6 flex flex-wrap gap-2" role="tablist">
                  {caseStudy.map((c, i) => (
                    <button
                      key={c.label}
                      type="button"
                      role="tab"
                      aria-selected={active === i}
                      onClick={() => setActive(i)}
                      className={cn(
                        'rounded-lg px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors',
                        active === i
                          ? 'bg-gradient-to-r from-cyan to-violet text-primary-foreground'
                          : 'border border-border text-muted-foreground hover:text-foreground',
                      )}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>

                <div
                  role="tabpanel"
                  className="mt-4 min-h-[92px] rounded-xl border border-border bg-background/30 p-4"
                >
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {caseStudy[active].text}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* animated vertical workflow */}
              <div className="relative rounded-2xl border border-border bg-background/30 p-6">
                <p className="mb-4 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  System Workflow
                </p>
                <div className="flex flex-col items-center gap-1.5">
                  {workflow.map((step, i) => (
                    <div
                      key={step}
                      className="flex w-full flex-col items-center"
                    >
                      <div className="glass w-full max-w-[220px] rounded-lg px-4 py-2.5 text-center font-mono text-sm transition-transform hover:scale-105">
                        {step}
                      </div>
                      {i < workflow.length - 1 && (
                        <ArrowDown
                          size={16}
                          className="my-1 animate-pulse-glow text-cyan"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <details className="group border-t border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:px-10">
                View full case study
                <ChevronDown
                  size={16}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="grid gap-4 px-6 pb-8 sm:grid-cols-2 md:px-10">
                {caseStudy.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl border border-border bg-background/30 p-4"
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                      {c.label}
                    </p>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </Reveal>

        <ProjectGallery />
      </div>
    </section>
  )
}
