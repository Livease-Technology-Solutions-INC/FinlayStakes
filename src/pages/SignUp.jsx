import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import ResendOTP from '../components/SignupStep/ResendOTP.jsx';
import Background from '../assets/backgoundImage.jpg';
import Step1 from '../components/SignupStep/Step1.jsx';
import Step2 from '../components/SignupStep/Step2.jsx';
import { Box } from '@mui/system';
function SignUp() {
	return (
		<Box className="row-layout">
			<Box
				sx={{
					width: '100%',
					maxWidth: '650px',
					'@media screen and (max-width: 600px)': {
						display: 'none',
					},
				}}
			>
				<img
					src={Background}
					alt="background"
					style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
				/>
			</Box>
			<Box className="column-layout" sx={{ width: '100%', maxWidth: '685px' }}>
				<Routes>
					<Route path="/" element={<Step1 />}></Route>
					<Route path="/verify-email" element={<Step2 />}></Route>
					<Route path="/resend-otp" element={<ResendOTP />}></Route>
				</Routes>
			</Box>
		</Box>
	);
}

export default SignUp;
