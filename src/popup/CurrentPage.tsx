import React, { useEffect,useState } from "react";
import _ from "lodash";
import styles from "./Popup.scss"
import { Album, Track } from "../types"
import { TableBody, TableContainer, Table, TableRow, TableCell, Paper, Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { playlistSlice } from "../store/playlist";
import TrackRow from "../component/TrackRow";

interface CurrentPageProps {
  album: Album
}

const CurrentPage = ({ album }: CurrentPageProps) => {
  
  const dispatch = useDispatch();
  const handleAddAlbumToPlaylist = (currentPageAlbum: Album) => {
    console.log('clicked!');
    console.log(currentPageAlbum);
    dispatch(playlistSlice.actions.addTracksPlaylist(currentPageAlbum.tracks));
  }

  const handleAddTrackToPlaylist = (track: Track) => {

  }

  return (
    
    <Paper>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          <Grid item xs={1} >
            {
              album &&
              <img className={styles.albumImage} src={album.info.image}></img>
            }
          </Grid>
          <Grid item xs={2} sm >
            {
              album &&
              <>
                <Grid item xs>Title: {album.info.title}</Grid>
                <Grid item xs>Artist: {album.info.artist}</Grid>
              </>
            }
          </Grid>
          <Button onClick={() => handleAddAlbumToPlaylist(album)}>Add to PlayList</Button>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {
                  album?.tracks && album.tracks.map((track, i) =>
                    <TableRow key={i}>
                      <TrackRow track={track}></TrackRow>
                    </TableRow>
                  )
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
    
  );
}

export default CurrentPage