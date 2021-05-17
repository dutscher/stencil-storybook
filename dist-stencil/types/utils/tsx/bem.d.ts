declare type Modifier = string | boolean | undefined;
export declare function MODIFIER(block: {
  componentName: string;
}, ...modifiers: Modifier[]): string;
export default function BEM(block: any, element?: string, ...modifiers: (string | boolean | undefined)[]): string;
export {};
