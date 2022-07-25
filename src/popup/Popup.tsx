import React from "react";
import _ from "lodash";
import { MediaController,MediaControllerProps } from "../stories/MediaController";
import { PlaylistComponent, PlaylistComponentProps } from "../stories/Playlist";
import { AlbumSelector } from '../stories/AlbumSelector'
import useNowPlaying from "../hooks/useNowPlaying";
import usePlaylist from "../hooks/usePlaylist";
import { useDispatch } from "react-redux";
import { useSelector } from "../store";

export default function Popup() {
  // const dispatch = useDispatch();
  // const albumList = useSelector(state => state.albumList);
  const PlaylistComponentProps = usePlaylist();
  const mediaControllerProps = useNowPlaying();
  
  // const addFavorite = (album: Album) => {
  //   console.log(album);
  //   dispatch(addFavoriteThunk(album));
  // } 

  return <div>
      <div >
        {/* <AlbumSelector albums={albumList} ></AlbumSelector> */}
        {/* <AlbumSelector albums={albumList} addFavorite={addFavorite}></AlbumSelector> */}
      </div>
    <div >
        <MediaController {...mediaControllerProps}></MediaController>
      </div>
    <div >
        <div>
          <PlaylistComponent {...PlaylistComponentProps}></PlaylistComponent>
        </div>
      </div>
    </div>
}
