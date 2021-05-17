import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyComponent {
  componentName: any;
  /** First Prop */
  first: string;
  /** Middle Prop */
  middle: string;
  /** Last Prop */
  last: string;
  /** Modifier Prop */
  modifier: string;
  /** Prevent */
  removeButtonResponse: EventEmitter;
  private getText;
  render(): any;
}
