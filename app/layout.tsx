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
      <body
        className={cn(
          'relative flex min-h-dvh flex-col bg-[#f7f9f4] antialiased',
          'text-[#141914]'
        )}
      >
        {/* Background visuals (fixed, always visible) */}
        <div
          aria-hidden
          className={cn(
            'pointer-events-none fixed inset-0 z-[-999]',
            'bg-[radial-gradient(circle_at_18%_12%,rgba(183,205,188,0.42),transparent_32%),radial-gradient(circle_at_82%_68%,rgba(121,151,166,0.18),transparent_34%),linear-gradient(180deg,#f7f9f4_0%,#eef3eb_100%)]'
          )}
        />

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
