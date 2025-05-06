import { SenButton } from '@/components/ui/SenButton'
import React from 'react'

export default function PageButton() {
  async function handleClick() {
    'use server'
    console.log('Button clicked!')
  }

  return (
    <div className="p-4">
      <h1>Simple Page Showing a Button</h1>
      <SenButton>Click Me</SenButton>
      <SenButton variant="secondary" onClick={handleClick}>
        Click Me
      </SenButton>
      <SenButton variant="danger" onClick={handleClick}>
        Click Me
      </SenButton>
      <SenButton variant="success" onClick={handleClick}>
        Click Me
      </SenButton>
    </div>
  )
}
