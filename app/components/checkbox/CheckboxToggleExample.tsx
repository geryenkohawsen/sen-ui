// app/components/checkbox/CheckboxToggleExample.tsx

'use client'

import { SenCheckbox } from '@/src/components/SenCheckbox'
import { useState } from 'react'

export function CheckboxToggleExample() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-2">
      <SenCheckbox
        label="Enable notifications"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="mb-1"
      />
      <p className="text-sm">
        Current value: <code>{checked.toString()}</code>
      </p>
    </div>
  )
}
