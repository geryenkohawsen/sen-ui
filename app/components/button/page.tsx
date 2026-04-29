import { SenButton, SenCode } from '@/src'
import { ButtonClickExample } from './ButtonClickExample'
import { ButtonLoadingExample } from './ButtonLoadingExample'

const simplicityImage =
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&fm=jpg&q=80&w=2400'

const standaloneCode = `import React from 'react';

export type SenButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
export type SenButtonSize = 'sm' | 'md' | 'lg';

export interface SenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: SenButtonVariant;
  size?: SenButtonSize;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<SenButtonVariant, string> = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-purple-500 text-white hover:bg-purple-600',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  success: 'bg-green-500 text-white hover:bg-green-600',
};

const sizeStyles: Record<SenButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

export function SenButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  children,
  ...props
}: SenButtonProps) {
  const isDisabled = loading || props.disabled;
  const isOnlyDisabled = !loading && props.disabled;

  return (
    <button
      className={[
        'relative inline-flex cursor-pointer items-center justify-center gap-2 rounded font-bold transition-colors duration-150',
        variantStyles[variant],
        sizeStyles[size],
        isDisabled && 'cursor-not-allowed',
        isOnlyDisabled && 'bg-gray-400 text-gray-700 hover:bg-gray-400',
        className
      ].filter(Boolean).join(' ')}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="animate-spin text-inherit"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" opacity="0.25"/><path d="M15 8A7 7 0 1 1 8 1" stroke="currentColor" strokeWidth="2"/></svg>
        </span>
      )}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
}
`

const props = [
  ['variant', "'primary' | 'secondary' | 'danger' | 'success'"],
  ['size', "'sm' | 'md' | 'lg'"],
  ['loading', 'boolean'],
  ['className', 'string'],
  ['children', 'React.ReactNode'],
  ['native button props', 'onClick, disabled, type, aria-*'],
]

export default function PageButton() {
  return (
    <main className="w-full max-w-full overflow-x-hidden px-4 py-16 text-white sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div>
          <h1 className="max-w-6xl text-[clamp(2.8rem,6vw,5.9rem)] leading-[0.94] font-black tracking-normal text-balance">
            Buttons with simple choices and obvious intent.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            SenButton keeps the interaction vocabulary compact: variants, sizes,
            disabled state, and loading state. That restraint makes product
            flows easier to scan and harder to misuse.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <SenButton size="lg">Primary action</SenButton>
            <SenButton variant="secondary" size="lg">
              Secondary action
            </SenButton>
          </div>
        </div>

        <div className="group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${simplicityImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(0,0,0,0.08),rgba(0,0,0,0.8))]" />
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            <p className="max-w-sm text-2xl leading-tight font-black text-white">
              A clear surface, a clear next step, no extra decoration.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-flow-dense gap-4 py-16 md:grid-cols-6 md:py-24">
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 md:col-span-3">
          <h2 className="text-2xl font-black tracking-normal">Variants</h2>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Four tones cover the most common product decisions without creating
            a sprawling button taxonomy.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <SenButton>Primary</SenButton>
            <SenButton variant="secondary">Secondary</SenButton>
            <SenButton variant="danger">Danger</SenButton>
            <SenButton variant="success">Success</SenButton>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-lime-200 p-7 text-neutral-950 shadow-2xl shadow-black/30 md:col-span-3">
          <h2 className="text-2xl font-black tracking-normal">Sizes</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-700">
            Size maps to density. Use small inside compact toolbars, medium for
            forms, and large for high-confidence calls to action.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <SenButton size="sm">Small</SenButton>
            <SenButton size="md">Medium</SenButton>
            <SenButton size="lg">Large</SenButton>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">Loading</h2>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Preserve layout while the action is in progress.
          </p>
          <div className="mt-7">
            <ButtonLoadingExample />
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">Disabled</h2>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Keep unavailable actions visible without inviting interaction.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <SenButton disabled>Primary</SenButton>
            <SenButton variant="secondary" disabled>
              Secondary
            </SenButton>
            <SenButton variant="danger" disabled>
              Danger
            </SenButton>
            <SenButton variant="success" disabled>
              Success
            </SenButton>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 md:col-span-2">
          <h2 className="text-2xl font-black tracking-normal">Click handler</h2>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Native button props pass through for normal React event handling.
          </p>
          <div className="mt-7">
            <ButtonClickExample />
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-[0.86fr_1.14fr] md:py-24">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20">
          <h2 className="text-2xl font-black tracking-normal">
            Standalone requirements
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/58">
            Copy the component into another project when you want the behavior
            without installing the full library.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <h3 className="text-sm font-black tracking-[0.2em] text-white/42 uppercase">
                Dependencies
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-white/68">
                <li>React 18 or newer</li>
                <li>Tailwind CSS classes or equivalent styles</li>
                <li>TypeScript for the exported prop types</li>
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
              Use SenButton standalone
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58">
              This is the full portable implementation, including variants,
              sizes, loading state, disabled handling, and native button prop
              passthrough.
            </p>
          </div>
          <div className="p-4 sm:p-7">
            <SenCode code={standaloneCode} language="tsx" maxHeight="440px" />
          </div>
        </article>
      </section>
    </main>
  )
}
