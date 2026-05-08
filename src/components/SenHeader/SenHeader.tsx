'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { SenHeaderProps } from './props'
import { cn } from '../../utils/cn'

function isActiveLink(pathname: string | null, href: string) {
  if (!pathname) return false
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function SenHeader({
  logoSrc,
  logoAlt = '',
  links = [],
  actions,
  className,
  ...props
}: SenHeaderProps) {
  const pathname = usePathname()

  return (
    <header
      className={cn(
        'relative isolate',
        'before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:opacity-60',
        className
      )}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="group flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-0 rounded-full"
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={882}
            height={436}
            className="h-9 w-auto cursor-pointer transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:h-10"
          />
        </Link>

        {links.length > 0 && (
          <nav aria-label="Main navigation" className="hidden sm:block">
            <ul className="flex items-center gap-1 md:gap-2">
              {links.map((link, idx) => {
                const active = isActiveLink(pathname, link.href)
                return (
                  <li key={link.href + link.label + idx}>
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'group relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium tracking-tight transition-colors duration-300 outline-none',
                        'focus-visible:ring-2 focus-visible:ring-white/40',
                        active
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-600 hover:text-gray-900 dark:text-white/65 dark:hover:text-white'
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          'h-1 w-1 rounded-full transition-all duration-300',
                          active
                            ? 'bg-lime-300 shadow-[0_0_10px_rgba(190,242,100,0.85)]'
                            : 'scale-0 bg-current opacity-0 group-hover:scale-100 group-hover:opacity-60'
                        )}
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}

        {actions && (
          <div className="flex items-center gap-1 sm:gap-1.5">{actions}</div>
        )}
      </div>
    </header>
  )
}
