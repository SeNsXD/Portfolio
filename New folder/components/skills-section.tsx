import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const groups = [
  {
    title: 'Development',
    skills: ['Kotlin', 'Jetpack Compose', 'Android Development', 'Firebase', 'WinUI 3'],
  },
  {
    title: 'Product',
    skills: ['Product Management', 'Product Design', 'UI/UX', 'Product Research'],
  },
  {
    title: 'Business & Marketing',
    skills: ['Digital Marketing', 'Market Research', 'Microsoft Excel', 'Content Strategy'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="skills-title"
          title="What I work with"
          subtitle="A mix of engineering, product and business skills that help me take ideas from problem to shipped product."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 90}>
              <h3 className="border-b border-foreground/80 pb-4 text-xl font-semibold text-foreground">{group.title}</h3>
              <ul className="divide-y divide-border">
                {group.skills.map((skill) => (
                  <li key={skill} className="py-3 text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
