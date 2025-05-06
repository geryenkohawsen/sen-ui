import { SenSpinner } from '@/components/ui/SenSpinner'
import React from 'react'

export default function PageSpinner() {
  return (
    <div className="p-4">
      <h1>Simple Page Showing a Spinner</h1>
      <SenSpinner size={32} className="text-blue-500" />
      <SenSpinner size={64} className="text-red-500" />
      <SenSpinner size={200} className="text-green-500" />
    </div>
  )
}
