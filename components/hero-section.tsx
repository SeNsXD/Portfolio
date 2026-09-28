import { ArrowDown, ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'
import { HeroBackground } from './hero-background'
import { LinkButton } from './link-button'
import { Reveal } from './reveal'
import { Tag, TagList } from './tag'

const heroTags = ['Android', 'Kotlin', 'Jetpack Compose', 'Firebase', 'WinUI 3', 'Product Design']

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <HeroBackground />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
            {site.role}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            id="hero-title"
            className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter text-foreground sm:text-7xl lg:text-8xl"
          >
            I build ideas into{' '}
            <span className="bg-gradient-to-br from-[oklch(0.82_0.16_60)] via-brand to-[oklch(0.62_0.2_38)] bg-clip-text text-transparent">
              working products.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {"I'm Rishabh Kumar, a product-focused developer who enjoys designing and building useful digital experiences across Android and Windows."}
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#projects" size="lg">
            View My Projects
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </LinkButton>
          <LinkButton href={site.resumeUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
            Download Resume
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          </LinkButton>
        </Reveal>

        <Reveal delay={320}>
          <TagList label="Technologies" className="mt-12">
            {heroTags.map((t) => (
              <Tag key={t} tone="mono">
                {t}
              </Tag>
            ))}
          </TagList>
        </Reveal>
      </div>
    </section>
  )
}
