import { SenIcon } from '@/components/ui/SenIcon'

const iconNames = ['check', 'close', 'info', 'warning', 'search'] as const
const sizes = [16, 24, 32] as const

export default function PageIcon() {
  return (
    <main className="space-y-10 p-6">
      <h1 className="text-2xl font-bold">SenIcon Component</h1>

      <p className="text-gray-700">
        The <code>SenIcon</code> component renders an SVG file from{' '}
        <code>/public/icons</code> via Next.js’s <code>&lt;Image&gt;</code>. It
        supports three fixed square sizes: 16, 24, or 32 px.
      </p>

      {/* 1. Available icons at default (24px) */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Available Icons (24 px)</h2>
        <div className="flex flex-wrap gap-6">
          {iconNames.map((name) => (
            <div key={name} className="flex flex-col items-center gap-1">
              <SenIcon src={`/icons/${name}.svg`} size={24} />
              <span className="text-sm text-gray-500">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Icon sizes */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap gap-10">
          {iconNames.map((name) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                {sizes.map((s) => (
                  <SenIcon key={s} src={`/icons/${name}.svg`} size={s} />
                ))}
              </div>
              <span className="text-sm text-gray-500">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
