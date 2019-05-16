import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { eslint } from 'rollup-plugin-eslint'

import svelte from 'rollup-plugin-svelte'
import { sass as sveltePreprocessSass } from 'svelte-preprocess-sass'

const plugins = [
  resolve({
    extensions: ['.js', '.html', '.svelte'],
    mainFields: ['module', 'main'],
    browser: true,
    preferBuiltins: true,
    customResolveOptions: {
      moduleDirectory: ['node_modules', 'src']
    }
  }),
  commonjs(),
  eslint({
    throwError: true,
    exclude: ['node_modules/**']
  }),
  svelte({
    preprocess: {
      style: sveltePreprocessSass({}, { name: 'scss' })
    }
  })
]

export default [
  {
    input: './src/modifier-imports.js',
    output: {
      file: './dist/modifier-imports.js',
      format: 'umd',
      name: 'ReproModifiers'
    },
    plugins
  },
  {
    input: './src/no-modifier-imports.js',
    output: {
      file: './dist/index-no-modifier-imports.js',
      format: 'umd',
      name: 'ReproNoModifiers'
    },
    plugins
  }
]
