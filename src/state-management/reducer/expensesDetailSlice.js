// expensesDetailSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const expensesDetailSlice = createSlice({
  name: 'expensesDetail',
  initialState: {
    utilityBill: '',
    loan: '',
    rent: '',
    shoppingExpense: '',
    leisureExpense: '',
    totalExpenses: '',
    medicalExpense: '',
  },
  reducers: {
    updateExpensesDetail: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateExpensesDetail } = expensesDetailSlice.actions;

export default expensesDetailSlice.reducer;
