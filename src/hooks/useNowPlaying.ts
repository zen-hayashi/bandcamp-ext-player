import { MediaControllerProps } from "../stories/MediaController";
import { useSelector } from "../store";
import _ from "lodash";
import { useDispatch } from 'react-redux';
import { nowPlayingSlice } from "../store/nowPlaying";

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const nowPlaying = useSelector(state => state.nowPlaying);
    const playlist = useSelector(state => state.playlist);
    const setPrevTrack = () => {
        const currentIndex = _.findIndex(playlist, { url: nowPlaying.track.url });
        const prevTrack = playlist[currentIndex - 1];
        dispatch(nowPlayingSlice.actions.setNowPlaying(prevTrack));
    }

    const setNextTrack = () => {
        const currentIndex = _.findIndex(playlist, { url: nowPlaying.track.url });
        const nextTrack = playlist[currentIndex + 1];
        dispatch(nowPlayingSlice.actions.setNowPlaying(nextTrack));
    }

    const handleAudioState = (playing: boolean) => {
        console.log('toggle state!');
        console.log(playing);
        dispatch(nowPlayingSlice.actions.setPlayerState(playing));
    }
    const mediaControllerProps = {
        track: nowPlaying.track,
        playing: nowPlaying.playing,
        setPrevTrack: setPrevTrack,
        setNextTrack: setNextTrack,
        handleAudioState: handleAudioState
    }
    return mediaControllerProps
}

export default useNowPlaying;