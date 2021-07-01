const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');
const checker = require('license-checker');
const jsoncsv = require('json-csv');
const execa = require('execa');

const { log } = console;

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

async function getDeps(start) {
  return new Promise((resolve, reject) => {
    log(`Starting 🔎 read dependencies from ${start}`);
    checker.init({ start }, (err, packages) =>
      err ? reject(err) : resolve(packages)
    );
  }).then((deps) => {
    log(`Finished 🔎 read dependencies from ${start}`);
    return deps;
  });
}

async function install(dir) {
  try {
    log(`Starting 📦 install ${dir}`);
    await execa('npm', ['install', '--no-package-lock'], { cwd: dir });
  } catch (e) {
    log.error(`Error while installing ${dir}:`, e);
  } finally {
    log(`Finished 📦 install ${dir}`);
  }
}

(async function createLicenseCsV() {
  const matches = await glob('packages/components/*/package.json');

  const modules = await Promise.all(
    matches.map(async (match) => {
      const dir = path.dirname(match);
      await install(dir);
      return getDeps(dir);
    })
  );

  const merged = new Map(Object.entries(Object.assign({}, ...modules)));
  const json = [...merged]
    .filter(([name]) => !name.startsWith('@kickstartds'))
    .sort()
    .map(([name, val]) => ({ name, ...val }));

  log(`Starting 💾 write ${json.length} dependencies to licenses.csv`);
  const out = fs.createWriteStream(`licenses.csv`, {
    encoding: 'utf8',
  });
  const readable = Readable.from(json);

  await new Promise((resolve, reject) => {
    readable
      .pipe(jsoncsv.stream(csvOptions))
      .pipe(out)
      .on('finish', () => log(`Finished 💾 write licenses.csv`))
      .on('finish', resolve)
      .on('error', reject);
  });

  log('🎉 Ready!!');
})();
