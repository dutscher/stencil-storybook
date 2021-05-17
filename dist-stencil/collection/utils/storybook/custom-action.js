import { script } from './lit-script';
export function action(eventNames) {
  return script(`
    try {
      var uniqueId = function(eventName) {
        return eventName + '-' + (new Date()).getTime();
      };
      var script = document.currentScript;
      var comp = script !== null
        ? script.previousElementSibling
        : null;

      if (comp !== null) {
      ${eventNames
    .map((eventName) => `
        comp.parentNode.querySelectorAll(comp.tagName).forEach(function(webcmp) {
          webcmp.addEventListener('${eventName}', function(event) {
            __STORYBOOK_ADDONS.getChannel()
              .emit('storybook/actions/action-event', {
                count: 0,
                data: {
                  name: '${eventName}',
                  args: event.detail
                  // the next line need a fix in telesync: https://github.com/storybookjs/storybook/issues/8544
                  // name: '${eventName}', args: [event]
                },
                id: uniqueId('${eventName}'),
                options: {
                  depth: 15,
                  clearOnStoryChange: true,
                  limit: 50,
                  allowFunction: false
                }
              });
          });
        });`)
    .join('\n')}
      }
    } catch (e) {
      console.log('costum-action-error', e)
    }
  `);
}
