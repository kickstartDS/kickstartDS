# rm-frontend Stylelint config

## Installation

`npm install --save-dev stylelint @rm-frontend/stylelint-config`

## Usage

Create a `.stylelintrc.js` [config file](https://stylelint.io/user-guide/configuration):

```js
module.exports = {
  extends: '@rm-frontend/stylelint-config',
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
