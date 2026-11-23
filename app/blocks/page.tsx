import Link from 'next/link'

export default function BlocksPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-9 pb-14 sm:px-6 sm:pt-12">
      <h1 className="mb-5 text-4xl font-semibold tracking-tight sm:mb-6 sm:text-5xl">
        Blocks
      </h1>
      <div className="rounded-2xl border border-[#cbd8ca] bg-[#edf3eb] px-5 py-7 sm:px-8 sm:py-9">
        <h2 className="text-xl font-semibold tracking-tight text-[#243b2c]">
          Work in progress
        </h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-[#47604d]">
          We’re building reusable page sections with Sen UI components.
        </p>
        <Link
          href="/components"
          className="mt-5 inline-flex min-h-11 items-center rounded text-sm font-semibold text-[#294637] underline decoration-[#8da591] underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#376048]"
        >
          Browse components
        </Link>
      </div>
    </main>
  )
}
