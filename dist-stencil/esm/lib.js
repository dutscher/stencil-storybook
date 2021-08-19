import { p as promiseResolve, b as bootstrapLazy } from './index-c86a8937.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[4,"my-component",{"first":[1],"middle":[1],"last":[1],"modifier":[1],"maxFileSize":[8,"max-file-size"],"multilineShizzle":[4,"multiline-shizzle"]}]]]], options);
});
