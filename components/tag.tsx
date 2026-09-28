import { cn } from '@/lib/utils'

export function Tag({
  children,
  className,
  tone = 'default',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'default' | 'mono'
}) {
  return (
    <li
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-colors duration-300 hover:border-brand/40 hover:bg-brand-soft hover:text-foreground',
        tone === 'mono' && 'font-mono tracking-tight',
        className,
      )}
    >
      {children}
    </li>
  )
}

export function TagList({ children, className, label }: { children: React.ReactNode; className?: string; label?: string }) {
  return (
    <ul aria-label={label} className={cn('flex flex-wrap gap-2', className)}>
      {children}
    </ul>
  )
}
