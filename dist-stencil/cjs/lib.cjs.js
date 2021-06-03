'use strict';

const index = require('./index-dcf8d4db.js');

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('lib.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component.cjs",[[4,"my-component",{"first":[1],"middle":[1],"last":[1],"modifier":[1],"maxFileSize":[8,"max-file-size"],"multilineShizzle":[4,"multiline-shizzle"]}]]]], options);
});
