import React from 'react'
import { SenUiButton } from '.'

export default function PageButton() {
  async function handleClick() {
    'use server'
    console.log('Button clicked!')
  }

  return (
    <div className="p-4">
      <h1>Simple Page Showing a Button</h1>
      <SenUiButton>Click Me</SenUiButton>
      <SenUiButton variant="secondary" onClick={handleClick}>
        Click Me
      </SenUiButton>
      <SenUiButton variant="danger" onClick={handleClick}>
        Click Me
      </SenUiButton>
      <SenUiButton variant="success" onClick={handleClick}>
        Click Me
      </SenUiButton>
    </div>
  )
}
