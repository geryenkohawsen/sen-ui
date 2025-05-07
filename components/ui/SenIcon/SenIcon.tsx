'use client'

import Image from 'next/image'
import type { SenIconProps } from './props'
import { cn } from '@/utils/cn'

export default function SenIcon({
  src,
  size = 24,
  className,
  ...props
}: SenIconProps) {
  return (
    <span
      className={cn('inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className="object-contain"
      />
    </span>
  )
}
