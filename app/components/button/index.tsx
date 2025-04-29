import { cn } from '@/utils/cn'
import { ComponentPropsWithRef } from 'react'

interface SenButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
}

export default function SenUiButton({
  variant = 'primary',
  ...bp
}: ComponentPropsWithRef<'button'> & SenButtonProps) {
  const variantStyles = {
    primary: cn('bg-blue-500 hover:bg-blue-600'),
    secondary: cn('bg-gray-500 hover:bg-gray-600'),
    danger: cn('bg-red-500 hover:bg-red-600'),
    success: cn('bg-green-500 hover:bg-green-600'),
  }

  return (
    <button
      ref={bp.ref}
      className={cn(
        variantStyles[variant],
        'rounded px-4 py-2 font-bold text-white',
        bp.className
      )}
      onClick={bp.onClick}
    >
      {bp.children}
    </button>
  )
}
