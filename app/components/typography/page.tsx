// app/(docs)/typography/page.tsx
import type { Metadata } from 'next'
import React from 'react'

/* ------------------------------------------------------------------ */
/*  Page metadata (improves SEO & accessibility)                      */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: 'Typography – Sen-UI',
  description:
    'Documentation for the Sen-UI custom typography utility classes.',
}

/* ------------------------------------------------------------------ */
/*  <PreviewBlock> helper                                             */
/* ------------------------------------------------------------------ */

/**
 * Props for {@link PreviewBlock}.
 */
interface PreviewBlockProps {
  /** Human-readable label (e.g. “H1”). */
  label: string
  /** The Tailwind utility class to showcase (e.g. `typography-h1`). */
  className: string
  /** Example text that will be rendered with the utility class applied. */
  sample: string
}

/**
 * Renders a single preview row (example text + code snippet).
 */
function PreviewBlock({ label, className, sample }: PreviewBlockProps) {
  return (
    <div className="border-b border-gray-200 pb-8 dark:border-gray-700">
      {/* Example text */}
      <div className={`${className} mb-2`}>{sample}</div>

      {/* Code snippet */}
      <code
        aria-label={`${label} utility class name`}
        className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200"
      >
        {className}
      </code>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Typography docs page                                              */
/* ------------------------------------------------------------------ */
export default function TypographyDocsPage() {
  /* Early return pattern keeps indentation shallow */
  const previews: PreviewBlockProps[] = [
    {
      label: 'H1',
      className: 'typography-h1',
      sample: 'Heading 1 – The quick brown fox',
    },
    {
      label: 'H2',
      className: 'typography-h2',
      sample: 'Heading 2 – jumps over the lazy dog',
    },
    {
      label: 'H3',
      className: 'typography-h3',
      sample: 'Heading 3 – The quick brown fox',
    },
    {
      label: 'H4',
      className: 'typography-h4',
      sample: 'Heading 4 – jumps over the lazy dog',
    },
    {
      label: 'H5',
      className: 'typography-h5',
      sample: 'Heading 5 – The quick brown fox',
    },
    {
      label: 'H6',
      className: 'typography-h6',
      sample: 'Heading 6 – jumps over the lazy dog',
    },
    {
      label: 'Paragraph',
      className: 'typography-p',
      sample: 'Paragraph – Lorem ipsum dolor sit amet.',
    },
  ]

  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 py-16">
      {/* Page intro */}
      <section aria-labelledby="typography-docs-heading">
        <h1 id="typography-docs-heading" className="typography-h1 mb-4">
          Typography
        </h1>
        <p className="typography-p">
          Sen-UI ships zero-dependency <strong>utility classes</strong> for
          headings&nbsp;H1-H6 and paragraphs. Apply them directly to semantic
          HTML elements (or any element) without importing extra CSS.
        </p>
      </section>

      {/* Preview table */}
      <section className="space-y-8">
        {previews.map((preview) => (
          <PreviewBlock key={preview.label} {...preview} />
        ))}
      </section>
    </main>
  )
}
