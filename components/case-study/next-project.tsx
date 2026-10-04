import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { LinkButton } from '../link-button'
import { Reveal } from '../reveal'
import { GitHubIcon } from '../social-icons'

export function NextProject({ project, next }: { project: Project; next: Project }) {
  return (
    <section aria-label="Project links" className="mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-8">
      <Reveal className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-border bg-card/50 p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          {project.githubUrl ? (
            <>
              <h2 className="text-2xl font-semibold text-foreground">Explore the code</h2>
              <p className="mt-2 text-muted-foreground">Source and releases for {project.name} are on GitHub.</p>
            </>
          ) : project.slug === 'recall' ? (
            <>
              <h2 className="text-2xl font-semibold text-foreground">Your Second Memory</h2>
              <p className="mt-2 text-muted-foreground">Save what matters. Find it when you need it.</p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-foreground">Currently in development</h2>
              <p className="mt-2 text-muted-foreground">{project.name} is actively being built for Windows and Android.</p>
            </>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <LinkButton href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
              <GitHubIcon className="size-4" />
              GitHub
            </LinkButton>
          )}
          {project.apkUrl && (
            <LinkButton href={project.apkUrl} target="_blank" rel="noopener noreferrer">
              <Download className="size-4" aria-hidden="true" />
              Download APK
            </LinkButton>
          )}
          {!project.githubUrl && !project.apkUrl && project.slug !== 'recall' && (
            <span className="inline-flex items-center rounded-full border border-border bg-background/50 px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              ● In Development
            </span>
          )}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <Link
          href={`/projects/${next.slug}`}
          className="group mt-6 flex items-center justify-between gap-6 rounded-[2rem] border border-border p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 sm:p-10"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Next project</p>
            <p className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">{next.name}</p>
            <p className="mt-2" style={{ color: next.accent }}>
              {next.subtitle}
            </p>
          </div>
          <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:border-brand/40 group-hover:bg-brand group-hover:text-primary-foreground">
            <ArrowRight className="size-5" aria-hidden="true" />
          </span>
        </Link>
      </Reveal>
    </section>
  )
}
