'use client'

import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { HeroPortrait } from '@/components/hero-portrait'
import { Particles } from '@/components/particles'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile, stats } from '@/lib/portfolio-data'
import { CountUp } from '@/components/count-up'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      {/* backgrounds */}
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_60%_at_70%_0%,_var(--blue)_0%,_transparent_60%)] opacity-15" />
      <Particles count={14} />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-4 md:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        {/* left — identity */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5">
            <Sparkles size={14} className="text-cyan" />
            <span className="text-xs text-muted-foreground">
              {profile.role}
            </span>
          </div>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {profile.firstName}
            <br />
            <span className="text-gradient">{profile.lastName}</span>
          </h1>

          <p className="mt-4 font-mono text-sm text-cyan md:text-base">
            {profile.tagline}
          </p>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.statement}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-violet px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={profile.resumeHref}
              download
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="glass flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-cyan"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="glass flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-cyan"
            >
              <GithubIcon size={18} />
            </a>
          </div>

          {/* mini stats */}
          <dl className="mt-12 grid max-w-md grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-foreground">
                  <CountUp
                    end={s.value}
                    decimals={(s as { decimals?: number }).decimals ?? 0}
                    suffix={s.suffix}
                  />
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right — portrait */}
        <div className="animate-in fade-in duration-1000">
          <HeroPortrait />
        </div>
      </div>
    </section>
  )
}
