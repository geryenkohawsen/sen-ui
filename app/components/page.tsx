// /app/components/page.tsx
import Link from 'next/link'

const previews = [
  { label: 'Button', path: 'button' },
  { label: 'Checkbox', path: 'checkbox' },
  { label: 'Code', path: 'code' },
  { label: 'Header', path: 'header' },
  { label: 'Icon', path: 'icon' },
  { label: 'Radio', path: 'radio' },
  { label: 'Spinner', path: 'spinner' },
  { label: 'Table', path: 'table' },
  { label: 'Typography', path: 'typography' },
]

export default function ComponentsHomePage() {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {previews.map((comp) => (
          <Link
            key={comp.path}
            href={`/components/${comp.path}`}
            className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-400 hover:shadow-lg"
          >
            <span className="flex items-center gap-2 text-lg font-semibold text-gray-800 group-hover:text-blue-600">
              {/* Optionally add an icon here */}
              {comp.label}
              <svg
                className="h-4 w-4 text-blue-400 transition group-hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="mt-2 block text-sm text-gray-500">
              Preview the {comp.label} component
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}
