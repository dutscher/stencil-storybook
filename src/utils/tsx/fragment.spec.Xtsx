import { newSpecPage } from '@stencil/core/testing';
import { Component, h } from '@stencil/core';
import Fragment from './fragment';

describe('Fragment', () => {
  it('default', () => {
    // @ts-ignore
    expect(Fragment()).toEqual([]);
  });

  it('with props', () => {
    expect(Fragment('jojo')).toEqual([]);
  });

  it('with childs', () => {
    expect(Fragment(null, 'jojo')).toEqual(['j', 'o', 'j', 'o']);
  });

  it('test in jsx', async () => {
    @Component({
      tag: 'my-cmp',
    })
    class MyCmp {
      render() {
        return (
          <Fragment>
            <h1>Hello, World</h1>
            <p>Jojo</p>
          </Fragment>
        );
      }
    }

    const page = await newSpecPage({
      components: [MyCmp],
      html: `<my-cmp></my-cmp>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
