import React, { useEffect,useState } from "react";
import _ from "lodash";
import { Track } from "../types";
import { TrackRowContainer } from "./TrackRowContainer";



export interface PlaylistComponentProps{
  playlist: Track[],
  handleClearPlaylist?: () => void,
  handleSetNowPlaying?: (track:Track) => void
}

export const PlaylistComponent: React.FC<PlaylistComponentProps> = (props) => {

  return (<>
    <button onClick={props.handleClearPlaylist} >Clear Playlist</button>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th>Track</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {
              props.playlist && props.playlist.map((track) => {
                return <TrackRowContainer track={track} handleSetNowPlaying={props.handleSetNowPlaying}></TrackRowContainer>
              })
          }
        </tbody>
      </table>
      </>
  );
}