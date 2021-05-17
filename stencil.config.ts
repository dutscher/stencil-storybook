import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import getComponentNameSelectorVariableFromStencil from './src/utils/stencil/get-component-name-selector-from-stencil-importer';

const scssVariables = 'src/scss/variables.scss';
const { distDirs } = require('./package.json');
const yargs = require('yargs');

const docs = yargs.argv.docs;

const generatedConfig: Config = {
  namespace: 'lib',
  buildEs5: process.argv.includes('--es5') || 'prod',
  taskQueue: 'async',
  srcDir: 'src',
  plugins: [
    sass({
      injectGlobalPaths: [scssVariables],
      importer: getComponentNameSelectorVariableFromStencil,
    }),
  ],
  globalStyle: 'src/scss/init.scss',
  devServer: {
    reloadStrategy: 'hmr',
    openBrowser: false,
  },
  outputTargets: [
    // creates /dist dir
    {
      type: 'dist',
      dir: distDirs.stencil,
      copy: [
        // copy fonts into static for storybook and stencil build
        { src: 'fonts' },
      ],
    },
    // one file in es6
    {
      type: 'dist-custom-elements-bundle',
      dir: distDirs.stencil,
    },
    // create components(.d.ts|json) into dist
    {
      type: 'docs-json',
      file: `${distDirs.stencil}/components.json`,
    },
  ],
};

// creates readme.md for components
if (docs) {
  generatedConfig.outputTargets.push({
    type: 'docs-readme',
    dir: 'src',
  });
}

export const config: Config = generatedConfig;
