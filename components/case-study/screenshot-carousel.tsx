'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import type { Screenshot } from '@/lib/projects'
import { cn } from '@/lib/utils'

const aspectClass = (shot: Screenshot) => (shot.kind === 'card' ? 'aspect-square' : 'aspect-[4/5]')

export function ScreenshotCarousel({ shots, projectName }: { shots: Screenshot[]; projectName: string }) {
  const trackRef = useRef<HTMLUListElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [active, setActive] = useState<number | null>(null)

  const updateEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  const open = (i: number) => {
    setActive(i)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [shots.length],
  )

  const current = active !== null ? shots[active] : null

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        onScroll={updateEdges}
        aria-label={`${projectName} screenshots`}
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 [scrollbar-width:none] sm:-mx-8 sm:gap-6 sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {shots.map((shot, i) => (
          <li key={shot.src} className="shrink-0 snap-center sm:snap-start">
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`Enlarge screenshot: ${shot.alt}`}
              className={cn(
                'group relative block h-[min(72vh,620px)] overflow-hidden rounded-[2rem] border border-border bg-card/50 outline-none transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-white/20 focus-visible:ring-2 focus-visible:ring-primary sm:h-[min(78vh,700px)]',
                aspectClass(shot),
              )}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 640px) 560px, 90vw"
                className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <span
                aria-hidden="true"
                className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <Maximize2 className="size-4" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {shots.length} screens · Click to enlarge
        </p>
        <div className="flex gap-2">
          <CarouselButton label="Previous screenshots" disabled={!canPrev} onClick={() => scrollByPage(-1)}>
            <ChevronLeft className="size-5" aria-hidden="true" />
          </CarouselButton>
          <CarouselButton label="Next screenshots" disabled={!canNext} onClick={() => scrollByPage(1)}>
            <ChevronRight className="size-5" aria-hidden="true" />
          </CarouselButton>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={`${projectName} screenshot preview`}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-foreground backdrop:bg-black/90 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="pointer-events-none flex h-full w-full items-center justify-center p-4 sm:p-10">
            <figure className="pointer-events-auto flex h-full max-h-full flex-col items-center justify-center gap-4">
              <div className={cn('relative max-h-[calc(100dvh-8rem)] max-w-[92vw]', aspectClass(current), 'h-full')}>
                <Image src={current.src} alt={current.alt} fill sizes="92vw" className="rounded-3xl object-contain" />
              </div>
              <figcaption className="max-w-xl text-pretty text-center text-sm text-muted-foreground">
                <span className="font-mono text-xs text-foreground/70">
                  {active! + 1} / {shots.length}
                </span>{' '}
                · {current.alt}
              </figcaption>
            </figure>
          </div>
        )}
        <button
          type="button"
          onClick={close}
          aria-label="Close preview"
          className="fixed right-4 top-4 flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 sm:right-6 sm:top-6"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous screenshot"
          className="fixed left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 sm:left-6"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next screenshot"
          className="fixed right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 sm:right-6"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </dialog>
    </div>
  )
}

function CarouselButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string
  disabled: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex size-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all duration-300 hover:border-white/20 hover:bg-card disabled:cursor-not-allowed disabled:opacity-35"
    >
      {children}
    </button>
  )
}
