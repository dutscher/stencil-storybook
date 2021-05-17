/* eslint-disable no-console, no-template-curly-in-string */
const fsExt = require('fs-extra');

const staticDir = 'node_modules/.storybook-static-dir/';
fsExt.ensureDirSync(staticDir);

const dirs = [
  { src: 'dist-stencil', dest: staticDir + 'dist-stencil/' },
  {
    src: 'src/assets',
    dest: staticDir + 'assets/',
  },
];
const copiedDirs = [];

(async () => {
  await Promise.all(
    dirs.map(async (dir) => {
      if (fsExt.existsSync(dir.src)) {
        await fsExt.copy(dir.src, dir.dest);
        copiedDirs.push({ ...dir });
      }
    }),
  );
  console.log(JSON.stringify(copiedDirs));
})();
