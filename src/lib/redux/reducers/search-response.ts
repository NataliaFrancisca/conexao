import { IWord } from '@/utils/ts/interface';
import { createSlice } from '@reduxjs/toolkit';

interface ISearch {
  original: Array<IWord>;
  selected: Array<IWord>;
}

const initialState: ISearch = { original: [], selected: [] };

export const usetranslateResponse = createSlice({
  name: 'handle-search-response',
  initialState,
  reducers: {
    setOriginal: (state, action) => {
      return {
        ...state,
        original: action.payload,
      };
    },

    setSelected: (state, action) => {
      return {
        ...state,
        selected: action.payload,
      };
    },

    clean: () => {
      return initialState;
    },
  },
});

export const { setOriginal, setSelected, clean } = usetranslateResponse.actions;
export default usetranslateResponse.reducer;
