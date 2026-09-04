import Image from 'next/image'
import { profile, floatingCards } from '@/lib/portfolio-data'

export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      {/* soft ambient glow behind the frame */}
      <div className="absolute inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle,_var(--blue)_0%,_transparent_70%)] opacity-25 blur-2xl" />

      {/* corner frame marks — engineering / blueprint accent */}
      <span className="absolute -left-3 -top-3 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-cyan/50" />
      <span className="absolute -right-3 -top-3 h-8 w-8 rounded-tr-2xl border-r-2 border-t-2 border-violet/50" />
      <span className="absolute -bottom-3 -left-3 h-8 w-8 rounded-bl-2xl border-b-2 border-l-2 border-violet/50" />
      <span className="absolute -bottom-3 -right-3 h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-cyan/50" />

      <div className="glass relative overflow-hidden rounded-[1.75rem] p-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.4rem]">
          <Image
            src={profile.portrait}
            alt={`${profile.fullName}, ${profile.role}`}
            fill
            priority
            sizes="(max-width: 768px) 80vw, 380px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>
      </div>

      {/* status chip */}
      <div className="glass absolute -bottom-5 left-1/2 flex w-[86%] -translate-x-1/2 items-center gap-2.5 rounded-2xl px-4 py-3 shadow-lg shadow-black/30">
        <span className="relative flex size-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/50" />
          <span className="relative inline-flex size-2.5 rounded-full bg-cyan" />
        </span>
        <p className="text-xs font-medium leading-snug text-foreground">
          {profile.status}
        </p>
      </div>

      {/* floating credential card */}
      <div className="glass absolute -right-4 top-8 hidden flex-col gap-2 rounded-xl px-3 py-2.5 sm:flex md:-right-8">
        <div className="flex items-center gap-2">
          <Image
            src="/president-university-logo.png"
            alt=""
            aria-hidden="true"
            width={22}
            height={22}
            className="object-contain"
          />
          <p className="text-xs font-semibold leading-tight">
            {floatingCards[0].title}
          </p>
        </div>
        <p className="pl-[26px] text-[11px] leading-tight text-muted-foreground">
          {floatingCards[0].subtitle}
        </p>
      </div>
    </div>
  )
}
