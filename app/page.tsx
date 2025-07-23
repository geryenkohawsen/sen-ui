import Link from 'next/link'
import { SenButton } from '@/src'

/**
 * Temporary landing page displayed while the full site is under construction.
 * Keeps things minimal yet on-brand, and offers a clear CTA.
 * Background styling is now delegated to layout.tsx.
 * - Accessible (WCAG 2.1 AA)
 * - SEO-friendly via `metadata`
 * - Uses SenButton for consistency with the design system
 * - Styled with Tailwind CSS
 */

export const metadata = {
  title: 'Sen UI — Coming Soon',
  description:
    'We are busy crafting an accessible, lightweight React UI library. Follow our progress!',
}

export default function PageTop() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 text-slate-100">
      {/* Hero */}
      <section className="flex max-w-xl flex-col items-center gap-6 text-center">
        <h1 className="leading-tight font-extrabold text-balance">
          <span className="block text-5xl md:text-7xl">Sen&nbsp;UI</span>
          <span className="mt-2 block text-lg font-medium text-slate-400 md:text-2xl">
            Beautiful components. Zero compromise on DX or a11y.
          </span>
        </h1>

        <p className="text-sm text-pretty md:text-base">
          We’re rebuilding our docs and component showcase. In the meantime,
          give the repo a ⭐ on GitHub and stay tuned!
        </p>

        {/* Primary call-to-action */}
        <SenButton variant="primary" size="lg" className="group">
          <Link
            href="https://github.com/geryenkohawsen/sen-ui"
            aria-label="Visit Sen UI GitHub repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow progress on GitHub
          </Link>
        </SenButton>
      </section>

      {/* Footer */}
      <footer className="absolute inset-x-0 bottom-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Sen UI. All rights reserved.
      </footer>
    </main>
  )
}
