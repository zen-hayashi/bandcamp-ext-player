import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';

import { AlbumSelector, AlbumSelectorProps } from './AlbumSelector';

export default {
  title: 'Example/AlbumSelector',
  component: AlbumSelector
} as Meta;

const Template: Story<AlbumSelectorProps> = (args) => <AlbumSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  albums: [
    {
      id: 0,
      info: {
        title: 'Kid A',
        artist: 'Radiohead',
        url: 'url',
        image: 'https://i.redd.it/e6bzu4vesdp41.jpg',
        releaseDate: '1999/10/01',
        label: 'EMC'
      }
    }, {
      id: 1,
      info: {
        title: 'Kid A',
        artist: 'Radiohead',
        url: 'url',
        image: 'https://i.redd.it/e6bzu4vesdp41.jpg',
        releaseDate: '1999/10/01',
        label: 'EMC'
      }
    }
  ]
};