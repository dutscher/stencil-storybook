import { E2EElement, E2EPage, SpecPage } from '@stencil/core/testing';
import { SpecHTMLElement } from './spec-helper';
import { FilterProps } from '../_interfaces';
import getComponentNameFromFilenameExport from '../stencil/get-component-name-of-filename';
export declare const getComponentNameFromFilename: typeof getComponentNameFromFilenameExport;
export declare const isJenkins: boolean;
export declare function createComp(tagName: string, attributes?: Attributes<{
  [key: string]: string | boolean;
}> | null, slots?: string): string;
export declare function setupE2E(componentName?: string, properties?: {
  [key: string]: string | null;
}, slots?: string, _page?: E2EPage, viewport?: {
  width: number;
  height: number;
}): Promise<{
  page: E2EPage;
  component: E2EElement;
}>;
export declare function setupSpec<C>(component: {
  new (): C;
}, options?: {
  additionalComponents?: {
    new (): any;
  }[];
  attributes?: Attributes<C>;
  slots?: string;
}): Promise<{
  page: SpecPage;
  component: SpecHTMLElement<C>;
  changeState: any;
}>;
export declare type Attributes<C> = Partial<FilterProps<C, string | boolean>>;
export declare function asyncForEach(array: any, callback: any): Promise<void>;
export declare function delay(timeout: number): Promise<void>;
export declare function mockFetchAtPage(page: E2EPage): Promise<void>;
export declare const fakeFetch: (page: E2EPage, requests: {
  url: string;
  response: string;
}[]) => Promise<void>;
export declare function scrollToBottom(page: E2EPage): Promise<void>;
