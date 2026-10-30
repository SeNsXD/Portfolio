import { ArrowUpRight, Mail } from 'lucide-react'
import { site } from '@/lib/site'
import { ContactForm } from './contact-form'
import { Reveal } from './reveal'
import { GitHubIcon, LinkedInIcon, XIcon } from './social-icons'

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: 'GitHub', value: site.socials.github.replace('https://', ''), href: site.socials.github, icon: GitHubIcon },
  { label: 'LinkedIn', value: 'LinkedIn profile', href: site.socials.linkedin, icon: LinkedInIcon },
  { label: 'X / Twitter', value: site.socials.x.replace('https://', ''), href: site.socials.x, icon: XIcon },
]

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <h2 id="contact-title" className="text-balance text-4xl font-semibold tracking-tighter text-foreground sm:text-6xl">
              Let’s build something.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              {"Have an opportunity, a collaboration or an idea? Send a message or reach me on any of these."}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-10 flex flex-col divide-y divide-border border-y border-border">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={c.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="group flex items-center gap-4 py-4 transition-colors"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-foreground/50 group-hover:text-foreground">
                      <c.icon className="size-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm text-muted-foreground">{c.label}</span>
                      <span className="text-foreground">{c.value}</span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={160} className="lg:pt-24">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
