export type Screenshot = {
  src: string
  alt: string
  /** phone/desktop get a drawn device frame; framed (4:5) and card (1:1) images already include their own. */
  kind: 'phone' | 'desktop' | 'framed' | 'card'
}

export type Project = {
  slug: string
  index: string
  name: string
  subtitle: string
  version?: string
  description: string
  accent: string
  /** optional second theme colour, used for gradients */
  accent2?: string
  platforms: string[]
  features: string[]
  tech: string[]
  githubUrl?: string
  status?: string
  apkUrl?: string
  logo?: string
  visual: 'dual-phone' | 'phone-duo' | 'product-image'
  heroImage?: { src: string; alt: string; width: number; height: number }
  /** optional separate image for the compact project card on the home page */
  cardImage?: { src: string; alt: string; width: number; height: number }
  screenshots: Screenshot[]
  caseStudy: {
    overview: string
    problem: string
    idea: string
    built: string[]
    featureDetails: { title: string; description: string }[]
    designProcess: { step: string; description: string }[]
    challenges: { title: string; description: string }[]
    learnings: string[]
  }
}

// Replace screenshot files in /public/projects/<slug>/ with real captures.
// If you switch to .png/.jpg, update the `src` paths below.
export const projects: Project[] = [
  {
    slug: 'recall',
    index: '01',
    name: 'Recall',
    version: '2.0',
    apkUrl: 'https://github.com/SeNsXD/Recall/releases/tag/v2.0',
    subtitle: 'Your Second Memory',
    description: 'Save what matters. Find it when you need it.',
    accent: 'oklch(0.78 0.12 250)',
    accent2: 'oklch(0.97 0.01 250)',
    logo: '/projects/recall/recall-icon.png',
    platforms: ['Android'],
    features: ['Echo Assistant', 'Timeline', 'Hardware Keystore Privacy', 'Where I Put It', 'Reminders & Alarms', 'Temporary Click', 'Library', 'Snap Text OCR', 'Google Drive Backup'],
    tech: [],
    visual: 'product-image',
    heroImage: { src: '/projects/recall/recall-hero.png', alt: 'Recall - Your second memory. Save it. Find it. Remember it.', width: 3840, height: 1920 },
    cardImage: { src: '/projects/recall/recall-product-trio.png', alt: 'Recall Library, Home and Timeline shown together', width: 2400, height: 2438 },
    screenshots: [
      { src: '/projects/recall/recall-echo.png', alt: 'Echo on-device AI assistant recalling passport location and upcoming week events', kind: 'framed' },
      { src: '/projects/recall/recall-library.png', alt: 'Recall Library with protected passwords, files, receipts, warranties and collections', kind: 'framed' },
      { src: '/projects/recall/recall-home.png', alt: 'Recall Home with Your Socials, pinned collections, Temporary Click and sticky notes', kind: 'framed' },
      { src: '/projects/recall/recall-timeline.png', alt: 'Timeline showing weekly memory activity, chronological history and saved notes', kind: 'framed' },
      { src: '/projects/recall/recall-drive-backup.png', alt: 'Google Drive Backup with completed backup status and automatic backup controls', kind: 'framed' },
      { src: '/projects/recall/recall-privacy.png', alt: 'Hardware keystore encryption, screen shielding and 100% on-device architecture', kind: 'card' },
    ],
    caseStudy: {
      overview: 'Recall brings everyday memories, saved items and reminders into one place.',
      problem: 'An idea, a file or the place you left something can be easy to forget. Keeping those details across different apps makes them harder to find.',
      idea: 'Give those small details a home. Save them as they happen and return to them when you need them.',
      built: [],
      featureDetails: [],
      designProcess: [],
      challenges: [
        { title: 'Clear actions', description: 'A conversation needs to make the next step clear. Echo shows contextual memory cards and acknowledges when a location or note is saved.' },
        { title: 'Many kinds of memories', description: 'Locations, files and temporary photos need distinct places while still feeling like one product. Named collections and pinned shortcuts keep them easy to reach.' },
        { title: 'Visible backup state', description: 'Backup needs clear feedback. The screen brings completion status, the last backup and scheduling controls together.' },
      ],
      learnings: [],
    },
  },
  {
    slug: 'gymbros',
    index: '02',
    name: 'GymBros',
    subtitle: 'Android Fitness & Workout Tracking App',
    version: 'Arctic 4.0',
    description:
      'A complete fitness companion designed around fast workout logging, progress tracking and a premium distraction-free experience.',
    accent: 'oklch(0.70 0.17 255)',
    accent2: 'oklch(0.86 0.17 150)',
    platforms: ['Android'],
    features: [
      'Workout Tracking',
      'Strength & Cardio',
      'Progress Tracking',
      'Hydration',
      'Spotify Integration',
      'Cloud Backup',
      'Themes',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Spotify API'],
    githubUrl: 'https://github.com/SeNsXD/GymBros',
    apkUrl: 'https://github.com/SeNsXD/GymBros/releases/tag/Stable-build',
    visual: 'dual-phone',
    logo: '/projects/gymbros/gymbros-app-icon.png',
    screenshots: [
      { src: '/projects/gymbros/gymbros-home.webp', alt: 'GymBros UI 2.0 home screen', kind: 'phone' },
      { src: '/projects/gymbros/gymbros-now-playing.webp', alt: 'GymBros UI 2.0 now playing screen', kind: 'phone' },
      { src: '/projects/gymbros/gymbros-water.webp', alt: 'GymBros UI 2.0 water tracking screen', kind: 'phone' },
      { src: '/projects/gymbros/gymbros-workout.webp', alt: 'GymBros UI 2.0 workout screen', kind: 'phone' },
      { src: '/projects/gymbros/gymbros-performance.webp', alt: 'GymBros UI 2.0 performance screen', kind: 'phone' },
      { src: '/projects/gymbros/gymbros-past-workouts.webp', alt: 'GymBros UI 2.0 past workouts screen', kind: 'phone' },
      { src: '/projects/gymbros/gymbros-add-exercise.webp', alt: 'GymBros UI 2.0 add exercise screen', kind: 'phone' },
      { src: '/projects/gymbros/gymbros-progress.webp', alt: 'GymBros UI 2.0 progress screen', kind: 'phone' },
      { src: '/projects/gymbros/gymbros-profile.webp', alt: 'GymBros UI 2.0 profile screen', kind: 'phone' },
    ],
    caseStudy: {
      overview:
        'GymBros is an Android fitness companion built for people who want to log workouts quickly and see their progress clearly, without ads, clutter or friction between sets.',
      problem:
        'Many workout apps feel slow at the moment it matters most: in the middle of a session. Logging a set often takes too many taps, and the screen is crowded with features that get in the way of training.',
      idea:
        'Design a focused, premium training companion where logging is the fastest action on screen, progress is visible at a glance, and the extras like music, hydration and backup support the workout instead of competing with it.',
      built: [
        'A fast workout logger for strength and cardio sessions',
        'Progress views that surface history and trends per exercise',
        'Hydration tracking with quick-add actions',
        'Spotify integration to control music without leaving the app',
        'Cloud backup and sync powered by Firebase',
        'A theming system for a personalised, distraction-free look',
      ],
      featureDetails: [
        { title: 'Workout Tracking', description: 'Log sets, reps and weights in as few taps as possible.' },
        { title: 'Strength & Cardio', description: 'Support for both lifting sessions and cardio activities.' },
        { title: 'Progress Tracking', description: 'Review past sessions and see how each exercise evolves.' },
        { title: 'Hydration', description: 'Track daily water intake alongside training.' },
        { title: 'Spotify Integration', description: 'Control playback from inside the workout screen.' },
        { title: 'Cloud Backup', description: 'Keep workout data safe and restorable across devices.' },
      ],
      designProcess: [
        { step: 'Define', description: 'Identified the core loop: start workout, log set, rest, repeat, and made it the priority.' },
        { step: 'Design', description: 'Built a dark, high-contrast interface with large touch targets for use between sets.' },
        { step: 'Build', description: 'Implemented the UI in Jetpack Compose with Firebase for auth, data and backup.' },
        { step: 'Iterate', description: 'Refined flows based on real usage during training sessions.' },
      ],
      challenges: [
        { title: 'Speed of logging', description: 'Balancing flexible workout data with a logging flow that stays fast.' },
        { title: 'Third-party integration', description: 'Integrating Spotify playback controls reliably within the app experience.' },
        { title: 'Data sync', description: 'Designing a backup model that keeps local and cloud data consistent.' },
      ],
      learnings: [
        'Designing for a real context of use (mid-workout) changes every UI decision.',
        'Jetpack Compose makes iterating on polished, themeable UI much faster.',
        'Integrations add value only when they feel native to the core flow.',
      ],
    },
  },
  {
    slug: 'swift-tab',
    index: '03',
    name: 'Swift Tab',
    subtitle: 'Windows 11 Taskbar Companion',
    version: '0.4.0',
    description:
      'A Windows 11 app that docks a compact pill to the taskbar, bringing media controls, earbud battery, weather, clipboard history and a file shelf one glance away.',
    accent: 'oklch(0.78 0.13 225)',
    accent2: 'oklch(0.62 0.2 275)',
    platforms: ['Windows 11'],
    features: ['Media Controls', 'Earbuds Battery', 'Weather', 'Clipboard', 'Shelf', 'Control Center'],
    tech: [],
    githubUrl: 'https://github.com/SeNsXD/Swift-Tab',
    logo: '/projects/swift-tab/swift-tab-icon.png',
    visual: 'product-image',
    heroImage: {
      src: '/projects/swift-tab/swift-tab-hero.png',
      alt: 'Swift Tab on Windows 11: the Control Center, media card, weather card, file shelf and clipboard history, all docked to the taskbar',
      width: 2374,
      height: 1244,
    },
    cardImage: {
      src: '/projects/swift-tab/swift-tab-card.png',
      alt: 'Swift Tab media card and weather card above the Windows 11 taskbar',
      width: 1500,
      height: 1000,
    },
    screenshots: [],
    caseStudy: {
      overview:
        'Swift Tab turns the Windows 11 taskbar into a live activity surface. A compact pill docks beside the taskbar and shows what is happening right now, without opening another window.',
      problem:
        'Small everyday details, like the track that is playing, your earbuds\u2019 battery or a link you just copied, are scattered across apps and corners of the system. Checking any of them means leaving what you were doing.',
      idea:
        'Dock one adaptive pill to the taskbar that surfaces only the activities you turn on, and give people a Control Center to switch each module on or off.',
      built: [],
      featureDetails: [],
      designProcess: [],
      challenges: [],
      learnings: [],
    },
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
