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

        <SenHeader
          logoSrc="/images/sen-ui-logo.png"
          logoAlt="SenUI Logo"
          className={cn(
            'sticky top-3 z-50 mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-6xl',
            'rounded-full border border-white/10',
            'bg-[#f7f9f4]/82 backdrop-blur-2xl backdrop-saturate-150',
            'shadow-[0_18px_60px_rgba(37,50,38,0.10),inset_0_1px_0_0_rgba(255,255,255,0.82)]',
            'ring-1 ring-[#141914]/[0.08] ring-inset'
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
                className="inline-flex items-center justify-center rounded-full p-2 text-[#141914]/70 transition-colors duration-300 hover:bg-[#141914]/8 hover:text-[#141914] focus-visible:ring-2 focus-visible:ring-[#141914]/30 focus-visible:outline-none"
              >
                <SenIcon src="/icons/github.svg" size={24} />
              </a>
              <a
                href="https://www.gery.jp/en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio Website"
                className="inline-flex items-center justify-center rounded-full p-2 text-[#141914]/70 transition-colors duration-300 hover:bg-[#141914]/8 hover:text-[#141914] focus-visible:ring-2 focus-visible:ring-[#141914]/30 focus-visible:outline-none"
              >
                <SenIcon src="/icons/portfolio.svg" size={24} />
              </a>
            </div>
          }
        />
        <div
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
