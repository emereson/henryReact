import { createSlice } from '@reduxjs/toolkit';

const translationSlice = createSlice({
  name: 'translation',
  initialState: 'english',
  reducers: {
    setTranslation: (state, action) => action.payload,
  },
});

export const { setTranslation } = translationSlice.actions;

export default translationSlice.reducer;
