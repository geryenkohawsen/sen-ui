export interface SenSpinnerProps {
  /**
   * Spinner size in pixels.
   * @default 24
   * @example
   * ```tsx
   * <SenSpinner size={24} />
   * ```
   */
  size?: number

  /**
   * Screen reader fallback text that will be visually hidden.
   *
   * @default "Loading…"
   * @example
   * ```tsx
   * <SenSpinner srText="Loading…" />
   * ```
   */
  srText?: string
}
