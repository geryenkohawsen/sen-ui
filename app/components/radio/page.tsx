import { SenCode } from '@/src'
import SenRadio from '@/src/components/SenRadio/SenRadio'
import { RadioControlledExample } from './RadioControlledExample'
import { RadioFormExample } from './RadioFormExample'

const pebblesImage =
  'https://images.unsplash.com/photo-1764112434647-bfd7d5ccb10d?auto=format&fit=crop&fm=jpg&q=80&w=2400'

const standaloneCode = `'use client'

import React, { forwardRef } from 'react'
import type { ChangeEventHandler, InputHTMLAttributes } from 'react'

export interface SenRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  id: string
  name: string
  value: string
  label?: string
  checked?: boolean
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  className?: string
}

const SenRadio = forwardRef<HTMLInputElement, SenRadioProps>(
  (
    { id, name, value, label, checked = false, disabled = false, onChange, className, ...props },
    ref
  ) => {
    return (
      <div
        className={[
          'flex items-center',
          disabled && 'opacity-50',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <input
          ref={ref}
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="h-4 w-4 border-gray-300 transition-colors duration-150 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          {...props}
        />
        {label && (
          <label htmlFor={id} className="ml-2 cursor-pointer select-none">
            {label}
          </label>
        )}
      </div>
    )
  }
)

SenRadio.displayName = 'SenRadio'

export default SenRadio
`

const usageCode = `'use client'

import { useState } from 'react'
import SenRadio from 'sen-ui/SenRadio'

export function PlanPicker() {
  const [plan, setPlan] = useState('free')

  return (
    <fieldset className="space-y-2">
      <legend>Pick a plan</legend>
      {['free', 'pro', 'team'].map((p) => (
        <SenRadio
          key={p}
          id={\`plan-\${p}\`}
          name="plan"
          value={p}
          label={p}
          checked={plan === p}
          onChange={() => setPlan(p)}
        />
      ))}
    </fieldset>
  )
}
`.trim()

const props = [
  ['id', 'string (required) — pairs label to input'],
  ['name', 'string (required) — groups one-of-many'],
  ['value', 'string (required)'],
  ['label', 'string'],
  ['checked', 'boolean'],
  ['disabled', 'boolean'],
  ['onChange', '(e: ChangeEvent<HTMLInputElement>) => void'],
  ['className', 'string'],
]

const principles = [
  [
    'One choice in a group',
    'Use radios when the user must pick exactly one. For independent toggles reach for SenCheckbox.',
  ],
  [
    'Same name, different values',
    'Group radios with a shared name attribute. The browser handles exclusivity natively.',
  ],
  [
    'Form-friendly ref',
    'forwardRef makes integration with React Hook Form, Formik, or vanilla refs frictionless.',
  ],
]

