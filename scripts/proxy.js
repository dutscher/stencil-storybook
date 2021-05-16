const fetch = require('node-fetch');
const express = require('express');
const chalk = require('chalk');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { name, distDirs } = require('../package.json');

const app = express();
const browserPort = 3000;
const storybookPort = 3001;
const stencilPort = 3002;

// - browser 3000
//   - storybook 3001
//     - iframe.html with iframe to stencil devserver
//   - stencil devserver 3002

// Proxy Stencil's and storybooks dev server
app.use(
  '/~dev-server',
  createProxyMiddleware({
    target: `http://localhost:${stencilPort}`,
    changeOrigin: true,
    ws: true,
    logLevel: 'silent',
  }),
);
// storybook preview
app.use(/\/iframe\.html\?*/, async (req, res, next) => {
  let index = await fetch(`http://localhost:${storybookPort}/iframe.html${req.url.replace('/', '')}`)
    .then(res => res.text());

  index = index
    .replace(
      '</body>',
      `<iframe src="/~dev-server" style="display: block; width: 0; height: 0; border: 0;"></iframe>
      </body>`,
    );
  res.type('html').send(index);
});

// serve stencil dist
app.use('/' + distDirs.stencil, express.static('./' + distDirs.stencil));
// serve every storybook requests to storybook
app.use('/', createProxyMiddleware({
  target: `http://localhost:${storybookPort}`,
  logLevel: 'silent',
}));

app.listen(browserPort, () => {
  const text = `  Launch your Stencil + Storybook under http://localhost:${browserPort}   `;
  const textLen = text.length;
  const blankLine = chalk.magenta(`|${' '.repeat(textLen)}|`);
  console.log(chalk.magenta(`╭${'─'.repeat(textLen)}╮`));
  console.log(blankLine);
  console.log(chalk.magenta(`|${chalk.bold(text)}|`));
  console.log(blankLine);
  console.log(chalk.magenta(`╰${'─'.repeat(textLen)}╯`));
});
