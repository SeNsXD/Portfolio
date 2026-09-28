import { Check } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { Reveal } from '../reveal'
import { CaseSection } from './case-section'

export function StorySection({ project }: { project: Project }) {
  const { overview, problem, idea } = project.caseStudy
  const items = [
    { label: 'Overview', text: overview },
    { label: 'The Problem', text: problem },
    { label: 'The Idea', text: idea },
  ]
  return (
    <CaseSection eyebrow="Story" title="From problem to product" accent={project.accent}>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 80} className="rounded-3xl border border-border bg-card/50 p-7">
            <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{item.label}</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </CaseSection>
  )
}

export function BuiltSection({ project }: { project: Project }) {
  return (
    <CaseSection eyebrow="What I Built" title="What I built" accent={project.accent}>
      <Reveal>
        <ul className="grid gap-x-10 border-t border-border sm:grid-cols-2">
          {project.caseStudy.built.map((item) => (
            <li key={item} className="flex items-start gap-3 border-b border-border py-5 text-foreground/90">
              <Check className="mt-0.5 size-5 shrink-0" style={{ color: project.accent }} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </CaseSection>
  )
}

export function FeaturesSection({ project }: { project: Project }) {
  return (
    <CaseSection eyebrow="Key Features" title="Key features" accent={project.accent}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.caseStudy.featureDetails.map((f, i) => (
          <Reveal
            key={f.title}
            delay={(i % 3) * 70}
            className="group rounded-3xl border border-border bg-card/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/15"
          >
            <span
              aria-hidden="true"
              className="block h-1 w-8 rounded-full transition-all duration-500 group-hover:w-14"
              style={{ background: project.accent }}
            />
            <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
          </Reveal>
        ))}
      </div>
    </CaseSection>
  )
}

export function TechSection({ project }: { project: Project }) {
  return (
    <CaseSection eyebrow="Technology Stack" title="Technology stack" accent={project.accent}>
      <Reveal>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-3xl border border-border bg-card/50 p-6 font-mono text-sm text-foreground transition-colors duration-300 hover:border-white/15"
            >
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </CaseSection>
  )
}

export function ProcessSection({ project }: { project: Project }) {
  return (
    <CaseSection eyebrow="Design Process" title="Design process" accent={project.accent}>
      <ol className="grid gap-4 md:grid-cols-4">
        {project.caseStudy.designProcess.map((p, i) => (
          <Reveal as="li" key={p.step} delay={i * 80} className="relative rounded-3xl border border-border bg-card/50 p-6">
            <p className="font-mono text-xs" style={{ color: project.accent }}>
              Step 0{i + 1}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-foreground">{p.step}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
          </Reveal>
        ))}
      </ol>
    </CaseSection>
  )
}

export function ChallengesSection({ project }: { project: Project }) {
  return (
    <CaseSection eyebrow="Challenges" title="Challenges" accent={project.accent}>
      <div className="flex flex-col divide-y divide-border border-y border-border">
        {project.caseStudy.challenges.map((c, i) => (
          <Reveal key={c.title} delay={i * 60} className="grid gap-2 py-7 md:grid-cols-[1fr_2fr] md:gap-10">
            <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{c.description}</p>
          </Reveal>
        ))}
      </div>
    </CaseSection>
  )
}

export function LearningsSection({ project }: { project: Project }) {
  return (
    <CaseSection eyebrow="What I Learned" title="What I learned" accent={project.accent}>
      <div className="grid gap-4 md:grid-cols-3">
        {project.caseStudy.learnings.map((l, i) => (
          <Reveal
            key={l}
            delay={i * 80}
            className="rounded-3xl border border-border bg-gradient-to-b from-white/[0.04] to-transparent p-7"
          >
            <p className="text-pretty text-lg leading-relaxed text-foreground">{l}</p>
          </Reveal>
        ))}
      </div>
    </CaseSection>
  )
}
