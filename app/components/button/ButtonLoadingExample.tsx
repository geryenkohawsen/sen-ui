'use client'

import { useState } from 'react'
import { SenButton } from '../../../src'

export function ButtonLoadingExample() {
  const [loading, setLoading] = useState(false)

  function handleClick() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="flex flex-wrap gap-4">
      <SenButton loading={loading} onClick={handleClick}>
        Loading on Click
      </SenButton>
      <SenButton variant="secondary" loading={loading} onClick={handleClick}>
        Loading on Click
      </SenButton>
      <SenButton variant="danger" loading={loading} onClick={handleClick}>
        Loading on Click
      </SenButton>
      <SenButton variant="success" loading={loading} onClick={handleClick}>
        Loading on Click
      </SenButton>
    </div>
  )
}
