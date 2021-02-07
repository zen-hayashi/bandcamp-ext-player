import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Grid } from "@material-ui/core";
import { Row, Column, Item } from '@mui-treasury/components/flex';
import { PlaylistComponent, PlaylistComponentProps } from './Playlist';

export default {
  title: 'Example/Playlist',
  component: PlaylistComponent
} as Meta;

const Template: Story<PlaylistComponentProps> = (args) => {
  return <Column gap={2}>
    <PlaylistComponent {...args} />
  </Column >
};

export const Default = Template.bind({});
Default.args = {
  playlist: [{
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
    },
  },
  {
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
      },
    }]
};