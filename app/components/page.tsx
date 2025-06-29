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
