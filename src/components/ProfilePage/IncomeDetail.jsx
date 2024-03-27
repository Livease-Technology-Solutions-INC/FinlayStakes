import React, { useContext, useState} from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from '../../assets/carbon_next-outline.svg';
import backChevron from '../../assets/carbon_back-outline.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateIncomeDetail } from '../../state-management/reducer/incomeDetailSlice';
import AuthContext from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const IncomeDetail = ({ onNext, onPrev }) => {
	const incomeDetail = useSelector((state) => state.incomeDetail);
	const dispatch = useDispatch();
	const { incomeDetails } = useContext(AuthContext);
	const [formValid, setFormValid] = useState(false);
	const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var user_id = decode.user_id;
	}

	const handleChange = (field, value) => {
		dispatch(updateIncomeDetail({ [field]: value }));
	};

	const validateForm = () => {
        const requiredFields = ['Interest', 'propertyIncome', 'bankReturns', 'salary', 'totalIncome', 'bonus'];
        const isValid = requiredFields.every(field => !!incomeDetail[field]);
        
        return isValid;
    };
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChange();
		const isFormValid = validateForm(); 
		setFormValid(isFormValid);
		console.log(isFormValid)
		console.log(incomeDetail)
		if (isFormValid) {
			incomeDetails(
				user_id,
				incomeDetail.Interest,
				incomeDetail.bankReturns,
				incomeDetail.propertyIncome,
				incomeDetail.salary,
				incomeDetail.totalIncome,
				incomeDetail.bonus,
				user_id,
			);
			console.log(incomeDetail);
			onNext();
		}
	};

	return (
		<Box width="100%" display={'flex'} flexDirection={'column'} gap={'32px'}>
			<form onSubmit={handleSubmit}>
				<Typography
					sx={{ fontFamily: 'Inter', color: '#212844', fontWeight: '700', fontSize: { xs: '1.5rem', md: '2rem' }, }}
					variant="h5"
				>
					Income Details
				</Typography>
				<Box
					width={'100%'}
					display={'flex'}
					flexDirection={'column'}
					gap={'24px'}
				>
					<Typography
						sx={{
							color: '#212844',
							fontWeight: '600',
							fontSize: '20px',
							fontFamily: 'Inter, sans-serif',
							lineHeight: '24.2px',
							
						}}
					>
						Saving Details
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
							label={'Interest'}
							placeholder={'Interest'}
							value={incomeDetail.Interest}
							onChange={(Interest) => handleChange('Interest', Interest)}
							required={true}
							type="number"
						/>
						<InputField
							label={'Income from Property'}
							placeholder={'Income from Property'}
							value={incomeDetail.propertyIncome}
							onChange={(propertyIncome) =>
								handleChange('propertyIncome', propertyIncome)
							}
							required={true}
							type="number"
						/>
						<InputField
							label={'Bank Returns'}
							placeholder={'Bank Returns'}
							value={incomeDetail.bankReturns}
							onChange={(bankReturns) =>
								handleChange('bankReturns', bankReturns)
							}
							required={true}
							type="number"
						/>
					</Box>
					<Typography
						sx={{
							color: '#212844',
							fontWeight: '600',
							fontSize: '20px',
							fontFamily: 'Inter, sans-serif',
						}}
					>
						Non Saving Details
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
							label={'Salary'}
							placeholder={'Salary'}
							value={incomeDetail.salary}
							onChange={(salary) => handleChange('salary', salary)}
							required={true}
							type="number"
						/>
						<InputField
							label={'Total Income'}
							placeholder={'Total Income'}
							value={incomeDetail.totalIncome}
							onChange={(totalIncome) =>
								handleChange('totalIncome', totalIncome)
							}
							required={true}
							type="number"
						/>
						<InputField
							label={'Bonus'}
							placeholder={'Bonus'}
							value={incomeDetail.bonus}
							onChange={(bonus) => handleChange('bonus', bonus)}
							required={true}
							type="number"
						/>
					</Box>
				</Box>
				<Box
					position={{ xs: 'absolute', md: 'absolute' }}
					bottom={{ xs: '30', md: '-80px' }}
					right={{ xs: '0', md: '135px' }}
					display={'flex'}
					flexDirection={'row'}
					gap={{xs: '0', md:"16px"}}
					alignSelf={'flex-end'}
				>
					<Button
						sx={{
							color: '#250C77',
							padding: {xs: "0", md:'10px 43px'},
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

export default IncomeDetail;
