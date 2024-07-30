// import { getUserLanguageLastPreference } from '@/lib/nookies/nookies';
import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_OUTPUT = 'Português';
// const USER_PREFERENCE = getUserLanguageLastPreference();
const initialState = DEFAULT_OUTPUT;

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
