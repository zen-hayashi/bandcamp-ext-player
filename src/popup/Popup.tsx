import React, { useEffect,useState } from "react";
import { Grid } from '@material-ui/core';
import _ from "lodash";
import styles from "./Popup.scss";
import CurrentPage from "./CurrentPage";
import PlaylistComponent from "./Playlist";
import MediaControlCard from "./MediaControl";
import {useSelector} from "../store"

export default function Popup() {
  const playlist = useSelector(state => state.playlist);
  const currentPageAlbum = useSelector(state => state.currentPageAlbum);

  return <div className={styles.popupContainer}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        
      </Grid>
      <Grid item xs={8}>
        <MediaControlCard></MediaControlCard>
        <PlaylistComponent></PlaylistComponent>
      </Grid>
    </Grid>
  </div>;
}