export default function PageRadio() {
  return (
    <main className="w-full max-w-full overflow-x-hidden px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div>
          <h1 className="max-w-6xl text-[clamp(2.8rem,6vw,5.9rem)] leading-[0.94] font-black tracking-normal text-balance">
            One choice from many, no second thoughts.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-site-muted">
            SenRadio is a thin, accessible wrapper over a native radio input. It
            keeps keyboard semantics, focus rings, and form integration for
            free, and adds nothing else.
          </p>

          <div className="mt-9 rounded-2xl border border-site-line bg-site-secondary p-5">
            <div className="rounded-xl bg-site-canvas p-5 text-neutral-900">
              <RadioControlledExample />
            </div>
          </div>
        </div>

        <div className="group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-site-line bg-site-primary shadow-2xl shadow-site-ink/20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${pebblesImage})` }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-site-ink/85 via-site-ink/35 to-site-ink/55" />
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            <p className="max-w-sm text-2xl leading-tight font-black text-white">
              Stepping stones — only one foot down at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-flow-dense gap-4 py-16 md:grid-cols-6 md:py-24">
        <article className="overflow-hidden rounded-[2rem] border border-site-line bg-site-accent text-neutral-950 shadow-2xl shadow-site-ink/15 md:col-span-4">
          <div className="border-b border-black/10 p-7">
            <h2 className="text-2xl font-black tracking-normal">
              React Hook Form
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              Use a Controller and call <code>field.onChange</code> with the new
              value. Same shape as a native radio group, none of the wiring.
            </p>
          </div>
          <div className="bg-white p-7">
            <RadioFormExample />
          </div>
        </article>

        <article className="rounded-[2rem] border border-site-line bg-site-secondary p-7 shadow-2xl shadow-site-ink/10 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">Disabled</h2>
          <p className="mt-3 text-sm leading-6 text-site-muted">
            Show a locked option without removing it from the group.
          </p>
          <div className="mt-7 space-y-2 rounded-2xl bg-site-canvas p-5 text-neutral-900">
            <SenRadio
              id="d1"
              name="locked"
              value="a"
              label="Available"
              checked
              readOnly
            />
            <SenRadio
              id="d2"
              name="locked"
              value="b"
              label="Locked"
              disabled
              readOnly
            />
          </div>
        </article>

        <article className="rounded-[2rem] border border-site-line bg-site-secondary p-7 shadow-2xl shadow-site-ink/10 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">No label</h2>
          <p className="mt-3 text-sm leading-6 text-site-muted">
            Skip the label prop when a custom layout supplies its own.
          </p>
          <div className="mt-7 flex items-center gap-4 rounded-2xl bg-site-canvas p-5 text-neutral-900">
            <SenRadio id="nl1" name="bare" value="1" readOnly />
            <SenRadio id="nl2" name="bare" value="2" readOnly />
            <SenRadio id="nl3" name="bare" value="3" readOnly />
          </div>
        </article>

        <article className="rounded-[2rem] border border-site-line bg-site-secondary p-7 shadow-2xl shadow-site-ink/10 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">
            Accessibility
          </h2>
          <p className="mt-3 text-sm leading-6 text-site-muted">
            Wrap groups in <code>fieldset</code> with a <code>legend</code>.
            Native arrow-key navigation comes for free.
          </p>
        </article>

        <article className="rounded-[2rem] border border-site-line bg-site-secondary p-7 shadow-2xl shadow-site-ink/10 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">Tip</h2>
          <p className="mt-3 text-sm leading-6 text-site-muted">
            More than five options? A select probably reads faster.
          </p>
        </article>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-3 md:py-24">
        {principles.map(([title, body]) => (
          <article
            key={title}
            className="rounded-[2rem] border border-site-line bg-site-secondary p-7 shadow-2xl shadow-site-ink/10"
          >
            <h3 className="text-sm font-black tracking-[0.2em] text-site-link uppercase">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-site-muted">{body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-[0.86fr_1.14fr] md:py-24">
        <aside className="rounded-[2rem] border border-site-line bg-site-secondary p-7 shadow-2xl shadow-site-ink/10">
          <h2 className="text-2xl font-black tracking-normal">
            Standalone requirements
          </h2>
          <p className="mt-4 text-sm leading-6 text-site-muted">
            Copy the component into another project for a frictionless radio.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <h3 className="text-sm font-black tracking-[0.2em] text-site-muted uppercase">
                Dependencies
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-site-muted">
                <li>React 18 or newer</li>
                <li>Tailwind CSS classes or equivalent styles</li>
                <li>TypeScript for the prop types</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black tracking-[0.2em] text-site-muted uppercase">
                Props
              </h3>
              <dl className="mt-3 space-y-3">
                {props.map(([name, value]) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-site-line bg-site-canvas p-4"
                  >
                    <dt className="font-mono text-xs text-site-link">{name}</dt>
                    <dd className="mt-1 text-sm text-site-muted">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </aside>

        <article className="overflow-hidden rounded-[2rem] border border-site-line bg-site-secondary shadow-2xl shadow-site-ink/15">
          <div className="border-b border-site-line p-7">
            <h2 className="text-2xl font-black tracking-normal">
              Quick usage
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-site-muted">
              A controlled radio group — the most common shape for forms.
            </p>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={usageCode} language="tsx" />
          </div>

          <div className="border-t border-site-line p-7">
            <h3 className="text-sm font-black tracking-[0.2em] text-site-muted uppercase">
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
