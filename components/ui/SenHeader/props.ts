import type { ComponentPropsWithoutRef, ReactNode } from 'react'

/**
 * Props for the SenHeader component.
 */
export interface SenHeaderProps extends ComponentPropsWithoutRef<'header'> {
  /**
   * URL of the logo image.
   * @example "/logo.png"
   */
  logoSrc: string

  /**
   * Alt text for the logo image.
   * @default ""
   * @example "MySite Logo"
   */
  logoAlt?: string

  /**
   * Navigation links to display.
   * @example
   * ```ts
   * [
   *   { label: "Home", href: "/" },
   *   { label: "Blog", href: "/blog" },
   * ]
   * ```
   */
  links?: Array<{ label: string; href: string }>

  /**
   * Optional action items (buttons, icons) to render on the right.
   * @example <><LoginButton /><UserMenu /></>
   */
  actions?: ReactNode
}
