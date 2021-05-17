export interface HostClassesSettings {
  componentName: string;
  variant?: string;
  modifier?: string | (string | boolean | undefined)[];
  additionalClasses?: (string | boolean | undefined)[];
}
export declare const enum sizes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl"
}
declare type DenyPropsByType<T, Condition> = {
  [P in keyof T]: T[P] extends Condition ? T[P] : never;
};
declare type AllowedProps<T> = {
  [P in keyof T]: T[P];
};
export declare type FilterProps<T, Condition> = AllowedProps<DenyPropsByType<T, Condition>>;
export {};
