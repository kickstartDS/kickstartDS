# kickstartDS Stylelint config

## Installation

`npm install --save-dev stylelint @kickstartds/stylelint-config`

## Usage

Create a `.stylelintrc.js` [config file](https://stylelint.io/user-guide/configuration):

```js
module.exports = {
  extends: '@kickstartds/stylelint-config',
};
```

Add a script to your `package.json` to run stylelint:

```json
{
  "scripts": {
    "stylelint": "stylelint \"**/*.scss\""
  }
}
```
