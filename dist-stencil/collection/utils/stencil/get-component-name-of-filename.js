/**
 * made for unit tests which needs the componentName for creating the element
 *
 * use:
 * const componentName = getComponentNameFromFilename(__filename);
 *
 * @param filename
 */
export default function getComponentNameFromFilename(filename) {
  const divider = '/';
  const osSafeFilePath = filename.replace(/\\/g, divider);
  // C:/src/components/my-component.e2e.ts
  const filePathArray = osSafeFilePath.split(divider);
  // hmy-component.e2e.ts
  const fileName = filePathArray[filePathArray.length - 1].split('.');
  // ['my-component','e2e','ts']
  return fileName[0]; // return 'my-component'
}
