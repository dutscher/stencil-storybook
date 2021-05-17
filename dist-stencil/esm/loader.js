import { p as promiseResolve, b as bootstrapLazy } from './index-42bac8bc.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-component",[[4,"my-component",{"first":[1],"middle":[1],"last":[1],"modifier":[1]}]]]], options);
  });
};

export { defineCustomElements };
