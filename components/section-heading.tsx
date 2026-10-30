import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function SectionHeading({
  title,
  subtitle,
  id,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  id?: string
  className?: string
}) {
  return (
    <Reveal className={cn('max-w-2xl', className)}>
      <h2 id={id} className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
    </Reveal>
  )
}
