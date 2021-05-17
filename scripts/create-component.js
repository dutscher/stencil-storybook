const camelize = (str) => {
  return str
    .replace('-', ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};
const ucFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const fsExt = require('fs-extra');
const prompts = require('prompts');
const srcDir = 'src/components';
let componentTag = '';
let ComponentName = '';

// ask for component-name
(async () => {
  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Which <my-component /> tagname do you want to create?',
    validate: (value) =>
      !value.includes(['-']) ? `<my-component /> needs prefix, delimited with - and a name` : true,
  });
  componentTag = response.value.toLowerCase();
  ComponentName = ucFirst(camelize(componentTag));

  const componentDir = `${srcDir}/${componentTag}`;
  fsExt.ensureDirSync(componentDir);

  // setup tpl's
  const fileScss = `${componentDir}/${componentTag}.scss`;
  const tplScss = `
@import '#$componentNameSelector';
// with shadow dom
:host {
  display: block;
}
// without shadow dom
#{$componentNameSelector} {

}
`.trimLeft();
  const fileTsx = `${componentDir}/${componentTag}.tsx`;
  const tplTsx = `
import { Component, Prop, Host, h } from '@stencil/core';
import { hostClasses, ComponentName } from '../../utils';

@Component({
  tag: '${componentTag}',
  styleUrl: '${componentTag}.scss',
})
export class ${ComponentName} {
  @ComponentName() componentName;

  /** JSDOC */
  @Prop() name;

  render() {
    const cssClasses = hostClasses({
      componentName: this.componentName,
    });

    return (
      <Host class={cssClasses}>
      </Host>
    );
  }
}
`.trimLeft();
  const fileTestE2E = `${componentDir}/${componentTag}.e2e.ts`;
  const tplTestE2E = `
import { getComponentNameFromFilename, setupE2E } from '../../utils/tests/setup';
import { newE2EPage } from '@stencil/core/testing';

const componentName = getComponentNameFromFilename(__filename);

describe(componentName, () => {
  it('default', async () => {
    const { page, component } = await setupE2E(componentName, null);
    await page.waitForChanges();
    expect(component).toMatchSnapshot();
  });

  it('vs. default manually', async () => {
    const page = await newE2EPage();

    await page.setContent('<${componentTag}></${componentTag}>');
    const element = await page.find(componentName);
    expect(element).toHaveClass('hydrated');
  });
});
`.trimLeft();
  const fileTestSpec = `${componentDir}/${componentTag}.spec.ts`;
  const tplTestSpec = `
import { newSpecPage } from '@stencil/core/testing';
import { setupSpec, getComponentNameFromFilename } from '../../utils/tests/setup';
import { ${ComponentName} } from './${componentTag}';

const componentName = getComponentNameFromFilename(__filename);

describe(componentName, () => {
  it('default', async () => {
    const { component } = await setupSpec(${ComponentName});
    expect(component.outerHTML).toMatchSnapshot();
  });

  it('vs. default manually', async () => {
    const { root } = await newSpecPage({
      components: [${ComponentName}],
      html: \`<$\{componentName}></$\{componentName}>\`,
    });
    expect(root).toMatchSnapshot();
  });
});
`.trimLeft();
  const fileStory = `${componentDir}/${componentTag}.stories.ts`;
  const tplStory = `
import { setupStory, setupVariant, h, setupComposition } from '../../utils/storybook';
import stencilStories from './stencil-stories';

const Story = setupStory(stencilStories, {
  category: 'Components/${ComponentName}',
  // minimal setup
  argDefaults: {},
  argOptions: {},
  // storybook defaults
  args: {},
  argTypes: {},
});

export const Default = setupVariant(Story);
export const Modified = setupVariant(Story, { modifier: 'modified' });

export const Slots = setupComposition(
  \`Title\`,
  () => h\`
  $\{['Slot eins', 'Slot dva'].map((slot) => h\`$\{Story.tplComposition({ slot })}<br>\`)}
\`,
);

export default Story;
`.trimLeft();
  const fileReadme = `${componentDir}/readme.md`;
  const tplReadme = `
# ${componentTag}

<!-- Auto Generated Below -->
`.trimLeft();

  // Generate a source file
  if (fsExt.existsSync(fileTsx)) {
    console.error(`There is already a component using the <${componentTag} /> tag!\n`);
    process.exit();
  }

  fsExt.writeFileSync(fileScss, tplScss, 'utf8');
  fsExt.writeFileSync(fileTsx, tplTsx, 'utf8');
  fsExt.writeFileSync(fileTestE2E, tplTestE2E, 'utf8');
  fsExt.writeFileSync(fileTestSpec, tplTestSpec, 'utf8');
  fsExt.writeFileSync(fileStory, tplStory, 'utf8');
  fsExt.writeFileSync(fileReadme, tplReadme, 'utf8');

  console.log(componentTag + ' created'); // => { value: my-component }
})();
