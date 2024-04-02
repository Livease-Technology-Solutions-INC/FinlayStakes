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
			<Box
				sx={{
					width: '100%',
					maxWidth: '660px',
					maxHeight: '100%',
					'@media screen and (max-width: 830px)': {
						display: 'none',
					},
				}}
			>
				<img
					src={Background}
					alt="background"
					style={{
						maxWidth: '100%',
						height: 'auto',
						objectFit: 'cover',
					}}
				/>
			</Box>
			<Box
				className="column-layout"
				sx={{
					maxWidth: '100%',
					'@media screen and (max-width: 800px)': {
						marginTop: '20px',
					},
				}}
			>
				<Routes>
					<Route path="/" element={<LoginPage />}></Route>
					<Route
						path="/forget-password"
						element={<ForgotPasswordPage />}
					></Route>
					<Route path="/reset-password" element={<ResetPassword />}></Route>
				</Routes>
			</Box>
		</Box>
	);
}

export default Login;
