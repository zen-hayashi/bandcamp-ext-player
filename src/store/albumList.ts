import { createSlice, CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { State,  Album, AlbumList } from '../types'
import _  from "lodash";
import axios from "axios";

const initialState:Album[] = [];

export const addAlbum: CaseReducer<Album[], PayloadAction<Album>> = (state, action) => {
    console.log('album added!');
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