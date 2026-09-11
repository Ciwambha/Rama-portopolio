'use client'

import { useState } from 'react'
import { ImageIcon, ArrowUpRight, Images } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { LightboxOverlay, type LightboxImage } from '@/components/lightbox-overlay'
import { useLightbox } from '@/lib/use-lightbox'
import { academicProjects } from '@/lib/portfolio-data'

export function AcademicProjects() {
  const [activeGallery, setActiveGallery] = useState<LightboxImage[]>([])
  const { openIndex, open, close, next, prev } = useLightbox(
    activeGallery.length,
  )

  const openGallery = (gallery: LightboxImage[]) => {
    setActiveGallery(gallery)
    open(0)
  }

  return (
    <section id="academic" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow="University" title="Academic Projects" />

        <div className="grid gap-5 sm:grid-cols-2">
          {academicProjects.map((p, i) => {
            const hasGallery = !!p.gallery?.length
            return (
              <Reveal key={p.id} delay={i * 90}>
                <article className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-ring">
                  {/* image / gallery trigger */}
                  <button
                    type="button"
                    disabled={!hasGallery}
                    onClick={() => hasGallery && openGallery(p.gallery!)}
                    aria-label={
                      hasGallery
                        ? `View ${p.gallery!.length} photos for ${p.title}`
                        : undefined
                    }
                    className="group/img relative mb-5 flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-border bg-background/40 disabled:cursor-default"
                  >
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.image || '/placeholder.svg'}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <ImageIcon size={22} />
                        <span className="font-mono text-[11px] uppercase tracking-wider">
                          Image Placeholder
                        </span>
                      </div>
                    )}

                    {hasGallery && (
                      <div className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-300 group-hover/img:bg-background/70 group-hover/img:opacity-100">
                        <span className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
                          <Images size={14} className="text-cyan" />
                          View {p.gallery!.length} photos
                        </span>
                      </div>
                    )}
                  </button>

                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan">
                      {p.index}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan"
                    />
                  </div>

                  <h3 className="font-display text-lg font-bold text-balance">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>

      {openIndex !== null && (
        <LightboxOverlay
          images={activeGallery}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}