import Image from 'next/image'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const focusAreas = ['Product thinking', 'Design', 'Technology']

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="group relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(closest-side,oklch(0.70_0.19_255/0.16),oklch(0.67_0.20_295/0.10),transparent)] blur-2xl"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card">
            <Image
              src="/profile.jpg"
              alt="Portrait of Rishabh Kumar"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading id="about-title" eyebrow="About" title="About Me" />
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
            <ul className="mt-10 grid grid-cols-3 gap-3" aria-label="Focus areas">
              {focusAreas.map((area, i) => (
                <li key={area} className="rounded-2xl border border-border bg-white/[0.02] p-4">
                  <span className="font-mono text-xs text-brand">0{i + 1}</span>
                  <p className="mt-2 text-sm font-medium text-foreground">{area}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
