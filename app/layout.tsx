import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SenButton, SenHeader } from '@/src'
import { cn } from '@/src/utils/cn'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'sen-ui',
  description:
    'open-source, Zen-inspired React + TailwindCSS component library for calm, accessible UIs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`
        )}
      >
        <SenHeader
          logoSrc="/images/sen-ui-logo.png"
          logoAlt="SenUI Logo"
          links={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'About', href: '/about' },
          ]}
          actions={<SenButton variant="primary">Sign In</SenButton>}
        />
        <main
          className={cn(
            'flex min-h-[100dvh] flex-col bg-slate-50 text-gray-800',
            'dark:bg-gray-800 dark:text-white'
          )}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
