import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { BEM, hostClasses } from '../../utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: false,
})
export class MyComponent {
  private readonly componentName: string = 'my-component';

  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  @Prop() modifier: string = '';

  @Event({bubbles: false}) clicked!: EventEmitter<void>;

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
        class={cssClasses}
        onClick={() => this.clicked.emit()}>
        Hello, World! I'm <span class={BEM(this, 'name')}> {this.getText()}</span>
      </Host>
    );
  }
}
