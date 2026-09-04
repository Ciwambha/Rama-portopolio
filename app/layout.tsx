import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rama — Industrial Engineering & Process Engineering Portfolio',
  description:
    'Ciwambha Raidah Zaki Rama (Rama) — Industrial Engineering student at President University focused on process engineering, manufacturing, and digitalization.',
  generator: 'v0.app',
  keywords: [
    'Industrial Engineering',
    'Process Engineering',
    'Manufacturing',
    'Digitalization',
    'President University',
    'Rama',
  ],
  openGraph: {
    title: 'Rama — Industrial & Process Engineering Portfolio',
    description:
      'Turning manufacturing problems, process data, and digital tools into practical solutions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0f1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
