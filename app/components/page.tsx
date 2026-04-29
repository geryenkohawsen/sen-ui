import Link from 'next/link'

const heroImage =
  'https://images.unsplash.com/photo-1764112434647-bfd7d5ccb10d?auto=format&fit=crop&fm=jpg&q=80&w=2400'

const components = [
  {
    label: 'Button',
    path: 'button',
    body: 'Actions, loading states, disabled states, and clear intent.',
    tone: 'bg-lime-200 text-neutral-950',
    span: 'md:col-span-3',
  },
  {
    label: 'Header',
    path: 'header',
    body: 'Brand, routes, and action slots in one composed surface.',
    tone: 'bg-white/[0.045] text-white',
    span: 'md:col-span-3',
  },
  {
    label: 'Checkbox',
    path: 'checkbox',
    body: 'Form-friendly selection with readable labels and state.',
    tone: 'bg-white/[0.045] text-white',
    span: 'md:col-span-2',
  },
  {
    label: 'Radio',
    path: 'radio',
    body: 'Single-choice controls for settings and compact forms.',
    tone: 'bg-white/[0.045] text-white',
    span: 'md:col-span-2',
  },
  {
    label: 'Table',
    path: 'table',
    body: 'Dense data surfaces that remain calm and scannable.',
    tone: 'bg-white/[0.045] text-white',
    span: 'md:col-span-2',
  },
  {
    label: 'Typography',
    path: 'typography',
    body: 'Text rhythm for product copy, docs, headings, and body content.',
    tone: 'bg-white/[0.045] text-white',
    span: 'md:col-span-2',
  },
  {
    label: 'Code',
    path: 'code',
    body: 'Highlighted snippets with copy behavior for documentation.',
    tone: 'bg-white/[0.045] text-white',
    span: 'md:col-span-2',
  },
  {
    label: 'Icon',
    path: 'icon',
    body: 'Simple icon rendering for product navigation and utility actions.',
    tone: 'bg-white/[0.045] text-white',
    span: 'md:col-span-2',
  },
  {
    label: 'Spinner',
    path: 'spinner',
    body: 'Lightweight feedback for waiting states without visual noise.',
    tone: 'bg-white/[0.045] text-white',
    span: 'md:col-span-6',
  },
]

const paths = [
  [
    'Start with actions',
    'Button, Spinner, and Icon cover the fastest route to interactive product flows.',
  ],
  [
    'Shape the shell',
    'Header, Typography, and Code give docs and app surfaces a consistent frame.',
  ],
  [
    'Handle real inputs',
    'Checkbox, Radio, and Table keep forms and data-heavy views readable.',
  ],
]

export default function ComponentsHomePage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden px-4 py-16 text-white sm:px-6 lg:px-8">
      <section className="relative mx-auto flex min-h-[34rem] max-w-7xl flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 px-5 py-24 text-center shadow-2xl shadow-black/40 md:px-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-44 mix-blend-luminosity grayscale transition-transform duration-700 ease-out hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(190,242,100,0.18),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.32),rgba(0,0,0,0.92))]" />

        <div className="relative z-10 flex max-w-6xl flex-col items-center">
          <h1 className="max-w-6xl text-[clamp(3rem,6vw,6.4rem)] leading-[0.94] font-black tracking-normal text-balance">
            A calm library of components for focused product interfaces.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Browse the Sen UI primitives, inspect their behavior, and copy the
            patterns that fit your next React and Tailwind build.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/components/button"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-black text-black transition duration-300 hover:scale-[1.03] hover:bg-lime-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Start with buttons
            </Link>
            <Link
              href="/docs"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-black/35 px-8 text-sm font-black text-white backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-white/60 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Read docs
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-32 md:py-40">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-[clamp(2.3rem,4.6vw,5rem)] leading-[0.98] font-black tracking-normal text-balance">
            Pick the primitive that matches the job.
          </h2>
          <p className="max-w-xl text-base leading-7 text-white/62 md:justify-self-end">
            The index is organized for scanning. Each card points to a focused
            component page with previews, states, and usage examples.
          </p>
        </div>

        <div className="grid grid-flow-dense auto-rows-[17rem] grid-cols-1 gap-4 md:grid-cols-6">
          {components.map((component) => (
            <Link
              key={component.path}
              href={`/components/${component.path}`}
              className={`${component.span} ${component.tone} group relative flex overflow-hidden rounded-[2rem] border border-white/10 p-7 shadow-2xl shadow-black/25 transition duration-500 outline-none hover:-translate-y-1 hover:border-lime-200/60 focus-visible:ring-2 focus-visible:ring-lime-200`}
            >
              <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="flex h-full w-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-3xl font-black tracking-normal">
                    {component.label}
                  </h3>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current/15 text-lg transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <p
                  className={`max-w-sm text-sm leading-6 ${
                    component.tone.includes('lime')
                      ? 'text-neutral-700'
                      : 'text-white/62'
                  }`}
                >
                  {component.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-3 md:py-24">
        {paths.map(([title, body]) => (
          <article
            key={title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20"
          >
            <h2 className="text-2xl font-black tracking-normal">{title}</h2>
            <p className="mt-4 text-sm leading-6 text-white/62">{body}</p>
          </article>
        ))}
      </section>

      <section className="overflow-hidden border-y border-white/10 py-8">
        <div className="animate-marquee flex w-max gap-4">
          {[...components, ...components].map((component, index) => (
            <span
              key={`${component.path}-${index}`}
              className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-3 text-sm font-black whitespace-nowrap text-white/72"
            >
              {component.label}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-32 md:py-40">
        <div className="overflow-hidden rounded-[2.5rem] border border-lime-200/30 bg-lime-200 p-8 text-neutral-950 shadow-2xl shadow-black/30 sm:p-12 md:p-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h2 className="max-w-4xl text-[clamp(2.6rem,5vw,5.8rem)] leading-[0.92] font-black tracking-normal text-balance">
              Move from browsing to building.
            </h2>
            <div>
              <p className="text-base leading-7 text-neutral-700">
                Start with a component page, copy the implementation details,
                then adapt the surface to your own product system.
              </p>
              <Link
                href="/components/header"
                className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-black px-8 text-sm font-black text-white transition duration-300 hover:scale-[1.03] hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-lime-200"
              >
                Explore the header
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
