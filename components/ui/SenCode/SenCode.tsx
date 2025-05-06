import { highlighter } from '@/utils/shiki'
import type { SenCodeProps } from './props'
import { SenCodeCopyButton } from './SenCodeCopyButton'

export default async function SenCode({
  code,
  language = 'ts',
  theme = 'nord',
}: SenCodeProps) {
  const highlighted = await highlighter.codeToHtml(code, {
    lang: language,
    theme: theme,
  })

  return (
    <div className="relative overflow-auto rounded-xl text-sm text-white">
      <SenCodeCopyButton code={code} />
      <div
        className="[&_pre]:p-4"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  )
}
