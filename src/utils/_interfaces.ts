export interface HostClassesSettings {
  componentName: string;
  variant?: string;
  modifier?: string | (string | boolean | undefined)[];
  additionalClasses?: (string | boolean | undefined)[];
}

// sizes for icons etc.
export enum sizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}
