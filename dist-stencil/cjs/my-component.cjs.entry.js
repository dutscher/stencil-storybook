'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2f723f1b.js');

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const handleModifiers = (blockElement, modifiers) => {
  let modifier = [];
  // iterate all
  if (modifiers.length > 0) {
    modifier = modifiers
      // remove all false and empty ones
      .filter((item) => item && item !== '' && item.trim() !== '')
      // build modifier
      .map((_modifier_) => `${blockElement}--${_modifier_}`);
  }
  return modifier;
};
function BEM(block, element, ...modifiers) {
  const blockElement = block.componentName + (element ? `__${element}` : '');
  return [blockElement, ...handleModifiers(blockElement, modifiers)].join(' ');
}

function isDefined(value) {
  return !!value;
}

function hostClasses(settings = { componentName: '' }) {
  let modifier = [];
  // read modifiers as object
  if (typeof settings.modifier === 'object') {
    const modifierTmp = settings.modifier.filter(isDefined);
    // find prop modifier 'small forward'
    modifierTmp.forEach((_modifier_) => {
      modifier = modifier.concat(..._modifier_.trim().split(' '));
    });
    // as string
  }
  else if (settings.modifier && settings.modifier.length > 0) {
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
      ? modifier.map((_modifier) => `${settings.componentName}--${_modifier}`).join(' ')
      : '',
  ];
  // return classes to hostElement
  return classesInner.filter(isDefined).join(' ');
}

/**
 * transport the tagName from Component decorator to private componentName
 * @example
 ```
 Component({
  tag: 'my-divider',
})
 export class Divider {
  @ComponentName() componentName;
  >
  componentName = 'my-divider';
}
 ```
 */
function ComponentName() {
  return (component, property) => {
    const { render } = component;
    // keep es5 function here to sty in component scope
    component.render = function renderProxy() {
      /* eslint-disable react/no-this-in-sfc */
      const host = index.getElement(this);
      const componentName = host.tagName.toLowerCase();
      // call method from tsx component if exists
      if (!!property) {
        this[property] = componentName;
      }
      if (render) {
        return render.call(this);
      }
      return null;
    };
  };
}

const myComponentCss = "@font-face{font-family:\"Roboto\";src:url(\"../fonts/Roboto/light.woff\") format(\"woff\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:\"Roboto\";src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:\"Roboto\";src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\");font-weight:700;font-style:normal;font-display:swap}:host{display:block;font-family:sans-serif}.my-component{font-size:16px;display:block}.my-component__name{color:#fba308}.my-component__name .my-component__example-for-inner-block{color:#00abba}.my-component--modified{text-align:center}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.removeButtonResponse = index.createEvent(this, "removeButtonResponse", 7);
    /** Modifier Prop */
    this.modifier = '';
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    const cssClasses = hostClasses({
      componentName: this.componentName,
      modifier: this.modifier,
    });
    return (index.h(index.Host, { class: `${cssClasses} dasdsa---dddsd container`, onClick: () => this.removeButtonResponse.emit({ test: 'test' }) }, "Hello, World! I'm ", index.h("span", { class: BEM(this, 'name') }, " ", this.getText()), index.h("slot", null), index.h("slot", { name: "right" })));
  }
};
__decorate([
  ComponentName()
], MyComponent.prototype, "componentName", void 0);
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
