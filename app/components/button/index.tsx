'use client'

import { cn } from '@/utils/cn'
import type { ComponentPropsWithoutRef } from 'react'

export type SenButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'
export type SenButtonSize = 'sm' | 'md' | 'lg'

// Custom props for SenButton
interface SenButtonProps {
  /** Visual style of the button (default: 'primary') */
  variant?: SenButtonVariant
  /** Size of the button (default: 'md') */
  size?: SenButtonSize
}

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

export function SenButton({
  // Custom props
  variant = 'primary',
  size = 'md',
  // Native button props
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'button'> & SenButtonProps) {
  return (
    <button
      className={cn(
        'cursor-pointer rounded font-bold text-white transition-colors duration-200',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
