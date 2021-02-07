import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Track } from "../types";
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Row, Item } from '@mui-treasury/components/flex';
import {
    Info,
    InfoTitle,
    InfoSubtitle,
    InfoCaption,
} from '@mui-treasury/components/info';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import { useMusicInfoStyles } from '@mui-treasury/styles/info/music';

export interface TrackRowProps {
    track: Track,
    handleSetNowPlaying?: (track) => void
}

export const TrackRow = ({ track, handleSetNowPlaying } :TrackRowProps) =>{
    return <>
        <Row>
            <Item alignContent='center' justifyContent='center'>
                <IconButton aria-label="play">
                    <PlayCircleOutlineIcon />
                </IconButton>
            </Item>
            <Item justifyItems='center'>
                <Info useStyles={useMusicInfoStyles}>
                <InfoTitle>{track.title}</InfoTitle>
            </Info>
            </Item>
        </Row>
    </>
}