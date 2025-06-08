// src/components/SenCheckbox/SenCheckbox.tsx

'use client'

import React, { forwardRef } from 'react'
import { cn } from '../../utils/cn'
import type { SenCheckboxProps } from './props'

/**
 * A fully accessible, styled checkbox component.
 */
export const SenCheckbox = forwardRef<HTMLInputElement, SenCheckboxProps>(
  (
    { id, name, label, description, disabled = false, className, ...props },
    forwardedRef
  ) => {
    const _id = id ?? name

    return (
      <div className={cn('flex items-start space-x-2', className)}>
        <input
          ref={forwardedRef}
          id={_id}
          name={name}
          type="checkbox"
          disabled={disabled}
          aria-describedby={description ? `${_id}-desc` : undefined}
          className={cn(
            'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none',
            disabled && 'cursor-not-allowed opacity-50'
          )}
          {...props}
        />

        <div className="flex flex-col">
          <label
            htmlFor={_id}
            className={cn(
              'font-medium select-none',
              disabled ? 'text-gray-500' : 'text-gray-900'
            )}
          >
            {label}
          </label>
          {description && (
            <p id={`${_id}-desc`} className="text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>
      </div>
    )
  }
)

SenCheckbox.displayName = 'SenCheckbox'

export default SenCheckbox
