import Link from 'next/link'

export default function BlocksPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-9 pb-14 sm:px-6 sm:pt-12">
      <h1 className="mb-5 text-4xl font-semibold tracking-tight sm:mb-6 sm:text-5xl">
        Blocks
      </h1>
      <div className="rounded-2xl border border-site-line bg-site-secondary px-5 py-7 sm:px-8 sm:py-9">
        <h2 className="text-xl font-semibold tracking-tight text-site-ink">
          Work in progress
        </h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-site-muted">
          We’re building reusable page sections with Sen UI components.
        </p>
        <Link
          href="/components"
          className="mt-5 inline-flex min-h-11 items-center rounded text-sm font-semibold text-site-link underline decoration-site-link underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-site-ink"
        >
          Browse components
        </Link>
      </div>
    </main>
  )
}
