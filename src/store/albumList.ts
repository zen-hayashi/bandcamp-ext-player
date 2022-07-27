import { createSlice, CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { State,  Album, AlbumList } from '../types'
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

// export const addAlbumToPlayList = createAsyncThunk<void, Album, { state: State }>(
//   'albunList/addAlbumToPlayList',
//   (album: Album, { dispatch, getState }) => {
//     console.log('thunk');
//     const currentAlbumList = getState().albumList;
//     if (currentAlbumList.filter((x) => x.id == album.id).length == 0) {
//         console.log('resolve');
//         dispatch(albumListSlice.actions.addAlbum(album))
//       return Promise.resolve();
//     } else {
//         console.log('reject')
//         dispatch(albumListSlice.actions.addAlbum(album))
//       return Promise.reject();
//     }
//   }
// )

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
    },
    // extraReducers: (builder) => {
    //     builder.addCase(addFavoriteThunk.fulfilled, (state, action) => {
            
    //     })
    // }
})

export const addAlbumToPlayList = (album: Album) => (dispatch, getState) =>{
    console.log('dispatched!')
    const state = getState()
    dispatch(albumListSlice.actions.addAlbum(album))
    return Promise.resolve()
}

export default albumListSlice.reducer;