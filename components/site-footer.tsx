import { site } from '@/lib/site'
import { GitHubIcon, LinkedInIcon, XIcon } from './social-icons'

const socials = [
  { label: 'GitHub', href: site.socials.github, icon: GitHubIcon },
  { label: 'LinkedIn', href: site.socials.linkedin, icon: LinkedInIcon },
  { label: 'X / Twitter', href: site.socials.x, icon: XIcon },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-lg font-semibold text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">Designed &amp; Built by {site.name} · © 2026</p>
        </div>
        <ul className="flex items-center gap-2" aria-label="Social links">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
              >
                <s.icon className="size-4" />
                <span className="sr-only">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    <div className="mx-auto max-w-6xl px-5 pb-6 text-sm text-muted-foreground"><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></div></footer>
  )
}
