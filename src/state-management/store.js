import { configureStore } from '@reduxjs/toolkit';
import personalDetailReducer from "./reducer/personalDetailSlice";
import incomeDetailSlice from './reducer/incomeDetailSlice';
import expensesDetailSlice from './reducer/expensesDetailSlice';
import assetsDetailSlice from './reducer/assetsDetailSlice';
import liabilityDetailSlice from './reducer/liabilityDetailSlice';
import goalsSlice from './reducer/goalsSlice';
import existingProvisionsSlice from './reducer/existingProvisionsSlice';
import financialPlanningSlice from './reducer/financialPlanningSlice';
import existingPoliciesSlice from './reducer/existingPoliciesSlice';
export default configureStore({

  reducer: {
    personalDetail: personalDetailReducer,
    incomeDetail:incomeDetailSlice,
    expensesDetail: expensesDetailSlice,
    assetsDetail:assetsDetailSlice,
    liabilityDetail:liabilityDetailSlice,
    goals:goalsSlice,
    existingProvisions:existingProvisionsSlice,
    financialPlanningShortfall:financialPlanningSlice,
    existingPolicies:existingPoliciesSlice

  },
});
