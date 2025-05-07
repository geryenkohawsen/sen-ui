// /utils/shiki.ts

import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

/**
 * Initialize a Shiki highlighter using the JavaScript RegExp engine.
 * This setup includes the 'nord' and 'dark-plus' themes, and supports
 * TypeScript and JavaScript languages.
 */
export const highlighter = await createHighlighterCore({
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
