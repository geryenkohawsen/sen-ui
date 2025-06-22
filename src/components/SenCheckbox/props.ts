// src/components/SenCheckbox/props.ts

import type { InputHTMLAttributes } from 'react'

/**
 * Props for SenCheckbox
 */
export interface SenCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * The unique identifier for the checkbox input.
   * If not provided, `name` will be used.
   * @example "acceptTerms"
   */
  id?: string

  /**
   * The text label displayed next to the checkbox.
   * This is required for accessibility.
   * @example "Accept terms and conditions"
   */
  label: string

  /**
   * A secondary description for the checkbox, shown below the label.
   * @default undefined
   * @example "You must accept before proceeding"
   */
  description?: string

  /**
   * Disable user interaction.
   * @default false
   * @example true
   */
  disabled?: boolean

  /**
   * Extra CSS classes to apply to the outer container.
   */
  className?: string
}
