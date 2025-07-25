import { SenButton, SenCode } from '@/src'
import { ButtonClickExample } from './ButtonClickExample'
import { ButtonLoadingExample } from './ButtonLoadingExample'

export default function PageButton() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">SenButton Component Showcase</h1>

      {/* Variant examples */}
      <section>
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <SenButton>Primary</SenButton>
          <SenButton variant="secondary">Secondary</SenButton>
          <SenButton variant="danger">Danger</SenButton>
          <SenButton variant="success">Success</SenButton>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap gap-4">
          <SenButton size="sm">Small</SenButton>
          <SenButton size="md">Medium</SenButton>
          <SenButton size="lg">Large</SenButton>
        </div>
      </section>

      {/* Loading State */}
      <section>
        <h2 className="text-xl font-semibold">Loading State (on click)</h2>
        <ButtonLoadingExample />
      </section>

      {/* Disabled State */}
      <section>
        <h2 className="text-xl font-semibold">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <SenButton disabled>Disabled Primary</SenButton>
          <SenButton variant="secondary" disabled>
            Disabled Secondary
          </SenButton>
          <SenButton variant="danger" disabled>
            Disabled Danger
          </SenButton>
          <SenButton variant="success" disabled>
            Disabled Success
          </SenButton>
        </div>
      </section>

      {/* Interactive Click Example */}
      <section>
        <h2 className="text-xl font-semibold">Click Handler Example</h2>
        <ButtonClickExample />
      </section>

      {/* Raw Code & Dependencies */}
      <section>
        <h2 className="mt-8 text-xl font-semibold">Use SenButton Standalone</h2>
        <p className="mb-2 text-sm text-slate-500">
          Copy and use the code below in your own project. No need to install
          the full library!
        </p>
        <div className="mb-2">
          <strong>Dependencies:</strong>
          <ul className="list-inside list-disc text-sm">
            <li>React (v18+)</li>
            <li>Tailwind CSS (for styling, or adapt classes as needed)</li>
            <li>TypeScript (optional, for type safety)</li>
          </ul>
        </div>
        <div className="mb-2">
          <strong>Required types/props for this exact code:</strong>
          <ul className="list-inside list-disc text-sm">
            <li>
              <code>variant</code>: &apos;primary&apos; | &apos;secondary&apos;
              | &apos;danger&apos; | &apos;success&apos;
            </li>
            <li>
              <code>size</code>: &apos;sm&apos; | &apos;md&apos; |
              &apos;lg&apos;
            </li>
            <li>
              <code>loading</code>: boolean (optional, for loading state)
            </li>
            <li>
              <code>className</code>: string (optional, for custom classes)
            </li>
            <li>
              <code>children</code>: React.ReactNode
            </li>
            <li>
              Any native <code>&lt;button&gt;</code> props (e.g.{' '}
              <code>onClick</code>, <code>disabled</code>, etc.)
            </li>
          </ul>
        </div>
        <SenCode
          code={`import React from 'react';

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
          {/* You can use your own spinner here */}
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="animate-spin text-inherit"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" opacity="0.25"/><path d="M15 8A7 7 0 1 1 8 1" stroke="currentColor" strokeWidth="2"/></svg>
        </span>
      )}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
}
`}
          language="tsx"
        />
        <p className="mt-2 text-xs text-slate-400">
          You can customize the styles, props, or loading spinner as needed for
          your project.
        </p>
      </section>
    </div>
  )
}
