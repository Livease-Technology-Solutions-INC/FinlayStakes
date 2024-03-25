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
import ExportPage from '../components/ProfilePage/ExportPage';
import Progressbar from '../components/ProfilePage/Progressbar';
function ProfilePage() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const showScheduleCall = () => {
    setActiveStep(9);
  }
  const showExportPage = () => {
    setActiveStep(11);
  }
  const showFirstTime = () => {
    setActiveStep(1)
  }
  const showEditPage = () => {
    setActiveStep(12)
  }
  return (
    <>
      <Box display="flex" width="100%" paddingBottom="80px" backgroundColor="#F2F1F9">
      {activeStep === 0 && 
        <Box position={"relative"} width={"100%"}>
        <ReviewPage onNext={showScheduleCall} exportPage={showExportPage} editPage={showEditPage} first={showFirstTime} />
        </Box>}
        {activeStep === 1 &&
          <Box position={"relative"} width={"100%"} display={'flex'} flexDirection={"row"} alignItems={"flex-start"} justifyContent={'space-between'}>
            <PersonalDetail onNext={handleNext} onPrev={handlePrev} />
            <Progressbar activeStep={activeStep} />
          </Box>}
        {activeStep === 2 &&
          <Box position={"relative"} width={"100%"} display={'flex'} flexDirection={"row"} alignItems={"flex-start"} justifyContent={'space-between'}>
            <IncomeDetail onNext={handleNext} onPrev={handlePrev} />
            <Progressbar activeStep={activeStep} />
          </Box>}
        {activeStep === 3 &&
          <Box position={"relative"} width={"100%"} display={'flex'} flexDirection={"row"} alignItems={"flex-start"} justifyContent={'space-between'}>
            <ExpensesDetail onNext={handleNext} onPrev={handlePrev} />
            <Progressbar activeStep={activeStep} />
          </Box>}
        {activeStep === 4 &&
          <Box position={"relative"} width={"100%"} display={'flex'} flexDirection={"row"} alignItems={"flex-start"} justifyContent={'space-between'}>
            <AssetDetails onNext={handleNext} onPrev={handlePrev} />
            <Progressbar activeStep={activeStep} />
          </Box>}
        {activeStep === 5 &&
          <Box position={"relative"} width={"100%"} display={'flex'} flexDirection={"row"} alignItems={"flex-start"} justifyContent={'space-between'}>
            <LiabilityDetail onNext={handleNext} onPrev={handlePrev} />
            <Progressbar activeStep={activeStep} />
          </Box>}
        {activeStep === 6 &&
          <Box position={"relative"}  width={"100%"} display={'flex'} flexDirection={"row"} alignItems={"flex-start"} justifyContent={'space-between'}>
            <Goal onNext={handleNext} onPrev={handlePrev} />
            <Progressbar activeStep={activeStep} />
          </Box>}
        {activeStep === 7 &&
          <Box position={"relative"}  width={"100%"} display={'flex'} flexDirection={"row"} alignItems={"flex-start"} justifyContent={'space-between'}>
            <ExistingProvisions onNext={handleNext} onPrev={handlePrev} />
            <Progressbar activeStep={activeStep} />
          </Box>}
        {activeStep === 8 &&
          <Box position={"relative"}  width={"100%"} display={'flex'} flexDirection={"row"} alignItems={"flex-start"} justifyContent={'space-between'}>
            <FinancialPlanning onNext={handleNext} onPrev={handlePrev} />
            <Progressbar activeStep={activeStep} />
          </Box>}
        {activeStep === 9 &&
          <Box position={"relative"} width={"100%"} display={'flex'} flexDirection={"row"} alignItems={"flex-start"} justifyContent={'space-between'}>
            <ExistingPolicy onNext={handleNext} />
            <Progressbar activeStep={activeStep} />
          </Box>}
        {activeStep === 10 && <ScheduleCall onNext={handleNext} />}
        {activeStep === 11 && 
        <Box position={"relative"} width={"100%"}>
        <ReviewPage onNext={showScheduleCall} exportPage={showExportPage} />
        </Box>}
        {activeStep === 12 && <ExportPage onNext={showScheduleCall} />}
      </Box>
    </>
  )
}

export default ProfilePage