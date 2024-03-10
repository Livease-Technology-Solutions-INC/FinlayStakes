import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import Logo from '../../assets/LIVI LEADS logo 2.svg';
import Background from '../../assets/images/Background.jpg';

import User from "../../assets/lucide_user-round.svg"
import RadioButton from "../RadioButton"
import Vendor from "../../assets/Vendor.svg"
import ProgressBar from './ProgressBar';

const Step1 = ({ onNext ,userData, setUserData }) => {
    
    const handleUserTypeChange = (event) => {
        const { value } = event.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            userType: value
        }));    
    };

    const handleContinue = () => {
        onNext();
    };

    return (
        <Box display="flex" width="100%" flexDirection="row" justifyContent="space-between" alignItems="flex-start">
            <Box width="100%" display="flex" flexDirection="column" alignItems="flex-start" gap="50px" >
                <Box display="flex" width="100%" flexDirection="row" justifyContent="space-between" padding="48px" alignItems="center" >
                    <Box>
                        <img src={Logo} alt="logo" />
                    </Box>
                    <Box>
                        <Typography variant="body1" color="#9397BB" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: "Regular" }} >
                            Already Have an Account? <span style={{ color: "#004EFD", fontWeight: "500" }}>Log in</span>
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" width="100%" flexDirection="column" gap="32px" justifyContent="center" alignItems="flex-start" padding="0 106px"  >
                    <Box display="flex" width="100%" flexDirection="column" gap="12px" justifyContent="center" alignItems="flex-start"  >
                        <Typography sx={{ fontFamily: 'Lato, sans-serif', fontWeight: "bold", color: "#212844" }} variant="h5">
                            Create an Account
                        </Typography>
                        <Typography variant="body2" color="#9397BB" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: "Regular" }} >
                            To create an account, select the necessary options!
                        </Typography>
                    </Box>
                    <RadioGroup sx={{ width: "100%" }} value={userData.userType} onChange={handleUserTypeChange}>
                <RadioButton value="vendor" label="I’m a Vendor" description="I’m creating an account for my business" icon={Vendor} />
                <RadioButton value="user" label="I’m a User" description="I’m creating an account for myself." icon={User} />
            </RadioGroup>
                    <Button sx={{ width: "100%", backgroundColor: "#6560F0", color: "#fff", padding: "14px 0", borderRadius: "10px" }} variant="contained" onClick={handleContinue} style={{ marginTop: '16px' }}>
                        <Typography variant="body1" sx={{ fontFamily: 'Lato, sans-serif' }}>Continue</Typography>
                    </Button>
                    <ProgressBar currentStep={1} totalSteps={6} />
                </Box>
            </Box>
            <Box sx={{ maxWidth: "700px", width: "100%", display: "flex", justifyContent: "flex-end" }}>
                <img src={Background} alt="background" style={{ width: "100%", height: "100vh" }} />
            </Box>
        </Box>
    );
};

export default Step1;
