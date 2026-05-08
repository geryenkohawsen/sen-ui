import { SenButton, SenCode, SenHeader } from '@/src'

const zenGardenImage =
  'https://images.unsplash.com/photo-1764112434647-bfd7d5ccb10d?auto=format&fit=crop&fm=jpg&q=80&w=2400'

const codeExample = `
<SenHeader
  logoSrc="/logo.png"
  logoAlt="MySite Logo"
  links={[
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ]}
  actions={<SenButton variant="primary">Sign In</SenButton>}
/>
`.trim()

const anatomy = [
  ['Logo', 'A clear visual anchor that always links back to the product home.'],
  [
    'Navigation',
    'A compact set of primary routes with predictable focus states.',
  ],
  ['Actions', 'A right-aligned slot for sign-in, menus, or utility controls.'],
]

export default function PageHeader() {
  return (
    <main className="w-full max-w-full overflow-x-hidden px-4 py-16 text-white sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1fr_0.92fr] md:items-center md:py-24">
        <div>
          <h1 className="max-w-5xl text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.94] font-black tracking-normal text-balance">
            Navigation with the calm rhythm of a Zen garden.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            SenHeader keeps brand, routes, and actions composed in one simple
            surface. Use it when the interface needs structure without visual
            noise.
          </p>
        </div>

        <div className="group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${zenGardenImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(0,0,0,0.12),rgba(0,0,0,0.84))]" />
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            <p className="max-w-sm text-2xl leading-tight font-black text-white">
              Raked sand, clear paths, nothing competing for attention.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-flow-dense gap-4 py-16 md:grid-cols-6 md:py-24">
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30 md:col-span-4">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-2xl font-black tracking-normal">
              Live preview
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/58">
              The component fits into a framed product surface while preserving
              the spacing and link treatment from the library.
            </p>
          </div>
          <div className="bg-[#f7f5ef] p-4 text-neutral-950 sm:p-8">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-stone-950/10">
              <SenHeader
                logoSrc="/images/sen-ui-logo.png"
                logoAlt="MySite Logo"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'Journal', href: '/blog' },
                  { label: 'Studio', href: '/about' },
                ]}
                actions={<SenButton variant="primary">Sign In</SenButton>}
                className="bg-white"
              />
              <div className="grid gap-4 p-5 sm:grid-cols-[0.78fr_1.22fr]">
                <div
                  className="min-h-56 rounded-2xl bg-cover bg-center grayscale"
                  style={{ backgroundImage: `url(${zenGardenImage})` }}
                />
                <div className="flex min-h-56 flex-col justify-end rounded-2xl bg-neutral-950 p-6 text-white">
                  <p className="text-3xl leading-tight font-black">
                    A header should orient, then get out of the way.
                  </p>
                  <p className="mt-4 text-sm leading-6 text-white/58">
                    The API stays deliberately small: logo, links, and actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside className="rounded-[2rem] border border-white/10 bg-lime-200 p-7 text-neutral-950 shadow-2xl shadow-black/20 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">
            Small API, clear hierarchy
          </h2>
          <div className="mt-8 space-y-7">
            {anatomy.map(([title, body]) => (
              <div key={title}>
                <h3 className="text-sm font-black tracking-[0.2em] text-neutral-500 uppercase">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-700">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </aside>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-3">
          <h2 className="text-2xl font-black tracking-normal">
            When it works best
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/62">
            Use SenHeader for documentation shells, dashboards, product
            marketing pages, and internal tools where route visibility matters
            more than elaborate navigation choreography.
          </p>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-3">
          <h2 className="text-2xl font-black tracking-normal">
            What to customize
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/62">
            Pass a custom action cluster, adjust the header className, and let
            the logo image carry the brand. The component stays intentionally
            unopinionated about menus and account state.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl py-16 md:py-24">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-[clamp(2.3rem,4.6vw,4.8rem)] leading-[0.98] font-black tracking-normal text-balance">
              Copy the structure and tune the surface.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/62">
              The example below is the complete setup for logo, links, and a
              primary action.
            </p>
          </div>
          <SenButton variant="success" size="lg">
            Ready to compose
          </SenButton>
        </div>
        <SenCode
          code={codeExample}
          language="tsx"
          theme="catppuccin-macchiato"
        />
      </section>
    </main>
  )
}
