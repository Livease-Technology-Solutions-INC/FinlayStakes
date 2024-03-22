// FinancialPlanningShortfall.js
import React, { useContext } from 'react';
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
	const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var user_id = decode.user_id;
	}

	const handleChange = (field, value) => {
		dispatch(updateFinancialPlanningShortfall({ [field]: value }));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChange();
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
						style={{ marginTop: '16px' }}
					>
						<img src={backChevron} alt="back-chevron"></img>
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
						style={{ marginTop: '16px' }}
					>
						<Typography
							variant="body1"
							sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
						>
							Next Step
						</Typography>
						<img src={nextChevron} alt="next-chevron"></img>
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default FinancialPlanningShortfall;
