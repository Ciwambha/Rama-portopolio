'use client'

import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LightboxOverlay } from '@/components/lightbox-overlay'
import { useLightbox } from '@/lib/use-lightbox'
import { projectGallery } from '@/lib/portfolio-data'

export function ProjectGallery() {
  const withImages = projectGallery
    .filter((s) => s.src)
    .map((s) => ({ src: s.src as string, caption: s.caption }))
  const { openIndex, open, close, next, prev } = useLightbox(
    withImages.length,
  )

  return (
    <div className="mt-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-6 bg-gradient-to-r from-cyan to-violet" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Project Documentation
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {projectGallery.map((slot, i) => {
          const imageIndex = withImages.findIndex((s) => s.src === slot.src)
          return (
            <Reveal key={slot.id} delay={i * 70}>
              <button
                type="button"
                disabled={!slot.src}
                onClick={() => slot.src && imageIndex >= 0 && open(imageIndex)}
                className="group relative flex aspect-[4/5] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/40 text-center transition-all hover:-translate-y-1 hover:border-cyan/40 disabled:cursor-default"
              >
                {slot.src ? (
                  <>
                    <Image
                      src={slot.src || '/placeholder.svg'}
                      alt={slot.caption}
                      fill
                      sizes="(max-width:768px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 text-left">
                      <p className="text-xs font-medium text-foreground">
                        {slot.caption}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3 p-4">
                    <div className="grid-bg flex size-12 items-center justify-center rounded-xl border border-border text-muted-foreground">
                      <ImageIcon size={20} />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-foreground/70">
                        {slot.label}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        {slot.caption}
                      </p>
                    </div>
                  </div>
                )}
              </button>
            </Reveal>
          )
        })}
      </div>

      {openIndex !== null && (
        <LightboxOverlay
          images={withImages}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  )
}