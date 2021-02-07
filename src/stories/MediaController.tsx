import React from 'react';
import Avatar from '@material-ui/core/Avatar';
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
                    <Avatar
                        variant={'rounded'}
                        classes={avatarStyles}
                        src={track?.album.image}
                    />
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
                    <IconButton aria-label="previous">
                        <SkipPreviousIcon />
                    </IconButton>
                    {
                        !playing &&
                        <IconButton aria-label="play">
                            <PlayArrowIcon />
                        </IconButton>
                    }
                    {
                        playing &&
                        <IconButton aria-label="pause">
                            <PauseIcon />
                        </IconButton>
                    }
                    <IconButton aria-label="next">
                        <SkipNextIcon />
                    </IconButton>
                </Item>
            </Row>
        </Column>
    );
}