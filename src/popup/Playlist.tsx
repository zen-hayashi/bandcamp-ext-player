import React, { useEffect,useState } from "react";
import _ from "lodash";
import styles from "./Popup.scss";
import { Track } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TableBody, TableContainer, Table, TableRow, TableCell, Paper, Grid, Button } from "@material-ui/core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface PlaylistProps {
  tracks: Track[],
  handleStartAudio: Function
} 

const PlaylistComponent = ({ tracks, handleStartAudio }: PlaylistProps) => {

  return (
    
    <Paper>
      <Grid container spacing={2} direction="column">
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {
                  tracks && tracks.map((track, i) =>
                    <TableRow key={i}>
                      <TableCell><a href={track.url}>{i}.{track.title}</a></TableCell>
                      <Button onClick={() => handleStartAudio(track)}>
                        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                      </Button>
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

export default PlaylistComponent