'use client'

import { useState } from 'react'
import SenRadio from '@/src/components/SenRadio/SenRadio'

export function RadioControlledExample() {
  const [value, setValue] = useState('matcha')

  return (
    <fieldset className="space-y-3">
      <legend className="font-black tracking-tight text-neutral-900">
        Pick a tea
      </legend>
      <SenRadio
        id="tea-matcha"
        name="tea"
        value="matcha"
        label="Matcha"
        checked={value === 'matcha'}
        onChange={() => setValue('matcha')}
      />
      <SenRadio
        id="tea-sencha"
        name="tea"
        value="sencha"
        label="Sencha"
        checked={value === 'sencha'}
        onChange={() => setValue('sencha')}
      />
      <SenRadio
        id="tea-hojicha"
        name="tea"
        value="hojicha"
        label="Hojicha"
        checked={value === 'hojicha'}
        onChange={() => setValue('hojicha')}
      />
      <SenRadio
        id="tea-genmaicha"
        name="tea"
        value="genmaicha"
        label="Genmaicha (sold out)"
        checked={value === 'genmaicha'}
        onChange={() => setValue('genmaicha')}
        disabled
      />

      <p className="pt-3 text-sm text-neutral-700">
        Selected: <code className="font-mono text-neutral-900">{value}</code>
      </p>
    </fieldset>
  )
}
