import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm'],
  target: 'es2022',
  entry: ['./src/index.ts'],
  dts: true,
  splitting: true,
  bundle: true,
  minify: true,
  sourcemap: true,
  clean: true,
})
