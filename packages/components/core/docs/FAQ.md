# Frequently Asked Questions

## [Next.js](https://nextjs.org/)

### How can I solve `SyntaxError: Unexpected token 'export'`?

The kickstartDS components are shipped as EcmaScript modules (ESM). To use them in a Next.js project, they have to be transpiled to CommonJS modules (CJS).

While Next.js doesn't transpile modules that are installed via NPM, you need to [customize the Babel configuration](https://nextjs.org/docs/advanced-features/customizing-babel-config) or use the [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) plugin (recommended).
