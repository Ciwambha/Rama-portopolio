import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FlowDiagram({
  steps,
  orientation = 'horizontal',
  className,
}: {
  steps: string[]
  orientation?: 'horizontal' | 'vertical'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2',
        orientation === 'vertical' && 'flex-col items-stretch',
        className,
      )}
    >
      {steps.map((step, i) => (
        <div
          key={step}
          className={cn(
            'flex items-center gap-2',
            orientation === 'vertical' && 'flex-col',
          )}
        >
          <div
            className="glass rounded-lg px-3 py-1.5 text-center font-mono text-xs text-foreground"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight
              size={14}
              className={cn(
                'shrink-0 text-cyan',
                orientation === 'vertical' && 'rotate-90',
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
}
