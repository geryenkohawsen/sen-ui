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
          `${geistSans.variable} ${geistMono.variable} flex min-h-dvh flex-col bg-neutral-950 antialiased`,
          'text-gray-800 dark:text-white'
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
          actions={<SenButton variant="primary">WIP</SenButton>}
        />
        <main className={cn('flex flex-1 flex-col')}>{children}</main>
        <div className="absolute bottom-0 z-[-999] h-dvh w-dvw bg-[radial-gradient(ellipse_80%_80%_at_50%_140%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div
          className={cn(
            'absolute right-0 bottom-0 left-0 z-[-998] h-[50vh]',
            /* horizontal + vertical grid lines (24px × 32px tiles) */
            'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_32px]',
            /* radial mask anchored at bottom center */
            '[mask-image:radial-gradient(ellipse_70%_90%_at_50%_135%,#000_70%,transparent_100%)]'
          )}
        ></div>
      </body>
    </html>
  )
}
