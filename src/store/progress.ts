import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Progress } from "../types";

const initialState = {
  duration: 0,
  currentTime: 0,
  seekTime: 0
}

export const setDuration: CaseReducer<Progress, PayloadAction<number>> = (state, action) => {
  console.log('setDuration!');
  state.duration = action.payload
  return state
}

export const setSeekTime: CaseReducer<Progress, PayloadAction<number>> = (state, action) => {
  console.log('setCurrentTime!')
  state.seekTime = action.payload
  return state
}

export const setCurrentTime: CaseReducer<Progress, PayloadAction<number>> = (state, action) => {
  console.log('setCurrentTime!');
  state.currentTime = action.payload
  return state
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setDuration,
    setCurrentTime,
    setSeekTime
  },
})

export default progressSlice.reducer