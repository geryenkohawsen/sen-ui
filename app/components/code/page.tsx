import { SenCode } from '@/src'

const inkImage =
  'https://images.unsplash.com/photo-1764112434647-bfd7d5ccb10d?auto=format&fit=crop&fm=jpg&q=80&w=2400'

const tsxExample = `import { SenButton } from 'sen-ui'

export default function Example() {
  return <SenButton>Click Me</SenButton>
}
`.trim()

const tsExample = `function greet(name: string): string {
  return \`Hello, \${name}!\`
}

console.log(greet('World'))
`.trim()

const longExample = `import { useEffect, useState } from 'react'

type User = { id: number; name: string }

export function UserList() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}
`.trim()

const usageCode = `import { SenCode } from 'sen-ui'

export default function Page() {
  return (
    <SenCode
      code={\`const greeting = 'hello world'\`}
      language="ts"
      theme="catppuccin-macchiato"
      maxHeight="320px"
    />
  )
}
`.trim()

const props = [
  ['code', 'string (required)'],
  ['language', "'tsx' | 'jsx' | 'ts' | 'js'"],
  [
    'theme',
    "'catppuccin-macchiato' | 'dark-plus' | 'one-dark-pro' | 'monokai'",
  ],
  ['maxHeight', "string — '320px', '20rem', etc."],
  ['native pre props', 'className, style, id, etc.'],
]

const themes = [
  {
    name: 'catppuccin-macchiato',
    blurb: 'Soft pastel default — calm contrast for long reads.',
  },
  {
    name: 'dark-plus',
    blurb: 'VS Code feel — familiar to most developers.',
  },
  {
    name: 'one-dark-pro',
    blurb: 'Atom heritage — punchy syntax, deep navy ground.',
  },
  {
    name: 'monokai',
    blurb: 'High-contrast classic — reads great on projectors and slides.',
  },
] as const

export default function PageCode() {
  return (
    <main className="w-full max-w-full overflow-x-hidden px-4 py-16 text-white sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div>
          <h1 className="max-w-6xl text-[clamp(2.8rem,6vw,5.9rem)] leading-[0.94] font-black tracking-normal text-balance">
            Syntax-highlighted code, server-rendered, no flash.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            SenCode wraps Shiki to ship pre-highlighted markup from the server.
            No client bundle. Pick a theme, pick a language, drop the snippet
            in.
          </p>
          <div className="mt-9">
            <SenCode code={tsxExample} language="tsx" />
          </div>
        </div>

        <div className="group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${inkImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(0,0,0,0.08),rgba(0,0,0,0.84))]" />
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            <p className="max-w-sm text-2xl leading-tight font-black text-white">
              Code as text — readable first, decorated second.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-16 md:py-24">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-[clamp(2.3rem,4.6vw,4.4rem)] leading-[0.98] font-black tracking-normal text-balance">
              Four themes, one component.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/62">
              All themes are preloaded so switching is instant — no extra fetch,
              no client-side highlight pass.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {themes.map((t) => (
            <article
              key={t.name}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30"
            >
              <div className="flex items-end justify-between gap-4 border-b border-white/10 p-6">
                <div>
                  <h3 className="font-mono text-xs tracking-[0.18em] text-lime-200 uppercase">
                    theme
                  </h3>
                  <p className="mt-2 text-xl font-black tracking-normal">
                    {t.name}
                  </p>
                </div>
                <p className="max-w-[18rem] text-right text-xs leading-5 text-white/58">
                  {t.blurb}
                </p>
              </div>
              <div className="p-4 sm:p-6">
                <SenCode code={tsExample} language="ts" theme={t.name} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-flow-dense gap-4 py-16 md:grid-cols-6 md:py-24">
        <article className="rounded-[2rem] border border-white/10 bg-lime-200 p-7 text-neutral-950 shadow-2xl shadow-black/20 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">
            Languages
          </h2>
          <p className="mt-3 text-sm leading-6 text-neutral-700">
            Preloaded for fast SSR. Use what fits the snippet.
          </p>
          <ul className="mt-7 grid grid-cols-2 gap-3">
            {(['tsx', 'jsx', 'ts', 'js'] as const).map((l) => (
              <li
                key={l}
                className="rounded-xl bg-white/60 px-3 py-2 text-center font-mono text-sm font-bold tracking-tight"
              >
                {l}
              </li>
            ))}
          </ul>
        </article>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 md:col-span-4">
          <div className="border-b border-white/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">
              maxHeight
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Cap the block when a snippet would otherwise dominate the page —
              the inner area scrolls, the copy button stays pinned.
            </p>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={longExample} language="tsx" maxHeight="220px" />
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-3">
          <h3 className="text-sm font-black tracking-[0.2em] text-lime-200 uppercase">
            Server component
          </h3>
          <p className="mt-4 text-sm leading-6 text-white/68">
            Rendered async at the server. The result is plain HTML — no client
            JS needed for the highlight, only for the copy button.
          </p>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-3">
          <h3 className="text-sm font-black tracking-[0.2em] text-lime-200 uppercase">
            Copy built in
          </h3>
          <p className="mt-4 text-sm leading-6 text-white/68">
            Top-right copy button uses the Clipboard API — no extra config and
            no extra dependency to install.
          </p>
        </article>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-[0.86fr_1.14fr] md:py-24">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20">
          <h2 className="text-2xl font-black tracking-normal">
            API reference
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/58">
            All props plus pass-through to the underlying pre element.
          </p>

          <div className="mt-8">
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
        </aside>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30">
          <div className="border-b border-white/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">
              Drop-in usage
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58">
              The whole API surface in one snippet — code in, syntax out.
            </p>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={usageCode} language="tsx" />
          </div>
        </article>
      </section>
    </main>
  )
}
