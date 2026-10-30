import { ArrowDown, ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'
import { HeroPhone } from './hero-phone'
import { LinkButton } from './link-button'
import { Reveal } from './reveal'
import { Tag, TagList } from './tag'

const heroTags = ['Android', 'Kotlin', 'Jetpack Compose', 'Firebase', 'WinUI 3', 'Product Design']

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="text-sm text-muted-foreground">{site.role}</p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter text-foreground sm:text-7xl lg:text-8xl"
            >
              I design and build Android products.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {"I'm Rishabh Kumar. I turn product ideas into polished Android apps, from interface design and feature planning to working releases."}
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#projects" size="lg">
              View my projects
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </LinkButton>
            <LinkButton href={site.resumeUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              Download resume
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </LinkButton>
          </Reveal>

          <Reveal delay={320}>
            <TagList label="Technologies" className="mt-12">
              {heroTags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </TagList>
          </Reveal>
        </div>

        <HeroPhone />
      </div>
    </section>
  )
}
