import React, { useState } from 'react';
import { Box,Typography } from '@mui/material';
import Step1 from '../components/SignupStep/Step1.jsx';
import Step2 from '../components/SignupStep/Step2.jsx';


const SignUp = () => {
  
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box display="flex" width="100%">
            {activeStep === 0 && <Step1 onNext={handleNext}/>}
            {activeStep === 1 && <Step2 onNext={handleNext} />}
    </Box>
  );
};

export default SignUp;
