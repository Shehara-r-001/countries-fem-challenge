import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import themeReducer from './themeSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    theme: themeReducer,
    searchString: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
