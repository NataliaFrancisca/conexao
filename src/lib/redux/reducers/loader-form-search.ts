import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const useToggleLoader = createSlice({
  name: 'use-toggle-dialog',
  initialState,
  reducers: {
    toggleLoader: (_, action) => {
      return action.payload;
    },
  },
});

export const { toggleLoader } = useToggleLoader.actions;
export default useToggleLoader.reducer;
