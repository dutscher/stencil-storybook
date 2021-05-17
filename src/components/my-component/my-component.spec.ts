import { newSpecPage } from '@stencil/core/testing';
import { setupSpec, getComponentNameFromFilename } from '../../utils/tests/setup';
import { MyComponent } from './my-component';

const componentName = getComponentNameFromFilename(__filename);

describe(componentName, () => {
  it('default', async () => {
    const { component } = await setupSpec(MyComponent);
    expect(component.outerHTML).toMatchSnapshot();
  });

  it('vs. default manually', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<${componentName}></${componentName}>`,
    });
    expect(root).toMatchSnapshot();
  });
});
