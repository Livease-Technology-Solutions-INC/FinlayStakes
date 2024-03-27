// ExistingProvision.js
import React, { useContext, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from '../../assets/carbon_next-outline.svg';
import backChevron from '../../assets/carbon_back-outline.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateExistingProvisions } from '../../state-management/reducer/existingProvisionsSlice';
import AuthContext from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const ExistingProvision = ({ onNext, onPrev }) => {
	const existingProvisions = useSelector((state) => state.existingProvisions);
	const dispatch = useDispatch();
	const { existingProvisionsDetails } = useContext(AuthContext);
	const [formValid, setFormValid] = useState(false);
	const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var user_id = decode.user_id;
	}
	const handleChange = (field, value) => {
		dispatch(updateExistingProvisions({ [field]: value }));
	};
	const validateForm = () => {
		const requiredFields = [
			'childrenEducation',
			'retirement',
			'lifeInsurance',
			'criticalIllness',
			'disability',
		];
		const isValid = requiredFields.every(
			(field) => !!existingProvisions[field],
		);

		return isValid;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChange();
		const isFormValid = validateForm();
		setFormValid(isFormValid);
		if (isFormValid) {
			existingProvisionsDetails(
				user_id,
				existingProvisions.childrenEducation,
				existingProvisions.retirement,
				existingProvisions.lifeInsurance,
				existingProvisions.criticalIllness,
				existingProvisions.disability,
				user_id,
			);
			onNext();
		}
	};

	return (
		<Box width="100%" display={'flex'} flexDirection={'column'} gap={'32px'}>
			<form onSubmit={handleSubmit}>
				<Typography
					sx={{ fontFamily: 'Inter', color: '#212844', fontWeight: '700' }}
					variant="h5"
				>
					Existing Provisions
				</Typography>
				<Box
					width={'100%'}
					display={'flex'}
					flexWrap={'wrap'}
					flexDirection={'row'}
					gap="52px"
					rowGap={'24px'}
					alignItems={'flex-start'}
				>
					<InputField
						label={'Children’s Education'}
						placeholder={'Children’s Education'}
						value={existingProvisions.childrenEducation}
						onChange={(childrenEducation) =>
							handleChange('childrenEducation', childrenEducation)
						}
						type="number"
					/>
					<InputField
						label={'Life Insurance'}
						placeholder={'Life Insurance'}
						value={existingProvisions.lifeInsurance}
						onChange={(lifeInsurance) =>
							handleChange('lifeInsurance', lifeInsurance)
						}
						type="number"
					/>
					<InputField
						label={'Disability'}
						placeholder={'Disability'}
						value={existingProvisions.disability}
						onChange={(disability) => handleChange('disability', disability)}
						type="number"
					/>
					<InputField
						label={'Retirement'}
						placeholder={'Retirement'}
						value={existingProvisions.retirement}
						onChange={(retirement) => handleChange('retirement', retirement)}
						type="number"
					/>
					<InputField
						label={'Critical Illness'}
						placeholder={'Critical Illness'}
						value={existingProvisions.criticalIllness}
						onChange={(criticalIllness) =>
							handleChange('criticalIllness', criticalIllness)
						}
						type="number"
					/>
				</Box>
				<Box
					position={{ xs: 'absolute', md: 'absolute' }}
					bottom={{ xs: '-80px', md: '-80px' }}
					right={{ xs: '0', md: '135px' }}
					display={'flex'}
					flexDirection={'row'}
					gap={{ xs: '0', md: '16px' }}
					alignSelf={'flex-end'}
				>
					<Button
						sx={{
							color: '#250C77',
							padding: { xs: '0', md: '10px 43px' },
							borderRadius: '8px',
							gap: '8px',
							marginTop: { xs: '40px', md: '20px' },
							height: { xs: 'auto', md: '48px' },
							width: { xs: '100%', md: 'auto' },
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
							marginTop: { xs: '40px', md: '20px' },
							height: { xs: 'auto', md: '48px' },
							width: { xs: '300px', md: 'auto' },
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

export default ExistingProvision;
