import hostClasses from './host-classes';

describe('hostClasses', () => {
  it('default', () => {
    expect(hostClasses()).toStrictEqual('');
  });

  it('componentName', () => {
    expect(hostClasses({ componentName: 'willy' })).toStrictEqual('willy');
  });

  it('modifier', () => {
    expect(hostClasses({ componentName: 'willy', modifier: 'in-blue' })).toStrictEqual(
      'willy willy--in-blue',
    );

    expect(hostClasses({ componentName: 'willy', modifier: 'in-blue jojo    ' })).toStrictEqual(
      'willy willy--in-blue willy--jojo',
    );

    expect(
      hostClasses({
        componentName: 'willy',
        modifier: [
          'ist-cool',
          true ? 'ist-fetzig' : '',
          false ? 'nie-sichtbar' : '',
          true && 'ist-ein-boolean',
          false && 'nie-sichtbar',
        ],
      }),
    ).toStrictEqual('willy willy--ist-cool willy--ist-fetzig willy--ist-ein-boolean');

    expect(
      hostClasses({
        componentName: 'willy',
        modifier: [
          'ist-cool aber-sowas-von',
          true ? 'ist-fetzig' : '',
          false ? 'nie-sichtbar' : '',
          true && 'ist-ein-boolean',
          false && 'nie-sichtbar',
        ],
      }),
    ).toStrictEqual(
      'willy willy--ist-cool willy--aber-sowas-von willy--ist-fetzig willy--ist-ein-boolean',
    );
  });

  it('variant', () => {
    expect(hostClasses({ componentName: 'willy', variant: 'ist-cool' })).toStrictEqual(
      'willy willy--ist-cool',
    );
  });

  it('additionalClasses', () => {
    expect(
      hostClasses({
        componentName: 'willy',
        additionalClasses: [
          'ist-cool',
          true ? 'fetzig' : '',
          false ? 'nie-sichtbar' : '',
          true && 'boolean',
          false && 'nie-sichtbar',
        ],
      }),
    ).toStrictEqual('willy ist-cool fetzig boolean');
  });
});
