import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from './SiteHeader'
import { cn } from '@/src/utils/cn'

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
      <body className="relative flex min-h-dvh flex-col antialiased">
        <SiteHeader />
        <div
          id="site-content"
          tabIndex={-1}
          className={cn(
            'flex min-h-0 flex-1 flex-col overflow-y-auto',
            'relative'
          )}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
