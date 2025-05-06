// SenSpinner.tsx
'use client'

import { cn } from '@/utils/cn'

export interface SenSpinnerProps {
  size?: number // in pixels
  className?: string
  srText?: string // screen reader fallback text (defaults to "Loading…")
}

export default function SenSpinner({
  size = 24,
  className,
  srText = 'Loading…',
}: SenSpinnerProps) {
  return (
    <div role="status" className="inline-flex items-center justify-center">
      <svg
        className={cn('animate-spin text-gray-500', className)}
        style={{ width: size, height: size }}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <span className="sr-only">{srText}</span>
    </div>
  )
}
