// PersonalDetail.js
import React, { useContext, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
	Radio,
	RadioGroup,
	FormGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material';
import InputField from '../Input';
import ReactFlagsSelect from 'react-flags-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import nextChevron from '../../assets/carbon_next-outline.svg';
import backChevron from '../../assets/carbon_back-outline.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updatePersonalDetail } from '../../state-management/reducer/personalDetailSlice';
import AuthContext from '../../context/AuthContext';
import useAxios from '../../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';
import { isValidPhoneNumber } from '../../resources/functions';

const PersonalDetail = ({ onNext, onPrev }) => {
	const [formValid, setFormValid] = useState(false);
	const personalDetail = useSelector((state) => state.personalDetail);
	const dispatch = useDispatch();

	const { personalDetails } = useContext(AuthContext);
	const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var user_id = decode.user_id;
	}
	const handleChange = (field, value) => {
		if (field === 'DOB') {
			const birthDate = new Date(value);
			const today = new Date();
			const age = today.getFullYear() - birthDate.getFullYear();
			if (
				today.getMonth() < birthDate.getMonth() ||
				(today.getMonth() === birthDate.getMonth() &&
					today.getDate() < birthDate.getDate())
			) {
				dispatch(updatePersonalDetail({ ...personalDetail, age: age - 1 }));
			} else {
				dispatch(
					updatePersonalDetail({
						...personalDetail,
						age,
						DOB: value,
						maritalStatus: 'single',
					}),
				);
			}
		} else {
			dispatch(updatePersonalDetail({ [field]: value }));
		}
	};
	const validateForm = () => {
		const requiredFields = [
			'name',
			'DOB',
			'age',
			'maritalStatus',
			'phoneNumber',
			'email',
			'residentCountry',
			'residentialAddress',
			'smoker',
			'medicalHistory',
		];
		const isValid = requiredFields.every((field) => !!personalDetail[field]);

		return isValid;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChange();
		const isFormValid = validateForm();
		setFormValid(isFormValid);
		if (isFormValid) {
			personalDetails(
				user_id,
				personalDetail.name,
				personalDetail.DOB,
				personalDetail.age,
				personalDetail.maritalStatus,
				personalDetail.phoneNumber,
				personalDetail.email,
				personalDetail.residentCountry,
				personalDetail.nationality,
				personalDetail.residentialAddress,
				personalDetail.smoker,
				personalDetail.medicalHistory,
				user_id,
			);
			onNext();
		}
	};

	return (
		<Box width="100%" display={'flex'} flexDirection={'column'} gap={'32px'}>
			<form onSubmit={handleSubmit}>
				<Typography
					sx={{
						fontFamily: 'Inter',
						color: '#212844',
						fontWeight: '700',
						fontSize: { xs: '1.5rem', md: '2rem' },
					}}
					variant="h5"
				>
					Personal Details
				</Typography>
				<Box
					width={'100%'}
					display={'flex'}
					flexWrap={'wrap'}
					flexDirection={'row'}
					gap={{ xs: '16px', md: '32px' }}
					rowGap={'24px'}
					alignItems={'flex-start'}
				>
					<InputField
						label={'Name'}
						placeholder={'Name'}
						value={personalDetail.name}
						onChange={(name) => handleChange('name', name)}
						required
					/>
					<InputField
						margin="dense"
						id="date"
						type="date"
						InputLabelProps={{
							shrink: true,
						}}
						label={'Date of Birth'}
						placeholder={'Date of Birth'}
						value={personalDetail.DOB}
						onChange={(DOB) => handleChange('DOB', DOB)}
						required
					/>
					<InputField
						label={'Age'}
						placeholder={'Age'}
						value={personalDetail.age}
						onChange={(Age) => handleChange('Age', Age)}
						required
					/>
					<InputField
						label={'Marital Status'}
						placeholder={'Marital Status'}
						dropdown={true}
						options={[
							{ value: 'single', label: 'Single' },
							{ value: 'married', label: 'Married' },
							{ value: 'divorced', label: 'Divorced' },
							{ value: 'widowed', label: 'Widowed' },
						]}
						value={personalDetail.maritalStatus}
						onChange={(maritalStatus) =>
							handleChange('maritalStatus', maritalStatus)
						}
						required
					/>
					<Box
						width={'100%'}
						display={'flex'}
						flexWrap={'wrap'}
						flexDirection={'row'}
						gap={{ xs: '16px', md: '32px' }}
						rowGap={'24px'}
					>
						<Box
							maxWidth="435px"
							width={'100%'}
							display={'flex'}
							flexDirection={'column'}
							gap="24px"
						>
							<Typography
								sx={{
									color: '#212844',
									fontFamily: 'Inter',
									fontWeight: '600',
									lineHeight: '19.36px',
									fontSize: '16px',
								}}
							>
								Phone Number
							</Typography>
							<PhoneInput
								country="us"
								label="Contact Number"
								placeholder="Contact Number"
								value={personalDetail.phoneNumber}
								onChange={(phone) => handleChange('phoneNumber', phone)}
								required
								inputClass="phone-input"
								dropdownStyle={{ width: '200px' }}
								buttonStyle={{
									backgroundColor: 'transparent',
									border: 'none',
									marginRight: '200px',
								}}
								inputProps={{
									style: {
										width: '100%',
										borderRadius: 8,
										backgroundColor: '#fff',
										color: '#212844',
										fontSize: '16px',
										padding: '20px 30px',
										paddingLeft: '48px',
										fontFamily: 'Inter, sans-serif',
										lineHeight: '19.36px',
									},
									sx: {
										'& input::placeholder': {
											color: '#9397BB',
										},
										'& .MuiOutlinedInput-notchedOutline': {
											borderColor: '#DEDFEE',
										},
										'&:hover .MuiOutlinedInput-notchedOutline': {
											borderColor: '#B2B5D0',
										},
										'&:focus .MuiOutlinedInput-notchedOutline': {
											borderColor: '#6560F0',
										},
										'& .Mui-focused .MuiOutlinedInput-notchedOutline': {
											borderColor: '#6560F0',
										},
									},
								}}
							/>
						</Box>
						<InputField
							label={'Email ID'}
							placeholder={'Email ID'}
							value={personalDetail.email}
							onChange={(email) => handleChange('email', email)}
							required
						/>
						<ReactFlagsSelect
							label={'Country of Residence'}
							placeholder={'Country of Residence'}
							value={personalDetail.residentCountry}
							onChange={(residentCountry) =>
								handleChange('residentCountry', residentCountry)
							}
							required
							sx={{
								margin: '0px',
								fontFamily: 'Roboto Helvetica Arial sans-serif',
								fontWeight: '400',
								fontSize: '1rem',
								lineHeight: '1.5',
								letterSpacing: '0.00938em',
								color: '#212844',
								fontFamily: 'Inter',
								fontWeight: '600',
								lineHeight: '19.36px',
								fontSize: '16px',
							}}
						/>
						<InputField
							label={'Nationality'}
							placeholder={'Nationality'}
							value={personalDetail.nationality}
							onChange={(nationality) =>
								handleChange('nationality', nationality)
							}
							required
						/>
						<InputField
							label={'Physical Residential Address'}
							placeholder={'Physical Residential Address'}
							value={personalDetail.residentialAddress}
							onChange={(residentialAddress) =>
								handleChange('residentialAddress', residentialAddress)
							}
							required
						/>
						<Box
							maxWidth="435px"
							width={'100%'}
							display={'flex'}
							flexDirection={'column'}
							gap="24px"
						>
							<FormControl
								component="fieldset"
								style={{ width: '100%', display: 'flex' }}
							>
								<FormLabel component="legend">
									<Typography
										sx={{
											color: '#212844',
											fontFamily: 'Inter',
											fontWeight: '600',
											lineHeight: '19.36px',
											fontSize: '16px',
										}}
									>
										Smoker
									</Typography>
								</FormLabel>
								<RadioGroup
									value={personalDetail.smoker}
									onChange={(event) =>
										handleChange('smoker', event.target.value)
									}
								>
									<FormGroup row>
										<FormControlLabel
											value="yes"
											sx={{ color: '#9397BB' }}
											control={
												<Radio
													sx={{
														'& .MuiSvgIcon-root': {
															fontSize: '1.25rem',
															color: '#250C77',
														},
													}}
												/>
											}
											label="Yes"
										/>
										<FormControlLabel
											value="no"
											sx={{ color: '#9397BB' }}
											control={
												<Radio
													sx={{
														'& .MuiSvgIcon-root': {
															fontSize: '1.25rem',
															color: '#250C77',
														},
													}}
												/>
											}
											label="No"
										/>
									</FormGroup>
								</RadioGroup>
							</FormControl>
						</Box>
						<InputField
							label={'Medical History'}
							placeholder={'Type here'}
							multiline={true}
							rows={'4.5'}
							value={personalDetail.medicalHistory}
							onChange={(medicalHistory) =>
								handleChange('medicalHistory', medicalHistory)
							}
							required
						/>
					</Box>
				</Box>
				<Box
					position={{ xs: 'absolute', md: 'absolute' }}
					bottom={{ xs: '30', md: '-80px' }}
					right={{ xs: '0', md: '135px' }}
					display={'flex'}
					flexDirection={'row'}
					gap="16px"
					alignSelf={'flex-end'}
				>
					<Button
						sx={{
							backgroundColor: '#250C77',
							color: '#fff',
							padding: '10px 24px',
							borderRadius: '8px',
							gap: '8px',
							marginTop: { xs: '40px', md: '20px' },
							height: { xs: 'auto', md: '48px' },
							width: { xs: '100%', md: 'auto' },
							'&:hover': { backgroundColor: '#250C94' },
						}}
						variant="contained"
						type="submit"
					>
						<Typography
							variant="body1"
							sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
						>
							Next Step
						</Typography>
						<img src={nextChevron} alt="Next Icon" /> {/* Alt text added */}
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default PersonalDetail;
