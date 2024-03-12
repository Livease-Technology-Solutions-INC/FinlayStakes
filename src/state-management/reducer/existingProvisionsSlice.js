// existingProvisionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const existingProvisionsSlice = createSlice({
  name: 'existingProvisions',
  initialState: {
    childrenEducation: '',
    retirement: '',
    lifeInsurance: '',
    criticalIllness: '',
    disability: '',
  },
  reducers: {
    updateExistingProvisions: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateExistingProvisions } = existingProvisionsSlice.actions;

export default existingProvisionsSlice.reducer;
