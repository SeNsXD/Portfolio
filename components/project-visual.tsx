import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { LaptopMockup, PhoneMockup } from './device-mockups'
import { FramedShot } from './framed-shot'

export function ProjectVisual({
  project,
  priority,
  large,
  className,
}: {
  project: Project
  priority?: boolean
  large?: boolean
  className?: string
}) {
  const framedWidth = large ? 'w-[52%] max-w-[430px]' : 'w-[48%] max-w-[320px]'
  const framedSizes = large ? '(min-width: 1024px) 430px, 52vw' : '(min-width: 1024px) 320px, 45vw'
  const phones = project.screenshots.filter((s) => s.kind === 'phone')
  const desktops = project.screenshots.filter((s) => s.kind === 'desktop')
  const framed = project.screenshots.filter((s) => s.kind === 'framed')

  return (
    <div
      className={cn('relative flex items-center justify-center overflow-hidden', className)}
      style={{ ['--project-accent' as string]: project.accent }}
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
        style={{ background: `radial-gradient(closest-side, ${project.accent}, transparent)` }}
      />
      <div className="relative w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
        {project.visual === 'dual-phone' && framed.length >= 2 && (
          project.slug === 'gymbros' && framed.length >= 4 ? (
            <div className="relative mx-auto flex min-h-[420px] w-full max-w-[920px] items-center justify-center sm:min-h-[620px]">
              <FramedShot
                shot={framed[1]}
                sizes="(min-width: 1024px) 330px, 38vw"
                className="absolute left-[4%] w-[38%] max-w-[330px] -rotate-6 opacity-80 shadow-2xl shadow-black/60 sm:left-[8%]"
              />
              <FramedShot
                shot={framed[3]}
                sizes="(min-width: 1024px) 330px, 38vw"
                className="absolute right-[4%] w-[38%] max-w-[330px] rotate-6 opacity-80 shadow-2xl shadow-black/60 sm:right-[8%]"
              />
              <FramedShot
                shot={framed[0]}
                priority={priority}
                sizes="(min-width: 1024px) 430px, 52vw"
                className="relative z-10 w-[52%] max-w-[430px] shadow-2xl shadow-black/70"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              <FramedShot
                shot={framed[0]}
                priority={priority}
                sizes={framedSizes}
                className={cn(framedWidth, '-rotate-2 shadow-2xl shadow-black/60')}
              />
              <FramedShot
                shot={framed[1]}
                sizes={framedSizes}
                className={cn(framedWidth, 'translate-y-8 rotate-2 shadow-2xl shadow-black/60')}
              />
            </div>
          )
        )}
        {project.visual === 'dual-phone' && framed.length < 2 && (
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <PhoneMockup src={phones[0].src} alt={phones[0].alt} priority={priority} className="w-[42%] max-w-[240px] -rotate-3" />
            <PhoneMockup src={phones[1].src} alt={phones[1].alt} className="w-[42%] max-w-[240px] translate-y-8 rotate-3" />
          </div>
        )}
        {project.visual === 'phone-duo' && project.slug === 'widgetlabs' && (
          <div className="relative mx-auto flex w-full max-w-[1100px] items-center justify-center px-1 py-4 sm:px-4">
            <Image
              src="/projects/widgetlabs/widgetlabs-mockup-app-screens.png"
              alt="WidgetLabs app screens showing Home, Earbuds, Media, Weather and Notification History"
              width={1792}
              height={1024}
              priority={priority}
              sizes="(min-width: 1024px) 1000px, 94vw"
              className="h-auto w-full object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.55)]"
            />
          </div>
        )}
        {project.visual === 'phone-duo' && project.slug !== 'widgetlabs' && framed.length >= 3 && (
          <div className="relative mx-auto flex min-h-[410px] w-full max-w-[900px] items-center justify-center sm:min-h-[610px]">
            <FramedShot
              shot={framed[1]}
              sizes="(min-width: 1024px) 300px, 36vw"
              className="absolute left-[5%] w-[36%] max-w-[300px] -rotate-6 opacity-80 shadow-2xl shadow-black/60 sm:left-[9%]"
            />
            <FramedShot
              shot={framed[2]}
              sizes="(min-width: 1024px) 300px, 36vw"
              className="absolute right-[5%] w-[36%] max-w-[300px] rotate-6 opacity-80 shadow-2xl shadow-black/60 sm:right-[9%]"
            />
            <FramedShot
              shot={framed[0]}
              priority={priority}
              sizes="(min-width: 1024px) 400px, 50vw"
              className="relative z-10 w-[50%] max-w-[400px] shadow-2xl shadow-black/70"
            />
          </div>
        )}
        {project.visual === 'phone-duo' && framed.length < 3 && phones.length >= 2 && (
          <div className="flex items-end justify-center gap-4 sm:gap-6">
            <PhoneMockup src={phones[0].src} alt={phones[0].alt} priority={priority} className="w-[44%] max-w-[250px]" />
            <PhoneMockup src={phones[1].src} alt={phones[1].alt} className="w-[38%] max-w-[215px] -translate-y-10 opacity-90" />
          </div>
        )}
        {project.visual === 'laptop-phone' && project.slug === 'flick' && (
          <div className="relative mx-auto w-full max-w-[900px]">
            <Image
              src="/projects/flick/flick-laptop-phone-transparent.png"
              alt="Flick running across Windows and Android"
              width={1792}
              height={1024}
              priority={priority}
              sizes="(min-width: 1024px) 900px, 95vw"
              className="h-auto w-full object-contain drop-shadow-[0_30px_65px_rgba(154,45,255,0.20)]"
            />
          </div>
        )}
        {project.visual === 'laptop-phone' && project.slug !== 'flick' && (
          <div className="relative mx-auto w-full max-w-[560px] pb-6 pr-6 sm:pr-10">
            <LaptopMockup src={desktops[0].src} alt={desktops[0].alt} priority={priority} className="w-[88%]" />
            <PhoneMockup
              src={phones[0].src}
              alt={phones[0].alt}
              className="absolute bottom-0 right-0 w-[26%] max-w-[150px] rounded-[1.6rem] [&>div]:rounded-[1.3rem]"
            />
          </div>
        )}
      </div>
    </div>
  )
}
