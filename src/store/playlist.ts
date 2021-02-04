import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "../types";
import _  from "lodash";

const initialState:Track[] = [];

export const addTracksPlaylist: CaseReducer<Track[], PayloadAction<Track[]>> = (state, action) => {
    return _.concat(state, action.payload)
}
export const clearPlaylist: CaseReducer<Track[], PayloadAction<Track[]>> = (state, action) => {
    return []
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