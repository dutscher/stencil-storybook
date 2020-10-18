import { script } from './lit-script';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const eventHandles = (eventNames) => {
  return eventNames.map(eventName => `on${capitalize(eventName)}`);
};

export function action (compName, eventNames) {
  return script(`
    (function(){
      const comp = document.querySelector('${compName}');
      ${eventNames.map((eventName) => `
        comp.addEventListener('${eventName}', () => {
          var evt = new MouseEvent('on${capitalize(eventName)}', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          comp.dispatchEvent(evt);
        });
      `).join('')}
    })()
  `);
}