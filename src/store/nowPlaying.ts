import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {  Album, NowPlaying, Track } from "../types";
import _  from "lodash";

const initialAlbumInfo: Album = {
  id: 0,
  title: '',
  artist: '',
  url: '',
  image: '',
  labelUrl: '',
  label: '',
  releaseDate: '',
}

const initialTrack: Track = {
  id: '',
  title: '',
  url: '',
  file: '',
  duration: 0,
  album: initialAlbumInfo,
}


const initialState: NowPlaying = {
  track: initialTrack,
  playing: false,
}

export const setNowPlaying: CaseReducer<NowPlaying, PayloadAction<Track>> = (state, action) => {
    console.log('setNowPlaying');
    return Object.assign({}, state, { track: action.payload, playing: true })
}
export const setPlayerState: CaseReducer<NowPlaying, PayloadAction<boolean>> = (state, action) => {
    console.log('setNowPlayerState!');
    state.playing = action.payload
    return state
}

export const nowPlayingSlice = createSlice({
  name: 'nowPlaying',
  initialState,
  reducers: {
    setNowPlaying,
    setPlayerState,
  },
})

export default nowPlayingSlice.reducer;