import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Track } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Table, TableBody, TableRow, Typography, TableCell } from "@material-ui/core";
import { faPlay, faExternalLinkAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import  styles from "./playlist.scss";
import { nowPlayingSlice } from "../store/nowPlaying";
import { MediaButton, MediaButtonProps } from "./MediaButton";

export interface TrackRowProps {
    track: Track,
    handleSetNowPlaying?: (track) => void
}

export const TrackRow = ({ track, handleSetNowPlaying } :TrackRowProps) =>{

    return <>
        <TableCell className={styles.coverImgContainer}>
            <img className={styles.coverImg} src={track.album.image ? track.album.image: ''}></img>
            <div className={styles.buttonDiv}>
                <FontAwesomeIcon icon={faPlay} size="lg" onClick={() => handleSetNowPlaying(track)}></FontAwesomeIcon>
            </div>
        </TableCell>
        <TableCell className={styles.detail}>
            <Typography className={styles.detail}>{track.title}</Typography>
            <Typography className={styles.detail}>
                {track.album.title}
            </Typography>
            <Typography className={styles.detail}>
                {track.album.label}
            </Typography>
        </TableCell>
        <TableCell>
            <a href={track.album.url}>
                <FontAwesomeIcon className={styles.action} icon={faExternalLinkAlt} size="lg"></FontAwesomeIcon>
            </a>
        </TableCell>
    </>
}