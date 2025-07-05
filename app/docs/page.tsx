export default function DocsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">📚 Getting Started</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Install <b>@geryenkohawsen/sen-ui</b> using your favorite package
        manager:
      </p>
      <div className="space-y-4">
        <div>
          <span className="font-semibold">npm</span>
          <pre className="mt-1 overflow-x-auto rounded bg-gray-100 p-3 text-sm dark:bg-gray-900">
            <code>npm install @geryenkohawsen/sen-ui</code>
          </pre>
        </div>
        <div>
          <span className="font-semibold">yarn</span>
          <pre className="mt-1 overflow-x-auto rounded bg-gray-100 p-3 text-sm dark:bg-gray-900">
            <code>yarn add @geryenkohawsen/sen-ui</code>
          </pre>
        </div>
        <div>
          <span className="font-semibold">pnpm</span>
          <pre className="mt-1 overflow-x-auto rounded bg-gray-100 p-3 text-sm dark:bg-gray-900">
            <code>pnpm add @geryenkohawsen/sen-ui</code>
          </pre>
        </div>
        <div>
          <span className="font-semibold">bun</span>
          <pre className="mt-1 overflow-x-auto rounded bg-gray-100 p-3 text-sm dark:bg-gray-900">
            <code>bun add @geryenkohawsen/sen-ui</code>
          </pre>
        </div>
      </div>
      <a
        href="https://www.npmjs.com/package/@geryenkohawsen/sen-ui"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-blue-600 hover:underline"
      >
        View on npmjs.com ↗
      </a>
    </div>
  )
}
