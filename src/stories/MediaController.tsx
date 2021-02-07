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
import styles from './media-controller.scss';
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
        <Card className={styles.card}>
            <div className={styles.details}>
                <CardContent style={{
                    backgroundImage: `url(${track?.album.image})`,
                    backgroundSize: 'contain'
                }} className={styles.content}>
                    <div>
                        <Typography component="h5" variant="h5" className={styles.infoText}>
                            {track?.title}
                        </Typography>
                        <Typography variant="subtitle1" className={styles.infoText}>
                            {track?.album.title}
                        </Typography>
                        <Typography variant="subtitle1" className={styles.infoText}>
                            {track?.album.artist}
                        </Typography>
                    </div>
                </CardContent>
                <div className={styles.controls}>
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