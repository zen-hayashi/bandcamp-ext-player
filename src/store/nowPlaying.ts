import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { NowPlaying, Track } from "../types";
import _  from "lodash";

const initialState:NowPlaying = {
    track: null,
    playing: false
};

export const setNowPlaying: CaseReducer<NowPlaying, PayloadAction<Track>> = (state, action) => {
    console.log('setNowPlaying');
    return Object.assign({}, state, { track: action.payload })
}
export const setPlayerState: CaseReducer<NowPlaying, PayloadAction<boolean>> = (state, action) => {
    console.log('setNowPlayerState!');
    state.playing = action.payload
    return state
}

export const nowPlayingSlice = createSlice({
    name: "nowPlaying",
    initialState,
    reducers: {
        setNowPlaying,
        setPlayerState
    }
})

export default nowPlayingSlice.reducer;