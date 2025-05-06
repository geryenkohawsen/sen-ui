'use client'

import { cn } from '@/utils/cn'
import { SenSpinner } from '@/components/ui/SenSpinner'
import type { SenButtonProps, SenButtonVariant, SenButtonSize } from './props'

const variantStyles: Record<SenButtonVariant, string> = {
  primary: 'bg-blue-500 hover:bg-blue-600',
  secondary: 'bg-gray-500 hover:bg-gray-600',
  danger: 'bg-red-500 hover:bg-red-600',
  success: 'bg-green-500 hover:bg-green-600',
}

const sizeStyles: Record<SenButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3',
}

export default function SenButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  ...props
}: SenButtonProps) {
  const isActuallyDisabled = props.disabled
  const isButtonDisabled = loading || isActuallyDisabled

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded font-bold text-white transition-colors duration-200',
        variantStyles[variant],
        sizeStyles[size],
        loading && 'cursor-not-allowed',
        isActuallyDisabled &&
          'cursor-not-allowed bg-gray-400 text-gray-700 hover:bg-gray-400',
        className
      )}
      disabled={isButtonDisabled}
      {...props}
    >
      {loading && <SenSpinner size={16} srText="Loading…" />}
      {children}
    </button>
  )
}
