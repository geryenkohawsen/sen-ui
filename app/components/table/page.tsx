import { SenCode } from '@/src'
import SenTable from '@/src/components/SenTable/SenTable'
import type { SenTableColumn } from '@/src/components/SenTable/props'
import { TableClickableExample } from './TableClickableExample'

const fieldsImage =
  'https://images.unsplash.com/photo-1764112434647-bfd7d5ccb10d?auto=format&fit=crop&fm=jpg&q=80&w=2400'

type User = {
  id: number
  name: string
  email: string
  isActive: boolean
}

const userColumns: SenTableColumn<User>[] = [
  { key: 'name', header: 'Name', align: 'left' },
  { key: 'email', header: 'Email', align: 'left' },
  {
    key: 'isActive',
    header: 'Status',
    align: 'center',
    render: (value) =>
      value ? (
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
          Active
        </span>
      ) : (
        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-800">
          Inactive
        </span>
      ),
  },
]

const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', isActive: true },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', isActive: false },
  { id: 3, name: 'Carol Lee', email: 'carol@example.com', isActive: true },
]

const usageCode = `import SenTable from 'sen-ui/SenTable'
import type { SenTableColumn } from 'sen-ui/SenTable'

type User = { id: number; name: string; email: string; isActive: boolean }

const columns: SenTableColumn<User>[] = [
  { key: 'name', header: 'Name', align: 'left' },
  { key: 'email', header: 'Email', align: 'left' },
  {
    key: 'isActive',
    header: 'Status',
    align: 'center',
    render: (value) => (value ? 'Active' : 'Inactive'),
  },
]

export function UsersTable({ data }: { data: User[] }) {
  return (
    <SenTable
      columns={columns}
      data={data}
      zebra
      onRowClick={(row) => console.log(row.id)}
    />
  )
}
`.trim()

const columnApiCode = `interface SenTableColumn<TData> {
  key: keyof TData          // which row property to read
  header: string            // column heading
  align?: 'left' | 'center' | 'right'
  render?: (value, row) => ReactNode  // custom cell content
}
`.trim()

const props = [
  ['columns', 'SenTableColumn<TData>[] (required)'],
  ['data', 'TData[] (required)'],
  ['zebra', 'boolean — alternating row tint (default true)'],
  ['onRowClick', '(row: TData) => void — makes rows keyboard-actionable'],
  ['showCheckbox', 'boolean — reserves a leading checkbox column'],
  ['className', 'string'],
  ['native table props', 'aria-*, id, style, etc.'],
]

const principles = [
  [
    'Typed columns',
    'Column keys are constrained to keyof TData — typos surface at compile time, not at runtime.',
  ],
  [
    'Render escape hatch',
    'Drop in any ReactNode per cell — badges, links, formatted dates — without forking the table.',
  ],
  [
    'Keyboard rows',
    'When onRowClick is set, rows become focusable and respond to Enter and Space.',
  ],
]

export default function PageTable() {
  return (
    <main className="w-full max-w-full overflow-x-hidden px-4 py-16 text-white sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div>
          <h1 className="max-w-6xl text-[clamp(2.8rem,6vw,5.9rem)] leading-[0.94] font-black tracking-normal text-balance">
            Rows of data, calmly arranged.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            SenTable is a typed, headless-feeling table — give it columns and
            data, customize cells with a render function, and it stays out of
            the way.
          </p>

          <div className="mt-9 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-3">
            <div className="overflow-hidden rounded-xl bg-[#f7f5ef] p-4">
              <SenTable columns={userColumns} data={users} />
            </div>
          </div>
        </div>

        <div className="group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${fieldsImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(0,0,0,0.08),rgba(0,0,0,0.84))]" />
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            <p className="max-w-sm text-2xl leading-tight font-black text-white">
              Rice paddies — orderly rows that make the field readable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-flow-dense gap-4 py-16 md:grid-cols-6 md:py-24">
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30 md:col-span-3">
          <div className="border-b border-white/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">Basic</h2>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Columns plus data — zebra striping is on by default for legibility
              over long lists.
            </p>
          </div>
          <div className="bg-[#f7f5ef] p-4 sm:p-7">
            <SenTable columns={userColumns} data={users} />
          </div>
        </article>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30 md:col-span-3">
          <div className="border-b border-white/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">No zebra</h2>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Cleaner for short tables and dense numeric data.
            </p>
          </div>
          <div className="bg-[#f7f5ef] p-4 sm:p-7">
            <SenTable columns={userColumns} data={users} zebra={false} />
          </div>
        </article>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-lime-200 text-neutral-950 shadow-2xl shadow-black/30 md:col-span-6">
          <div className="border-b border-black/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">
              Clickable rows + custom render
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-700">
              Pass <code>onRowClick</code> and rows become focusable buttons.
              Use the <code>render</code> column option for badges, money,
              dates, or anything that is not just text.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-7">
            <TableClickableExample />
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-3 md:py-24">
        {principles.map(([title, body]) => (
          <article
            key={title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20"
          >
            <h3 className="text-sm font-black tracking-[0.2em] text-lime-200 uppercase">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/68">{body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl py-16 md:py-24">
        <div className="mb-8">
          <h2 className="text-[clamp(2.3rem,4.6vw,4.4rem)] leading-[0.98] font-black tracking-normal text-balance">
            The column shape.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/62">
            Columns are plain objects, typed against the row data. The render
            function is the only escape hatch you need.
          </p>
        </div>
        <SenCode code={columnApiCode} language="ts" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-[0.86fr_1.14fr] md:py-24">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20">
          <h2 className="text-2xl font-black tracking-normal">
            API reference
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/58">
            Generic over <code>TData</code>. Pass-through to native table props.
          </p>

          <div className="mt-8">
            <h3 className="text-sm font-black tracking-[0.2em] text-white/42 uppercase">
              Props
            </h3>
            <dl className="mt-3 space-y-3">
              {props.map(([name, value]) => (
                <div
                  key={name}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <dt className="font-mono text-xs text-lime-200">{name}</dt>
                  <dd className="mt-1 text-sm text-white/68">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30">
          <div className="border-b border-white/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">
              Drop-in usage
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58">
              The full shape — typed columns, custom render, click handler.
            </p>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={usageCode} language="tsx" maxHeight="440px" />
          </div>
        </article>
      </section>
    </main>
  )
}
