import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="pb-16 pt-6 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="projects-title" title="Selected Work" />
        <Reveal as="ul" className="mt-8 border-t border-border">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`${project.name}: ${project.subtitle}`}
                style={{ ['--row-accent' as string]: project.accent }}
                className="group flex flex-col gap-3 border-b border-border py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:grid sm:grid-cols-[2.5rem_minmax(0,1.1fr)_minmax(0,1.4fr)_9rem_1.5rem] sm:items-center sm:gap-x-6 sm:px-3"
              >
                <span aria-hidden="true" className="hidden font-mono text-xs text-muted-foreground sm:block">
                  {project.index}
                </span>

                <span className="flex items-center gap-3">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt=""
                      width={40}
                      height={40}
                      className="size-10 rounded-[22%] border border-white/10 object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-10 items-center justify-center rounded-[22%] border border-white/10 text-base font-semibold text-primary-foreground"
                      style={{ background: project.accent }}
                    >
                      {project.name.charAt(0)}
                    </span>
                  )}
                  <span className="text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-[var(--row-accent)] sm:text-3xl">
                    {project.name}
                  </span>
                </span>

                <span className="text-pretty text-muted-foreground">{project.subtitle}</span>

                <span className="font-mono text-xs text-muted-foreground">
                  {project.platforms.join(' · ')}
                  {project.status && (
                    <span className="mt-1 block" style={{ color: project.accent }}>
                      ● {project.status}
                    </span>
                  )}
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="hidden size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:block"
                />
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
