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
   * <SenButton variant="danger" />
   * ```
   */
  variant?: SenButtonVariant

  /**
   * Size of the button.
   * @default 'md'
   * @example
   * ```tsx
   * <SenButton size="lg" />
   * ```
   */
  size?: SenButtonSize

  /**
   * Whether the button is in a loading state.
   * @default false
   * @example
   * ```tsx
   * <SenButton loading />
   * ```
   */
  loading?: boolean
}
