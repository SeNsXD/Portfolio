import Image from 'next/image'
import type { Screenshot } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function FramedShot({
  shot,
  priority,
  sizes = '(min-width: 1024px) 400px, 50vw',
  className,
}: {
  shot: Screenshot
  priority?: boolean
  sizes?: string
  className?: string
}) {
  const isCard = shot.kind === 'card'
  return (
    <div className={cn('relative overflow-hidden rounded-3xl', isCard ? 'aspect-square' : 'aspect-[4/5]', className)}>
      <Image src={shot.src} alt={shot.alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  )
}
