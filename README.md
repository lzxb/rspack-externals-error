# rspack-externals-error

## Quick start
```bash
pnpm i
pnpm build
```
## Issue
1. rspack.config.js set
```js
{
    externals: ['test2']
}
```
2. packages/test1/index.js
```js
export * from 'test2';
```
3. Run command
```bash
pnpm build
```