'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-af4d78b9.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-component.cjs",[[4,"my-component",{"first":[1],"middle":[1],"last":[1],"modifier":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
