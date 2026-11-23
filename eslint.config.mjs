import next from '@next/eslint-plugin-next'
import prettier from 'eslint-config-prettier'
import importX from 'eslint-plugin-import-x'
import jsxA11y from 'eslint-plugin-jsx-a11y-x'
import reactHooks from 'eslint-plugin-react-hooks'
import react from 'eslint-plugin-react-x'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'] },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'import-x': importX, 'jsx-a11y': jsxA11y },
    rules: {
      'import-x/no-anonymous-default-export': 'warn',
      'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
    },
  },
  next.configs['core-web-vitals'],
  react.configs.recommended,
  reactHooks.configs.flat.recommended,
  {
    rules: {
      // This library supports positional keys and still exposes forwardRef components.
      'react-x/no-array-index-key': 'off',
      'react-x/no-forward-ref': 'off',
    },
  },
  prettier,
]
