import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { LaptopMockup, PhoneMockup } from '../device-mockups'
import { FramedShot } from '../framed-shot'
import { Reveal } from '../reveal'
import { CaseSection } from './case-section'
import { ScreenshotCarousel } from './screenshot-carousel'

export function ScreenshotGallery({ project }: { project: Project }) {
  const phones = project.screenshots.filter((s) => s.kind === 'phone')
  const desktops = project.screenshots.filter((s) => s.kind === 'desktop')
  const framed = project.screenshots.filter((s) => s.kind === 'framed')
  const cards = project.screenshots.filter((s) => s.kind === 'card')

  return (
    <CaseSection eyebrow="Screens" title="A look inside" accent={project.accent}>
      <div className="flex flex-col gap-6">
        {project.slug === 'flick' && (
          <Reveal className="overflow-hidden rounded-[2rem] border border-border bg-black/30">
            <div className="px-6 pt-7 sm:px-10 sm:pt-9">
              <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: project.accent }}>Android companion</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">Built for both sides of the transfer</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">The Android interface stays focused on nearby devices, quick send actions and transfer status.</p>
            </div>
            <iframe
              src="/projects/flick/phones.html"
              title="Animated Flick Android phone mockups"
              className="mt-2 h-[430px] w-full border-0 bg-[#05070b] sm:h-[650px]"
              loading="lazy"
            />
          </Reveal>
        )}
        {desktops.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {desktops.map((s, i) => (
              <Reveal key={s.src} delay={i * 80} className="group rounded-[2rem] border border-border bg-card/50 p-6 sm:p-10">
                <div className="transition-transform duration-700 group-hover:scale-[1.03]">
                  <LaptopMockup src={s.src} alt={s.alt} />
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {phones.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {phones.map((s, i) => (
              <Reveal key={s.src} delay={i * 80} className="group rounded-[2rem] border border-border bg-card/50 p-4 sm:p-8">
                <div className="mx-auto max-w-[220px] transition-transform duration-700 group-hover:scale-[1.04]">
                  <PhoneMockup src={s.src} alt={s.alt} />
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {framed.length > 0 && (
          <Reveal>
            <ScreenshotCarousel shots={framed} projectName={project.name} />
          </Reveal>
        )}

        {cards.length > 0 && (
          <div className="grid gap-5 sm:gap-6">
            {cards.map((s, i) => (
              <Reveal
                key={s.src}
                delay={i * 80}
                className="group overflow-hidden rounded-[2rem] border border-border bg-card/40 p-3 sm:p-5"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={1792}
                  height={1024}
                  sizes="(min-width: 1024px) 1100px, 96vw"
                  className="h-auto w-full rounded-[1.4rem] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </CaseSection>
  )
}
