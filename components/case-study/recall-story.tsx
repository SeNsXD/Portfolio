import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { Reveal } from '../reveal'
import { CaseSection } from './case-section'

const stories = [
  { title: 'Echo Assistant', intro: 'On-device intelligence that never leaves your phone.', details: [
    { title: 'Natural memory search', text: 'Ask Echo where you left important belongings in plain language. Echo retrieves exact room and shelf placements instantly.' },
    { title: 'Upcoming agenda & reminders', text: 'Ask what is coming up to get an instant snapshot of scheduled reminders, warranty expirations and subscription renewals.' },
  ] },
  { title: 'Library', intro: 'Everything in its place.', details: [
    { title: 'Everyday collections', text: 'Keep files, receipts, warranties, subscriptions and cards in named collections. Pin the ones you return to often.' },
    { title: 'Temporary Click', text: 'Keep a photo for now in its own collection. Ephemeral drops give temporary photos a clear place alongside permanent records.' },
    { title: 'Protected credentials', text: 'The Library secures passwords and personal ID cards with hardware keystore encryption, guarded behind biometric authentication.' },
  ] },
  { title: 'Home', intro: 'Your day, at a glance.', details: [
    { title: 'Your Socials & quick links', text: 'Access your connected profiles, brand links and essential shortcuts right from the top carousel.' },
    { title: 'Pinned vaults & Sticky Notes', text: 'Jump directly into your most-used collections, launch Temporary Click, or jot down thoughts on the sticky note pad.' },
  ] },
  { title: 'Timeline', intro: 'Your life, remembered.', details: [
    { title: 'Weekly glance & activity', text: 'Track every saved note, memory and deletion across your days with an at-a-glance weekly activity breakdown.' },
    { title: 'Chronological memory stream', text: 'Review past actions grouped by Today, Yesterday or earlier dates, with flexible filters to reconstruct your days.' },
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
