import { SenButton } from '@/src'

// Custom block: ZenGradientButton
function ZenGradientButton(props: React.ComponentProps<typeof SenButton>) {
  return (
    <SenButton
      {...props}
      className={
        'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg transition-all hover:from-blue-600 hover:to-pink-600 ' +
        (props.className || '')
      }
      style={{
        borderRadius: '1.5rem',
        padding: '0.75rem 2rem',
        fontWeight: 600,
        fontSize: '1.1rem',
        ...props.style,
      }}
    >
      {props.children}
    </SenButton>
  )
}

export default function BlocksShowcasePage() {
  return (
    <div className="mx-auto max-w-xl py-12">
      <h1 className="mb-6 text-3xl font-bold">🧩 Blocks Showcase</h1>
      <section className="mb-10">
        <h2 className="mb-2 text-xl font-semibold">ZenGradientButton</h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          A custom button block built with <code>SenButton</code> and a gradient
          style.
        </p>
        <ZenGradientButton>Try Me!</ZenGradientButton>
      </section>
    </div>
  )
}
