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

export default function Popup() {
  const dispatch = useDispatch();
  const albumList = useSelector(state => state.albumList);
  const PlaylistComponentProps = usePlaylist();
  const mediaControllerProps = useNowPlaying();

  return <div className={styles.popupContainer}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AlbumSelector albums={albumList}></AlbumSelector>
      </Grid>
      <Grid item xs={4}>
        <MediaController {...mediaControllerProps}></MediaController>
      </Grid>
      <Grid item xs={8}>
        <Column gap={2}>
          <PlaylistComponent {...PlaylistComponentProps}></PlaylistComponent>
        </Column>
      </Grid>
    </Grid>
  </div>;
}
