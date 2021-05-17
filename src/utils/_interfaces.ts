export interface HostClassesSettings {
  componentName: string;
  variant?: string;
  modifier?: string | (string | boolean | undefined)[];
  additionalClasses?: (string | boolean | undefined)[];
}

// sizes for icons etc.
export const enum sizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

type DenyPropsByType<T, Condition> = { [P in keyof T]: T[P] extends Condition ? T[P] : never };
type AllowedProps<T> = { [P in keyof T]: T[P] };
export type FilterProps<T, Condition> = AllowedProps<DenyPropsByType<T, Condition>>;
