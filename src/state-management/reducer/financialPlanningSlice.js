// financialPlanningShortfallSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const financialPlanningShortfallSlice = createSlice({
  name: 'financialPlanningShortfall',
  initialState: {
    childrenEducation: '',
    retirement: '',
    lifeInsurance: '',
    criticalIllness: '',
    disability: '',
  },
  reducers: {
    updateFinancialPlanningShortfall: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFinancialPlanningShortfall } = financialPlanningShortfallSlice.actions;

export default financialPlanningShortfallSlice.reducer;
