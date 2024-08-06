import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const useLanguageSelect = createSlice({
  name: 'use-language-select',
  initialState,
  reducers: {
    setLanguageSelected: (_, action) => {
      return action.payload;
    },
  },
});

export const { setLanguageSelected } = useLanguageSelect.actions;
export default useLanguageSelect.reducer;
