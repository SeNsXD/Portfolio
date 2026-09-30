'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [active, setActive] = useState<string>(isHome ? 'home' : 'projects')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [isHome])

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open ? 'border-b border-border bg-background/75 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href={isHome ? '#home' : '/'}
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-[0.18em]"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden="true" className="size-2 rounded-full bg-brand shadow-[0_0_12px_var(--brand)] transition-transform duration-300 group-hover:scale-125" />
          <span className="text-foreground">RISHABH</span>
          <span className="text-muted-foreground">/ {site.handle}</span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-xl border border-border bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <Link
                  href={hrefFor(item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'block rounded-lg px-4 py-1.5 text-sm transition-colors duration-300',
                    isActive ? 'bg-white/[0.08] text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center rounded-lg bg-brand px-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_24px_-8px_var(--brand)] sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      <div id="mobile-nav" hidden={!open} className="border-t border-border px-5 pb-6 pt-2 md:hidden">
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={hrefFor(item.id)}
                onClick={() => setOpen(false)}
                className={cn(
                  'block py-3 text-lg transition-colors',
                  active === item.id ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-lg bg-brand text-sm font-medium text-primary-foreground"
        >
          Resume
        </a>
      </div>
    </header>
  )
}
