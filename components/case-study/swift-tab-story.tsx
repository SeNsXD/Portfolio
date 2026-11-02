import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { Reveal } from '../reveal'
import { CaseSection } from './case-section'

type Story = {
  eyebrow: string
  title: string
  details: { title: string; text: string }[]
  image: { src: string; alt: string; width: number; height: number }
}

const stories: Story[] = [
  {
    eyebrow: 'Media',
    title: 'Media controls, right in your taskbar.',
    details: [
      { title: 'Now playing in the pill', text: 'The track and artist sit in the pill with previous, pause and next within reach, so you can skip a song without leaving what you are doing.' },
      { title: 'A full media card', text: 'Open the card for the artwork, a seek bar with elapsed and total time, shuffle and repeat, and a pin button. Chips show the media player and the connected earbuds.' },
    ],
    image: { src: '/projects/swift-tab/swift-tab-media.png', alt: 'Swift Tab media card with album art, seek bar and playback controls above the taskbar pill', width: 560, height: 710 },
  },
  {
    eyebrow: 'Earbuds & Weather',
    title: 'Battery and weather, always in the corner.',
    details: [
      { title: 'Earbuds battery', text: 'Connected earbuds and headphones show their battery level next to the temperature, so you can check it at a glance.' },
      { title: 'Weather now and next', text: 'Open the weather card for the city, current conditions and temperature, then the hours coming up next.' },
    ],
    image: { src: '/projects/swift-tab/swift-tab-weather.png', alt: 'Swift Tab weather card showing Paris at 22 degrees with an hourly forecast, above the corner pill with temperature and earbuds battery', width: 640, height: 710 },
  },
  {
    eyebrow: 'Shelf',
    title: 'A shelf for your files. Drop now. Drag later.',
    details: [
      { title: 'Hold files on the pill', text: 'Drop a file onto the pill to park it on the shelf, then drag it out into any app or folder when you are ready.' },
      { title: 'Quick actions', text: 'Share, copy text, shrink or zip what is on the shelf, and clear it when you are done.' },
    ],
    image: { src: '/projects/swift-tab/swift-tab-shelf.png', alt: 'Swift Tab shelf holding a PDF and a screenshot with Share, Copy text, Shrink and Zip actions', width: 640, height: 430 },
  },
  {
    eyebrow: 'Clipboard',
    title: 'Clipboard history for text, links and images.',
    details: [
      { title: 'Everything you copied', text: 'Copied text, links and images are kept in a clipboard stash, so the thing you copied a minute ago is still one click away.' },
    ],
    image: { src: '/projects/swift-tab/swift-tab-clipboard.png', alt: 'Swift Tab clipboard history with a text snippet, a link and an image', width: 640, height: 430 },
  },
  {
    eyebrow: 'Control Center',
    title: 'Make it yours. Toggle only what you need.',
    details: [
      { title: 'A switch for every module', text: 'Media, Earbuds, Weather, Clipboard and Shelf each have their own toggle, so the pill only shows the activities you want.' },
      { title: 'Appearance and behavior', text: 'The Control Center also holds Appearance and Behavior settings, plus a page for each activity.' },
    ],
    image: { src: '/projects/swift-tab/swift-tab-control-center.png', alt: 'Swift Tab Control Center with toggles for the Media, Earbuds, Weather, Clipboard and Shelf modules', width: 1046, height: 710 },
  },
]

export function SwiftTabStory({ project }: { project: Project }) {
  return (
    <>
      {stories.map((story, i) => (
        <CaseSection key={story.eyebrow} eyebrow={story.eyebrow} title={story.title} accent={project.accent}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={i % 2 ? 'lg:order-2' : undefined}>
              <div className="space-y-8">
                {story.details.map((detail) => (
                  <div key={detail.title}>
                    <h3 className="text-xl font-semibold text-foreground">{detail.title}</h3>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{detail.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="rounded-[2rem] border border-border bg-card/50 p-4 sm:p-8">
              <Image
                src={story.image.src}
                alt={story.image.alt}
                width={story.image.width}
                height={story.image.height}
                sizes="(min-width: 1024px) 520px, 90vw"
                className="mx-auto h-auto w-full max-w-[560px] object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.5)]"
              />
            </Reveal>
          </div>
        </CaseSection>
      ))}
    </>
  )
}

export function SwiftTabFinal({ project }: { project: Project }) {
  return (
    <CaseSection eyebrow="Final product" title="Everything you need, one glance away." accent={project.accent}>
      <Reveal>
        <p className="text-2xl font-medium" style={{ color: project.accent }}>Swift Tab keeps it in the taskbar.</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Media, earbud battery, weather, clipboard history and a file shelf, in one compact pill that shows only what you turn on.
        </p>
      </Reveal>
    </CaseSection>
  )
}
