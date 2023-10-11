import debug from 'debug';

const cwd = process.cwd().split('/');
const pckg = cwd[cwd.length - 1];

const log = debug('kickstartDS').extend(pckg);

export default log;
