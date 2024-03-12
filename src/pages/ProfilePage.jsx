import React, { useState } from 'react';
import { Box } from '@mui/material'
import ExpensesDetail from '../components/ProfilePage/ExpensesDetail';
import FinancialPlanning from '../components/ProfilePage/FinancialPlanning';
import Goal from '../components/ProfilePage/Goal';
import IncomeDetail from '../components/ProfilePage/IncomeDetail';
import LiabilityDetail from '../components/ProfilePage/LiabilityDetail';
import PersonalDetail from '../components/ProfilePage/PersonalDetail';
import ExistingPolicy from '../components/ProfilePage/ExistingPolicy';
import ExistingProvisions from '../components/ProfilePage/ExistingProvisions';
import ReviewPage from '../components/ProfilePage/ReviewPage'
import ScheduleCall from '../components/ProfilePage/ScheduleCall';
import AssetDetails from '../components/ProfilePage/AssetDetails';

function ProfilePage() {
    const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const showScheduleCall=()=>{
    setActiveStep(9);
  }
    return (
        <>
         <Box display="flex" width="100%" padding="0">
            {activeStep === 0 && <PersonalDetail onNext={handleNext} onPrev={handlePrev} />}
            {activeStep === 1 && <IncomeDetail onNext={handleNext} onPrev={handlePrev} />}
            {activeStep === 2 && <ExpensesDetail onNext={handleNext} onPrev={handlePrev}/>}
            {activeStep === 3 && <AssetDetails onNext={handleNext} onPrev={handlePrev} />}
            {activeStep === 4 && <LiabilityDetail onNext={handleNext} onPrev={handlePrev} />}
            {activeStep === 5 && <Goal onNext={handleNext} onPrev={handlePrev} />}
            {activeStep === 6 && <ExistingProvisions onNext={handleNext} onPrev={handlePrev} />}
            {activeStep === 7 && <FinancialPlanning onNext={handleNext} onPrev={handlePrev} />}
            {activeStep === 8 && <ExistingPolicy onNext={handleNext} />}
            {activeStep === 9 && <ScheduleCall onNext={handleNext} />}           
            {activeStep === 10 && <ReviewPage onNext={showScheduleCall} />}           
             </Box>
        </>
    )
}

export default ProfilePage