require('dotenv').config();
const chalk = require('chalk');
const { modules } = require('./modules');

console.log(chalk.yellow`
 __   |_ __  _  _ __  _  o  |  _
 | |_|| ||||(/__> |||(/_ |  | (/_
    _|_ __ _ __ _|_ _ __  _|
     |  | (_)| | |_(/_| |(_|
`);

console.log(
  `${chalk.underline('modules')}: ${modules.map((m) => m.key).join(', ')}`
);
console.log(`${chalk.underline('environment')}: ${process.env.NODE_ENV}`);
if (process.env.RM_FRONTEND_RC) {
  console.log(`${chalk.underline('instance')}: ${process.env.RM_FRONTEND_RC}`);
}
console.log();
