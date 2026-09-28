import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const milestones = [
  { period: '2026', title: 'Building GymBros & WidgetLabs', current: true },
  { period: '2025', title: 'Digital Marketing & Business Projects' },
  { period: '2022–2025', title: 'BBA — Amity University Kolkata' },
]

export function JourneySection() {
  return (
    <section aria-labelledby="journey-title" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading id="journey-title" eyebrow="Journey" title="Experience" subtitle="A short timeline of where I've been and what I'm building now." />
        <ol className="relative border-l border-border">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.period} delay={i * 90} className="relative pb-12 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className={
                  m.current
                    ? 'absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-brand shadow-[0_0_14px_var(--brand)]'
                    : 'absolute -left-[5px] top-1.5 size-2.5 rounded-full border border-white/30 bg-background'
                }
              />
              <p className="font-mono text-sm text-brand">{m.period}</p>
              <p className="mt-2 text-xl font-medium text-foreground sm:text-2xl">{m.title}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
