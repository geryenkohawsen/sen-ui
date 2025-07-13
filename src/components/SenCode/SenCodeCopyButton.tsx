// /components/ui/SenCode/SenCodeCopyButton.tsx
'use client'

import { useState } from 'react'

interface SenCodeCopyButtonProps {
  code: string
}

export function SenCodeCopyButton({ code }: SenCodeCopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 rounded bg-gray-700 px-2 py-1 text-xs text-white hover:bg-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
