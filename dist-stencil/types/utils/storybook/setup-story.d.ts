export declare function setupStory(stencilSettings: any, storySettings: any): {
  component: any;
  title: any;
  parameters: any;
  customEvents: any;
  events: any;
  args: {};
  argTypes: {};
  tpl: any;
  tplComposition: (args: any) => any;
  tplCompositionWithActionLogs: (args: any) => import("lit-html").TemplateResult;
};
export declare function setupVariant(Story: any, args?: {}, title?: string): any;
export declare function setupComposition(titleOrLitHtml: any, litHtml?: any): any;
export declare const a: (value: any) => (part: import("lit-html").Part) => void;
export declare const h: (strings: TemplateStringsArray, ...values: unknown[]) => import("lit-html").TemplateResult;
