import { SenButton } from '@/src'
import { ButtonClickExample } from './ButtonClickExample'
import { ButtonLoadingExample } from './ButtonLoadingExample'

export default function PageButton() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">SenButton Component Showcase</h1>

      {/* Variant examples */}
      <section>
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <SenButton>Primary</SenButton>
          <SenButton variant="secondary">Secondary</SenButton>
          <SenButton variant="danger">Danger</SenButton>
          <SenButton variant="success">Success</SenButton>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap gap-4">
          <SenButton size="sm">Small</SenButton>
          <SenButton size="md">Medium</SenButton>
          <SenButton size="lg">Large</SenButton>
        </div>
      </section>

      {/* Loading State */}
      <section>
        <h2 className="text-xl font-semibold">Loading State (on click)</h2>
        <ButtonLoadingExample />
      </section>

      {/* Disabled State */}
      <section>
        <h2 className="text-xl font-semibold">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <SenButton disabled>Disabled Primary</SenButton>
          <SenButton variant="secondary" disabled>
            Disabled Secondary
          </SenButton>
          <SenButton variant="danger" disabled>
            Disabled Danger
          </SenButton>
          <SenButton variant="success" disabled>
            Disabled Success
          </SenButton>
        </div>
      </section>

      {/* Interactive Click Example */}
      <section>
        <h2 className="text-xl font-semibold">Click Handler Example</h2>
        <ButtonClickExample />
      </section>
    </div>
  )
}
