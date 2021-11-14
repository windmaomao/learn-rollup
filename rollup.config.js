import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const exportName = 'drh'
const babelOptions = {
  babelHelpers: 'bundled',
  exclude: 'node_modules/**'
}
const externalDeps = ['react']

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/build.js',
      format: 'es',
    },
    plugins: [
      babel(babelOptions),
    ],
    external: externalDeps
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/build.cjs.js',
      format: 'cjs',
      exports: 'auto',
    },
    plugins: [
      babel(babelOptions),
    ],
    external: externalDeps
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/build.umd.js',
      format: 'umd',
      name: exportName,
    },
    plugins: [
      resolve(),
      babel(babelOptions),
      commonjs()
    ],
    external: externalDeps
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/build.umd.min.js',
      format: 'umd',
      name: exportName,
    },
    plugins: [
      resolve(),
      babel(babelOptions),
      commonjs(),
      terser()
    ],
    external: externalDeps
  }
]