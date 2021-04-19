# kickstartDS ESLint config

## Installation

`npm install --save-dev eslint @kickstartds/eslint-config`

## Usage

Create a `.eslintrc.js` [config file](https://eslint.org/docs/user-guide/configuring):

```js
module.exports = {
  extends: '@kickstartds/eslint-config',
};
```

If you use this in an instance, create a `.eslintignore` file to ignore build files:

```
dist/*
```

Add a script to your `package.json` to run eslint:

```json
{
  "scripts": {
    "eslint": "eslint \"**/*.{js,ts,tsx}\""
  }
}
```
