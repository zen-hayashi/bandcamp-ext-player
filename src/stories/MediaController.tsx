import React, { useEffect } from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { MediaButton } from './MediaButton'
import { NowPlaying, Track } from "../types";
import './media-controller.scss';
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
        <Card className='root'>
            <div className='details'>
                <CardContent style={{
                    backgroundImage: `url(${track?.album.image})`,
                    backgroundSize: 'contain'
                }} className='content'>
                    <Typography component="h5" variant="h5">
                        {track?.title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {track?.album.title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {track?.album.artist}
                    </Typography>
                </CardContent>
                <div className='controls'>
                    <MediaButton type='prev' onClick={() => setPrevTrack()}></MediaButton>
                    {
                        !playing &&
                        <MediaButton type='play' onClick={() => handleAudioState(true)}></MediaButton>
                    }
                    {
                        playing &&
                        <MediaButton type='pause' onClick={() => handleAudioState(false)}></MediaButton>
                    }
                    <MediaButton type='next' onClick={() => setNextTrack()}></MediaButton>
                </div>
            </div>
        </Card>
    );
}