import { MockHTMLElement } from '@stencil/core/mock-doc';
/**
 * merges HTMLElement and MockHTMLElement with some type-corrections being necessary
 */
export declare type SpecHTMLElement<C extends Object = {}> = (HTMLElement | MockHTMLElement) & {
  querySelectorAll?(selector: string): ArrayLike<SpecHTMLElement>;
} & C;
/**
 * takes a selector and returns a function which applies `querySelectorAll` on an SpecHTMLElement
 * @param css-selector
 * @return a function which takes the root-element on which the selector will be applied
 */
export declare const querySelectorAll: (selector: string) => (scope: SpecHTMLElement) => SpecHTMLElement<{}>[];
