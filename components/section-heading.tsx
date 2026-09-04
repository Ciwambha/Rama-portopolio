import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string
  title: string
  className?: string
}) {
  return (
    <Reveal className={cn('mb-12 md:mb-16', className)}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}
