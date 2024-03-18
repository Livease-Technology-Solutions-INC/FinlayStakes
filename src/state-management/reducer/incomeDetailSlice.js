// incomeDetailSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const incomeDetailSlice = createSlice({
  name: 'incomeDetail',
  initialState: {
    interest: '',
    bankReturns: '',
    propertyIncome: '',
    salary: '',
    totalIncome: '',
    bonus: '',
  },
  reducers: {
    updateIncomeDetail: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateIncomeDetail } = incomeDetailSlice.actions;

export default incomeDetailSlice.reducer;
