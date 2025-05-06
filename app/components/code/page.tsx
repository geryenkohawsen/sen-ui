import { SenCode } from '@/components/ui/SenCode'

const tsExample = `
function greet(name: string) {
  return \`Hello, \${name}!\`
}

console.log(greet('World'))
`.trim()

const jsExample = `
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3))
`.trim()

export default function PageCode() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">SenCode Component</h1>

      <p>
        <code>SenCode</code> renders syntax-highlighted code using Shiki and
        includes a copy button. Currently supports <strong>ts</strong> and{' '}
        <strong>js</strong> as language options, and
        <strong> nord</strong> and <strong>dark-plus</strong> as themes.
      </p>

      {/* TypeScript + Nord */}
      <section>
        <h2 className="text-xl font-semibold">
          Example: TypeScript (nord theme)
        </h2>
        <SenCode code={tsExample} language="ts" theme="nord" />
      </section>

      {/* JavaScript + Dark Plus */}
      <section>
        <h2 className="text-xl font-semibold">
          Example: JavaScript (dark-plus theme)
        </h2>
        <SenCode code={jsExample} language="js" theme="dark-plus" />
      </section>
    </div>
  )
}
