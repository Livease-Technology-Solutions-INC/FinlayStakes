import { createSlice } from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    childrenEducation: '',
    universityCapital: '',
    universityYearsLeft: '',
    retire: '',
    retirementIncome: '',
    incomeIncaseOfDeath: '',
    incomeIncaseOfCriticalIllness: '',
    incomeIncaseOfDisability: '',
  },
  reducers: {
    updateGoals: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateGoals } = goalsSlice.actions;

export default goalsSlice.reducer;
