import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const useToggleDialog = createSlice({
  name: 'use-toggle-dialog',
  initialState,
  reducers: {
    toggleDialog: (_, action) => {
      return action.payload;
    },
  },
});

export const { toggleDialog } = useToggleDialog.actions;
export default useToggleDialog.reducer;
