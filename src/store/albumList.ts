import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Track, Album } from "../types";
import _  from "lodash";

const initialState:Album[] = [];

export const addAlbum: CaseReducer<Album[], PayloadAction<Album>> = (state, action) => {
    console.log('album added!')
    return [...state, action.payload];
}
export const clearAlbumList: CaseReducer<Album[], PayloadAction<Album[]>> = (state, action) => {
    return []
}

export const albumListSlice = createSlice({
    name: "albumList",
    initialState,
    reducers: {
        addAlbum,
        clearAlbumList
    }
})

export default albumListSlice.reducer;