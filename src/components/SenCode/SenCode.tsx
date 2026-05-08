import { highlighter } from '../../utils/shiki'
import type { SenCodeProps } from './props'
import { SenCodeCopyButton } from './SenCodeCopyButton'

export default async function SenCode({
  code,
  language = 'tsx',
  theme = 'catppuccin-macchiato',
  maxHeight,
  ...rest
}: SenCodeProps) {
  const highlighted = await highlighter.codeToHtml(code, {
    lang: language,
    theme,
  })

  return (
    <div
      className="relative rounded bg-gray-900 p-4 text-sm text-white"
      style={rest.style}
    >
      <div className="absolute top-2 right-2 z-10">
        <SenCodeCopyButton code={code} />
      </div>
      <div
        className="overflow-auto [&_.line]:block [&_.line]:px-2 [&_.line]:py-0.5"
        style={maxHeight ? { maxHeight, minHeight: '2rem' } : undefined}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  )
}
