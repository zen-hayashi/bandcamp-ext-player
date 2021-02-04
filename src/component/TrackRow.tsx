import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Track } from "../types";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button, CardMedia, CardContent, Typography, IconButton } from "@material-ui/core";
import { faPlay, faExternalLinkAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./components.scss";
import { nowPlayingSlice } from "../store/nowPlaying";

interface TrackRowProps {
    track: Track
}

const TrackRow = ({track} :TrackRowProps) =>{
    const dispatch = useDispatch();

    const handleSetNowPlaying = (track: Track) => {
      console.log('play button clicked');
      dispatch(nowPlayingSlice.actions.setNowPlaying(track));
    };
    return <>
        <Card>
            {
              track.album.image ?
              <CardMedia className={styles.rowImage} image={track.album.image}></CardMedia>
            : <CardMedia className={styles.rowImage} image="http://placehold.jp/99ccff/003366/150x150.png?text=No%20Image"></CardMedia>
            }
            
            <CardContent>
                <Typography>{track.title}</Typography>
            </CardContent>
            <IconButton>
          <FontAwesomeIcon onClick={() => handleSetNowPlaying(track)} icon={faPlay}></FontAwesomeIcon>
            </IconButton>
                
            <IconButton>
                <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
            </IconButton>
            <IconButton>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </IconButton>
        </Card>
    </>
}

export default TrackRow;