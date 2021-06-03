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
  /**
   * Specify size limit in Kb
   * */
  maxFileSize: any;
  /**
   * Yo im a multiline
   * can you see me?
   **/
  multilineShizzle: boolean;
  /** Prevent */
  removeButtonResponse: EventEmitter;
  private getText;
  render(): any;
}
