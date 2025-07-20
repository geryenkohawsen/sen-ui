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
          `flex min-h-dvh flex-col bg-neutral-950 antialiased`,
          'text-gray-800 dark:text-white'
        )}
      >
        {/* TODO: add links to future pages */}
        <SenHeader
          logoSrc="/images/sen-ui-logo.png"
          logoAlt="SenUI Logo"
          links={[
            { label: 'Docs', href: '/docs' },
            { label: 'Components', href: '/components' },
            { label: 'Blocks', href: '/blocks' },
          ]}
          actions={
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/geryenkohawsen/sen-ui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="inline-flex items-center justify-center rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <SenIcon src="/icons/github.svg" size={24} />
              </a>
              <a
                href="https://www.gery.jp/en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio Website"
                className="inline-flex items-center justify-center rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <SenIcon src="/icons/portfolio.svg" size={24} />
              </a>
            </div>
          }
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
        />
      </body>
    </html>
  )
}
