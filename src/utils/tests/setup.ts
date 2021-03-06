import { E2EElement, E2EPage, newE2EPage, newSpecPage, SpecPage } from '@stencil/core/testing';
import { camelCaseToKebabCase } from '../camel-case-to-kebap-case';
import { SpecHTMLElement } from './spec-helper';
import { FilterProps } from '../_interfaces';
import getComponentNameFromFilenameExport from '../stencil/get-component-name-of-filename';

export const getComponentNameFromFilename = getComponentNameFromFilenameExport;

export const isJenkins = process.env.JENKINS_HOME !== undefined;

export function createComp(
  tagName: string,
  attributes: Attributes<{ [key: string]: string | boolean }> | null = {},
  slots?: string,
): string {
  const html = `
    <${tagName}
    ${
      attributes
        ? Object.keys(attributes)
            .map(
              (propName: string) => `${camelCaseToKebabCase(propName)}="${attributes[propName]}"`,
            )
            .join('\n')
        : ''
    }>
    ${slots || ''}
    </${tagName}>
  `;
  return html;
}

// https://stenciljs.com/docs/end-to-end-testing
export async function setupE2E(
  componentName: string = '',
  properties: { [key: string]: string | null } = {},
  slots?: string,
  _page?: E2EPage,
  viewport?: { width: number; height: number },
): Promise<{ page: E2EPage; component: E2EElement }> {
  const page = _page || (await newE2EPage());
  if (viewport) {
    // { width: 1920, height: 1080 }
    await page.setViewport(viewport);
  }
  page.on('pageerror', (e) => fail(e));
  const html = `<meta charset="UTF-8">${createComp(componentName, properties, slots)}`;
  await page.setContent(html);
  const component = await page.find(componentName);
  return { page, component };
}

// https://stenciljs.com/docs/unit-testing
export async function setupSpec<C>(
  component: { new (): C },
  options: {
    additionalComponents?: { new (): any }[];
    attributes?: Attributes<C>;
    slots?: string;
  } = {},
): Promise<{ page: SpecPage; component: SpecHTMLElement<C>; changeState: any }> {
  const { additionalComponents = [], attributes, slots } = options;

  // todo: find a more clever way with the stencil public-api
  const { tagName } = (component as any).COMPILER_META;

  const components = [component, ...additionalComponents];

  const page = await newSpecPage({
    components,
    html: createComp(tagName, attributes, slots),
  });
  const instance = page.body.querySelector(tagName) as SpecHTMLElement<C>;

  const changeState = (stateName: string, stateValue: any): void => {
    page.rootInstance[stateName] = stateValue;
  };

  return { page, component: instance, changeState };
}

export type Attributes<C> = Partial<FilterProps<C, string | boolean>>;

export async function asyncForEach(array: any, callback: any) {
  /* eslint-disable no-plusplus */
  for (let index: number = 0; index < array.length; index++) {
    /* eslint-disable no-await-in-loop */
    await callback(index);
  }
}

export async function delay(timeout: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, timeout);
  });
}

// https://stackoverflow.com/questions/61066112/stencil-e2e-testing-mock-a-function-in-puppeteer-browser-context
export async function mockFetchAtPage(page: E2EPage) {
  await page.addScriptTag({
    content: `
      window.originalFetch = window.fetch;

      window.requestsToIntercept = [];

      window.fetch = (...args) => (async(args) => {
        const result = await this.originalFetch(...args);

        for (const request of requestsToIntercept) {
          if (args[0].includes(request.url)) {
            result.json = async () => JSON.parse(request.response);
            result.text = async () => request.response;
          }
        }

        return result;
      })(args);`,
  });
}

export const fakeFetch = async (page: E2EPage, requests: { url: string; response: string }[]) =>
  page.addScriptTag({
    content: `window.requestsToIntercept.push(...${JSON.stringify(requests)});`,
  });

// export async function scrollToBottom(page: E2EPage) {
//   await page.evaluate(() => {
//     window.scrollTo(0, window.document.body.scrollHeight);
//   });
// }
// https://stackoverflow.com/questions/51529332/puppeteer-scroll-down-until-you-cant-anymore
export async function scrollToBottom(page: E2EPage) {
  /* istanbul ignore next */
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      const distance = 100; // should be less than or equal to window.innerHeight
      const intervalDelay = 50;
      const timer = setInterval(() => {
        document.scrollingElement.scrollBy(0, distance);
        if (
          document.scrollingElement.scrollTop + window.innerHeight >=
          document.scrollingElement.scrollHeight
        ) {
          clearInterval(timer);
          // @ts-ignore
          resolve();
        }
      }, intervalDelay);
    });
  });
}
