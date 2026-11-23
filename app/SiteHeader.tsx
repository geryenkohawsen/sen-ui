'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './site-header.module.css'

const siteLinks = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
  { label: 'Blocks', href: '/blocks' },
]

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className={styles.masthead}>
      <a href="#site-content" className={styles.skipLink}>
        Skip to content
      </a>
      <nav aria-label="Main navigation" className={styles.nav}>
        <Link
          href="/"
          aria-current={pathname === '/' ? 'page' : undefined}
          className={styles.brand}
        >
          <Image
            src="/images/sen-ui-logo.png"
            alt="Sen UI"
            width={882}
            height={436}
          />
        </Link>
        {siteLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={
              pathname === href
                ? 'page'
                : pathname?.startsWith(href + '/')
                  ? 'location'
                  : undefined
            }
            className={styles.navLink}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
