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
export function MODIFIER(block, ...modifiers) {
  const blockElement = block.componentName;
  return [...handleModifiers(blockElement, modifiers)].join(' ');
}
export default function BEM(block, element, ...modifiers) {
  const blockElement = block.componentName + (element ? `__${element}` : '');
  return [blockElement, ...handleModifiers(blockElement, modifiers)].join(' ');
}
