import type { Metadata } from 'next'
import './globals.css'
import { SenButton, SenHeader } from '@/src'
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
            <a
              href="https://github.com/geryenkohawsen/sen-ui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="inline-flex items-center justify-center rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-gray-700 dark:text-gray-200"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.421-.012 2.751 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
              </svg>
            </a>
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
