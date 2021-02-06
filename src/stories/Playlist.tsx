import React, { useEffect,useState } from "react";
import _ from "lodash";
import { Track } from "../types";
import { TableBody, TableContainer, Table, TableRow, TableCell, Paper, Grid, Button } from "@material-ui/core";
import {TrackRow} from "./TrackRow";
import "./playlist.scss";



export interface PlaylistComponentProps{
  playlist: Track[],
  handleClearPlaylist?: () => void
}

export const PlaylistComponent: React.FC<PlaylistComponentProps> = (props) => {

  return (<>
      <Button onClick={props.handleClearPlaylist} className='clear-button' >Clear Playlist</Button>
          <Grid item xs={12}>
        <TableContainer>
        <Table>
          
          <TableBody>
            {
              props.playlist && props.playlist.map((track, i) =>
                <TableRow key={i}>
                  <TrackRow track={track}></TrackRow>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
        </TableContainer>
      </Grid>
      </>
  );
}