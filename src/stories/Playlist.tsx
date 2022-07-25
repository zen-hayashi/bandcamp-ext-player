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
          <div>
        <div>
        <div>
          
          <div>
            {
              props.playlist && props.playlist.map((track, i) =>
                <div key={i}>
                  <TrackRow track={track} handleSetNowPlaying={props.handleSetNowPlaying}></TrackRow>
                </div>
              )
            }
          </div>
        </div>
        </div>
      </div>
      </>
  );
}