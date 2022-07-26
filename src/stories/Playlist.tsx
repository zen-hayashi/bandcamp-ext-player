import React, { useEffect,useState } from "react";
import _ from "lodash";
import { Track } from "../types";
import {TrackRow} from "./TrackRow";



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
              props.playlist && props.playlist.map((track, i) =>
                  <TrackRow track={track} key={i} handleSetNowPlaying={props.handleSetNowPlaying}></TrackRow>
              )
          }
        </tbody>
      </table>
      </>
  );
}