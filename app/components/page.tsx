import Link from 'next/link'

const components = [
  {
    name: 'Button',
    slug: 'button',
    description: 'Trigger actions with clear variants and loading states.',
    thumbnail: (
      <div className="flex items-center gap-2 text-[11px] font-medium">
        <span className="rounded-md bg-[#294637] px-3 py-1.5 text-[#f7f9f4]">
          Save changes
        </span>
        <span className="rounded-md border border-[#b7c9b8] bg-[#fbfcf9] px-3 py-1.5 text-[#294637]">
          Cancel
        </span>
      </div>
    ),
  },
  {
    name: 'Checkbox',
    slug: 'checkbox',
    description: 'Select one or more options in a form.',
    thumbnail: (
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2.5">
        <span className="grid size-5 place-items-center rounded bg-[#294637]">
          <span className="h-2.5 w-1.5 rotate-45 border-r-2 border-b-2 border-[#f7f9f4]" />
        </span>
        <span className="h-1.5 w-24 rounded-full bg-[#9bb19d]" />
        <span className="size-5 rounded border border-[#8da591]" />
        <span className="h-1.5 w-18 rounded-full bg-[#b7c9b8]" />
      </div>
    ),
  },
  {
    name: 'Code',
    slug: 'code',
    description: 'Show syntax-highlighted snippets with a copy button.',
    thumbnail: (
      <div className="w-40 rounded-lg bg-[#294637] p-3.5">
        <div className="flex gap-1.5">
          <span className="h-1.5 w-6 rounded-full bg-[#e2cba9]" />
          <span className="h-1.5 w-12 rounded-full bg-[#a7c4a4]" />
        </div>
        <div className="mt-2 ml-3 flex gap-1.5">
          <span className="h-1.5 w-8 rounded-full bg-[#d5e4d2]" />
          <span className="h-1.5 w-11 rounded-full bg-[#a7c4a4]" />
        </div>
        <div className="mt-2 h-1.5 w-3 rounded-full bg-[#e2cba9]" />
      </div>
    ),
  },
  {
    name: 'Header',
    slug: 'header',
    description: 'Bring branding, navigation, and actions into one bar.',
    thumbnail: (
      <div className="w-[82%] max-w-64 self-end rounded-t-lg border border-b-0 border-[#cbd8ca] bg-[#fbfcf9]">
        <div className="flex h-4 items-center gap-1 rounded-t-lg border-b border-[#dce6da] bg-[#e5eee3] px-2">
          <span className="size-1 rounded-full bg-[#799580]" />
          <span className="size-1 rounded-full bg-[#9bb19d]" />
          <span className="size-1 rounded-full bg-[#b7c9b8]" />
          <span className="mx-auto h-1 w-16 rounded-full bg-[#cadac9]" />
        </div>
        <div className="mx-2 mt-2 flex items-center gap-2 rounded-full border border-[#dce6da] bg-[#f3f7f0] px-2 py-1.5">
          <span className="size-3 rounded-full bg-[#294637]" />
          <span className="ml-auto h-1 w-4 rounded-full bg-[#799580]" />
          <span className="h-1 w-4 rounded-full bg-[#b7c9b8]" />
          <span className="ml-auto h-2 w-5 rounded-full bg-[#cadac9]" />
        </div>
        <div className="mx-4 mt-3 mb-8 space-y-1.5">
          <div className="h-1.5 w-2/5 rounded-full bg-[#dce6da]" />
          <div className="h-1 w-3/5 rounded-full bg-[#e5eee3]" />
        </div>
      </div>
    ),
  },
  {
    name: 'Icon',
    slug: 'icon',
    description: 'Display icons for navigation and interface actions.',
    thumbnail: (
      <div className="flex gap-2">
        <span className="grid size-9 place-items-center rounded-lg border border-[#b7c9b8]">
          <span className="size-3.5 rounded-sm border-2 border-[#526f59]" />
        </span>
        <span className="grid size-9 place-items-center rounded-lg bg-[#294637]">
          <span className="size-3.5 rounded-full border-2 border-[#d5e4d2]" />
        </span>
        <span className="grid size-9 place-items-center rounded-lg border border-[#b7c9b8]">
          <span className="size-3 rotate-45 rounded-[2px] border-2 border-[#526f59]" />
        </span>
      </div>
    ),
  },
  {
    name: 'Radio',
    slug: 'radio',
    description: 'Choose a single option from a group.',
    thumbnail: (
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2.5">
        <span className="grid size-5 place-items-center rounded-full border border-[#526f59]">
          <span className="size-2.5 rounded-full bg-[#294637]" />
        </span>
        <span className="h-1.5 w-24 rounded-full bg-[#9bb19d]" />
        <span className="size-5 rounded-full border border-[#8da591]" />
        <span className="h-1.5 w-18 rounded-full bg-[#b7c9b8]" />
      </div>
    ),
  },
  {
    name: 'Spinner',
    slug: 'spinner',
    description: 'Indicate when an action is still loading.',
    thumbnail: (
      <div className="size-9 rotate-45 rounded-full border-[3px] border-[#b7c9b8] border-t-[#294637] border-r-[#52745b]" />
    ),
  },
  {
    name: 'Table',
    slug: 'table',
    description: 'Present structured data in rows and columns.',
    thumbnail: (
      <div className="w-44 rounded-lg border border-[#b7c9b8] bg-[#f7f9f4]">
        <div className="grid grid-cols-3 gap-3 rounded-t-lg bg-[#cadac9] px-3 py-2">
          <span className="h-1.5 rounded-full bg-[#799580]" />
          <span className="h-1.5 rounded-full bg-[#799580]" />
          <span className="h-1.5 rounded-full bg-[#799580]" />
        </div>
        {[1, 2].map((row) => (
          <div
            key={row}
            className="grid grid-cols-3 gap-3 border-t border-[#b7c9b8] px-3 py-2"
          >
            <span className="h-1 rounded-full bg-[#9bb19d]" />
            <span className="h-1 w-4/5 rounded-full bg-[#b7c9b8]" />
            <span className="h-1 w-3/5 rounded-full bg-[#b7c9b8]" />
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Typography',
    slug: 'typography',
    description: 'Style headings and body text with a consistent scale.',
    thumbnail: (
      <div className="flex w-36 flex-col gap-1.5">
        <span className="text-3xl leading-none font-semibold tracking-tight text-[#294637]">
          Aa
        </span>
        <span className="h-1.5 rounded-full bg-[#9bb19d]" />
        <span className="h-1.5 w-3/4 rounded-full bg-[#b7c9b8]" />
      </div>
    ),
  },
]

export default function ComponentsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pt-9 pb-14 sm:px-6 sm:pt-12">
      <h1 className="mb-5 text-4xl font-semibold tracking-tight sm:mb-6 sm:text-5xl">
        Components
      </h1>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-4 sm:gap-5">
        {components.map(({ name, slug, description, thumbnail }) => (
          <li key={slug}>
            <Link
              href={`/components/${slug}`}
              aria-labelledby={`component-${slug}`}
              className="block h-full rounded-xl border border-[#cbd8ca] bg-[#fbfcf9] transition-colors hover:border-[#77947c] hover:bg-[#f0f5ed] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#376048]"
            >
              <article>
                <div
                  aria-hidden="true"
                  className="grid aspect-[2/1] place-items-center overflow-clip rounded-t-[11px] border-b border-[#cbd8ca] bg-[#eaf0e7] sm:aspect-video"
                >
                  {thumbnail}
                </div>
                <h2
                  id={`component-${slug}`}
                  className="px-4 pt-3.5 text-base font-semibold text-[#243b2c]"
                >
                  {name}
                </h2>
                <p className="px-4 pt-1 pb-4 text-sm leading-5 text-[#47604d] sm:min-h-15">
                  {description}
                </p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
