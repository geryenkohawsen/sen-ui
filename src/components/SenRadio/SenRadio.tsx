// src/components/SenRadio/SenRadio.tsx

'use client'

import React, { forwardRef } from 'react'
import type { SenRadioProps } from './props'
import { cn } from '@/src/utils/cn'

/**
 * SenRadio
 *
 * An accessible, SSR-/hydration-safe radio input component for Next.js 15 App Router.
 * - Uses semantic `<input type="radio">` with `<label>` for screen-reader friendliness
 * - Full keyboard support & focus styling per WCAG 2.1 AA
 * - Accepts `className` and `...props` for easy customization
 * - Works with React Hook Form via forwarded ref
 */
const SenRadio = forwardRef<HTMLInputElement, SenRadioProps>(
  (
    {
      id,
      name,
      value,
      label,
      checked = false,
      disabled = false,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn('flex items-center', disabled && 'opacity-50', className)}
      >
        <input
          // ARIA: semantic radio role is implicit
          ref={ref}
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className={cn(
            'h-4 w-4',
            'border-gray-300',
            'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            'transition-colors duration-150'
          )}
          {...props}
        />
        {label && (
          <label htmlFor={id} className="ml-2 cursor-pointer select-none">
            {label}
          </label>
        )}
      </div>
    )
  }
)

SenRadio.displayName = 'SenRadio'

export default SenRadio
