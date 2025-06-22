// app/radio-demo/page.tsx
'use client'

import { useState } from 'react'
import SenRadio from '@/src/components/SenRadio/SenRadio'

export default function RadioDemoPage() {
  const [controlledValue, setControlledValue] = useState('option1')

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">SenRadio Component Demo</h1>

      {/* Controlled Radios (with a disabled option) */}
      <section>
        <h2 className="text-xl font-semibold">Controlled Radios</h2>
        <fieldset className="space-y-2">
          <legend className="font-medium">Select an option:</legend>
          <SenRadio
            id="c1"
            name="controlled"
            value="option1"
            label="Option 1"
            checked={controlledValue === 'option1'}
            onChange={() => setControlledValue('option1')}
          />
          <SenRadio
            id="c2"
            name="controlled"
            value="option2"
            label="Option 2"
            checked={controlledValue === 'option2'}
            onChange={() => setControlledValue('option2')}
          />
          <SenRadio
            id="c3"
            name="controlled"
            value="option3"
            label="Option 3 (disabled)"
            checked={controlledValue === 'option3'}
            onChange={() => setControlledValue('option3')}
            disabled
          />
        </fieldset>

        <p>
          Selected: <strong>{controlledValue}</strong>
        </p>
      </section>
    </div>
  )
}
