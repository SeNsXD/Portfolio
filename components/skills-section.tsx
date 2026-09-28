import { Code2, Megaphone, Shapes } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const groups = [
  {
    title: 'Development',
    icon: Code2,
    skills: ['Kotlin', 'Jetpack Compose', 'Android Development', 'Firebase', 'WinUI 3'],
  },
  {
    title: 'Product',
    icon: Shapes,
    skills: ['Product Management', 'Product Design', 'UI/UX', 'Product Research'],
  },
  {
    title: 'Business & Marketing',
    icon: Megaphone,
    skills: ['Digital Marketing', 'Market Research', 'Microsoft Excel', 'Content Strategy'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="What I work with"
          subtitle="A mix of engineering, product and business skills that help me take ideas from problem to shipped product."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-border bg-card/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/15">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-brand/25 bg-brand-soft text-brand">
                    <group.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-5 divide-y divide-border">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center justify-between py-3 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      {skill}
                      <span aria-hidden="true" className="size-1 rounded-full bg-white/20" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
