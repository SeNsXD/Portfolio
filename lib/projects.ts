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
  platforms: string[]
  features: string[]
  tech: string[]
  githubUrl?: string
  status?: string
  apkUrl?: string
  logo?: string
  visual: 'dual-phone' | 'phone-duo' | 'product-image'
  heroImage?: { src: string; alt: string; width: number; height: number }
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
    apkUrl: 'https://github.com/SeNsXD/Recall/releases/tag/Recall-V1.0',
    subtitle: 'Your Second Memory',
    description: 'Save what matters. Find it when you need it.',
    accent: 'oklch(0.74 0.13 260)',
    platforms: ['Android'],
    features: ['Ask Recall', 'Where I Put It', 'Reminders', 'Temporary Click', 'Library', 'Replay', 'Google Drive Backup'],
    tech: [],
    visual: 'product-image',
    heroImage: { src: '/projects/recall/recall-product-trio.png', alt: 'Recall Library, Home and Replay shown together', width: 3010, height: 2534 },
    screenshots: [
      { src: '/projects/recall/recall-ask.png', alt: 'Ask Recall confirming a reminder and saving the location of a pendrive', kind: 'framed' },
      { src: '/projects/recall/recall-library.png', alt: 'Recall Library with saved locations, protected passwords, files, screenshots and Temporary Click', kind: 'framed' },
      { src: '/projects/recall/recall-home.png', alt: 'Recall Home with an upcoming reminder, pinned collections, Temporary Click and a saved idea', kind: 'framed' },
      { src: '/projects/recall/recall-replay.png', alt: 'Replay timeline showing saved locations, reminders and memory activity', kind: 'framed' },
      { src: '/projects/recall/recall-drive-backup.png', alt: 'Google Drive Backup with completed backup status and automatic backup controls', kind: 'framed' },
    ],
    caseStudy: {
      overview: 'Recall brings everyday memories, saved items and reminders into one place.',
      problem: 'An idea, a file or the place you left something can be easy to forget. Keeping those details across different apps makes them harder to find.',
      idea: 'Give those small details a home. Save them as they happen and return to them when you need them.',
      built: [],
      featureDetails: [],
      designProcess: [],
      challenges: [
        { title: 'Clear actions', description: 'A conversation needs to make the next step clear. Ask Recall shows a reminder for confirmation and acknowledges when a location is saved.' },
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
    version: 'Ignite',
    description:
      'A complete fitness companion designed around fast workout logging, progress tracking and a premium distraction-free experience.',
    accent: 'oklch(0.70 0.19 255)',
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
    slug: 'widgetlabs',
    index: '03',
    name: 'WidgetLabs',
    subtitle: 'Customizable Android Widget Platform',
    version: 'Altair',
    description:
      'An Android widget platform designed to bring useful information and controls directly to the home screen through customizable widgets.',
    accent: 'oklch(0.72 0.17 295)',
    platforms: ['Android'],
    features: [
      'Media Widget',
      'Notification History',
      'Water Tracker',
      'Playlist Shortcuts',
      'Widget Management',
      'Custom Themes',
    ],
    tech: ['Kotlin', 'Android App Widgets', 'Media APIs'],
    githubUrl: 'https://github.com/SeNsXD/Widgetlabs-Altair',
    apkUrl: 'https://github.com/SeNsXD/Widgetlabs-Altair/releases/tag/Altair',
    visual: 'phone-duo',
    logo: '/projects/widgetlabs/widgetlabs-icon.png',
    screenshots: [
      { src: '/projects/widgetlabs/phone-home.png', alt: 'WidgetLabs home screen with widget shortcuts, Spotify connection and earbuds widget', kind: 'framed' },
      { src: '/projects/widgetlabs/phone-earbuds.png', alt: 'WidgetLabs earbuds widget customization with battery preview, colors, opacity and corner radius', kind: 'framed' },
      { src: '/projects/widgetlabs/phone-media.png', alt: 'WidgetLabs media panel customization with playback controls and shortcut apps', kind: 'framed' },
      { src: '/projects/widgetlabs/phone-weather.png', alt: 'WidgetLabs weather widget customization with live preview and appearance controls', kind: 'framed' },
      { src: '/projects/widgetlabs/phone-notifications.png', alt: 'WidgetLabs notification history widget customization and preview', kind: 'framed' },
      { src: '/projects/widgetlabs/phone-manage-features.png', alt: 'WidgetLabs Manage Features screen for enabling earbuds, media, weather and notification modules', kind: 'framed' },
      { src: '/projects/widgetlabs/phone-the-lab.png', alt: 'WidgetLabs Inside Lab screen for account, permissions, Spotify and widget tools', kind: 'framed' },
      { src: '/projects/widgetlabs/phone-widgets-earbuds-media.png', alt: 'Android home screen showing WidgetLabs earbuds and media widgets', kind: 'framed' },
      { src: '/projects/widgetlabs/phone-widgets-weather-notifications.png', alt: 'Android home screen showing WidgetLabs weather and notification widgets', kind: 'framed' },
      { src: '/projects/widgetlabs/widgetlabs-mockup-app-screens.png', alt: 'WidgetLabs app screens showcase with Home, Earbuds, Media, Weather and Notification History', kind: 'card' },
      { src: '/projects/widgetlabs/widgetlabs-mockup-more.png', alt: 'WidgetLabs feature management and real home-screen widget showcase', kind: 'card' },
    ],
    caseStudy: {
      overview:
        'WidgetLabs is a collection of customizable Android home-screen widgets managed from a single app, bringing useful information and controls one glance away.',
      problem:
        'Useful information and controls are often buried inside apps. Stock widgets are limited, inconsistent in style, and rarely fit together as a cohesive home screen.',
      idea:
        'Build one platform that offers a family of well-designed widgets for media, notifications, hydration and playlists, all sharing a consistent visual language and themes.',
      built: [
        'A media widget with playback controls and now-playing info',
        'Notification history for reviewing dismissed notifications',
        'A water tracker widget with one-tap logging',
        'Playlist shortcuts for launching music instantly',
        'A management screen to configure every widget',
        'A custom theming system shared across widgets',
      ],
      featureDetails: [
        { title: 'Media Widget', description: 'See what is playing and control it from the home screen.' },
        { title: 'Notification History', description: 'Revisit notifications after they have been dismissed.' },
        { title: 'Water Tracker', description: 'Log water intake directly from a widget.' },
        { title: 'Playlist Shortcuts', description: 'Jump into favourite playlists with a single tap.' },
        { title: 'Widget Management', description: 'Configure and preview widgets from one place.' },
        { title: 'Custom Themes', description: 'Keep every widget visually consistent with your setup.' },
      ],
      designProcess: [
        { step: 'Audit', description: 'Looked at which everyday actions deserve to live on the home screen.' },
        { step: 'System', description: 'Defined a shared grid, radius and colour system so widgets feel like a family.' },
        { step: 'Build', description: 'Implemented widgets with Android App Widgets and Media APIs in Kotlin.' },
        { step: 'Iterate', description: 'Tuned sizes, density and update behaviour across launchers.' },
      ],
      challenges: [
        { title: 'Widget constraints', description: 'App widgets have strict layout and update limitations compared to regular UI.' },
        { title: 'Launcher differences', description: 'Keeping widgets looking right across different launchers and sizes.' },
        { title: 'Media sessions', description: 'Reading and controlling playback state reliably across media apps.' },
      ],
      learnings: [
        'Constraints push towards clearer, more focused design.',
        'A shared design system makes a multi-widget product feel cohesive.',
        'Platform APIs like media sessions reward careful, defensive handling.',
      ],
    },
  },

]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
