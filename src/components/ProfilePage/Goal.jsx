// Goals.js
import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from '../../assets/carbon_next-outline.svg';
import backChevron from '../../assets/carbon_back-outline.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateGoals } from '../../state-management/reducer/goalsSlice';
import AuthContext from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const Goals = ({ onNext, onPrev }) => {
	const goals = useSelector((state) => state.goals);
	const dispatch = useDispatch();
	const { goalsURL } = useContext(AuthContext);
	const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var user_id = decode.user_id;
	}

	const handleChange = (field, value) => {
		dispatch(updateGoals({ [field]: value }));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChange();
		goalsURL(
			user_id,
			goals.childrenEducation,
			goals.universityCapital,
			goals.universityYearsLeft,
			goals.retire,
			goals.retirementIncome,
			goals.incomeIncaseOfDeath,
			goals.incomeIncaseOfCriticalIllness,
			goals.incomeIncaseOfDisability,
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
				Goals
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
					label={"Children's Education"}
					placeholder={"Children's Education"}
					value={goals.childrenEducation}
					onChange={(childrenEducation) =>
						handleChange('childrenEducation', childrenEducation)
					}
				/>
				<InputField
					label={'Capital Required for University'}
					placeholder={'Capital Required for University'}
					value={goals.universityCapital}
					onChange={(universityCapital) =>
						handleChange('universityCapital', universityCapital)
					}
				/>
				<InputField
					label={'Years Left for University'}
					placeholder={'Years Left for University'}
					value={goals.universityYearsLeft}
					onChange={(universityYearsLeft) =>
						handleChange('universityYearsLeft', universityYearsLeft)
					}
				/>
				<InputField
					label={'Where would you like to Retire?'}
					placeholder={'Where would you like to Retire?'}
					value={goals.retire}
					onChange={(retire) => handleChange('retire', retire)}
				/>
				<InputField
					label={'Income Required after Retirement?'}
					placeholder={'Income Required after Retirement?'}
					value={goals.retirementIncome}
					onChange={(retirementIncome) =>
						handleChange('retirementIncome', retirementIncome)
					}
				/>
				<InputField
					label={'Annual Income for Family Incase of Death'}
					placeholder={'Annual Income for Family Incase of Death'}
					value={goals.incomeIncaseOfDeath}
					onChange={(incomeIncaseOfDeath) =>
						handleChange('incomeIncaseOfDeath', incomeIncaseOfDeath)
					}
				/>
				<InputField
					label={'Annual Income for Family Incase of Critical Illness'}
					placeholder={'Annual Income for Family Incase of Critical Illness'}
					value={goals.incomeIncaseOfCriticalIllness}
					onChange={(incomeIncaseOfCriticalIllness) =>
						handleChange(
							'incomeIncaseOfCriticalIllness',
							incomeIncaseOfCriticalIllness,
						)
					}
				/>
				<InputField
					label={'Annual Income for Family Incase of Disability'}
					placeholder={'Annual Income for Family Incase of Disability'}
					value={goals.incomeIncaseOfDisability}
					onChange={(incomeIncaseOfDisability) =>
						handleChange('incomeIncaseOfDisability', incomeIncaseOfDisability)
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
					type='submit'
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

export default Goals;
