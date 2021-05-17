import { MockHTMLElement } from '@stencil/core/mock-doc';
import { splitByWhiteSpace } from '../index';

/**
 * merges HTMLElement and MockHTMLElement with some type-corrections being necessary
 */
export type SpecHTMLElement<C extends Object = {}> = (HTMLElement | MockHTMLElement) & {
  querySelectorAll?(selector: string): ArrayLike<SpecHTMLElement>;
} & C;

/**
 * takes a selector and returns a function which applies `querySelectorAll` on an SpecHTMLElement
 * @param css-selector
 * @return a function which takes the root-element on which the selector will be applied
 */

export const querySelectorAll = (selector: string) => (scope: SpecHTMLElement) => {
  // since the spec query selector engine doesn't support multiple parts, we have to handle this by our self
  // TODO: fix it in Stencil https://github.com/ionic-team/stencil/blob/master/src/mock-doc/selector.ts and send a Pull-Request or check if someone else did
  const parts = splitByWhiteSpace(selector);
  let elements = [scope];
  /* eslint-disable no-restricted-syntax */
  for (const part of parts) {
    if (part.match(/(>|\+|~)/)) {
      throw Error(`"${part}" is not supported in selector`);
    }
    const nextElements = [];
    for (const element of elements) {
      // @ts-ignore TS2769: No overload matches this call
      nextElements.push(...Array.from(element.querySelectorAll(part)));
    }
    elements = nextElements;
  }

  return elements;
};
