import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm'],
  target: 'es2022',
  entry: ['./src/index.ts'],
  dts: true,
  splitting: false,
  bundle: true,
  minify: true,
  sourcemap: true,
  clean: true,
  skipNodeModulesBundle: true,
  esbuildOptions(options) {
    options.jsx = 'automatic' // use automatic runtime
    options.jsxImportSource = 'react'
  },
})
