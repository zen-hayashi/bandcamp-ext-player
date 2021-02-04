import React, { useEffect,useState } from "react";
import _ from "lodash";
import styles from "./Popup.scss";
import { Track } from "../types";
import { TableBody, TableContainer, Table, TableRow, TableCell, Paper, Grid, Button } from "@material-ui/core";
import TrackRow from "../component/TrackRow";
import { useSelector } from "../store"
import { useDispatch } from 'react-redux';
import { playlistSlice } from "../store/playlist";



const PlaylistComponent = () => {
  const dispatch = useDispatch();
  const playlist:Track[] = useSelector(state => state.playlist);

  const handleClearPlaylist = () => {
    dispatch(playlistSlice.actions.clearPlaylist());
  }

  return (
    
    <Paper>
      <Button onClick={handleClearPlaylist}>Clear Playlist</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {
              playlist && playlist.map((track, i) =>
                <TableRow key={i}>
                  <TrackRow track={track}></TrackRow>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    
  );
}

export default PlaylistComponent