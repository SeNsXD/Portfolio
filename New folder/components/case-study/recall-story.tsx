import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { Reveal } from '../reveal'
import { CaseSection } from './case-section'

const stories = [
  { title: 'Ask Recall', intro: 'Tell Recall what you want to remember.', details: [
    { title: 'Where I Put It', text: 'Save where you left something while the detail is still fresh. Here, a pendrive on the table becomes a saved location.' },
    { title: 'Reminders', text: 'Turn an intention into a reminder. Review the action before confirming it, then see that it has been saved.' },
  ] },
  { title: 'Library', intro: 'A place for every kind of memory.', details: [
    { title: 'Everyday collections', text: 'Keep files, screenshots, receipts, warranties and subscriptions in named collections. Pin the ones you return to often.' },
    { title: 'Temporary Click', text: 'Keep a photo for now in its own collection. The shortcut gives temporary photos a clear place alongside things you want to keep.' },
    { title: 'Passwords and privacy', text: 'The Library marks passwords as protected. This view shows the collection without exposing any login details.' },
  ] },
  { title: 'Home', intro: 'What matters today, within reach.', details: [
    { title: 'Reminders at a glance', text: 'An upcoming call takes the lead, with its time and countdown visible as soon as you open Recall.' },
    { title: 'Pinned and recently kept', text: 'Reach favourite collections, open Temporary Click and return to a saved idea from one starting point. Recently kept has a place below.' },
  ] },
  { title: 'Replay', intro: 'Return to the moments you saved.', details: [
    { title: 'A timeline of activity', text: 'See memories, reminders and saved locations in time order. Filters let you revisit today, yesterday or earlier activity.' },
  ] },
  { title: 'Google Drive Backup', intro: 'A clear view of your backup.', details: [
    { title: 'Status and control', text: 'See when the last backup completed and start another when you need it. Choose daily or weekly automatic backups and whether to use an unmetered network.' },
  ] },
]

export function RecallStory({ project }: { project: Project }) {
  return <>
    {stories.map((story, i) => (
      <CaseSection key={story.title} eyebrow={story.title} title={story.intro} accent={project.accent}>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal className={i % 2 ? 'lg:order-2' : undefined}>
            <div className="space-y-8">
              {story.details.map(detail => <div key={detail.title}>
                <h3 className="text-xl font-semibold text-foreground">{detail.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{detail.text}</p>
              </div>)}
            </div>
          </Reveal>
          <Reveal className="rounded-[2rem] border border-border bg-card/50 p-4 sm:p-8">
            <Image src={project.screenshots[i].src} alt={project.screenshots[i].alt} width={1148} height={2468}
              sizes="(min-width: 640px) 400px, 90vw" className="mx-auto h-auto w-full max-w-[400px] object-contain" />
          </Reveal>
        </div>
      </CaseSection>
    ))}
  </>
}

export function RecallFinal({ project }: { project: Project }) {
  return <CaseSection eyebrow="Final product" title="You do not need to remember everything." accent={project.accent}>
    <Reveal>
      <p className="text-2xl font-medium" style={{ color: project.accent }}>Recall does.</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">A conversation to save a detail. A Library to give it a home. A timeline to revisit it. Recall brings these moments together as your second memory.</p>
    </Reveal>
  </CaseSection>
}
