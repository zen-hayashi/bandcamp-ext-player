import React from "react";
import _ from "lodash";
import useNowPlaying from "../hooks/useNowPlaying";
import { PlaylistContainer } from "../stories/PlaylistContainer";
import { MediaControllerContainer } from "../stories/MediaControllerContainer";

export default function Popup() {
  // const dispatch = useDispatch();
  // const albumList = useSelector(state => state.albumList);
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
        <MediaControllerContainer></MediaControllerContainer>
      </div>
    <div >
        <div>
          <PlaylistContainer></PlaylistContainer>
        </div>
      </div>
    </div>
}
