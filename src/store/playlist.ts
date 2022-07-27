import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "../types";
import _  from "lodash";
import { nowPlayingSlice } from "./nowPlaying";

const initialState:Track[] = [];

const getRandomString = (n: number) => {
    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N=n;
    return Array.from(Array(N)).map(()=>S[Math.floor(Math.random()*S.length)]).join('');
}

export const addTracksPlaylist: CaseReducer<Track[], PayloadAction<Track[]>> = (state, action) => {
    console.log('tracks added!');
    const tracks: Track[] = action.payload.map((track) => Object.assign({ id: getRandomString(8) }, track))
    return _.concat(state, tracks)
}
export const clearPlaylist: CaseReducer<Track[], PayloadAction<Track[]>> = (state, action) => {
    return []
}

export function setTracksToPlaylist(tracks: Track[]) {
    return function (dispatch, getState) {
        dispatch(playlistSlice.actions.addTracksPlaylist(tracks));
        if (getState().nowPlaying.track.title?.length == 0) {
            dispatch(nowPlayingSlice.actions.setNowPlaying(tracks[0]));
        }
        return Promise.resolve();
}
}

export const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addTracksPlaylist,
        clearPlaylist
    }
})

export default playlistSlice.reducer;