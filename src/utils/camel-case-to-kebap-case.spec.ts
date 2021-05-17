import { camelCaseToKebabCase } from './camel-case-to-kebap-case';

describe('camelCaseToKebabCase', () => {
  it('default', () => {
    expect(camelCaseToKebabCase()).toBe('');
    expect(camelCaseToKebabCase(undefined)).toBe('');
    expect(camelCaseToKebabCase(null)).toBe('');
    expect(camelCaseToKebabCase('')).toBe('');
  });

  it('with params', () => {
    expect(camelCaseToKebabCase('hallo')).toBe('hallo');
    expect(camelCaseToKebabCase('willyIstCool')).toBe('willy-ist-cool');
    expect(camelCaseToKebabCase('alleAnderenAuchWirklich')).toBe('alle-anderen-auch-wirklich');
  });
});
