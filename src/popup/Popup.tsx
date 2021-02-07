import React from "react";
import { Grid } from '@material-ui/core';
import _ from "lodash";
import styles from "./Popup.scss";
import { MediaController,MediaControllerProps } from "../stories/MediaController";
import { PlaylistComponent, PlaylistComponentProps } from "../stories/Playlist";
import useNowPlaying from "../hooks/useNowPlaying";
import usePlaylist from "../hooks/usePlaylist";

export default function Popup() {
  const PlaylistComponentProps = usePlaylist();
  const mediaControllerProps = useNowPlaying();

  return <div className={styles.popupContainer}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <MediaController {...mediaControllerProps}></MediaController>
      </Grid>
      <Grid item xs={8}>
        
        <PlaylistComponent {...PlaylistComponentProps}></PlaylistComponent>
      </Grid>
    </Grid>
  </div>;
}
