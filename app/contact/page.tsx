import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Rishabh Kumar about an opportunity, a collaboration or an idea.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[70vh] pt-24 sm:pt-28">
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
