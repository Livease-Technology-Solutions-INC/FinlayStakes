import React, { useState, useContext } from 'react';
import Logo from '../../assets/Finlay Stakes-01-big.svg';
import Background from '../../assets/backgoundImage.jpg';
import {
	Box,
	Button,
	Typography,
	Snackbar,
	TextField,
	Alert,
} from '@mui/material';
import InputField from '../../components/Input';
import { validateEmail, validateNotEmpty } from '../../resources/functions';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const ResendOTP = () => {
	const [email, setEmail] = useState('');
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const { resendOTP } = useContext(AuthContext);
	const storedEmail = localStorage.getItem('email');

	const navigate = useNavigate();

	const handleContinue = () => {
		if (!validateNotEmpty(email)) {
			setSnackbarMessage('Please fill in email.');
			setSnackbarOpen(true);
			return;
		} else if (!validateEmail(email)) {
			setSnackbarMessage('Please enter a valid email.');
			setSnackbarOpen(true);
			return;
		} else {
			resendOTP(storedEmail);
			navigate('/register/verify-email');
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleContinue();
	};
	return (
		<Box>
			<form onSubmit={handleSubmit}>
				<img
					src={Logo}
					style={{
						marginBottom: '20px',
						width: '320px',
						height: '46px',
						maxWidth: '100%',
						height: 'auto',
					}}
				/>
				<Box
					width="100%"
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
					gap="8px"
				>
					<Typography
						style={{
							fontFamily: 'Inter, sans-serif',
							fontWeight: '700',
							lineHeight: '29.05px',
							color: '#250C77',
						}}
						variant="h5"
					>
						Enter your email
					</Typography>
					<Typography
						variant="body2"
						style={{
							color: '#9397BB',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 'Regular',
							marginBottom: '32px',
						}}
					>
						An OTP will be sent to your email address{' '}
					</Typography>
				</Box>
				<Box
					width="100%"
					display="flex"
					flexDirection="column"
					alignItems="center"
					gap="24px"
				>
					<InputField
						label={'Enter your Email Adress'}
						value={email}
						placeholder="Enter your email"
						type="email"
						onChange={(value) => setEmail(value)}
						required
						maxWidth="685px"
					/>
				</Box>
				<Snackbar
					open={snackbarOpen}
					autoHideDuration={6000}
					onClose={() => setSnackbarOpen(false)}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					sx={{ width: '400px', textAlign: 'left' }}
				>
					<Alert
						elevation={6}
						variant="filled"
						onClose={() => setSnackbarOpen(false)}
						severity="error"
					>
						{snackbarMessage}
					</Alert>
				</Snackbar>
				<Button
					style={{
						width: '100%',
						backgroundColor: '#250C77',
						color: '#fff',
						padding: '14px 0',
						marginTop: '48px',
						borderRadius: '10px',
					}}
					variant="contained"
					type="submit"
				>
					<Typography
						variant="body1"
						style={{ fontFamily: 'Inter, sans-serif' }}
					>
						Send OTP
					</Typography>
				</Button>
			</form>
		</Box>
	);
};

export default ResendOTP;
