import React from 'react';
import { NowPlaying, Track } from "../types";
import _ from 'lodash'
import { MediaController } from './MediaController';
import useNowPlaying from '../hooks/useNowPlaying';
import usePlaylist from '../hooks/usePlaylist';


export interface MediaControllerProps{
    track: Track
    playing: boolean,
    setPrevTrack?: () => void,
    setNextTrack?: () => void,
    handleAudioState?: (boolean: boolean) => void
}

export const MediaControllerContainer: React.FC = () => {
  const mediaControllerProps = useNowPlaying();
  const playlistProps = usePlaylist();
  const isFirst = mediaControllerProps.track.id == playlistProps.playlist[0].id;
  const isLast = mediaControllerProps.track.id == playlistProps.playlist.slice(-1)[0].id;
    return (
        <MediaController {...mediaControllerProps} isFirst={isFirst} isLast={isLast}></MediaController>
    );
}