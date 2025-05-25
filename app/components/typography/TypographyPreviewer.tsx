'use client'
/* ------------------------------------------------------------------ */
/*  <TypographyPreviewer> – Client wrapper with shared state          */
/* ------------------------------------------------------------------ */

import React, { useId, useState } from 'react'
import { SenCode } from '../../../src'

export function TypographyPreviewer() {
  // Shared sample text state (defaults to classic pangram)
  const [sampleText, setSampleText] = useState(
    'The quick brown fox jumps over the lazy dog.'
  )
  const inputId = useId()

  /** Available utility classes, kept in a simple array for easy mapping. */
  const utilities: { label: string; className: string }[] = [
    { label: 'H1', className: 'typography-h1' },
    { label: 'H2', className: 'typography-h2' },
    { label: 'H3', className: 'typography-h3' },
    { label: 'H4', className: 'typography-h4' },
    { label: 'H5', className: 'typography-h5' },
    { label: 'H6', className: 'typography-h6' },
    { label: 'Paragraph', className: 'typography-p' },
  ]

  return (
    <>
      {/* --- Live controls ------------------------------------------------ */}
      <fieldset className="mb-12 space-y-2">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Sample text&nbsp;(updates all previews)
        </label>
        <input
          id={inputId}
          type="text"
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
        />
      </fieldset>

      {/* --- Preview list -------------------------------------------------- */}
      <section className="space-y-8">
        {utilities.map((util) => (
          <PreviewBlock
            key={util.label}
            label={util.label}
            className={util.className}
            sampleText={sampleText}
          />
        ))}
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  <PreviewBlock> – renders the live sample + its JSX snippet       */
/* ------------------------------------------------------------------ */
interface PreviewBlockProps {
  /** Human-readable label (e.g. “H1”). */
  label: string
  /** Tailwind utility class to apply (e.g. `typography-h1`). */
  className: string
  /** The text to render in the sample. */
  sampleText: string
}

/**
 * Renders one preview row: the live example plus the exact JSX you’d write.
 */
function PreviewBlock({ label, className, sampleText }: PreviewBlockProps) {
  const snippet = [
    `<div className="${className}">`,
    `  ${sampleText}`,
    `</div>`,
  ].join('\n')

  return (
    <div className="border-b border-gray-200 pb-8 dark:border-gray-700">
      {/* Live example */}
      <div className={`${className} mb-2`}>{sampleText}</div>

      {/* JSX snippet using SenCode */}
      <pre
        aria-label={`${label} render snippet`}
        className="overflow-x-auto rounded bg-gray-100 p-4 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200"
      >
        <SenCode code={snippet} />
      </pre>
    </div>
  )
}
