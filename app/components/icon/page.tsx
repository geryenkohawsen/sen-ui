import { SenCode, SenIcon } from '@/src'

const stoneImage =
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&fm=jpg&q=80&w=2400'

const iconNames = [
  'check',
  'close',
  'info',
  'warning',
  'search',
  'github',
  'portfolio',
] as const

const sizes = [16, 24, 32] as const

const usageCode = `import { SenIcon } from 'sen-ui'

export function CloseButton() {
  return (
    <button aria-label="Close" className="rounded-full p-2 hover:bg-gray-100">
      <SenIcon src="/icons/close.svg" size={24} />
    </button>
  )
}
`.trim()

const standaloneCode = `'use client'

import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'

export interface SenIconProps extends ComponentPropsWithoutRef<'span'> {
  src: string
  size?: 16 | 24 | 32
}

export function SenIcon({ src, size = 24, className, ...props }: SenIconProps) {
  return (
    <span
      className={['inline-flex items-center justify-center', className]
        .filter(Boolean)
        .join(' ')}
      style={{ width: size, height: size }}
      {...props}
    >
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className="object-contain invert-0 filter dark:invert"
      />
    </span>
  )
}
`

const props = [
  ['src', "string — path under /public, e.g. '/icons/close.svg'"],
  ['size', '16 | 24 | 32 — fixed square sizes'],
  ['className', 'string'],
  ['native span props', 'aria-*, role, onClick, etc.'],
]

const principles = [
  [
    'Three sizes only',
    'Pixel-perfect renders at 16, 24, 32. No fluid sizing, no surprises.',
  ],
  [
    'SVGs from /public',
    'Drop SVG files into /public/icons. Reference by path. No icon font, no sprite.',
  ],
  [
    'Auto invert in dark mode',
    'Tailwind dark:invert flips solid icons so they read on either ground.',
  ],
]

export default function PageIcon() {
  return (
    <main className="w-full max-w-full overflow-x-hidden px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div>
          <h1 className="max-w-6xl text-[clamp(2.8rem,6vw,5.9rem)] leading-[0.94] font-black tracking-normal text-balance">
            Icons drawn at the size they will live.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-site-muted">
            SenIcon renders a single SVG file from /public via next/image. Three
            fixed sizes — 16, 24, 32 — keep the iconography crisp without
            inviting freelance scaling.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5 rounded-2xl border border-site-line bg-site-secondary p-6">
            {iconNames.slice(0, 5).map((n) => (
              <div key={n} className="flex flex-col items-center gap-2">
                <div className="rounded-xl bg-site-tint p-3">
                  <SenIcon src={`/icons/${n}.svg`} size={24} />
                </div>
                <span className="font-mono text-[10px] tracking-[0.18em] text-site-muted uppercase">
                  {n}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-site-line bg-site-primary shadow-2xl shadow-site-ink/20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${stoneImage})` }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-site-ink/85 via-site-ink/35 to-site-ink/55" />
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            <p className="max-w-sm text-2xl leading-tight font-black text-white">
              Same shape, three sizes, no fluid scaling.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-16 md:py-24">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-[clamp(2.3rem,4.6vw,4.4rem)] leading-[0.98] font-black tracking-normal text-balance">
              The library set, every size.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-site-muted">
              Each row is one icon at 16, 24, and 32 — pick the size that suits
              the surrounding density.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-site-line bg-site-secondary shadow-2xl shadow-site-ink/15">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
            {iconNames.map((name, idx) => (
              <div
                key={name}
                className={[
                  'flex items-center justify-between gap-6 p-6',
                  idx >= 1 && idx % 2 === 1 ? 'sm:border-l-0' : '',
                  'lg:border-site-line',
                  idx >= 3 ? 'border-t border-site-line' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-site-link uppercase">
                    {name}
                  </p>
                  <p className="mt-2 font-mono text-[10px] text-site-muted">
                    /icons/{name}.svg
                  </p>
                </div>
                <div className="flex items-end gap-5">
                  {sizes.map((s) => (
                    <div key={s} className="flex flex-col items-center gap-1">
                      <div className="rounded-lg bg-site-tint p-2">
                        <SenIcon src={`/icons/${name}.svg`} size={s} />
                      </div>
                      <span className="font-mono text-[10px] text-site-muted">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-3 md:py-24">
        {principles.map(([title, body]) => (
          <article
            key={title}
            className="rounded-[2rem] border border-site-line bg-site-secondary p-7 shadow-2xl shadow-site-ink/10"
          >
            <h3 className="text-sm font-black tracking-[0.2em] text-site-link uppercase">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-site-muted">{body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-[0.86fr_1.14fr] md:py-24">
        <aside className="rounded-[2rem] border border-site-line bg-site-secondary p-7 shadow-2xl shadow-site-ink/10">
          <h2 className="text-2xl font-black tracking-normal">
            Adding your own icon
          </h2>
          <ol className="mt-6 space-y-4 text-sm leading-6 text-site-muted">
            <li>
              <span className="mr-2 font-mono text-xs text-site-link">01</span>
              Drop a square SVG into <code>/public/icons/</code>.
            </li>
            <li>
              <span className="mr-2 font-mono text-xs text-site-link">02</span>
              Pass its path to <code>src</code>.
            </li>
            <li>
              <span className="mr-2 font-mono text-xs text-site-link">03</span>
              Pick a size — 16 for compact, 24 for default, 32 for hero
              affordances.
            </li>
          </ol>

          <div className="mt-8">
            <h3 className="text-sm font-black tracking-[0.2em] text-site-muted uppercase">
              Props
            </h3>
            <dl className="mt-3 space-y-3">
              {props.map(([name, value]) => (
                <div
                  key={name}
                  className="rounded-2xl border border-site-line bg-site-canvas p-4"
                >
                  <dt className="font-mono text-xs text-site-link">{name}</dt>
                  <dd className="mt-1 text-sm text-site-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        <article className="overflow-hidden rounded-[2rem] border border-site-line bg-site-secondary shadow-2xl shadow-site-ink/15">
          <div className="border-b border-site-line p-7">
            <h2 className="text-2xl font-black tracking-normal">
              Drop-in usage
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-site-muted">
              An icon button — the most common shape, with proper aria-label.
            </p>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={usageCode} language="tsx" />
          </div>

          <div className="border-t border-site-line p-7">
            <h3 className="text-sm font-black tracking-[0.2em] text-site-muted uppercase">
              Standalone implementation
            </h3>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={standaloneCode} language="tsx" maxHeight="360px" />
          </div>
        </article>
      </section>
    </main>
  )
}
