import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { AlbumCard, AlbumCardProps } from './AlbumCard';

export default {
  title: 'Example/AlbumCard',
  component: AlbumCard
} as Meta;

const Template: Story<AlbumCardProps> = (args) => <AlbumCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  album: {
    id: 0,
    info: {
      title: 'Kid A',
      artist: 'Radiohead',
      url: 'url',
      image: 'https://i.redd.it/e6bzu4vesdp41.jpg',
      releaseDate: '1999/10/01',
      label: 'EMC'
    }
  },
  showInfo: true
};