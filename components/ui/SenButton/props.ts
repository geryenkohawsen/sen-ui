import type { ComponentPropsWithoutRef } from 'react'

export type SenButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

export type SenButtonSize = 'sm' | 'md' | 'lg'

/**
 * Props for the SenButton component.
 */
export interface SenButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Visual style of the button.
   * @default 'primary'
   * @example
   * ```tsx
   * <SenButton variant="primary" />
   * ```
   */
  variant?: SenButtonVariant

  /**
   * Size of the button.
   * @default 'md'
   * @example
   * ```tsx
   * <SenButton size="md" />
   * ```
   */
  size?: SenButtonSize
}
