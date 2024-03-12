import { createSlice } from '@reduxjs/toolkit';

export const assetsDetailSlice = createSlice({
  name: 'assetsDetail',
  initialState: {
    cash: '',
    propertyValue: '',
    shares: '',
    businessAssets: '',
    others: '',
    totalAssets: '',
  },
  reducers: {
    updateAssetsDetail: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateAssetsDetail } = assetsDetailSlice.actions;

export default assetsDetailSlice.reducer;
