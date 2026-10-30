import Image from 'next/image'
import { Mountain } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { Tag, TagList } from './tag'

type Trek = {
  name: string
  when: string
  description: string
  stats?: string[]
  /** Put the photo in /public/treks/ and set its path here, e.g. '/treks/rupin-pass.jpg'. */
  image?: { src: string; alt: string; /** CSS object-position, to choose what stays in frame when cropped */ position?: string }
}

const treks: Trek[] = [
  {
    name: 'Rupin Pass',
    when: 'Jun 2026',
    description: 'A challenging high-altitude trek with India Hikes.',
    stats: ['7 days', '37 km', '15,279 ft'],
    image: { src: '/treks/rupin-pass.jpg', alt: 'Rishabh on the Rupin Pass trail with a backpack and trekking pole, beside a river in a forested valley', position: 'center 40%' },
  },
  {
    name: 'Kuari Pass',
    when: 'Jan 2025',
    description: 'A winter trek that called for resilience, adaptability and team coordination in challenging terrain.',
    stats: ['6 days', '22 km'],
    image: { src: '/treks/kuari-pass.jpg', alt: 'Rishabh smiling in the snow on the Kuari Pass trek with snow-covered Himalayan peaks behind him', position: 'center 55%' },
  },
  {
    name: 'Sandakphu Phalut',
    when: 'Feb 2024',
    description: 'A high-altitude trek that tested physical endurance and teamwork.',
    stats: ['7 days', '68 km', '11,930 ft'],
    image: { src: '/treks/sandakphu-phalut.jpg', alt: 'Rishabh and three trekmates holding an India Hikes "Done! Sandakphu Phalut 11,930 feet" banner at the summit', position: 'center 52%' },
  },
]

export function TrekSection() {
  return (
    <section aria-labelledby="treks-title" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="treks-title"
          title="Treks"
          subtitle="When I'm not building, I'm in the mountains. Long days, thin air and a team to rely on."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {treks.map((trek, i) => (
            <Reveal
              key={trek.name}
              delay={i * 80}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/50"
            >
              {trek.image ? (
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                  <Image
                    src={trek.image.src}
                    alt={trek.image.alt}
                    fill
                    sizes="(min-width: 768px) 360px, 90vw"
                    style={{ objectPosition: trek.image.position }}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="flex aspect-[4/3] items-center justify-center border-b border-border bg-white/[0.02] text-muted-foreground"
                >
                  <Mountain className="size-8" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs text-muted-foreground">India Hikes · {trek.when}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{trek.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{trek.description}</p>
                {trek.stats && (
                  <TagList label={`${trek.name} stats`} className="mt-5">
                    {trek.stats.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </TagList>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
