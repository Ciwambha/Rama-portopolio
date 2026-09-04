import { profile } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground md:flex-row md:px-6">
        <p className="font-display font-semibold text-foreground">
          {profile.preferredName}
          <span className="text-cyan">.</span>
        </p>
        <p className="text-center">
          {profile.fullName} — Industrial Engineering · {profile.location}
        </p>
        <p className="font-mono text-xs">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
