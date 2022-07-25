import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Track } from "../types";
import { Row, Item } from '@mui-treasury/components/flex';
import {
    Info,
    InfoTitle,
} from '@mui-treasury/components/info';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from '@mui/material/IconButton';
import { useMusicInfoStyles } from '@mui-treasury/styles/info/music';

export interface TrackRowProps {
    track: Track,
    handleSetNowPlaying?: (track) => void
}

export const TrackRow = ({ track, handleSetNowPlaying } :TrackRowProps) =>{
    return <>
        <Row>
            <Item alignContent='center' justifyContent='center'>
                <IconButton aria-label="play" onClick={()=>handleSetNowPlaying(track)}>
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