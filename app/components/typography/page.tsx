// app/(docs)/typography/page.tsx
import type { Metadata } from 'next'
import React from 'react'
import { TypographyPreviewer } from './TypographyPreviewer'

/* ------------------------------------------------------------------ */
/*  Page metadata (improves SEO & accessibility)                      */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: 'Typography – Sen-UI',
  description:
    'Documentation for the Sen-UI custom typography utility classes.',
}

/* ------------------------------------------------------------------ */
/*  Typography docs page (Server Component shell)                     */
/* ------------------------------------------------------------------ */
export default function TypographyDocsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 py-16">
      {/* Intro */}
      <section aria-labelledby="typography-docs-heading">
        <h1 id="typography-docs-heading" className="typography-h1 mb-4">
          Typography
        </h1>
        <p className="typography-p">
          Sen-UI ships zero-dependency <strong>utility classes</strong> for
          headings&nbsp;H1–H6 and paragraphs. Type inside the box below to
          preview your own copy in every style.
        </p>
      </section>

      {/* Interactive previewer */}
      <TypographyPreviewer />
    </main>
  )
}
