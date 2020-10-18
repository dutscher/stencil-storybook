import isDefined from '../is-defined';
import { HostClassesSettings } from '../_interfaces';

export default function hostClasses(settings: HostClassesSettings = { componentName: '' }): string {
  let modifier: string[] = [];
  // read modifiers as object
  if (typeof settings.modifier === 'object') {
    const modifierTmp = settings.modifier.filter(isDefined) as string[];
    // find prop modifier 'small forward'
    modifierTmp.forEach((_modifier_) => {
      modifier = modifier.concat(..._modifier_.trim().split(' '));
    });
    // as string
  } else if (settings.modifier && settings.modifier.length > 0) {
    modifier = settings.modifier.trim().split(' ');
  }

  // add modifier
  const classesInner = [
    // add componentName as default
    settings.componentName ? settings.componentName : '',
    // spread all given additionalClasses
    ...(settings.additionalClasses || []),
    // add variant
    settings.variant && settings.componentName
      ? `${settings.componentName}--${settings.variant}`
      : '',
    // add all given modifier
    // modifier="left has-margin" => "component--left component--has-margin"
    settings.componentName
      ? modifier.map((_modifier: string) => `${settings.componentName}--${_modifier}`).join(' ')
      : '',
  ];
  // return classes to hostElement
  return classesInner.filter(isDefined).join(' ');
}
