import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-primary-foreground shadow-[0_0_0_1px_oklch(1_0_0/0.08)_inset,0_10px_30px_-10px_var(--brand)] hover:brightness-110 hover:shadow-[0_0_0_1px_oklch(1_0_0/0.12)_inset,0_14px_40px_-10px_var(--brand)]',
  secondary: 'border border-border bg-white/[0.04] text-foreground hover:bg-white/[0.08] hover:border-white/20',
  ghost: 'text-muted-foreground hover:text-foreground',
}

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function LinkButton({ className, variant = 'primary', size = 'md', ...props }: LinkButtonProps) {
  return (
    <Link
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.98]',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
