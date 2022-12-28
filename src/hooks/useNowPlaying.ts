import { useSelector } from "../store";
import _ from "lodash";
import { useDispatch } from 'react-redux';
import { addFavorite, nowPlayingSlice } from "../store/nowPlaying";
import { progressSlice } from "../store/progress";
import { Album, Track } from "../types";

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const nowPlaying = useSelector(state => state.nowPlaying);
    const playlist = useSelector(state => state.playlist);

    const setNowPlaying = (track: Track) => {
        dispatch(progressSlice.actions.setDuration(track.duration));
        dispatch(nowPlayingSlice.actions.setNowPlaying(track));
    }

    const setPrevTrack = () => {
        const currentIndex = _.findIndex(playlist, { url: nowPlaying.track.url });
        const prevTrack = playlist[currentIndex - 1];
        dispatch(setNowPlaying(prevTrack));
    }

    const setNextTrack = () => { 
        const currentIndex = _.findIndex(playlist, { id: nowPlaying.track.id });
        const nextTrack = playlist[currentIndex + 1];
        dispatch(setNowPlaying(nextTrack));
    }

    const handleAudioState = (playing: boolean) => {
        console.log('toggle state!');
        console.log(playing);
        dispatch(nowPlayingSlice.actions.setPlayerState(playing));
    }

    const addFavoriteNowPlaying = () => {
      dispatch(addFavorite(nowPlaying.track.album));
      console.log('add favorite dispatched')
    }

    const toggleFavoriteNowPlaying = () => async (dispatch, getState) => {
      const secret = getState().secret
      const album = getState().nowPlaying.track.album
      const liked = getState().nowPlaying.track.album.liked
      const data = {
        fan_id: album.fan_id,
        item_id: album.item_id,
        item_type: album,
        band_id: album.band_id,
        ref_token: secret.ref_token,
        crumb: secret.crumb,
      }
      if (!liked) {
        const response = await fetch(album.domain + '/collect_item_cb', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data),
        })
        await response.json()
      } else {
        delete data.ref_token
        const response = await fetch(album.domain + '/uncollect_item_cb', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data),
        })
        return await response.json()
      }
    }

    const mediaControllerProps = {
      nowPlaying,
      setPrevTrack,
      setNextTrack,
      handleAudioState,
      toggleFavoriteNowPlaying,
      addFavoriteNowPlaying,
    }
    return mediaControllerProps
}

export default useNowPlaying;