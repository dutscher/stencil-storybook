const { execSync } = require('child_process');
const { scripts } = require('../package.json');
const chalk = require('chalk');
const prefix = chalk.yellow('[PRE-STORYBOOK]');

(function () {
  const output = execSync(scripts['storybook:static:dir']).toString();
  console.log(prefix, 'storybookStaticDir done', JSON.parse(output).length);
})();

(function () {
  const output = execSync(scripts['stencil:to:storybook']).toString();
  console.log(prefix, 'stencilToStorybook done', JSON.parse(output).length);
})();
