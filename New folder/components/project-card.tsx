import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Download } from 'lucide-react'
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
      className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/60"
    >
      <div className={cn('grid lg:grid-cols-2', reverse && 'lg:[&>*:first-child]:order-2')}>
        <div className="flex flex-col p-7 sm:p-10 lg:p-12">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{project.platforms.join(', ')}</span>
            {project.status ? (
              <span className="ml-auto rounded-full border px-3 py-0.5" style={{ borderColor: project.accent, color: project.accent }}>
                {project.status}
              </span>
            ) : project.version && (
              <span className="ml-auto rounded-full border border-border px-3 py-0.5 text-foreground/80">
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
                className="size-12 rounded-[22%] border border-white/10 object-cover shadow-[0_10px_30px_-12px_var(--project-accent)] sm:size-[52px]"
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

          {project.tech.length > 0 && <div className="mt-8 border-t border-border pt-6">
            <p className="sr-only">Technology</p>
            <p className="font-mono text-xs text-muted-foreground">
              {project.tech.map((t, i) => (
                <span key={t}>
                  {i > 0 && <span aria-hidden="true" className="px-2 text-white/20">/</span>}
                  <span className="text-foreground/80">{t}</span>
                </span>
              ))}
            </p>
          </div>}

          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <LinkButton href={`/projects/${project.slug}`} aria-label={`View ${project.name} case study`}>
              View Project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </LinkButton>
            {project.apkUrl && (
              <LinkButton
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                aria-label={`Download ${project.name} APK`}
              >
                <Download className="size-4" aria-hidden="true" />
                Download APK
              </LinkButton>
            )}
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
          className="relative min-h-[360px] border-t border-border sm:min-h-[460px] lg:border-t-0 lg:border-l"
          style={{
            background: `linear-gradient(135deg, color-mix(in oklch, ${project.accent} 20%, var(--card)), color-mix(in oklch, ${project.accent2 ?? project.accent} 14%, var(--card)))`,
          }}
        >
          <ProjectVisual project={project} className="absolute inset-0 px-6 py-12 sm:px-12" />
        </Link>
      </div>
    </article>
  )
}
