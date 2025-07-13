// /app/components/page.tsx
import Link from 'next/link'

const previews = [
  { label: 'Button', path: 'button' }, // maps to SenButton
  { label: 'Spinner', path: 'spinner' }, // maps to SenSpinner
  { label: 'Input', path: 'input' }, // maps to SenInput
]

export default function ComponentsHomePage() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">📦 Component Previews</h1>
      <ul className="space-y-2">
        {previews.map((comp) => (
          <li key={comp.path}>
            <Link
              href={`/components/${comp.path}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {comp.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
