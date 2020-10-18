import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const { name, version } = require('../package.json');

addons.setConfig({
  theme: create({
    brandTitle: name + ' ' + version,
    colorSecondary: '#fba308',
  }),
});
