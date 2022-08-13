import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
}

const initialState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'searchCountry',
  initialState,
  reducers: {
    setSearchString: (state: SearchState, action: PayloadAction<string>) => {
      state.value = action.payload.toLocaleLowerCase();
    },
  },
});

export const { setSearchString } = searchSlice.actions;

export default searchSlice.reducer;
