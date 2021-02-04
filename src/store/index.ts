import playlistReducer from "./playlist";
import currentPageAlbumReducer from "./currentPageAlbum";
import nowPlayingReducer from "./nowPlaying";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    playlist: playlistReducer,
    currentPageAlbum: currentPageAlbumReducer,
    nowPlaying: nowPlayingReducer
})

const store = configureStore({ reducer });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector