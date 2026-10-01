import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { LinkButton } from './link-button'
import { ProjectVisual } from './project-visual'
import { GitHubIcon } from './social-icons'
import { Tag, TagList } from './tag'

export function ProjectCard({ project, reverse }: { project: Project; reverse?: boolean }) {
  const titleId = `project-${project.slug}-title`
  return (
    <article
      aria-labelledby={titleId}
      className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-white/15 hover:shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />
      <div className={cn('grid lg:grid-cols-2', reverse && 'lg:[&>*:first-child]:order-2')}>
        <div className="flex flex-col p-7 sm:p-10 lg:p-12">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span style={{ color: project.accent }}>{project.index}</span>
            <span aria-hidden="true" className="h-px w-8 bg-border" />
            <span>{project.platforms.join(' · ')}</span>
            {project.status ? (
              <span className="ml-auto rounded-lg border px-2.5 py-0.5 normal-case tracking-normal" style={{ borderColor: project.accent, color: project.accent }}>
                {project.status}
              </span>
            ) : project.version && (
              <span className="ml-auto rounded-lg border border-border px-2.5 py-0.5 normal-case tracking-normal text-foreground/80">
                v. {project.version}
              </span>
            )}
          </div>

          <div className="mt-8 flex items-center gap-4">
            {project.logo && (
              <Image
                src={project.logo}
                alt={`${project.name} app icon`}
                width={52}
                height={52}
                className="size-12 rounded-xl border border-white/10 object-cover shadow-[0_10px_30px_-12px_var(--project-accent)] sm:size-[52px]"
                style={{ ['--project-accent' as string]: project.accent }}
              />
            )}
            <h3 id={titleId} className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.name}
            </h3>
          </div>
          <p className="mt-2 text-base font-medium" style={{ color: project.accent }}>
            {project.subtitle}
          </p>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>

          <TagList label={`${project.name} features`} className="mt-7">
            {project.features.map((f) => (
              <Tag key={f}>{f}</Tag>
            ))}
          </TagList>

          <div className="mt-8 border-t border-border pt-6">
            <p className="sr-only">Technology</p>
            <p className="font-mono text-xs text-muted-foreground">
              {project.tech.map((t, i) => (
                <span key={t}>
                  {i > 0 && <span aria-hidden="true" className="px-2 text-white/20">/</span>}
                  <span className="text-foreground/80">{t}</span>
                </span>
              ))}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <LinkButton href={`/projects/${project.slug}`} aria-label={`View ${project.name} case study`}>
              View Project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </LinkButton>
            {project.githubUrl && (
              <LinkButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                aria-label={`${project.name} on GitHub`}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </LinkButton>
            )}
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="relative min-h-[360px] border-t border-border bg-gradient-to-b from-white/[0.02] to-transparent sm:min-h-[460px] lg:border-t-0 lg:border-l"
        >
          <ProjectVisual project={project} className="absolute inset-0 px-6 py-12 sm:px-12" />
        </Link>
      </div>
    </article>
  )
}
