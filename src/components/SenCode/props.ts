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
   * Only preloaded languages are supported.
   * @default 'tsx'
   * @example
   * ```tsx
   * <SenCode code="const a = 1" language="tsx" />
   * ```
   */
  language?: 'tsx' | 'jsx' | 'ts' | 'js'

  /**
   * The Shiki theme to use for syntax highlighting.
   * Must match themes preloaded in the highlighter.
   * @default 'catppuccin-macchiato'
   * @example
   * ```tsx
   * <SenCode code="const a = 1" theme="catppuccin-macchiato" />
   * ```
   */
  theme?: 'catppuccin-macchiato' | 'dark-plus' | 'one-dark-pro' | 'monokai'

  /**
   * Maximum height for the code block (e.g. '300px', '20rem'). If set, code block becomes scrollable.
   */
  maxHeight?: string
}
