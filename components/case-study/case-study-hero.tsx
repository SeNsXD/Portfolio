import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { HeroBackground } from '../hero-background'
import { LinkButton } from '../link-button'
import { ProjectVisual } from '../project-visual'
import { Reveal } from '../reveal'
import { GitHubIcon } from '../social-icons'
import { Tag, TagList } from '../tag'

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section aria-labelledby="case-title" className="relative isolate overflow-hidden pt-28 sm:pt-36">
      <HeroBackground accent={project.accent} />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            All projects
          </Link>
        </Reveal>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal delay={60} className="flex items-center gap-4">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.name} app icon`}
                  width={64}
                  height={64}
                  priority
                  className="size-16 rounded-2xl border border-white/10 shadow-[0_12px_40px_-12px_var(--project-accent)]"
                  style={{ ['--project-accent' as string]: project.accent }}
                />
              ) : (
                <div
                  aria-label={`${project.name} logo placeholder`}
                  role="img"
                  className="flex size-16 items-center justify-center rounded-2xl border border-white/10 text-2xl font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_var(--project-accent)]"
                  style={{ background: project.accent, ['--project-accent' as string]: project.accent }}
                >
                  {project.name.charAt(0)}
                </div>
              )}
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <p>Project {project.index}</p>
                <p className="mt-1">
                  {project.platforms.join(' · ')}
                  {project.status ? <span style={{ color: project.accent }}> · {project.status}</span> : project.version && <span className="text-foreground/80"> · v. {project.version}</span>}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 id="case-title" className="mt-8 text-6xl font-semibold tracking-tighter text-foreground sm:text-8xl">
                {project.name}
              </h1>
              <p className="mt-3 text-xl font-medium" style={{ color: project.accent }}>
                {project.subtitle}
              </p>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">{project.description}</p>
            </Reveal>
          </div>

          <Reveal delay={180} className="flex flex-wrap gap-3 lg:justify-end">
            {project.githubUrl ? (
              <LinkButton href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                <GitHubIcon className="size-4" />
                GitHub
              </LinkButton>
            ) : project.status && (
              <span className="inline-flex h-11 items-center rounded-xl border px-5 font-mono text-xs uppercase tracking-[0.16em]" style={{ borderColor: project.accent, color: project.accent }}>
                ● {project.status}
              </span>
            )}
            {project.apkUrl && (
              <LinkButton href={project.apkUrl} target="_blank" rel="noopener noreferrer" size="lg">
                <Download className="size-4" aria-hidden="true" />
                Download APK
              </LinkButton>
            )}
          </Reveal>
        </div>

        <Reveal delay={240}>
          <TagList label="Technology" className="mt-10">
            {project.tech.map((t) => (
              <Tag key={t} tone="mono">
                {t}
              </Tag>
            ))}
          </TagList>
        </Reveal>

        <Reveal delay={300} className="group mt-14 overflow-hidden rounded-[2rem] border border-border bg-card/50">
          <ProjectVisual
            project={project}
            priority
            large={project.slug === 'gymbros'}
            className={
              project.slug === 'gymbros'
                ? 'min-h-[460px] px-4 py-14 sm:min-h-[680px] sm:px-10'
                : 'min-h-[420px] px-6 py-14 sm:min-h-[600px] sm:px-16'
            }
          />
        </Reveal>
      </div>
    </section>
  )
}
