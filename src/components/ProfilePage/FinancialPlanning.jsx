// FinancialPlanningShortfall.js
import React, { useContext, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from '../../assets/carbon_next-outline.svg';
import backChevron from '../../assets/carbon_back-outline.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateFinancialPlanningShortfall } from '../../state-management/reducer/financialPlanningSlice';
import AuthContext from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const FinancialPlanningShortfall = ({ onNext, onPrev }) => {
	const financialPlanningShortfall = useSelector(
		(state) => state.financialPlanningShortfall,
	);
	const dispatch = useDispatch();
	const { financialPlanningShortfallURL } = useContext(AuthContext);
	const [formValid, setFormValid] = useState(false);
	const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var user_id = decode.user_id;
	}

	const handleChange = (field, value) => {
		dispatch(updateFinancialPlanningShortfall({ [field]: value }));
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
			(field) => !!financialPlanningShortfall[field],
		);

		return isValid;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChange();
		const isFormValid = validateForm();
		setFormValid(isFormValid);
		if (isFormValid) {
			financialPlanningShortfallURL(
				user_id,
				financialPlanningShortfall.childrenEducation,
				financialPlanningShortfall.retirement,
				financialPlanningShortfall.lifeInsurance,
				financialPlanningShortfall.criticalIllness,
				financialPlanningShortfall.disability,
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
					Financial Planning Shortfall
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
						value={financialPlanningShortfall.childrenEducation}
						onChange={(childrenEducation) =>
							handleChange('childrenEducation', childrenEducation)
						}
					/>
					<InputField
						label={'Life Insurance'}
						placeholder={'Life Insurance'}
						value={financialPlanningShortfall.lifeInsurance}
						onChange={(lifeInsurance) =>
							handleChange('lifeInsurance', lifeInsurance)
						}
					/>
					<InputField
						label={'Disability'}
						placeholder={'Disability'}
						value={financialPlanningShortfall.disability}
						onChange={(disability) => handleChange('disability', disability)}
					/>
					<InputField
						label={'Retirement'}
						placeholder={'Retirement'}
						value={financialPlanningShortfall.retirement}
						onChange={(retirement) => handleChange('retirement', retirement)}
					/>
					<InputField
						label={'Critical Illness'}
						placeholder={'Critical Illness'}
						value={financialPlanningShortfall.criticalIllness}
						onChange={(criticalIllness) =>
							handleChange('criticalIllness', criticalIllness)
						}
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

export default FinancialPlanningShortfall;
