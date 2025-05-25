// SenSpinner.tsx
'use client'

import type { ComponentPropsWithoutRef } from 'react'
import { SenSpinnerProps } from './props'
import { cn } from '../../../utils/cn'

export default function SenSpinner({
  // Custom props
  size = 24,
  srText = 'Loading…',
  // Native SVG props
  className,
  ...props
}: SenSpinnerProps & ComponentPropsWithoutRef<'svg'>) {
  return (
    <div role="status">
      <svg
        className={cn('animate-spin text-gray-500', className)}
        style={{ width: size, height: size }}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        {...props} // ✅ this is critical
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
