import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Track } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Table, TableBody, TableRow, Typography, TableCell } from "@material-ui/core";
import { faPlay, faExternalLinkAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import  "./playlist.scss";
import { nowPlayingSlice } from "../store/nowPlaying";
import { MediaButton, MediaButtonProps } from "./MediaButton";

export interface TrackRowProps {
    track: Track,
    onClick?: () => void
}

export const TrackRow = ({track} :TrackRowProps) =>{

    return <>
        <TableCell className='cover-img-container'>
            <img className='cover-img' src={track.album.image ? track.album.image: ''}></img>
            <div className='button-div'>
                <FontAwesomeIcon className='hover-button' icon={faPlay} size="lg"></FontAwesomeIcon>
            </div>
        </TableCell>
        <TableCell className='detail'>
            <Typography className='detail'>{track.title}</Typography>
            <Typography className='detail' >
                {track.album.title}
            </Typography>
            <Typography className='detail' >
                {track.album.label}
            </Typography>
        </TableCell>
        <TableCell>
            <a href={track.album.url}>
                <FontAwesomeIcon className='action' icon={faExternalLinkAlt} size="lg"></FontAwesomeIcon>
            </a>
        </TableCell>
    </>
}