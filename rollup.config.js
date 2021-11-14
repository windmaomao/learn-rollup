import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const exportName = 'drh'

export default {
  external: [
    'react'
  ],
  input: 'src/index.js',
  output: [{
    file: 'dist/build.js',
    format: 'cjs',
    exports: 'auto'
  }, {
    file: 'dist/build.umd.js',
    format: 'umd',
    name: exportName
  }, {
    file: 'dist/build.iife.js',
    format: 'iife',
    name: exportName,
  }],
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    commonjs(),
    // terser()
  ]
};
