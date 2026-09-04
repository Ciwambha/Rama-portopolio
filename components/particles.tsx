'use client'

import { useEffect, useState } from 'react'

type Dot = {
  id: number
  left: number
  top: number
  size: number
  delay: number
  duration: number
}

export function Particles({ count = 24 }: { count?: number }) {
  const [dots, setDots] = useState<Dot[]>([])

  // Generate client-side only to avoid SSR/client hydration mismatch.
  useEffect(() => {
    setDots(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 8 + 6,
      })),
    )
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
    >
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-cyan/40"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animation: `drift ${d.duration}s ease-in-out ${d.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  )
}
