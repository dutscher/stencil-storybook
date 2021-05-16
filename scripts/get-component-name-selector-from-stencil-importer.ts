/* eslint-disable no-console */
import fsExt from 'fs-extra';

/**
 * Inject into every .scss File the variable '$componentNameSelector' which is filled
 * with the component tag name out of the .tsx file beneath the sass file.
 *
 * For example:
 * .tsx: @Component({ tag: 'my-component' })
 * ->
 * .scss: $componentNameSelector = '.my-component';
 *
 * Use in .scss file:
 @import '#$componentNameSelector';

 #{$componentNameSelector} {
   ...
   &--is-clickable {
     #{$componentNameSelector}__element {
       ...
     }
   }
 }
 */
const sassVar = '$componentNameSelector';
const tsxExtension = '.tsx';

export default function getComponentNameSelectorVariableFromStencil(url, _prev, done) {
  if (url === `#${sassVar}`) {
    // this.options.includePaths:
    // 'C:\\www\\stencil-storybook;C:/www/repos/stencil-storybook/src/components/my-component',
    const isJenkins = !this.options.includePaths.includes(';');
    const includePaths = this.options.includePaths.split(isJenkins ? ':' : ';');
    // read directory and get tsx file
    // web-lib-style/packages/base/src/components/divider/hui-divider.tsx'
    const filePath = includePaths[1];
    const tsxFile = fsExt
      .readdirSync(includePaths[1])
      .filter((file) => file.endsWith(tsxExtension) && !file.includes('stories'));
    let componentName = '';
    if (tsxFile.length === 1) {
      const tsx = fsExt.readFileSync(filePath + '/' + tsxFile[0], 'utf-8');
      // @Component({
      //   tag: 'my-component',
      //   styleUrl: './my-component.scss',
      // })
      const matches = tsx.match(/tag: '(.*)'/m);
      if (matches.length > 0) {
        componentName = matches[1];
      }
      done({
        // create sass variable with DOT as a css selector
        contents: `${sassVar}: '.${componentName}';`,
      });
    } else {
      done(null);
    }
  } else {
    done(null);
  }
}
