// personalDetailSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const personalDetailSlice = createSlice({
  name: 'personalDetail',
  initialState: {
    name: '',
    DOB: '',
    age: '',
    maritalStatus: '',
    phoneNumber: '',
    email: '',
    residentCountry: '',
    nationality: '',
    residentialAddress: '',
    smoker: '',
    medicalHistory: '',
  },
  reducers: {
    updatePersonalDetail: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updatePersonalDetail } = personalDetailSlice.actions;

export default personalDetailSlice.reducer;
