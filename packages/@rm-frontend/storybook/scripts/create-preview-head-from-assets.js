/* eslint-disable global-require, import/no-dynamic-require */
const fs = require('fs-extra');
const path = require('path');
const util = require('util');
const nunjucks = require('nunjucks');

module.exports = async () => {
  const storybookRoot = path.resolve(__dirname, '..');

  nunjucks.configure(`${storybookRoot}/resources/templates`);

  const nunjucksEnvironment = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(`${storybookRoot}/resources/templates`)
  );

  const nunjucksRenderPromise = util.promisify(nunjucksEnvironment.render);
  const render = nunjucksRenderPromise.bind(nunjucksEnvironment);

  const options = {};

  return render('preview-head.html.njk', options)
    .then((content) =>
      fs.writeFile(`${storybookRoot}/.storybook/preview-head.html`, content)
    )
    .catch((err) => {
      console.log('Error: ', JSON.stringify(err));
    });
};
