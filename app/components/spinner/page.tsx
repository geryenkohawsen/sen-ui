import { SenCode, SenSpinner } from '@/src'
import { SpinnerInButtonExample } from './SpinnerInButtonExample'

const rippleImage =
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&fm=jpg&q=80&w=2400'

const standaloneCode = `'use client'

import type { ComponentPropsWithoutRef } from 'react'

export interface SenSpinnerProps {
  size?: number
  srText?: string
}

export default function SenSpinner({
  size = 24,
  srText = 'Loading…',
  className,
  ...props
}: SenSpinnerProps & ComponentPropsWithoutRef<'svg'>) {
  return (
    <div role="status">
      <svg
        className={['animate-spin text-gray-500', className]
          .filter(Boolean)
          .join(' ')}
        style={{ width: size, height: size }}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        {...props}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <span className="sr-only">{srText}</span>
    </div>
  )
}
`

const usageCode = `import { SenSpinner } from 'sen-ui'

export function Loading() {
  return (
    <div className="flex items-center gap-3">
      <SenSpinner size={20} className="text-blue-500" />
      <span>Fetching results…</span>
    </div>
  )
}
`.trim()

const props = [
  ['size', 'number — pixel width and height (default 24)'],
  ['srText', "string — visually hidden status text (default 'Loading…')"],
  ['className', 'string — apply text-* to recolor via currentColor'],
  ['native svg props', 'aria-*, style, etc.'],
]

const principles = [
  [
    'currentColor + className',
    'Set the spinner color through Tailwind text-* utilities. The SVG inherits via currentColor.',
  ],
  [
    'Accessible by default',
    'role="status" and a sr-only label make screen readers announce loading without visual noise.',
  ],
  [
    'Composable',
    'Drop into a button, an empty state, or beside a label — it is just an SVG.',
  ],
]

const palette = [
  { label: 'blue', cls: 'text-blue-500' },
  { label: 'lime', cls: 'text-lime-300' },
  { label: 'rose', cls: 'text-rose-400' },
  { label: 'white', cls: 'text-white' },
] as const

const sizes = [16, 24, 32, 48, 72] as const

export default function PageSpinner() {
  return (
    <main className="w-full max-w-full overflow-x-hidden px-4 py-16 text-white sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div>
          <h1 className="max-w-6xl text-[clamp(2.8rem,6vw,5.9rem)] leading-[0.94] font-black tracking-normal text-balance">
            A loading state that tells you something is happening.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            SenSpinner is a single accessible SVG. Size in pixels, color through
            currentColor, screen-reader text built in. Use it inside a button, a
            panel, or anywhere a moment of patience is needed.
          </p>

          <div className="mt-9 flex items-end gap-7 rounded-2xl border border-white/10 bg-white/[0.045] p-7">
            <SenSpinner size={32} className="text-blue-400" />
            <SenSpinner size={48} className="text-lime-300" />
            <SenSpinner size={72} className="text-rose-400" />
          </div>
        </div>

        <div className="group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${rippleImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(0,0,0,0.08),rgba(0,0,0,0.84))]" />
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            <p className="max-w-sm text-2xl leading-tight font-black text-white">
              A small motion is enough to mean the system is alive.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-flow-dense gap-4 py-16 md:grid-cols-6 md:py-24">
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 md:col-span-3">
          <h2 className="text-2xl font-black tracking-normal">Sizes</h2>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Any pixel value works — keep it close to the surrounding type for
            inline use.
          </p>
          <div className="mt-7 flex items-end gap-6">
            {sizes.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <SenSpinner size={s} className="text-white/80" />
                <span className="font-mono text-[10px] tracking-[0.18em] text-white/42 uppercase">
                  {s}px
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-lime-200 p-7 text-neutral-950 shadow-2xl shadow-black/30 md:col-span-3">
          <h2 className="text-2xl font-black tracking-normal">Color</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-700">
            Color comes from currentColor — apply Tailwind text-* utilities and
            the SVG follows.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {palette.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center gap-3 rounded-xl bg-neutral-900 p-5"
              >
                <SenSpinner size={32} className={p.cls} />
                <span className="font-mono text-[10px] tracking-[0.16em] text-white/68 uppercase">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 md:col-span-3">
          <div className="border-b border-white/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">
              Inside a button
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Layout is preserved with absolute positioning so the button stays
              the same width while it loads.
            </p>
          </div>
          <div className="bg-[#f7f5ef] p-7 text-neutral-900">
            <SpinnerInButtonExample />
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-3">
          <h2 className="text-2xl font-black tracking-normal">
            With a label
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Pair with text when the wait is more than a moment, so the user
            knows what is happening.
          </p>
          <div className="mt-7 flex items-center gap-3 rounded-2xl bg-black/30 p-6">
            <SenSpinner size={20} className="text-lime-300" />
            <span className="text-sm text-white/80">
              Fetching the latest data…
            </span>
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-3 md:py-24">
        {principles.map(([title, body]) => (
          <article
            key={title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20"
          >
            <h3 className="text-sm font-black tracking-[0.2em] text-lime-200 uppercase">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/68">{body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-[0.86fr_1.14fr] md:py-24">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20">
          <h2 className="text-2xl font-black tracking-normal">
            Standalone requirements
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/58">
            Copy the component when you only need a single accessible loader.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <h3 className="text-sm font-black tracking-[0.2em] text-white/42 uppercase">
                Dependencies
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-white/68">
                <li>React 18 or newer</li>
                <li>Tailwind for animate-spin and text-* utilities</li>
                <li>A small cn helper if you want className merging</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black tracking-[0.2em] text-white/42 uppercase">
                Props
              </h3>
              <dl className="mt-3 space-y-3">
                {props.map(([name, value]) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <dt className="font-mono text-xs text-lime-200">{name}</dt>
                    <dd className="mt-1 text-sm text-white/68">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </aside>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30">
          <div className="border-b border-white/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">
              Quick usage
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58">
              An inline loading row — colored spinner plus a label.
            </p>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={usageCode} language="tsx" />
          </div>

          <div className="border-t border-white/10 p-7">
            <h3 className="text-sm font-black tracking-[0.2em] text-white/42 uppercase">
              Full standalone implementation
            </h3>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={standaloneCode} language="tsx" maxHeight="440px" />
          </div>
        </article>
      </section>
    </main>
  )
}
