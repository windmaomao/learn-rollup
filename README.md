# README

This repo is to learn rollup with babel etc. It tries to follow this article https://risanb.com/code/bundling-your-javascript-library-with-rollup.

It builds the following format:

- ES
- CJS (node format)
- UMD (browser format)
- UMD Minified

## Rollup Configure

### Dependencies

If you need to include an external dependency in the build, remove it from the `externalDeps` array.