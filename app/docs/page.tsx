const installCommands = [
  ['npm', 'npm install'],
  ['yarn', 'yarn add'],
  ['pnpm', 'pnpm add'],
  ['bun', 'bun add'],
]

export default function DocsPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">📚 Getting Started</h1>
      <p className="mb-6 text-gray-600">
        Install <b>@geryenkohawsen/sen-ui</b> using your favorite package
        manager:
      </p>
      <div className="space-y-4">
        {installCommands.map(([manager, command]) => (
          <div key={manager}>
            <span className="font-semibold">{manager}</span>
            <pre
              role="region"
              aria-label={`${manager} install command`}
              tabIndex={0}
              className="mt-1 overflow-x-auto rounded bg-gray-100 p-3 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100"
            >
              <code>{command} @geryenkohawsen/sen-ui</code>
            </pre>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4 text-blue-600 [&_a]:hover:underline">
        <a
          href="https://www.npmjs.com/package/@geryenkohawsen/sen-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on npmjs.com ↗
        </a>
        <a href="https://github.com/geryenkohawsen/sen-ui">GitHub</a>
        <a href="https://www.gery.jp/en">Portfolio</a>
      </div>
    </main>
  )
}
