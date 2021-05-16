export const initCurrentScriptPolyfill = (): void => {
  // missing forEach on NodeList for IE11
  if (window.NodeList && !NodeList.prototype.forEach) {
    // @ts-ignore TS2322: Type
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  // document.currentScript polyfill by Adam Miller
  // https://github.com/amiller-gh/currentScript-polyfill/blob/master/currentScript.js
  const currentScript = 'currentScript';

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    /* eslint-disable no-console */
    if (!Array.prototype.filter) {
      /* eslint-disable no-extend-native */
      Array.prototype.filter = (func, thisArg) => {
        /* eslint-disable valid-typeof */
        // @ts-ignore TS2367: This condition will always return 'false' since the types '"string"
        if (!((typeof func === 'Function' || typeof func === 'function') && this)) throw new TypeError();
        /* eslint-disable no-bitwise */
        // @ts-ignore TS2532: Object is possibly 'undefined'.
        const len = this.length >>> 0;
        const res = new Array(len); // preallocate array
        const t = this;
        let c = 0;
        let i = -1;
        /* eslint-disable no-plusplus */
        if (thisArg === undefined) {
          while (++i !== len) {
            // checks to see if the key was set
            // @ts-ignore TS2532: Object is possibly 'undefined'.
            if (i in this) {
              // @ts-ignore TS2532: Object is possibly 'undefined'.
              if (func(t[i], i, t)) {
                // @ts-ignore TS2532: Object is possibly 'undefined'.
                res[c++] = t[i];
              }
            }
          }
        } else {
          while (++i !== len) {
            // checks to see if the key was set
            // @ts-ignore TS2532: Object is possibly 'undefined'.
            if (i in this) {
              // @ts-ignore TS2532: Object is possibly 'undefined'.
              if (func.call(thisArg, t[i], i, t)) {
                // @ts-ignore TS2532: Object is possibly 'undefined'.
                res[c++] = t[i];
              }
            }
          }
        }

        res.length = c; // shrink down array to proper size
        return res;
      };
    }

    Object.defineProperty(document, currentScript, {
      /* eslint-disable func-names */
      get: () => {
        // IE 8-10 support script readyState
        // IE 11+ support stack trace
        try {
          throw new Error();
        } catch (err) {
          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          const scripts = Array.prototype.slice.call(document.querySelectorAll('body script'));
          const filteredScriptsWithCurrentScript = scripts.filter(
            (script) => script.innerHTML.indexOf('document.currentScript') !== -1 && script.getAttribute('returned') === null,
          );
          const returnedScript = filteredScriptsWithCurrentScript[0];
          if (returnedScript) {
            returnedScript.setAttribute('returned', 'true');
          }
          // If no match, return null
          return returnedScript;
        }
      },
    });
  }
};
