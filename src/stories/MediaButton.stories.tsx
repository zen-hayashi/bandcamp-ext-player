import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MediaButton, MediaButtonProps } from './MediaButton';

export default {
  title: 'Example/Button',
  component: MediaButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<MediaButtonProps> = (args) => <MediaButton {...args} />;

export const Play = Template.bind({});
Play.args = {
  type: 'play',
};

export const Pause = Template.bind({});
Pause.args = {
  type: 'pause',
};

export const Next = Template.bind({});
Next.args = {
  size: 'large',
  type: 'next',
};

export const Prev = Template.bind({});
Prev.args = {
  size: 'small',
  type: 'prev',
};
