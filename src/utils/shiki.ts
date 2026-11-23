import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

export const highlighterPromise = createHighlighterCore({
  themes: [
    import('@shikijs/themes/catppuccin-macchiato'),
    import('@shikijs/themes/dark-plus'),
    import('@shikijs/themes/one-dark-pro'),
    import('@shikijs/themes/monokai'),
  ],
  langs: [
    import('@shikijs/langs/tsx'),
    import('@shikijs/langs/typescript'),
    import('@shikijs/langs/jsx'),
    import('@shikijs/langs/javascript'),
  ],
  engine: createJavaScriptRegexEngine(),
})
