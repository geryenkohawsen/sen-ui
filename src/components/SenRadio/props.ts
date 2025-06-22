// src/components/SenRadio/props.ts

import type { ChangeEventHandler, InputHTMLAttributes } from 'react'

/**
 * SenRadioProps defines the props for the SenRadio component.
 */
export interface SenRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Unique identifier for the radio input.
   * @example 'gender-male'
   */
  id: string

  /**
   * Name attribute to group radio inputs.
   * @example 'gender'
   */
  name: string

  /**
   * Value of the radio input.
   * @example 'male'
   */
  value: string

  /**
   * Label text displayed next to the radio button.
   * @default undefined
   * @example 'Male'
   */
  label?: string

  /**
   * Whether the radio input is checked (controlled).
   * @default false
   * @example true
   */
  checked?: boolean

  /**
   * Whether the radio input is disabled.
   * @default false
   * @example true
   */
  disabled?: boolean

  /**
   * Callback invoked when the radio value changes.
   * @example (e) => console.log(e.target.value)
   */
  onChange?: ChangeEventHandler<HTMLInputElement>

  /**
   * Additional CSS classes to apply to the wrapper element.
   * @example 'my-custom-class'
   */
  className?: string
}
