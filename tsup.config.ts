import { defineConfig } from 'tsup'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    ui: 'src/components/ui/index.ts',
    notion: 'src/components/notion/index.ts',
    lims: 'src/components/lims/index.ts',
    layout: 'src/components/layout/index.ts',
    i18n: 'src/i18n/index.tsx',
    styles: 'src/styles/globals.css',
  },
  splitting: true,
  sourcemap: isDev,
  clean: true,
  external: ['react', 'react-dom'],
  dts: true,
  format: ['cjs', 'esm'],
  minify: !isDev,
  outDir: 'dist',
  banner: ({ format }) => {
    if (format === 'esm') {
      return {
        js: `import { createElement } from 'react'`,
      }
    }
    return {}
  },
})
