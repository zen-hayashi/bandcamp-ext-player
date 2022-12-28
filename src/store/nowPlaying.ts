import { createSlice, CaseReducer, PayloadAction, createAsyncThunk, Store } from "@reduxjs/toolkit";
import {  Album, NowPlaying, Secret, Track } from "../types";
import _  from "lodash";
import { RootState } from ".";

const initialAlbumInfo: Album = {
  id: 0,
  title: '',
  artist: '',
  url: '',
  image: '',
  labelUrl: '',
  label: '',
  releaseDate: '',
  liked: false,
  bandId: '',
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

export const addFavorite = createAsyncThunk<void, Album, { state: RootState }>(
  'nowPlaying/addFavorite',
  async (album: Album, thunkAPI) => {
    console.log('async thunk')
    const state = thunkAPI.getState()
    const secret: Secret = state.secret
    const data = {
      fan_id: secret.fanId,
      item_id: album.id,
      item_type: album,
      band_id: album.bandId,
      ref_token: secret.refToken,
      crumb: secret.crumbs,
    }
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
    return
  }
)

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
  extraReducers(builder) {
      builder.addCase(addFavorite.fulfilled, (state, action) => {
        // Add user to the state array
        state.track.album.liked = true
      })
  },
})

export default nowPlayingSlice.reducer;