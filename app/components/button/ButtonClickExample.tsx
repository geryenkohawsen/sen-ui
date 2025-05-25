'use client'

import { SenButton } from "../../../src"


export function ButtonClickExample() {
  function handleClick() {
    alert('Button clicked from Client Component!')
  }

  return (
    <SenButton variant="primary" onClick={handleClick}>
      Click Me
    </SenButton>
  )
}
