import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import LoginPage from '../components/LoginPages/LoginPage';
import ForgotPasswordPage from '../components/LoginPages/ForgotPassword';
import ResetPassword from '../components/LoginPages/ResetPassword';
import Background from '../assets/backgoundImage.jpg';
import { Box } from '@mui/system';
function Login() {

	return (
		<Box className="row-layout">
			<Box sx={{ width: '100%', maxWidth: '650px' }}>
				<img
					src={Background}
					alt="background"
					style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
				/>
			</Box>
			<Box className="column-layout" sx={{ width: '100%', maxWidth: '685px' }}>
				<Routes>
					<Route path="/" element={<LoginPage />}></Route>
					<Route path="/forget-password" element={<ForgotPasswordPage/>}></Route>
					<Route path="/reset-password" element={<ResetPassword />}></Route>
				</Routes>
			</Box>
		</Box>
	);
}

export default Login;
