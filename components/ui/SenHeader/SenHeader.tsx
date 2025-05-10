'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import type { SenHeaderProps } from './props'

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
      className={cn(
        'flex items-center justify-between bg-white px-4 py-3 shadow-md',
        className
      )}
      {...props}
    >
      {/* Logo */}
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={882}
        height={436}
        className="h-10 w-auto cursor-pointer"
      />

      {/* Navigation */}
      {links.length > 0 && (
        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900"
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
    </header>
  )
}
