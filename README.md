![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# [Stencil 2.0.3](https://stenciljs.com/) + [Storybook 6.0.26](https://storybook.js.org/) + Real Stencil HMR (hot module reloading)

[Storybook on gh-pages](https://dutscher.github.io/stencil-storybook/index.html)

This is a starter project for building components with Stencil in Storybook.
This sample includes _Real_ HMR in Storybook, with the Stencil build running in watch mode.
Storybook only knows the stories, markup of stencil and entry point.

Aswell its chromatic tested, this means visiual regression testing of your stories.

Thanks to stencil storybook starters [bjankord](https://github.com/bjankord/stencil-storybook-boilerplate), [elwynelwyn](https://github.com/elwynelwyn/stencilbook-ding)<br/>
And [shoelace](https://github.com/shoelace-style/shoelace) where i got the proxy hmr solution.

And maybe this [issue](https://github.com/storybookjs/storybook/issues/4600) can be closed?

✔️NodeJS 14.13.1 ready (use nvm!)<br/>
✔️Stencil 2 ready, not yet es5 tested but should work! + BEM and REM utils<br/>
✔️Storybook 6+ WebComponents ready<br/>
✔️Real HMR on development with Stencil Dev Server, this keep storybooks state of controls<br/>
✔️chromatic.com visiual regression testing ready<br/>
✔️Tested on Windows 10 and Mac<br/>
✔️Bootstrap reset and Webfonts boilerplate included<br/>

## How the HMR works

Stencil has an included /~dev-server which can out of the box HMR.
So we start storybook with webpack and stencil dev mode with rollup.
On the top we have a proxy which include the /~dev-server of stencil into the storybook canvas iframe.html
Et voilà, this is what we want!

## When you have issues, please let me know!

Use my issues section

## Start to develop

`npm install`<br/>
`npm start`<br/>
`your storybook will run under: http://localhost:3000`

## Build your production

`npm build`

## Test your Stencil

`npm test`<br/>
`npm test -t special.spec.ts`

That's it!<br/>
Cheers dutscher
