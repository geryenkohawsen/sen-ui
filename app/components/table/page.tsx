'use client'

import SenTable from '@/src/components/SenTable/SenTable'
import type { SenTableColumn } from '@/src/components/SenTable/props'

type User = {
  id: number
  name: string
  email: string
  isActive: boolean
}

const columns: SenTableColumn<User>[] = [
  {
    key: 'name',
    header: 'Name',
    align: 'left',
  },
  {
    key: 'email',
    header: 'Email Address',
    align: 'left',
  },
  {
    key: 'isActive',
    header: 'Status',
    align: 'center',
    render: (value) =>
      value ? (
        <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-800">
          Active
        </span>
      ) : (
        <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-800">
          Inactive
        </span>
      ),
  },
]

const data: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    isActive: true,
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    isActive: false,
  },
  {
    id: 3,
    name: 'Carol Lee',
    email: 'carol@example.com',
    isActive: true,
  },
]

export default function SenTableDemo() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">SenTable Component Demo</h1>

      <section>
        <h2 className="text-xl font-semibold">Basic Table</h2>
        <SenTable columns={columns} data={data} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Clickable Rows</h2>
        <SenTable
          columns={columns}
          data={data}
          onRowClick={(row) => alert(`Clicked: ${row.name}`)}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          With Zebra Striping + Centered Status
        </h2>
        <SenTable columns={columns} data={data} zebra />
      </section>
    </div>
  )
}
