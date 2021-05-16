import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { BEM, hostClasses, ComponentName } from '../../utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: false,
})
export class MyComponent {
  @ComponentName() componentName;

  /** First Prop */
  @Prop() first: string;

  /** Middle Prop */
  @Prop() middle: string;

  /** Last Prop */
  @Prop() last: string;

  /** Modifier Prop */
  @Prop() modifier: string = '';

  /** Prevent */
  @Event() removeButtonResponse!: EventEmitter;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    const cssClasses = hostClasses({
      componentName: this.componentName,
      modifier: this.modifier,
    });

    return (
      <Host
        class={`${cssClasses} dasdsa---dddsd container`}
        onClick={() => this.removeButtonResponse.emit({ test: 'test' })}>
        Hello, World! I'm <span class={BEM(this, 'name')}> {this.getText()}</span>
        <slot />
      </Host>
    );
  }
}
