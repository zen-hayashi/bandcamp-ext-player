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

  return <div className='w-[600px]'>
      <MediaControllerContainer></MediaControllerContainer>
      <PlaylistContainer></PlaylistContainer>
    </div>
}
