import { newE2EPage } from '@stencil/core/testing';
import { getComponentNameFromFilename, setupE2E } from '../../utils/tests/setup';

const componentName = getComponentNameFromFilename(__filename);

describe(componentName, () => {
  it('default', async () => {
    const { page, component } = await setupE2E(componentName, null);
    await page.waitForChanges();
    expect(component).toMatchSnapshot();
  });

  it('default manually', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const element = await page.find(componentName);
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const component = await page.find(componentName);
    const element = await page.find(componentName + ' >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
