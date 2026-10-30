import type { Metadata } from 'next'
import { AboutSection } from '@/components/about-section'
import { JourneySection } from '@/components/journey-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'
import { TrekSection } from '@/components/trek-section'

export const metadata: Metadata = {
  title: 'Info',
  description: 'About Rishabh Kumar: background, experience and skills.',
}

export default function InfoPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <h1 className="sr-only">About Rishabh Kumar</h1>
        <AboutSection />
        <JourneySection />
        <SkillsSection />
        <TrekSection />
      </main>
      <SiteFooter />
    </>
  )
}
