import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  id?: string
  className?: string
}) {
  return (
    <Reveal className={cn('max-w-2xl', className)}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      <h2 id={id} className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
    </Reveal>
  )
}
