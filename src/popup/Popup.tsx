import React from "react";
import { Grid } from '@material-ui/core';
import _ from "lodash";
import styles from "./Popup.scss";
import { MediaController,MediaControllerProps } from "../stories/MediaController";
import { PlaylistComponent, PlaylistComponentProps } from "../stories/Playlist";
import { AlbumSelector } from '../stories/AlbumSelector'
import useNowPlaying from "../hooks/useNowPlaying";
import usePlaylist from "../hooks/usePlaylist";
import { Row, Column, Item } from '@mui-treasury/components/flex';
import { useDispatch } from "react-redux";
import { useSelector } from "../store";
import { makeStyles } from '@material-ui/core/styles';
import { Track, Album } from "../types";
import { addFavoriteThunk } from '../store/albumList'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#131313'
  },
  playlistSection: {
    backgroundColor: '#2B2B2B'
  }
}));

export default function Popup() {
  const dispatch = useDispatch();
  const albumList = useSelector(state => state.albumList);
  const PlaylistComponentProps = usePlaylist();
  const mediaControllerProps = useNowPlaying();
  const styles = useStyles();
  const addFavorite = (album: Album) => {
    console.log(album);
    dispatch(addFavoriteThunk(album));
  } 

  return <Grid container spacing={2} className={styles.root}>
      <Grid item xs={12} >
        <AlbumSelector albums={albumList} addFavorite={addFavorite}></AlbumSelector>
      </Grid>
    <Grid item xs={4} className={styles.playlistSection}>
        <MediaController {...mediaControllerProps}></MediaController>
      </Grid>
    <Grid item xs={8} className={styles.playlistSection}>
        <Column gap={2}>
          <PlaylistComponent {...PlaylistComponentProps}></PlaylistComponent>
        </Column>
      </Grid>
    </Grid>
}
