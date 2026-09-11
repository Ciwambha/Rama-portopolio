'use client'

import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export type LightboxImage = { src: string; caption: string }

export function LightboxOverlay({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const current = images[index]
  if (!current) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="glass absolute right-4 top-4 rounded-full p-2"
      >
        <X size={20} />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
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
              onNext()
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
          src={current.src || '/placeholder.svg'}
          alt={current.caption}
          width={1200}
          height={800}
          className="mx-auto max-h-[85vh] w-auto rounded-2xl object-contain"
        />
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {current.caption}
        </p>
        {images.length > 1 && (
          <p className="mt-1 text-center font-mono text-xs text-muted-foreground/70">
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  )
}
