import { Mail, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: '/ciwambha-raidah-zaki-rama',
      href: profile.linkedin,
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: '@Ciwambha',
      href: profile.github,
    },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_100%,_var(--violet)_0%,_transparent_65%)] opacity-20" />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              Contact
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-violet" />
          </div>

          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Let&apos;s make something{' '}
            <span className="text-gradient">better.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            For opportunities, collaboration, or just a good engineering
            conversation.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-cyan" />
            {profile.location}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 90}>
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  l.href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className="group glass flex flex-col items-center gap-3 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-ring"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan transition-transform group-hover:scale-110">
                  <l.icon size={20} />
                </span>
                <span className="font-display font-semibold">{l.label}</span>
                <span className="break-all text-xs text-muted-foreground">
                  {l.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}