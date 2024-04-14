import { createSlice } from '@reduxjs/toolkit';

export const classSlice = createSlice({
  name: 'class',
  initialState: {
    list: {},
    active: false,
  },
  reducers: {
    setClass: (state, action) => {
      state.list = action.payload;
      state.active = true
    }
  },
});

export const { setClass } = classSlice.actions;

export default classSlice.reducer;
