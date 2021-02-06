import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MediaController, MediaControllerProps } from './MediaController';

export default {
  title: 'Example/MediaController',
  component: MediaController
} as Meta;

const Template: Story<MediaControllerProps> = (args) => <MediaController {...args} />;

export const Default = Template.bind({});
Default.args = {
  track: {
    title: 'Motion Picture Soundtrack',
    url: 'url',
    file: 'string',
    duration: 100,
    album: {
      title: 'Kid A',
      artist: 'Radiohead',
      url: 'url',
      image: 'https://i.redd.it/e6bzu4vesdp41.jpg',
      releaseDate: '1999/10/01',
      label: 'EMC',
    }
  },
  playing: true
};