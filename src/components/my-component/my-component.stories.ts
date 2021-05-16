import { setupStory, setupVariant, h, setupComposition } from '../../utils/storybook';
import stencilStories from './stencil-stories';

const Story = setupStory(stencilStories, {
  category: 'Components/My Component',
  argsDefaults: {
    modifier: '',
    first: 'First',
    middle: 'Middle',
    last: 'Last',
    hex: '#fba308',
    boolean: false,
    radio: '',
    select: '',
  },
  argOptions: {
    modifier: ['default', 'modified'],
    radio: ['default', 'loading', 'error', 'ready'],
  },
});

export const Default = setupVariant(Story);
export const Modified = setupVariant(Story, { modifier: 'modified' });

export const Slots = setupComposition(
  '<slot\'s\\>',
  () => h`
  ${[1, 2].map((type) => h`${Story.tplComposition({ slot: type, type })}<br>`)}
`,
);

export default Story;
