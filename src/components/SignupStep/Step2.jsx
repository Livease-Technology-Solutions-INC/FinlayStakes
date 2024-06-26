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
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Step2 = ({ email }) => {
	const [otp, setOTP] = useState(['', '', '', '', '', '']);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const { verifyEmail } = useContext(AuthContext);
	const storedEmail = localStorage.getItem('email');
	const handleChange = (index, value) => {
		const newOTP = [...otp];
		newOTP[index] = value;
		setOTP(newOTP);
	};
	const navigate = useNavigate();
	const handleKeyDown = (event, index) => {
		if (event.key === 'Backspace' && index > 0 && !otp[index]) {
			const newOTP = [...otp];
			newOTP[index - 1] = '';
			setOTP(newOTP);
		} else if (event.key.match(/[0-9]/) && index < 5 && !otp[index]) {
			const newOTP = [...otp];
			newOTP[index] = event.key;
			setOTP(newOTP);
		}
	};
	const handleContinue = () => {
		const otpString = otp.join('');
		console.log('your otp is' + otp);
		verifyEmail(storedEmail, otpString);
	};
	const handleSubmit = async (e) => {
		handleContinue();
		navigate('/login');
	};

	const handleResendOTP = () => {
		navigate('/register/resend-otp');
	};
	return (
		<Box>
			<img
				src={Logo}
				style={{
					marginBottom: '20px',
					width: '320px',
					height: '46px',
					maxWidth: '100%',
					height: 'auto',
				}}
				loading="lazy"
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
					Verify your email
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
					We sent a code to {storedEmail}
				</Typography>
			</Box>
			<Box
				width="100%"
				display="flex"
				flexDirection="column"
				alignItems="center"
				gap="24px"
			>
				<Box
					display="flex"
					width="100%"
					flexDirection="column"
					alignItems="center"
					gap="24px"
				>
					<form onSubmit={handleSubmit}>
						<Box
							display="flex"
							width="100%"
							alignItems="center"
							justifyContent="flex-start"
							gap="24px"
						>
							{otp.map((digit, index) => (
								<Box
									width="100%"
									display="flex"
									alignItems="center"
									justifyContent="space-between"
									border="none"
									key={index}
									marginRight={0}
								>
									<TextField
										type="text"
										variant="outlined"
										className="otp-box"
										size="large"
										value={digit}
										inputProps={{ maxLength: 1 }}
										onChange={(e) => handleChange(index, e.target.value)}
										onKeyDown={(e) => handleKeyDown(e, index)}
										sx={{
											'& .MuiInputBase-input': {
												textAlign: 'center',
												lineHeight: '29.5px',
												fontFamily: 'Inter, sans-serif',
												fontWeight: 'bold',
												color: '#212844',
												padding: '10px',
												margin: '0',
												border: '1px solid #250C77',
												borderRadius: '4px',
											},
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											padding: '0',
											border: 'none',
											maxWidth: '48px',
											minWidth: '35px'
										}}
									/>
								</Box>
							))}
						</Box>
						<Box display="flex" width="100%">
							<Typography
								variant="body2"
								color="#9397BB"
								sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 'Regular' }}
							>
								Didn’t get a code?{' '}
								<span
									onClick={handleResendOTP}
									style={{
										color: '#004EFD',
										fontWeight: '600',
										cursor: 'pointer',
									}}
								>
									{' '}
									Click to resend
								</span>
							</Typography>
						</Box>
						<Button
							style={{
								width: '100%',
								backgroundColor: '#250C77',
								color: '#fff',
								padding: '14px 0',
								marginTop: '32px',
								borderRadius: '10px',
							}}
							variant="contained"
							type="submit"
						>
							<Typography
								variant="body1"
								style={{ fontFamily: 'Inter, sans-serif' }}
							>
								Finish up
							</Typography>
						</Button>
					</form>
				</Box>
			</Box>
		</Box>
	);
};

export default Step2;
