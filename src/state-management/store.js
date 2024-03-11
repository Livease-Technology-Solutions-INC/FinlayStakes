import { configureStore } from '@reduxjs/toolkit';
import personalDetailReducer from "./slice";

export default configureStore({
  reducer: {
    personalDetail: personalDetailReducer,
  },
});
