'use client'

import SenTable from '@/src/components/SenTable/SenTable'
import type { SenTableColumn } from '@/src/components/SenTable/props'

type Order = {
  id: string
  customer: string
  total: string
  status: 'paid' | 'refunded' | 'pending'
}

const columns: SenTableColumn<Order>[] = [
  { key: 'id', header: 'Order', align: 'left' },
  { key: 'customer', header: 'Customer', align: 'left' },
  { key: 'total', header: 'Total', align: 'right' },
  {
    key: 'status',
    header: 'Status',
    align: 'center',
    render: (value) => {
      const tone =
        value === 'paid'
          ? 'bg-green-100 text-green-800'
          : value === 'refunded'
            ? 'bg-rose-100 text-rose-800'
            : 'bg-amber-100 text-amber-800'
      return (
        <span
          className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${tone}`}
        >
          {String(value)}
        </span>
      )
    },
  },
]

const data: Order[] = [
  { id: '#1042', customer: 'Aiko Tanaka', total: '¥12,800', status: 'paid' },
  { id: '#1041', customer: 'Marcus Lee', total: '¥4,200', status: 'pending' },
  {
    id: '#1040',
    customer: 'Helena Reyes',
    total: '¥9,600',
    status: 'refunded',
  },
  { id: '#1039', customer: 'Sora Yamamoto', total: '¥21,000', status: 'paid' },
]

export function TableClickableExample() {
  return (
    <SenTable
      columns={columns}
      data={data}
      onRowClick={(row) => alert(`Open order ${row.id} (${row.customer})`)}
    />
  )
}
