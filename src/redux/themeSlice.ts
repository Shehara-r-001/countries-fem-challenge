import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  value: boolean;
}

const initialState: ThemeState = {
  value: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    applyTheme: (state: ThemeState, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { applyTheme } = themeSlice.actions;

export default themeSlice.reducer;
