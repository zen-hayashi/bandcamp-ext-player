import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TrackRow, TrackRowProps } from './TrackRow';
import { TableRow, Table } from '@material-ui/core';

export default {
  title: 'Example/TrackRow',
  component: TrackRow
} as Meta;

const Template: Story<TrackRowProps> = (args) => {
  return <Table>
    <TableRow>
      <TrackRow {...args} />
    </TableRow>
  </Table>
};

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