'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { SenHeaderProps } from './props'
import { cn } from '../../utils/cn'

export default function SenHeader({
  logoSrc,
  logoAlt = '',
  links = [],
  actions,
  className,
  ...props
}: SenHeaderProps) {
  return (
    <header
      className={cn('border-b border-[#4f4f4f2e] shadow-md', className)}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
        {/* Logo (clickable, links to home) */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={882}
            height={436}
            className="h-10 w-auto cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        {links.length > 0 && (
          <nav aria-label="Main navigation">
            <ul className="flex gap-6">
              {links.map((link, idx) => (
                <li key={link.href + link.label + idx} className="text-sm">
                  <Link
                    href={link.href}
                    className="cursor-pointer text-gray-700 underline-offset-4 transition-colors hover:text-blue-600 hover:underline focus-visible:text-blue-600 focus-visible:underline dark:text-gray-200 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Actions */}
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </header>
  )
}
