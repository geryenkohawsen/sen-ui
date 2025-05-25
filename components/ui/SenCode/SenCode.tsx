import { highlighter } from '../../../utils/shiki'
import type { SenCodeProps } from './props'
import { SenCodeCopyButton } from './SenCodeCopyButton'

export default async function SenCode({
  code,
  language = 'tsx',
  theme = 'catppuccin-macchiato',
}: SenCodeProps) {
  const highlighted = await highlighter.codeToHtml(code, {
    lang: language,
    theme,
  })

  return (
    <div className="relative overflow-auto rounded bg-gray-900 p-4 text-sm text-white">
      <SenCodeCopyButton code={code} />
      <div
        className="[&_.line]:block [&_.line]:px-2 [&_.line]:py-0.5"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  )
}
