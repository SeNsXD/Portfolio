import Image from 'next/image'
import { cn } from '@/lib/utils'

type MockupProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function PhoneMockup({ src, alt, className, priority }: MockupProps) {
  return (
    <div
      className={cn(
        'relative aspect-[9/19.5] rounded-[2.25rem] border border-white/10 bg-[#0b0b0b] p-[6px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)_inset]',
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-card">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 280px, 45vw" className="object-cover" priority={priority} />
        <div aria-hidden="true" className="absolute left-1/2 top-2.5 h-4 w-4 -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-white/10" />
      </div>
    </div>
  )
}

export function LaptopMockup({ src, alt, className, priority }: MockupProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="rounded-t-xl border border-white/10 bg-[#0b0b0b] p-2 pb-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] sm:rounded-t-2xl sm:p-3">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-card sm:rounded-lg">
          <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 640px, 90vw" className="object-cover" priority={priority} />
        </div>
      </div>
      <div aria-hidden="true" className="relative mx-[-4%] h-3 rounded-b-xl border border-t-0 border-white/10 bg-gradient-to-b from-[#2a2826] to-[#161514] sm:h-4">
        <div className="absolute left-1/2 top-0 h-1 w-1/6 -translate-x-1/2 rounded-b-md bg-black/50" />
      </div>
    </div>
  )
}
