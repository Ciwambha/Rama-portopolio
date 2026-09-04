import Image from 'next/image'
import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/portfolio-data'

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow="Education" title="Academic foundation." />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* institution card */}
          <Reveal>
            <div className="glass relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-8 -top-8 opacity-10">
                <Image
                  src="/president-university-logo.png"
                  alt=""
                  width={160}
                  height={160}
                  aria-hidden="true"
                />
              </div>
              <div className="relative">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 p-2">
                  <Image
                    src="/president-university-logo.png"
                    alt="President University logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  {education.institution}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {education.degree}
                </p>

                <div className="mt-6 flex gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Period
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold">
                      {education.period}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      GPA
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-gradient">
                      {education.gpa}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* timeline */}
          <Reveal delay={120}>
            <div className="relative pl-2">
              <div className="absolute left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan via-violet to-transparent" />
              <ul className="space-y-6">
                {education.timeline.map((t) => (
                  <li key={t.year + t.label} className="relative pl-10">
                    <span className="absolute left-0 top-0.5 flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-violet">
                      <GraduationCap
                        size={13}
                        className="text-primary-foreground"
                      />
                    </span>
                    <p className="font-mono text-sm text-cyan">{t.year}</p>
                    <p className="mt-0.5 text-foreground">{t.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
