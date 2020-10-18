// this is necessarry to show stencil events in storybooks action tab
import { directive, NodePart } from 'lit-html';

const previousValues = new WeakMap();

export const script = directive(value => part => {
  if (!(part instanceof NodePart)) {
    throw new Error('unsafeHTML can only be used in text bindings');
  }

  const previousValue = previousValues.get(part);
  if (previousValue !== undefined &&
    value === previousValue.value &&
    part.value === previousValue.script) {
    return;
  }

  const script = document.createElement('script');
  script.textContent = value;

  part.setValue(script);

  previousValues.set(part, { value, script });
});