// PersonalDetail.js
import React, { useContext } from 'react';
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
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import nextChevron from '../../assets/carbon_next-outline.svg';
import backChevron from '../../assets/carbon_back-outline.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updatePersonalDetail } from '../../state-management/reducer/personalDetailSlice';
import AuthContext from '../../context/AuthContext';
import useAxios from '../../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';

const PersonalDetail = ({ onNext, onPrev }) => {
	const personalDetail = useSelector((state) => state.personalDetail);
	const dispatch = useDispatch();
	const { personalDetails } = useContext(AuthContext);
  const api = useAxios;
  const token = localStorage.getItem('authTokens')
  if (token){
    const decode = jwtDecode(token)
    var user_id = decode.user_id
  }

	const handleChange = (field, value) => {
		dispatch(updatePersonalDetail({ [field]: value }));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChange();
		personalDetails(
			user_id,
			personalDetail.name,
			personalDetail.DOB,
			personalDetail.age,
			personalDetail.maritalStatus,
			personalDetail.phonenumber,
			personalDetail.email,
			personalDetail.residentCountry,
			personalDetail.nationality,
			personalDetail.residentialAddress,
			personalDetail.smoker,
			personalDetail.medicalHistory,
		  user_id,
		);
		onNext();
	};

	return (
		<Box width="100%" display={'flex'} flexDirection={'column'} gap={'32px'}>
			<form onSubmit={handleSubmit}>
				<Typography
					sx={{ fontFamily: 'Inter', color: '#212844', fontWeight: '700' }}
					variant="h5"
				>
					Personal Details
				</Typography>
				<Box
					width={'100%'}
					display={'flex'}
					flexWrap={'wrap'}
					flexDirection={'row'}
					gap="92px"
					rowGap={'24px'}
					alignItems={'flex-start'}
				>
					<InputField
						label={'Name'}
						placeholder={'Name'}
						value={personalDetail.name}
						onChange={(name) => handleChange('name', name)}
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
					/>
					<InputField
						label={'Age'}
						placeholder={'Age'}
						value={personalDetail.age}
						onChange={(age) => handleChange('age', age)}
					/>
					<InputField
						dropdown={true}
						options={[
							{ value: 'single', label: 'Single' },
							{ value: 'married', label: 'Married' },
							{ value: 'divorced', label: 'Divorced' },
							{ value: 'widowed', label: 'Widowed' },
						]}
						label={'Marital Status'}
						placeholder={'Marital Status'}
						value={personalDetail.maritalStatus}
						onChange={(maritalStatus) =>
							handleChange('maritalStatus', maritalStatus)
						}
					/>
					<Box
						width={'100%'}
						display={'flex'}
						flexWrap={'wrap'}
						flexDirection={'row'}
						gap="92px"
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
						/>
						<InputField
							label={'Country of Residence'}
							placeholder={'Country of Residence'}
							value={personalDetail.residentCountry}
							onChange={(residentCountry) =>
								handleChange('residentCountry', residentCountry)
							}
						/>
						<InputField
							label={'Nationality & Country of Birth'}
							placeholder={'Nationality & Country of Birth'}
							value={personalDetail.nationality}
							onChange={(nationality) =>
								handleChange('nationality', nationality)
							}
						/>
						<InputField
							label={'Physical Residential Address'}
							placeholder={'Physical Residential Address'}
							value={personalDetail.residentialAddress}
							onChange={(residentialAddress) =>
								handleChange('residentialAddress', residentialAddress)
							}
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
						/>
					</Box>
				</Box>
				<Box
					position={'absolute'}
					bottom="-100px"
					right="135px"
					display={'flex'}
					flexDirection={'row'}
					gap="16px"
					alignSelf={'flex-end'}
				>
					<Button
						sx={{
							color: '#250C77',
							padding: '10px 43px',
							borderRadius: '8px',
							gap: '8px',
							'&:hover': { backgroundColor: '#fff' },
						}}
						onClick={onPrev}
					>
						<img src={backChevron}></img>
						<Typography
							variant="body1"
							sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
						>
							Back
						</Typography>
					</Button>
					<Button
						sx={{
							backgroundColor: '#250C77',
							color: '#fff',
							padding: '10px 24px',
							borderRadius: '8px',
							gap: '8px',
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
						<img src={nextChevron}></img>
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default PersonalDetail;
