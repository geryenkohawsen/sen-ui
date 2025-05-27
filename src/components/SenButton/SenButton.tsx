'use client'

import { cn } from '../../utils/cn'
import { SenSpinner } from '../SenSpinner'
import type { SenButtonProps, SenButtonVariant, SenButtonSize } from './props'

const variantStyles: Record<SenButtonVariant, string> = {
  primary: cn('bg-blue-500 text-white hover:bg-blue-600'),
  secondary: cn('bg-purple-500 text-white hover:bg-purple-600'),
  danger: cn('bg-red-500 text-white hover:bg-red-600'),
  success: cn('bg-green-500 text-white hover:bg-green-600'),
}

const sizeStyles: Record<SenButtonSize, string> = {
  sm: cn('px-3 py-1.5 text-sm'),
  md: cn('px-4 py-2 text-base'),
  lg: cn('px-5 py-3 text-lg'),
}

export default function SenButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  ...props
}: SenButtonProps) {
  const isDisabled = loading || props.disabled
  const isOnlyDisabled = !loading && props.disabled

  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center gap-2 rounded font-bold transition-colors duration-200',
        variantStyles[variant],
        sizeStyles[size],
        isDisabled && 'cursor-not-allowed',
        isOnlyDisabled && 'bg-gray-400 text-gray-700 hover:bg-gray-400',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {/* Spinner overlays */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SenSpinner size={16} srText="Loading…" className="text-inherit" />
        </div>
      )}

      {/* Children are kept for layout but hidden visually */}
      <span className={cn(loading && 'opacity-0')}>{children}</span>
    </button>
  )
}
