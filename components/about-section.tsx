import Image from 'next/image'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const focusAreas = ['Product thinking', 'Design', 'Technology']

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="group relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card">
            <Image
              src="/about.jpg"
              alt="Portrait of Rishabh Kumar in a green fedora and glasses, with a finger raised to his lips"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading id="about-title" title="About Me" />
          <Reveal delay={100} className="mt-8 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="text-foreground">{"I'm Rishabh Kumar,"}</span> a BBA graduate who enjoys turning
              product ideas into working applications.
            </p>
            <p>
              My interests sit at the intersection of product thinking, design and technology. I enjoy identifying
              problems, designing solutions and iterating on products based on real usage.
            </p>
            <p>
              Alongside development, I have experience in digital marketing, product management, research and business.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="mt-10 flex flex-wrap gap-2" aria-label="Focus areas">
              {focusAreas.map((area) => (
                <li key={area} className="rounded-full border border-border bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
