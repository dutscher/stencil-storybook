// this file is generated by 'stencil-to-storybook.js' aka pre-storybook npm task
// and it is git to show this whats happen in github ;)

import markdown from './readme.md';
import { a, h } from '../../utils/storybook';

export default {
  ...{
  "component": "my-component",
  "args": {
    "first": "",
    "middle": "",
    "last": "",
    "modifier": "",
    "maxFileSize": "",
    "multilineShizzle": false
  },
  "argTypes": {
    "first": {
      "description": "First Prop"
    },
    "middle": {
      "description": "Middle Prop"
    },
    "last": {
      "description": "Last Prop"
    },
    "modifier": {
      "description": "Modifier Prop"
    },
    "maxFileSize": {
      "description": "Specify size limit in Kb"
    },
    "multilineShizzle": {
      "description": "Yo im a multiline\ncan you see me?"
    }
  },
  "customEvents": [
    "removeButtonResponse"
  ],
  "slots": {
    "defaultSlot": ""
  }
},
  markdown,
  tpl: ({ id, first, middle, last, modifier, maxFileSize, multilineShizzle, slot }) => h`
    <my-component
      id="${a(id)}"
			first="${a(first)}"
			middle="${a(middle)}"
			last="${a(last)}"
			modifier="${a(modifier)}"
			maxFileSize="${a(maxFileSize)}"
			multilineShizzle="${a(multilineShizzle)}"
    >
		${slot}
	</my-component>`
};
