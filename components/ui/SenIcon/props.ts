import type { ComponentPropsWithoutRef } from 'react'

/**
 * Props for the SenIcon component.
 */
export interface SenIconProps extends ComponentPropsWithoutRef<'span'> {
  /**
   * Path to an SVG image in the public folder.
   * @example "/images/custom-icon.svg"
   */
  src: string

  /**
   * Icon size in pixels. Only 16, 24, or 32 are allowed.
   * @default 24
   * @example 16
   */
  size?: 16 | 24 | 32
}
