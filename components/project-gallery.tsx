'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { projectGallery } from '@/lib/portfolio-data'

export function ProjectGallery() {
  const withImages = projectGallery.filter((s) => s.src)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight')
        setOpenIndex((i) => (i === null ? i : (i + 1) % withImages.length))
      if (e.key === 'ArrowLeft')
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + withImages.length) % withImages.length,
        )
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, withImages.length])

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
          const imageIndex = withImages.findIndex((s) => s.id === slot.id)
          return (
            <Reveal key={slot.id} delay={i * 70}>
              <button
                type="button"
                disabled={!slot.src}
                onClick={() =>
                  slot.src && imageIndex >= 0 && setOpenIndex(imageIndex)
                }
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

      {/* lightbox */}
      {openIndex !== null && withImages[openIndex] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="glass absolute right-4 top-4 rounded-full p-2"
          >
            <X size={20} />
          </button>
          {withImages.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenIndex(
                    (openIndex - 1 + withImages.length) % withImages.length,
                  )
                }}
                className="glass absolute left-4 rounded-full p-2"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenIndex((openIndex + 1) % withImages.length)
                }}
                className="glass absolute right-4 rounded-full p-2"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
          <div
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={withImages[openIndex].src || '/placeholder.svg'}
              alt={withImages[openIndex].caption}
              width={1200}
              height={800}
              className="mx-auto max-h-[85vh] w-auto rounded-2xl object-contain"
            />
            <p className="mt-3 text-center text-sm text-muted-foreground">
              {withImages[openIndex].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
