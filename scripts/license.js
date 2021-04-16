const { promisify } = require('util');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');
const checker = require('license-checker');
const jsoncsv = require('json-csv');
const log = require('fancy-log');

const readFile = promisify(fs.readFile);
const execa = require('execa');

const csvOptions = {
  fields: [
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'licenses',
      label: 'Licenses',
    },
    {
      name: 'repository',
      label: 'Repository',
    },
    {
      name: 'publisher',
      label: 'Publisher',
    },
  ],
};

async function readJson(filename) {
  const contents = await readFile(filename);
  return JSON.parse(contents.toString('utf-8'));
}

async function getDeps(start) {
  return new Promise((resolve, reject) => {
    log(`Starting '🔎 read dependencies from ${start}'`);
    checker.init({ start }, (err, packages) =>
      err ? reject(err) : resolve(packages)
    );
  }).then((deps) => {
    log(`Finished '🔎 read dependencies from ${start}'`);
    return deps;
  });
}

async function install(dir) {
  try {
    log(`Starting '📦 install ${dir}'`);
    await execa('npm', ['install', '--no-package-lock'], { cwd: dir });
  } catch (e) {
    log.error(`Error while installing ${dir}:`, e);
  } finally {
    log(`Finished '📦 install ${dir}'`);
  }
}

(async function createLicenseCsV() {
  const matches = await glob('packages/components/*/package.json');

  const modules = await Promise.all(
    matches.map(async (match) => {
      const dir = path.dirname(match);
      const pckg = await readJson(match);
      await install(dir);
      const deps = await getDeps(dir);
      return {
        isFrontend: pckg.config && pckg.config['rm-frontend'],
        deps,
      };
    })
  );

  const splittedDeps = modules.reduce(
    (prev, { isFrontend, deps }) => {
      prev[isFrontend ? 'frontend' : 'tools'].push(deps);
      return prev;
    },
    { frontend: [], tools: [] }
  );

  await Promise.all(
    Object.entries(splittedDeps).map(async ([type, deps]) => {
      const merged = deps.reduce((prev, curr) => Object.assign(prev, curr), {});
      const filtered = Object.entries(merged).reduce((prev, [name, val]) => {
        if (!name.startsWith('@kickstartds')) prev.push({ name, ...val });
        return prev;
      }, []);

      log(
        `Starting '💾 write ${filtered.length} dependencies to licenses-${type}.csv'`
      );
      const out = fs.createWriteStream(`licenses-${type}.csv`, {
        encoding: 'utf8',
      });
      const readable = Readable.from(filtered);

      return new Promise((resolve, reject) => {
        readable
          .pipe(jsoncsv.stream(csvOptions))
          .pipe(out)
          .on('finish', () => log(`Finished '💾 write licenses-${type}.csv'`))
          .on('finish', resolve)
          .on('error', reject);
      });
    })
  );

  log('🎉 Ready!!');
})();
