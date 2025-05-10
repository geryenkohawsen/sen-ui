import { SenHeader } from '@/components/ui/SenHeader'
import { SenButton } from '@/components/ui/SenButton'
import { SenCode } from '@/components/ui/SenCode'

const codeExample = `
<SenHeader
  logoSrc="/logo.png"
  logoAlt="MySite Logo"
  title="MySite"
  links={[
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ]}
  actions={<SenButton variant="primary">Sign In</SenButton>}
/>
`.trim()

export default function PageHeader() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">SenHeader Component</h1>

      <p>
        The <code>SenHeader</code> renders your site’s top bar with a logo,
        title, navigation links, and optional action items on the right.
      </p>

      {/* Live Preview */}
      <section>
        <h2 className="text-xl font-semibold">Live Preview</h2>
        <div className="rounded border">
          <SenHeader
            logoSrc="/images/sen-ui-logo.png"
            logoAlt="MySite Logo"
            links={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'About', href: '/about' },
            ]}
            actions={<SenButton variant="primary">Sign In</SenButton>}
          />
        </div>
      </section>

      {/* Usage Example */}
      <section>
        <h2 className="text-xl font-semibold">Usage</h2>
        <SenCode
          code={codeExample}
          language="tsx"
          theme="catppuccin-macchiato"
        />
      </section>
    </div>
  )
}
