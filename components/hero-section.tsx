import { ArrowDown, ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'
import { LinkButton } from './link-button'
import { Reveal } from './reveal'
import { Tag, TagList } from './tag'

const heroTags = ['Android', 'Windows', 'Product Design', 'AI-assisted Development', 'Product Management']

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm text-muted-foreground">{site.role}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter text-foreground sm:text-7xl lg:text-8xl"
          >
            I design and build apps for Android and Windows.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {"I'm Rishabh Kumar. I turn product ideas into polished apps, from interface design and feature planning to working releases, building with AI-assisted development."}
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#projects" size="lg">
            View my work
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </LinkButton>
          <LinkButton href={site.resumeUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
            Download resume
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          </LinkButton>
        </Reveal>

        <Reveal delay={320}>
          <TagList label="Technologies" className="mt-10">
            {heroTags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagList>
        </Reveal>
      </div>
    </section>
  )
}
