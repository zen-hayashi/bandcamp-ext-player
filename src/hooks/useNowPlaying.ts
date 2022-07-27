import { MediaControllerProps } from "../stories/MediaController";
import { useSelector } from "../store";
import _ from "lodash";
import { useDispatch } from 'react-redux';
import { nowPlayingSlice } from "../store/nowPlaying";
import { progressSlice } from "../store/progress";
import { Track } from "../types";

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
        const currentIndex = _.findIndex(playlist, { url: nowPlaying.track.url });
        const nextTrack = playlist[currentIndex + 1];
        dispatch(setNowPlaying(nextTrack));
    }

    const handleAudioState = (playing: boolean) => {
        console.log('toggle state!');
        console.log(playing);
        dispatch(nowPlayingSlice.actions.setPlayerState(playing));
    }

    const mediaControllerProps = {
      nowPlaying,
      setPrevTrack,
      setNextTrack,
      handleAudioState,
    }
    return mediaControllerProps
}

export default useNowPlaying;