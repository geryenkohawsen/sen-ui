import React from 'react'
import SenSpinner from '.'

export default function PageSpinner() {
  return (
    <div className="p-4">
      <h1>Simple Page Showing a Spinner</h1>
      <SenSpinner size={32} className="text-blue-500" />
    </div>
  )
}
