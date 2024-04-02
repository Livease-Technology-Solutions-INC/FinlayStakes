import React, { useContext, useState } from 'react';
import Logo from '../../assets/Finlay Stakes-01-big.svg';
import InputField from '../../components/Input';
import passwordEye from '../../assets/quill_eye-closed.svg';
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
	validatePassword,
	validateNotEmpty,
} from '../../resources/functions';
import google from '../../assets/flat-color-icons_google.svg';
import facebook from '../../assets/logos_facebook.svg';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
	const [newPassword, setNewPassword] = useState('');
	const [newPasswordVisible, setnewPasswordVisible] = useState(false);
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [greenSnackbarOpen, setGreenSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');

	const navigate = useNavigate();
	const { loginUser } = useContext(AuthContext);

	const handleContinue = () => {
		if (!validateNotEmpty(confirmNewPassword)) {
			setSnackbarMessage('Please fill password fields.');
			setSnackbarOpen(true);
			return;
		} else if (!validatePassword(confirmNewPassword)) {
			setSnackbarMessage(
				'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
			);
			setSnackbarOpen(true);
			return;
		} else if (newPassword !== confirmNewPassword) {
			setSnackbarMessage('Passwords do not match.');
			setSnackbarOpen(true);
			return;
		} else {
			setSnackbarMessage('Your password is reset successfully.');
			setGreenSnackbarOpen(true);
			setTimeout(() => {
				setSnackbarMessage('You will be redirecting to login page.');
			}, 2000);

			setTimeout(() => {
				setGreenSnackbarOpen(false);
				navigate('/login');
			}, 5000);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		handleContinue();
	};
	const togglePasswordVisibility = () => {
		setnewPasswordVisible(!newPasswordVisible);
	};
	const toggleConfirmPasswordVisibility = () => {
		setConfirmPasswordVisible(!confirmPasswordVisible);
	};
	const navigateSignup = () => {
		navigate('/register');
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
				<Snackbar
					ContentProps={{
						backgroundColor: 'green',
						color: 'white',
					}}
					open={greenSnackbarOpen}
					autoHideDuration={6000}
					onClose={() => setGreenSnackbarOpen(false)}
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
					ResetPassword
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
					label={'Choose a new Password'}
					value={newPassword}
					rightIcon={
						<img
							src={newPasswordVisible ? passwordEye : passwordEye}
							onClick={togglePasswordVisibility}
							style={{ cursor: 'pointer' }}
							loading="lazy"
						/>
					}
					placeholder="Choose a password"
					type={newPasswordVisible ? 'text' : 'password'}
					onChange={(value) => setNewPassword(value)}
					required
					maxWidth="685px"
				/>
				<InputField
					label={'Confirm your new Password'}
					value={confirmNewPassword}
					rightIcon={
						<img
							src={confirmPasswordVisible ? passwordEye : passwordEye}
							onClick={toggleConfirmPasswordVisibility}
							style={{ cursor: 'pointer' }}
							loading="lazy"
						/>
					}
					placeholder="Choose a password"
					type={confirmPasswordVisible ? 'text' : 'password'}
					onChange={(value) => setConfirmNewPassword(value)}
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
					marginTop: '48px',
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
					Reset Password{' '}
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
					<img src={google} loading="lazy"></img>
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
					<img src={facebook} loading="lazy"></img>
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

export default ResetPassword;
