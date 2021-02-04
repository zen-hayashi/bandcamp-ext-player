import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Album } from "../types";
import _  from "lodash";

const initialState:Album = null;

export const setCurrentPageAlbum: CaseReducer<Album, PayloadAction<Album>> = (state, action) => {
    console.log(action.payload);
    return action.payload;
}

export const currentPageAlbumSlice = createSlice({
    name: "currentPageAlbum",
    initialState,
    reducers: {
        setCurrentPageAlbum
    }
})

export default currentPageAlbumSlice.reducer;
