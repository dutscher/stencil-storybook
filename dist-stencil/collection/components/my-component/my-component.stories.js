import { setupStory, setupVariant, h, setupComposition } from '../../utils/storybook';
import stencilStories from './stencil-stories';
const Story = setupStory(stencilStories, {
  category: 'Components/My Component',
  argDefaults: {
    modifier: '',
    first: 'First',
    middle: 'Middle',
    last: 'Last',
    hex: '#fba308',
    boolean: false,
    radio: '',
  },
  argOptions: {
    modifier: ['default', 'modified'],
    radio: ['default', 'loading', 'error', 'ready'],
  },
  argTypes: {
    hex: {
      control: 'color',
    },
    radio: {
      control: {
        type: 'inline-radio',
        options: ['loading', 'error', 'ready'],
      },
    },
  },
});
export const Default = setupVariant(Story);
export const Modified = setupVariant(Story, { modifier: 'modified' });
export const Slots = setupComposition(`<slot's />`, () => h `
  ${['Slot eins', 'Slot dva'].map((slot) => h `${Story.tplComposition({ slot })}<br>`)}
`);
export default Story;
