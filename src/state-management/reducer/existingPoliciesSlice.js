// existingPoliciesSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const existingPoliciesSlice = createSlice({
  name: 'existingPolicies',
  initialState: {
    childrenEducation: {
      policyNo: "",
      annualPremium: "",
      dateofMaturity: "",
      commencementDate: "",
      term: "",
      benefits: "",
    },
    lifeInsurance: {
      policyNo: "",
      annualPremium: "",
      dateofMaturity: "",
      commencementDate: "",
      term: "",
      benefits: "",
    },
    retirement: {
      policyNo: "",
      annualPremium: "",
      dateofMaturity: "",
      commencementDate: "",
      term: "",
      benefits: "",
    },
  },
  reducers: {
    updateChildrenEducation: (state, action) => {
      state.childrenEducation = { ...state.childrenEducation, ...action.payload };
    },
    updateLifeInsurance: (state, action) => {
      state.lifeInsurance = { ...state.lifeInsurance, ...action.payload };
    },
    updateRetirement: (state, action) => {
      state.retirement = { ...state.retirement, ...action.payload };
    },
  },
});

export const { updateChildrenEducation, updateLifeInsurance, updateRetirement } = existingPoliciesSlice.actions;

export default existingPoliciesSlice.reducer;
