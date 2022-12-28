import playlistReducer from "./playlist";
import currentPageAlbumReducer from "./currentPageAlbum";
import nowPlayingReducer from "./nowPlaying";
import albumListReducer from "./albumList";
import progressReducer from "./progress";
import secretReducer from './secret'
import thunk from 'redux-thunk'
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const reducer = combineReducers({
  playlist: playlistReducer,
  currentPageAlbum: currentPageAlbumReducer,
  nowPlaying: nowPlayingReducer,
  albumList: albumListReducer,
  progress: progressReducer,
  secret: secretReducer,
})
const middlewares = [thunk, logger]

const store = configureStore({
  reducer,
  middleware: middlewares,
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector