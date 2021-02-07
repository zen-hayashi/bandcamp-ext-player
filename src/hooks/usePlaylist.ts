import { useSelector } from "../store";
import { useDispatch } from 'react-redux';
import { playlistSlice } from "../store/playlist";
import { Track } from "../types";
import { nowPlayingSlice } from "../store/nowPlaying";
import { PlaylistComponentProps } from '../stories/Playlist'

const usePlaylist = ():PlaylistComponentProps => {
    const dispatch = useDispatch();
    const playlist: Track[] = useSelector(state => state.playlist);

    const handleClearPlaylist = () => {
        dispatch(playlistSlice.actions.clearPlaylist());
    }

    const handleSetNowPlaying = (track: Track) => {
        console.log('play button clicked');
        dispatch(nowPlayingSlice.actions.setNowPlaying(track));
    };
    return {
        playlist,
        handleClearPlaylist,
        handleSetNowPlaying
    }
}
 
export default usePlaylist;