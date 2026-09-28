import { Reveal } from '../reveal'

export function CaseSection({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string
  title: string
  accent: string
  children: React.ReactNode
}) {
  const id = `case-${eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  return (
    <section aria-labelledby={id} className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="mb-10 flex flex-col gap-3 sm:mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: accent }}>
          {eyebrow}
        </p>
        <h2 id={id} className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  )
}
