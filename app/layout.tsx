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
    default: 'PT Batavia Asia Project — Kontraktor & Developer Profesional Jakarta',
  },
  description:
    'PT Batavia Asia Project adalah perusahaan kontraktor dan developer profesional di Jakarta Timur. Spesialis renovasi rumah, instalasi pipa gas, sistem drainase, lift & eskalator, dan mekanikal elektrikal.',
  keywords: [
    'PT Batavia Asia Project',
    'kontraktor Jakarta',
    'developer properti Jakarta',
    'renovasi rumah Jakarta Timur',
    'instalasi pipa gas Jakarta',
    'sistem drainase',
    'lift eskalator',
    'mekanikal elektrikal',
    'jasa konstruksi Jakarta',
    'kontraktor profesional',
    'Jatinegara',
    'Cipinang Cempedak',
    'bataviaasiaproject',
  ],
  authors: [{ name: 'PT Batavia Asia Project', url: 'https://bataviaasiaproject.com' }],
  creator: 'PT Batavia Asia Project',
  publisher: 'PT Batavia Asia Project',
  category: 'construction',
  alternates: {
    canonical: 'https://bataviaasiaproject.com',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://bataviaasiaproject.com',
    siteName: 'PT Batavia Asia Project',
    title: 'PT Batavia Asia Project — Kontraktor & Developer Profesional Jakarta',
    description:
      'Spesialis renovasi rumah, instalasi pipa gas, sistem drainase, lift & eskalator, dan mekanikal elektrikal di Jakarta.',
    images: [
      {
        url: '/images/BATAVIA_ASIA_PROJECT_.png',
        width: 1200,
        height: 630,
        alt: 'PT Batavia Asia Project — Kontraktor Profesional Jakarta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Batavia Asia Project — Kontraktor & Developer Profesional Jakarta',
    description:
      'Spesialis renovasi rumah, instalasi pipa gas, sistem drainase, lift & eskalator, dan mekanikal elektrikal di Jakarta.',
    images: ['/images/BATAVIA_ASIA_PROJECT_.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '7XxVSI1qjJIzAVSpYLk-IpU3RQ_n35dzA2tNzHMF_tg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
