# Frequently Asked Questions

We'll add a more comprehensive FAQ soon, please tell us your questions... we'll make sure to include answers to them here!

## [React](https://reactjs.org/)

### How can I debug components re-rendering too often / in an infinite loop?

When being confronted with a case of components re-rendering way too often (compared to your expectation, and the necessity to do so), or even re-rendering in an infinite loop, you can try adding the following dependency to your setup to debug why specific components were actually re-rendered:
https://github.com/welldone-software/why-did-you-render

For a more detailed intro, see:
https://medium.com/welldone-software/why-did-you-render-mr-big-pure-react-component-2a36dd86996f

## [Next.js](https://nextjs.org/)

### How can I solve `SyntaxError: Unexpected token 'export'`?

The kickstartDS components are shipped as EcmaScript modules (ESM). To use them in a Next.js project, they have to be transpiled to CommonJS modules (CJS).

While Next.js doesn't transpile modules that are installed via NPM, you need to [customize the Babel configuration](https://nextjs.org/docs/advanced-features/customizing-babel-config) or use the [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) plugin (recommended).
