import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  value: string;
}

const initialState: FilterState = {
  value: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    sortFilter: (state: FilterState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { sortFilter } = filterSlice.actions;

export default filterSlice.reducer;
