import { projects } from '@/lib/projects'
import { ProjectCard } from './project-card'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Selected Work"
          subtitle="Products I've designed, built and continuously improved."
        />
        <div className="mt-16 flex flex-col gap-8 sm:gap-10">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
