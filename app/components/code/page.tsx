import { SenCode } from '@/components/ui/SenCode'

const tsxExample = `
import { SenButton } from '@/components/ui/SenButton'

export default function Example() {
  return <SenButton>Click Me</SenButton>
}
`.trim()

const tsExample = `
function greet(name: string): string {
  return \`Hello, \${name}!\`
}

console.log(greet('World'))
`.trim()

export default function PageCode() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">SenCode Component</h1>

      <p className="text-gray-700">
        <code>SenCode</code> renders syntax-highlighted code using Shiki and
        includes a copy button. It supports <strong>tsx</strong>,{' '}
        <strong>ts</strong>, <strong>js</strong>, and <strong>jsx</strong> as
        languages, and these themes: <strong>catppuccin-macchiato</strong>,{' '}
        <strong>dark-plus</strong>, <strong>one-dark-pro</strong>, and{' '}
        <strong>monokai</strong>.
      </p>

      {/* TSX + catppuccin-macchiato */}
      <section>
        <h2 className="text-xl font-semibold">Theme: catppuccin-macchiato</h2>
        <SenCode
          code={tsxExample}
          language="tsx"
          theme="catppuccin-macchiato"
        />
      </section>

      {/* TS + dark-plus */}
      <section>
        <h2 className="text-xl font-semibold">Theme: dark-plus</h2>
        <SenCode code={tsExample} language="ts" theme="dark-plus" />
      </section>

      {/* TS + one-dark-pro */}
      <section>
        <h2 className="text-xl font-semibold">Theme: one-dark-pro</h2>
        <SenCode code={tsExample} language="ts" theme="one-dark-pro" />
      </section>

      {/* TS + monokai */}
      <section>
        <h2 className="text-xl font-semibold">Theme: monokai</h2>
        <SenCode code={tsExample} language="ts" theme="monokai" />
      </section>
    </div>
  )
}
