import { createSlice, CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Track, Album } from "../types";
import _  from "lodash";
import axios from "axios";

const initialState:Album[] = [];

export const addFavoriteThunk = createAsyncThunk<Album, Album, {}>(
    'albumList/addFavorite',
    async (album: Album, _thunkAPI) => {
        const endpoint = album.domain + '/collect_item_cb';
        const cookie = album.secret.cookie;
        const dataRaw = {
            fan_id: album.secret.fanId,
            item_id: album.id,
            item_type: 'album',
            band_id: album.bandId,
            ref_token: album.secret.refToken,
            crumb: album.secret.crumbs.collect_item_cb
        }
        const params = new URLSearchParams();
        _.map(dataRaw, (key: string, value: string) => {
            params.append(key, value)
        })
        const config = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Origin': album.domain,
                'Cookie': cookie,
            }
        }
        return await axios.post(endpoint, params, config);
    }
)

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
    },
    extraReducers: (builder) => {
        builder.addCase(addFavoriteThunk.fulfilled, (state, action) => {
            
        })
    }
})

export default albumListSlice.reducer;