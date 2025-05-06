import type { ComponentPropsWithoutRef } from 'react'

/**
 * Props for the SenCode component.
 */
export interface SenCodeProps extends ComponentPropsWithoutRef<'pre'> {
  /**
   * Code to display inside the block.
   * @example
   * ```tsx
   * <SenCode code="const a = 1" />
   * ```
   */
  code: string

  /**
   * The programming language to highlight.
   * Only preloaded languages (`tsx`, `ts`, `js`) are supported.
   * @default 'ts'
   * @example
   * ```tsx
   * <SenCode code="const a = 1" lang="ts" />
   * ```
   */
  language?: 'ts' | 'js'

  /**
   * The color theme to use for syntax highlighting.
   * @default 'nord'
   * @example
   * ```tsx
   * <SenCode code="const a = 1" theme="nord" />
   * ```
   */
  theme?: 'nord' | 'dark-plus'
}
