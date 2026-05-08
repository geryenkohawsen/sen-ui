import type { Metadata } from 'next'
import './globals.css'
import { SenHeader, SenIcon } from '@/src'
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
          'relative flex min-h-dvh flex-col bg-[#060606] antialiased',
          'text-gray-800 dark:text-white'
        )}
      >
        {/* Background visuals (fixed, always visible) */}
        <div
          aria-hidden
          className={cn(
            'pointer-events-none fixed inset-0 z-[-999]',
            'bg-[radial-gradient(circle_at_22%_18%,rgba(157,173,135,0.18),transparent_34%),radial-gradient(circle_at_78%_72%,rgba(120,119,198,0.18),transparent_32%),radial-gradient(ellipse_80%_80%_at_50%_140%,rgba(190,242,100,0.10),transparent_60%)]'
          )}
        />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none fixed inset-0 z-[-998]',
            'bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]',
            'bg-[size:44px_44px]',
            '[mask-image:radial-gradient(ellipse_85%_75%_at_50%_50%,#000_55%,transparent_100%)]'
          )}
        />

        <SenHeader
          logoSrc="/images/sen-ui-logo.png"
          logoAlt="SenUI Logo"
          className={cn(
            'sticky top-3 z-50 mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-6xl',
            // Liquid glass surface
            'rounded-full border border-white/10',
            'bg-white/[0.04] dark:bg-white/[0.04]',
            'backdrop-blur-2xl backdrop-saturate-150',
            'shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.10),inset_0_-1px_0_0_rgba(0,0,0,0.20)]',
            'ring-1 ring-inset ring-white/[0.06]',
            'supports-[backdrop-filter]:bg-white/[0.035]'
          )}
          links={[
            { label: 'Docs', href: '/docs' },
            { label: 'Components', href: '/components' },
            { label: 'Blocks', href: '/blocks' },
          ]}
          actions={
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/geryenkohawsen/sen-ui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="inline-flex items-center justify-center rounded-full p-2 text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <SenIcon src="/icons/github.svg" size={22} />
              </a>
              <a
                href="https://www.gery.jp/en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio Website"
                className="inline-flex items-center justify-center rounded-full p-2 text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <SenIcon src="/icons/portfolio.svg" size={22} />
              </a>
            </div>
          }
        />
        <div
          className={cn(
            'flex min-h-0 flex-1 flex-col overflow-y-auto',
            'relative z-0'
          )}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
