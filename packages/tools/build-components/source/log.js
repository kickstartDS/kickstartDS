const cwd = process.cwd().split('/');
const pckg = cwd[cwd.length - 1];

module.exports = require('debug')('kickstartDS').extend(pckg);
