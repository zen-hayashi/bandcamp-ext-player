import React, { useEffect,useState } from "react";
import _ from "lodash";
import styles from "./Popup.scss"
import { Album } from "../types"
import { TableBody, TableContainer, Table, TableRow, TableCell, Paper, Grid, Button } from "@material-ui/core";

interface CurrentPageProps {
  album: Album,
  handleAddAlbumToPlaylist: Function
}

const CurrentPage = ({ album, handleAddAlbumToPlaylist }: CurrentPageProps) => {

  return (
    
    <Paper>
      <Grid container spacing={2} direction="column">
        <Grid item xs={6}>
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
                      <TableCell><a href={track.url}>{i}.{track.title}</a></TableCell>
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