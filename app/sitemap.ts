import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

const base = 'https://rishabh-portfolio-wheat.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/info`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: 'yearly', priority: 0.6 },
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ]
}
