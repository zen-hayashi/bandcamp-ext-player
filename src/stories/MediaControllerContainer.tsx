import React from 'react';
import { NowPlaying, Track } from "../types";
import _ from 'lodash'
import { MediaController } from './MediaController';
import useNowPlaying from '../hooks/useNowPlaying';
import usePlaylist from '../hooks/usePlaylist';


export const MediaControllerContainer: React.FC = () => {
  const mediaControllerProps = useNowPlaying();
  const playlistProps = usePlaylist();
  const isFirst = mediaControllerProps.nowPlaying.track.id == playlistProps.playlist[0]?.id;
  const isLast = mediaControllerProps.nowPlaying.track.id == playlistProps.playlist.slice(-1)[0]?.id;
    return (
        <MediaController {...mediaControllerProps} isFirst={isFirst} isLast={isLast}></MediaController>
    );
}