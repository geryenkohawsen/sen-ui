'use client'

import { useState } from 'react'
import { SenSpinner } from '@/src'

export function SpinnerInButtonExample() {
  const [loading, setLoading] = useState(false)

  return (
    <button
      type="button"
      onClick={() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 1500)
      }}
      disabled={loading}
      className="relative inline-flex items-center justify-center gap-2 rounded bg-neutral-900 px-5 py-3 font-bold text-white transition hover:bg-neutral-700 disabled:cursor-wait"
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <SenSpinner size={18} className="text-white" />
        </span>
      )}
      <span className={loading ? 'opacity-0' : ''}>Save changes</span>
    </button>
  )
}
