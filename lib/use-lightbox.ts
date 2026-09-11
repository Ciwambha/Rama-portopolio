'use client'

import { useEffect, useState } from 'react'

export function useLightbox(length: number) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (openIndex === null || length === 0) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight')
        setOpenIndex((i) => (i === null ? i : (i + 1) % length))
      if (e.key === 'ArrowLeft')
        setOpenIndex((i) => (i === null ? i : (i - 1 + length) % length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, length])

  return {
    openIndex,
    open: (i: number) => setOpenIndex(i),
    close: () => setOpenIndex(null),
    next: () => setOpenIndex((i) => (i === null ? i : (i + 1) % length)),
    prev: () =>
      setOpenIndex((i) => (i === null ? i : (i - 1 + length) % length)),
  }
}
