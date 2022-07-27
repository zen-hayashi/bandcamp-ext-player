import React, { useEffect,useState } from "react";
import _ from "lodash";
import { PlaylistComponent, PlaylistComponentProps } from "./Playlist";
import usePlaylist from "../hooks/usePlaylist";
import useNowPlaying from "../hooks/useNowPlaying";

export const PlaylistContainer: React.FC = () => {
  const playlistComponentProps = usePlaylist();
  return (<>
      <PlaylistComponent {...playlistComponentProps}></PlaylistComponent>
    </>
  );
}