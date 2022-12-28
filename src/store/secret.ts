import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Secret } from "../types";

const initialState = {
  refToken: '',
  cookie: '',
  fanId: '',
}

export const setSecret: CaseReducer<Secret, PayloadAction<Secret>> = (state, action) => {
  console.log('secret!');
  state = action.payload
  return state
}

export const secretSlice = createSlice({
  name: 'secret',
  initialState,
  reducers: {
    setSecret,
  },
})

export default secretSlice.reducer