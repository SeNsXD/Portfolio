import Image from 'next/image'

const widgets = [
  {
    name: 'Recall',
    tagline: 'Your second memory',
    icon: '/projects/recall/recall-icon.png',
    bg: 'linear-gradient(135deg, oklch(0.98 0.008 250), oklch(0.82 0.1 250))',
    fg: 'oklch(0.22 0.06 255)',
    delay: 120,
  },
  {
    name: 'GymBros',
    tagline: 'Fitness and workout tracking',
    icon: '/projects/gymbros/gymbros-app-icon.png',
    bg: 'linear-gradient(135deg, oklch(0.66 0.17 255), oklch(0.86 0.17 150))',
    fg: 'oklch(0.17 0.05 255)',
    delay: 260,
  },
  {
    name: 'WidgetLabs',
    tagline: 'Home-screen widget platform',
    icon: '/projects/widgetlabs/widgetlabs-icon.png',
    bg: 'linear-gradient(135deg, oklch(0.42 0.2 290), oklch(0.62 0.22 320))',
    fg: 'oklch(0.98 0.01 300)',
    delay: 400,
  },
]

export function HeroPhone() {
  return (
    <div
      role="img"
      aria-label="A phone home screen with the Recall, GymBros and WidgetLabs app icons"
      className="mx-auto w-full max-w-[320px] rounded-[2.75rem] border border-border bg-card p-4 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
    >
      <div aria-hidden="true" className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/10" />
      <div aria-hidden="true" className="flex flex-col gap-3">
        {widgets.map((w) => (
          <div
            key={w.name}
            className="widget-in flex min-h-[132px] flex-col justify-center gap-4 rounded-3xl p-5"
            style={{ background: w.bg, color: w.fg, animationDelay: `${w.delay}ms` }}
          >
            <Image
              src={w.icon}
              alt=""
              width={64}
              height={64}
              className="size-16 rounded-[22%] object-cover shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)]"
            />
            <div>
              <p className="text-2xl font-semibold leading-none tracking-tight">{w.name}</p>
              <p className="mt-1.5 text-sm opacity-80">{w.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
