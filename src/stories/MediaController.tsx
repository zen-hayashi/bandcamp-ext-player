import React from 'react';
import {Avatar, Link} from '@material-ui/core';
import {
    Info,
    InfoTitle,
    InfoSubtitle,
    InfoCaption,
} from '@mui-treasury/components/info';
import IconButton from '@material-ui/core/IconButton';
import { NowPlaying, Track } from "../types";
import { Row, Item, Column } from '@mui-treasury/components/flex';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import _ from 'lodash'


export interface MediaControllerProps{
    track: Track
    playing: boolean,
    setPrevTrack?: () => void,
    setNextTrack?: () => void,
    handleAudioState?: (boolean) => void
}

export const MediaController: React.FC<MediaControllerProps> = ({ track, playing, setPrevTrack, setNextTrack, handleAudioState }) => {
    const avatarStyles = useDynamicAvatarStyles({ size: 70 });
    return (
        <Column gap={2}>
            <Row borderBottom={1} borderColor="grey.500">
                <Item>
                    <Link href={track.album.url} target='_blank'>
                    <Avatar
                        variant={'rounded'}
                        classes={avatarStyles}
                        src={track?.album.image}
                    />
                    </Link>
                </Item>
                <Info>
                    <InfoCaption>{track?.album.title}</InfoCaption>
                    <InfoTitle>{track?.title}</InfoTitle>
                    <InfoSubtitle>{track?.album.label}</InfoSubtitle>
                </Info>
            </Row>
            <Row alignItems="center"
                justifyContent="center">
                <Item>
                    <IconButton aria-label="previous" onClick={setPrevTrack}>
                        <SkipPreviousIcon />
                    </IconButton>
                    {
                        !playing &&
                        <IconButton aria-label="play" onClick={() => handleAudioState(true)}>
                            <PlayArrowIcon />
                        </IconButton>
                    }
                    {
                        playing &&
                        <IconButton aria-label="pause" onClick={() => handleAudioState(false)}>
                            <PauseIcon />
                        </IconButton>
                    }
                    <IconButton aria-label="next" onClick={setNextTrack}>
                        <SkipNextIcon />
                    </IconButton>
                </Item>
            </Row>
        </Column>
    );
}