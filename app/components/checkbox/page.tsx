import { SenCode } from '@/src'
import { SenCheckbox } from '@/src/components/SenCheckbox'
import { CheckboxToggleExample } from './CheckboxToggleExample'
import { CheckboxFormExample } from './CheckboxFormExample'

const stillnessImage =
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&fm=jpg&q=80&w=2400'

const standaloneCode = `import React, { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

export interface SenCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id?: string
  label: string
  description?: string
  disabled?: boolean
  className?: string
}

export const SenCheckbox = forwardRef<HTMLInputElement, SenCheckboxProps>(
  ({ id, name, label, description, disabled = false, className, ...props }, ref) => {
    const _id = id ?? name

    return (
      <div className={['flex items-start space-x-2', className].filter(Boolean).join(' ')}>
        <input
          ref={ref}
          id={_id}
          name={name}
          type="checkbox"
          disabled={disabled}
          aria-describedby={description ? \`\${_id}-desc\` : undefined}
          className={[
            'h-4 w-4 rounded border-gray-300 text-blue-600',
            'focus:ring-2 focus:ring-blue-500 focus:outline-none',
            disabled && 'cursor-not-allowed opacity-50',
          ].filter(Boolean).join(' ')}
          {...props}
        />
        <div className="flex flex-col">
          <label
            htmlFor={_id}
            className={[
              'font-medium select-none',
              disabled ? 'text-gray-500' : 'text-gray-900',
            ].join(' ')}
          >
            {label}
          </label>
          {description && (
            <p id={\`\${_id}-desc\`} className="text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>
      </div>
    )
  }
)

SenCheckbox.displayName = 'SenCheckbox'
`

const usageCode = `'use client'

import { useState } from 'react'
import { SenCheckbox } from 'sen-ui'

export function NotificationToggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <SenCheckbox
      label="Enable notifications"
      description="We'll only ping you about meaningful events."
      checked={enabled}
      onChange={(e) => setEnabled(e.target.checked)}
    />
  )
}
`.trim()

const props = [
  ['label', 'string (required)'],
  ['description', 'string'],
  ['id', 'string — falls back to name'],
  ['name', 'string'],
  ['disabled', 'boolean'],
  ['className', 'string'],
  ['native input props', 'checked, onChange, onBlur, ref, value'],
]

const principles = [
  [
    'Required label',
    'Every checkbox carries a visible label so screen readers and humans agree on intent.',
  ],
  [
    'Optional description',
    'Add a quiet subtitle when the choice has consequences worth surfacing.',
  ],
  [
    'Form-friendly',
    'forwardRef and native input props mean React Hook Form, Formik, or plain forms all work.',
  ],
]

export default function PageCheckbox() {
  return (
    <main className="w-full max-w-full overflow-x-hidden px-4 py-16 text-white sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div>
          <h1 className="max-w-6xl text-[clamp(2.8rem,6vw,5.9rem)] leading-[0.94] font-black tracking-normal text-balance">
            A quiet yes or no, with the label always visible.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            SenCheckbox stays out of the way — a native input, a required label,
            an optional description, and a forwarded ref so it slots into any
            form library without ceremony.
          </p>
          <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
            <div className="rounded-xl bg-[#f7f5ef] p-5 text-neutral-950">
              <SenCheckbox
                label="Send me product updates"
                description="One short email per release, never more."
                defaultChecked
              />
            </div>
          </div>
        </div>

        <div className="group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${stillnessImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(0,0,0,0.08),rgba(0,0,0,0.8))]" />
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            <p className="max-w-sm text-2xl leading-tight font-black text-white">
              One choice at a time, made obvious.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-flow-dense gap-4 py-16 md:grid-cols-6 md:py-24">
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30 md:col-span-3">
          <div className="border-b border-white/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">
              Controlled
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Track the value yourself — the checkbox is a thin wrapper over the
              native input, so React state owns the truth.
            </p>
          </div>
          <div className="bg-[#f7f5ef] p-7 text-neutral-950">
            <CheckboxToggleExample />
          </div>
        </article>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-lime-200 text-neutral-950 shadow-2xl shadow-black/30 md:col-span-3">
          <div className="border-b border-black/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">
              React Hook Form
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              Drop into a Controller. The checked boolean flows out cleanly via
              onChange.
            </p>
          </div>
          <div className="bg-white p-7">
            <CheckboxFormExample />
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">Disabled</h2>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Stay visible without inviting interaction.
          </p>
          <div className="mt-7 rounded-2xl bg-[#f7f5ef] p-5 text-neutral-950">
            <SenCheckbox label="Locked option" disabled defaultChecked />
            <div className="mt-3">
              <SenCheckbox label="Another locked one" disabled />
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">
            With description
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Surface the consequence without hiding it in a tooltip.
          </p>
          <div className="mt-7 rounded-2xl bg-[#f7f5ef] p-5 text-neutral-950">
            <SenCheckbox
              label="Delete on uninstall"
              description="Removes saved data from this device."
            />
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">Group</h2>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Stack independent toggles. For one-of-many, reach for SenRadio.
          </p>
          <div className="mt-7 space-y-2 rounded-2xl bg-[#f7f5ef] p-5 text-neutral-950">
            <SenCheckbox label="Email" defaultChecked />
            <SenCheckbox label="SMS" />
            <SenCheckbox label="Push" defaultChecked />
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

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-[0.86fr_1.14fr] md:py-24">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20">
          <h2 className="text-2xl font-black tracking-normal">
            Standalone requirements
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/58">
            Copy the component when you want the behavior without installing the
            full library.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <h3 className="text-sm font-black tracking-[0.2em] text-white/42 uppercase">
                Dependencies
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-white/68">
                <li>React 18 or newer</li>
                <li>Tailwind CSS classes or equivalent styles</li>
                <li>A small cn / clsx helper for class merging</li>
              </ul>
            </div>

            <div>
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
          </div>
        </aside>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30">
          <div className="border-b border-white/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">
              Quick usage
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58">
              A controlled checkbox with description — the most common shape in
              real product forms.
            </p>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={usageCode} language="tsx" />
          </div>

          <div className="border-t border-white/10 p-7">
            <h3 className="text-sm font-black tracking-[0.2em] text-white/42 uppercase">
              Full standalone implementation
            </h3>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={standaloneCode} language="tsx" maxHeight="440px" />
          </div>
        </article>
      </section>
    </main>
  )
}
