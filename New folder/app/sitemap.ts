import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

const base = 'https://rishabh-portfolio-wheat.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ]
}
