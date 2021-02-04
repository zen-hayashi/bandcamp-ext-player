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
import { useSelector } from "../store"
import { useDispatch } from 'react-redux';
import { nowPlayingSlice } from "../store/nowPlaying";
import { NowPlaying, Track } from "../types";
import _ from 'lodash'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 151,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 30,
            width: 30,
        },
    }),
);

export default function MediaControlCard() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme();
    const nowPlaying = useSelector(state => state.nowPlaying);
    const playlist = useSelector(state => state.playlist);

    const setPrevTrack = () => {
        const currentIndex = _.findIndex(playlist, { url: nowPlaying.track.url });
        const prevTrack = playlist[currentIndex - 1];
        dispatch(nowPlayingSlice.actions.setNowPlaying(prevTrack));
    }

    const setNextTrack = () => {
        const currentIndex = _.findIndex(playlist, { url: nowPlaying.track.url });
        const nextTrack = playlist[currentIndex + 1];
        dispatch(nowPlayingSlice.actions.setNowPlaying(nextTrack));
    }
    
    const handleAudioState = (playing: boolean) => {
        console.log('toggle state!');
        dispatch(nowPlayingSlice.actions.setPlayerState(playing));
    }

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {nowPlaying.track?.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {nowPlaying.track?.album.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {nowPlaying.track?.album.artist}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="previous" onClick={() => setPrevTrack()}>
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    {
                        !nowPlaying.playing &&
                        <IconButton aria-label="play" onClick={() => handleAudioState(true)}>
                            <PlayArrowIcon className={classes.playIcon} />
                        </IconButton>
                    }
                    {
                        nowPlaying.playing &&
                        <IconButton aria-label="pause" onClick={() => handleAudioState(false)}>
                            <PauseIcon className={classes.playIcon} />
                        </IconButton>
                    }
                    <IconButton aria-label="next" onClick={() => setNextTrack()}>
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={nowPlaying.track?.album.image}
            />
        </Card>
    );
}