import React, { useState, useContext } from 'react';
import Logo from '../../assets/Finlay Stakes-01-big.svg';
import Background from '../../assets/backgoundImage.jpg';
import InputField from '../../components/Input';
import passwordEye from '../../assets/quill_eye-closed.svg';
import {
	Box,
	Button,
	Typography,
	Snackbar,
	Alert,
	FormControl,
	FormGroup,
} from '@mui/material';
import {
	validateEmail,
	validatePassword,
	validateNotEmpty,
} from '../../resources/functions';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const Step1 = ({onNext}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [reEnterPassword, setReEnterPassword] = useState('');
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [reEnterPasswordVisible, setReEnterPasswordVisible] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const [username, setUsername] = useState('')
	const navigate = useNavigate();
    const {registerUser} = useContext(AuthContext)

	const handleInputEmail = (value) => {
		setEmail(value);
	};
	const handleInputPassword = (value) => {
		setPassword(value);
	};
	const handleReEnterPassword = (value) => {
		setReEnterPassword(value);
	};
	const handleContinue = () => {
		if (!validateNotEmpty(email) || !validateNotEmpty(password)) {
			setSnackbarMessage('Please fill in both email and password fields.');
			setSnackbarOpen(true);
			return;
		} else if (!validateEmail(email)) {
			setSnackbarMessage('Please enter a valid email.');
			setSnackbarOpen(true);
			return;
		} else if (!validatePassword(password)) {
			setSnackbarMessage(
				'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
			);
			setSnackbarOpen(true);
			return;
		} else if (password !== reEnterPassword) {
			setSnackbarMessage('Passwords do not match.');
			setSnackbarOpen(true);
			return;
		} else {
			setUsername(email);
			registerUser(email, email, password)
			navigate("/register/verify-email")
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleContinue()
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};
	const togglereEnterPasswordVisibility = () => {
		setReEnterPasswordVisible(!reEnterPasswordVisible);
	};

	return (
				<Box
					
				>
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
							style={{
								fontFamily: 'Inter, sans-serif',
								fontWeight: 'bold',
								color: '#212844',
							}}
							variant="h5"
						>
							Enter your details
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
							Provide your email and choose a password
						</Typography>
					</Box>
					<form onSubmit={handleSubmit} >
					<Box
						width="100%"
						display="flex"
						flexDirection="column"
						alignItems="center"
						gap="24px"
					>
						<InputField
							label={'Enter your email'}
							value={email}
							placeholder="Enter your email"
							type="email"
							onChange={(value) => handleInputEmail(value)}
							required
						/>
						<InputField
							label={'Password'}
							value={password}
							rightIcon={
								<img
									src={passwordVisible ? passwordEye : passwordEye}
									onClick={togglePasswordVisibility}
									style={{ cursor: 'pointer' }}
								/>
							}
							placeholder="Choose a password"
							type={passwordVisible ? 'text' : 'password'}
							onChange={(value) => handleInputPassword(value)}
							required
						/>
						<InputField
							label={'Re-enter Password'}
							value={reEnterPassword}
							rightIcon={
								<img
									src={passwordVisible ? passwordEye : passwordEye}
									onClick={togglereEnterPasswordVisibility}
									style={{ cursor: 'pointer' }}
								/>
							}
							placeholder="Re-enter Password"
							type={reEnterPasswordVisible ? 'text' : 'password'}
							onChange={(value) => handleReEnterPassword(value)}
							required
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
						type='submit'
					>
						<Typography
							variant="body1"
							style={{ fontFamily: 'Inter, sans-serif' }}
						>
							Continue
						</Typography>
					</Button>
					</form>
				</Box>
	);
};

export default Step1;
