import React from 'react'
import CompButton from '.'

export default function PageButton() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div className="p-4">
      <h1>Simple Page Showing a Button</h1>
      <CompButton>Click Me</CompButton>
      <CompButton variant="secondary" onClick={handleClick}>
        Click Me
      </CompButton>
      <CompButton variant="danger" onClick={handleClick}>
        Click Me
      </CompButton>
      <CompButton variant="success" onClick={handleClick}>
        Click Me
      </CompButton>
    </div>
  )
}
