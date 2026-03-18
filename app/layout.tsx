import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bataviaasiaproject.com'),
  title: {
    template: '%s | PT Batavia Asia Project',
    default: 'PT Batavia Asia Project — Professional Construction & Project Management',
  },
  description:
    'PT Batavia Asia Project is a leading company in construction, project management, and property development with over 10 years of experience serving clients across Indonesia.',
  keywords: [
    'PT Batavia Asia Project',
    'construction Jakarta',
    'project management',
    'professional contractor',
    'building construction',
    'property development',
    'building renovation',
  ],
  authors: [{ name: 'PT Batavia Asia Project' }],
  creator: 'PT Batavia Asia Project',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://bataviaasiaproject.com',
    siteName: 'PT Batavia Asia Project',
    title: 'PT Batavia Asia Project',
    description: 'Professional Construction & Project Management',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'PT Batavia Asia Project' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Batavia Asia Project',
    description: 'Professional Construction & Project Management',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
