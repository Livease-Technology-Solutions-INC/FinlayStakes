// liabilityDetailSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const liabilityDetailSlice = createSlice({
  name: 'liabilityDetail',
  initialState: {
    bankLoans: '',
    creditCard: '',
    mortgages: '',
    autoLoans: '',
    handLoans: '',
    totalLiabilities: '',
  },
  reducers: {
    updateLiabilityDetail: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateLiabilityDetail } = liabilityDetailSlice.actions;

export default liabilityDetailSlice.reducer;
