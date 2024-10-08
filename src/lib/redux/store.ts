import { configureStore } from '@reduxjs/toolkit';
import toggleDialogReducer from './reducers/dialog';
import translateResponseReducer from './reducers/search-response';
import toggleLoaderReducer from './reducers/loader-form-search';

export const store = () => {
  return configureStore({
    reducer: {
      toggleDialog: toggleDialogReducer,
      translateResponse: translateResponseReducer,
      toggleLoader: toggleLoaderReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
