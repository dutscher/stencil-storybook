/* eslint-disable no-console */
import { render, html } from 'lit-html';
import React from 'react';
import Prism from 'prismjs';
import { initTemplatePolyfill } from 'lit-html/polyfills/template_polyfill';
import { ifDefined } from 'lit-html/directives/if-defined';
import { initCurrentScriptPolyfill } from './polyfill-current-script';
import { action } from './custom-action';

require('prismjs/components/prism-jsx');

initTemplatePolyfill();
initCurrentScriptPolyfill();

const setCodeTo = (Variant, litTpl) => {
  const renderCode = (args) => {
    const div = document.createElement('div');
    render(
      litTpl({
        ...(args || {}),
      }),
      div,
    );
    let code = div.innerHTML;
    // remove stencil comments
    code = code.replace(/<!---->/g, '');
    // remove empty lines
    code = code.replace(/ {2,6}\n/g, '');
    // remove wrong indent
    code = code.replace(/ {4}(.*)/g, '$1');
    // remove first empty newline
    code = code.replace('\n', '');
    // remove last whitespace
    code = code.replace(/ {2}$/gm, '');
    // remove whitespace before <br>
    code = code.replace(/ {2}<br>/g, '<br>');
    return code;
  };

  Variant.parameters = {
    docs: {
      source: {
        code: renderCode({ ...Variant.args, docsView: true }),
      },
      prepareForInline: (storyFn, storyData) => {
        class Story extends React.Component {
          private wrapperRef: any;

          constructor(props) {
            super(props);
            this.wrapperRef = React.createRef();
          }

          componentDidMount() {
            render(storyFn(), this.wrapperRef.current);
          }

          render() {
            // rerender "Show code context"
            const prism = document.querySelector(
              '#anchor--' + storyData.id + ' .prismjs .language-jsx',
            );
            if (prism) {
              prism.innerHTML = Prism.highlight(
                renderCode({ ...storyData.args, docsView: true }),
                Prism.languages.jsx,
                'jsx',
              );
            }
            return React.createElement('div', { ref: this.wrapperRef, title: 'willy was here' });
          }
        }

        return React.createElement(Story);
      },
    },
  };
};

export function setupStory(stencilSettings, storySettings) {
  const settings = {
    component: stencilSettings.component,
    title: storySettings.category,
    // https://storybook.js.org/docs/react/writing-stories/parameters
    parameters: {
      notes: {
        markdown: String(stencilSettings.markdown || '')
          // # headline -> <headline />
          .replace(/# (.*)-(.*)/g, '# <$1-$2 />')
          // \| -> |
          .replace(/\\\|/g, '|')
          // undefined -> -
          .replace(/undefined/g, '-'),
      },
      actions: {
        handles: storySettings.events || [],
      },
      docs: {
        source: {
          // code: '',
        },
      },
      // https://github.com/storybookjs/storybook/tree/next/addons/a11y
      a11y: {
        // optional selector which element to inspect
        element: `#root ${stencilSettings.component}`,
        // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
        config: {},
        // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
        options: {},
        // optional flag to prevent the automatic check
        manual: true,
      },
      ...storySettings.parameters,
    },
    customEvents: stencilSettings.customEvents || null,
    events: storySettings.events || null,
    args: { ...stencilSettings.args, ...(storySettings.argsDefaults || {}) },
    argTypes: {
      ...stencilSettings.argTypes,
      ...(storySettings.argTypes || storySettings.argsDefaults || {}),
    },
    // export
    tpl: storySettings.tplOverride || stencilSettings.tpl,
    tplComposition: (args) => settings.tpl.bind()({ ...args, docsView: true }),
    tplCompositionWithActionLogs: (args) =>
      html`${settings.tpl.bind()({ ...args, docsView: true })}${settings.customEvents
        ? action(settings.customEvents)
        : ''}`,
  };
  // override stencil with story options to existings select options
  // argTypes: {"outlinehover": {
  //   "description": "Icon Außenlinie Hover",
  //   "control": {
  //      "type": "select",
  //      "options": [
  //        "default" ...insert HERE
  //      ]
  //   }
  // }},
  if (storySettings.argOptions) {
    Object.keys(storySettings.argOptions).map((arg) => {
      // is stencil select there?
      if (settings.argTypes[arg]) {
        if ('control' in settings.argTypes[arg]) {
          settings.argTypes[arg].control.options = storySettings.argOptions[arg];
        } else {
          settings.argTypes[arg].control = {
            type: 'select',
            options: storySettings.argOptions[arg],
          };
        }
      }
      return true;
    });
  }

  return settings;
}

export function setupVariant(Story, args = {}, title = '') {
  /* eslint-disable @typescript-eslint/no-use-before-define */
  const litHtmlLogs = (variantVargs) =>
    html`${Story.tpl({ ...Variant.args, ...variantVargs })}${Story.customEvents
      ? action(Story.customEvents)
      : ''}`;
  const Variant = litHtmlLogs.bind({});
  Variant.args = { ...Story.args, ...args };
  Variant.storyName = title;
  // Show code of webcomponents code in docsView
  setCodeTo(Variant, Story.tpl);
  return Variant;
}

export function setupComposition(titleOrLitHtml, litHtml?) {
  let realLitHtml = titleOrLitHtml;
  let storyName = '';
  // with title it is litHTML
  if (typeof titleOrLitHtml === 'string') {
    realLitHtml = litHtml;
    storyName = titleOrLitHtml;
  }
  const Variant = realLitHtml.bind({});
  // Show code of webcomponents code
  Variant.storyName = storyName;
  setCodeTo(Variant, realLitHtml);
  return Variant;
}

// export lit-html attribute render wrapper
export const a = (value) => {
  if (value === false || value === '' || value === 'default') {
    value = undefined;
  }
  return ifDefined(value);
};
// export lit-html as h
export const h = html;
