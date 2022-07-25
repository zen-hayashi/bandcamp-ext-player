import playlistReducer from "./playlist";
import currentPageAlbumReducer from "./currentPageAlbum";
import nowPlayingReducer from "./nowPlaying";
import albumListReducer from "./albumList";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    playlist: playlistReducer,
    currentPageAlbum: currentPageAlbumReducer,
    nowPlaying: nowPlayingReducer,
    albumList: albumListReducer
})

const store = configureStore({ reducer });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector