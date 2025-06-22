// app/components/checkbox/page.tsx

import { CheckboxToggleExample } from './CheckboxToggleExample'
import { CheckboxFormExample } from './CheckboxFormExample'
import { SenCheckbox } from '@/src/components/SenCheckbox'

export default function PageCheckbox() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">SenCheckbox Component Showcase</h1>

      <section>
        <h2 className="text-xl font-semibold">Controlled Checkbox</h2>
        <CheckboxToggleExample />
      </section>

      <section>
        <h2 className="text-xl font-semibold">With React Hook Form</h2>
        <CheckboxFormExample />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Disabled State</h2>
        <SenCheckbox label="Disabled option" disabled />
      </section>
    </div>
  )
}
