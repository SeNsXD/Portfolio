import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://rishabh-portfolio-wheat.vercel.app'),
  title: {
    default: 'Rishabh Kumar | Product Builder',
    template: '%s | Rishabh Kumar',
  },
  description:
    'Portfolio of Rishabh Kumar, a product-focused builder designing and shipping useful Android and Windows apps, including GymBros, WidgetLabs, Recall and Swift Tab.',
  authors: [{ name: 'Rishabh Kumar' }],
  keywords: ['Rishabh Kumar', 'Android Apps', 'Windows Apps', 'Product Builder', 'Product Design', 'Portfolio'],
  openGraph: {
    title: 'Rishabh Kumar | Product Builder',
    description: 'I design and ship polished Android and Windows apps, built with AI-assisted development.',
    type: 'website',
    siteName: 'Rishabh Kumar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishabh Kumar | Product Builder',
    description: 'I design and ship polished Android and Windows apps, built with AI-assisted development.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#14161a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
