import React, { useContext, useState } from 'react';
import Logo from '../../assets/Finlay Stakes-01-big.svg';
import InputField from '../../components/Input';
import {
	Box,
	Button,
	Typography,
	Snackbar,
	Alert,
	Divider,
} from '@mui/material';
import {
	validateEmail,
	validateNotEmpty,
} from '../../resources/functions';
import google from '../../assets/flat-color-icons_google.svg';
import facebook from '../../assets/logos_facebook.svg';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const ForgotPasswordPage = () => {
	const [email, setEmail] = useState('');
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');

	const navigate = useNavigate();
	const { loginUser } = useContext(AuthContext)


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
			navigate('/reset-password');
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		handleContinue();
	};
	
	const navigateSignup = () => {
		navigate('/register');
	};

	return (
			<Box>
				<img src={Logo} style={{ marginBottom: '72px' }} />
				<Box
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
					justifyContent={'flex-start'}
					gap="8px"
				>
					<Snackbar
						open={snackbarOpen}
						autoHideDuration={6000}
						onClose={() => setSnackbarOpen(false)}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						sx={{ width: '400px' , textAlign:"left"}}

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
					<Typography
						sx={{
							fontFamily: 'Inter, sans-serif',
							fontWeight: '700',
							color: '#250C77',
							marginBottom: '32px',
						}}
						variant="h5"
					>
					Forgot Password
					</Typography>
				</Box>
				
					<Typography
						variant="body2"
						style={{
							color: '#9397BB',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 'Regular',
							marginBottom: '32px',
							textAlign: "left"
						}}
					>
						Please enter your email. A password reset link will be sent to you on your email address.
					</Typography>
			
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
						onClick={handleSubmit}
						>
						<Typography
							variant="body1"
							style={{
								fontFamily: 'Inter, sans-serif',
								fontWeight: '600',
								fontSize: '16px',
								textTransform: 'none',
							}}
						>
							Forgot Password
						</Typography>
					</Button>
					<Box
						width="100%"
						display={'flex'}
						flexDirection={'row'}
						alignItems="center"
						gap="14px"
						margin={'30px 0px'}
					>
						<Divider style={{ flexGrow: 1 }} />
						<Typography
							variant="body1"
							style={{
								fontFamily: 'Inter, sans-serif',
								fontWeight: '500',
								fontSize: '16px',
								textTransform: 'none',
								color: '#9397BB',
							}}
						>
							or
						</Typography>
						<Divider style={{ flexGrow: 1 }} />
					</Box>
					<Box
						display={'flex'}
						flexDirection={'row'}
						gap={'24px'}
						justifyContent={'space-evenly'}
					>
						<Button
							sx={{
								color: '#250C77',
								padding: '10px 43px',
								border: '1px solid #DEDFEE',
								borderRadius: '8px',
								gap: '8px',
								'&:hover': { backgroundColor: '#fff' },
							}}
						>
							<img src={google}></img>
							<Typography
								variant="body1"
								sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
							>
								Google
							</Typography>
						</Button>
						<Button
							sx={{
								color: '#250C77',
								padding: '10px 43px',
								border: '1px solid #DEDFEE',
								borderRadius: '8px',
								gap: '8px',
								'&:hover': { backgroundColor: '#fff' },
							}}
						>
							<img src={facebook}></img>
							<Typography
								variant="body1"
								sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
							>
								Facebook
							</Typography>
						</Button>
					</Box>
					<Box
						display="flex"
						width="100%"
						justifyContent={'center'}
						alignItems={'center'}
						marginTop={'32px'}
					>
						<Typography
							variant="body2"
							color="#9397BB"
							sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 'Regular' }}
						>
							Don’t have an account?{' '}
							<span
								onClick={navigateSignup}
								style={{
									color: '#004EFD',
									fontWeight: '600',
									cursor: 'pointer',
								}}
							>
								{' '}
								Sign up today!
							</span>
						</Typography>
					</Box>
			</Box>
	);
};

export default ForgotPasswordPage;
