import React from 'react';
import { NowPlaying, Track } from "../types";
import _ from 'lodash'


export interface MediaControllerProps{
    track: Track
    playing: boolean,
    setPrevTrack?: () => void,
    setNextTrack?: () => void,
    handleAudioState?: (boolean) => void
}

export const MediaController: React.FC<MediaControllerProps> = ({ track, playing, setPrevTrack, setNextTrack, handleAudioState }) => {
    return (
        <div>
            <img src={track?.album.image}></img>
            <p>{track?.album.title}</p>
            <p>{track?.title}</p>
            <p>{track?.album.label}</p>
            <div  aria-label="previous" onClick={setPrevTrack}>前へ</div>
            {
                !playing &&
                <div  aria-label="play" onClick={() => handleAudioState(true)}>再生</div>
            }
            {
                playing &&
                <div  aria-label="pause" onClick={() => handleAudioState(false)}>停止</div>
            }
            <div  aria-label="next" onClick={setNextTrack}>次へ</div>
        </div>
    );
}