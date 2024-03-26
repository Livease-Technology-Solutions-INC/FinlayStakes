// ExpensesDetail.js
import React, { useContext, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from '../../assets/carbon_next-outline.svg';
import backChevron from '../../assets/carbon_back-outline.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateExpensesDetail } from '../../state-management/reducer/expensesDetailSlice';
import AuthContext from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const ExpensesDetail = ({ onNext, onPrev }) => {
	const expensesDetail = useSelector((state) => state.expensesDetail);
	const dispatch = useDispatch();
	const { expenseDetails } = useContext(AuthContext);
	const [formValid, setFormValid] = useState(false);
	const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var user_id = decode.user_id;
	}

	const handleChange = (field, value) => {
		dispatch(updateExpensesDetail({ [field]: value }));
	};
	const validateForm = () => {
		const requiredFields = [
			'utilityBill',
			'loan',
			'rent',
			'shoppingExpense',
			'leisureExpense',
			'totalExpenses',
			'medicalExpense',
		];
		const isValid = requiredFields.every((field) => !!expensesDetail[field]);

		return isValid;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChange();
		const isFormValid = validateForm();
		setFormValid(isFormValid);
		if (isFormValid) {
			expenseDetails(
				user_id,
				expensesDetail.utilityBill,
				expensesDetail.loan,
				expensesDetail.rent,
				expensesDetail.shoppingExpense,
				expensesDetail.leisureExpense,
				expensesDetail.totalExpenses,
				expensesDetail.medicalExpense,
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
					Expense Details
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
						Fixed Expenses
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
							label={'Utility Bill'}
							placeholder={'Utility Bill'}
							value={expensesDetail.utilityBill}
							onChange={(utilityBill) =>
								handleChange('utilityBill', utilityBill)
							}
						/>
						<InputField
							label={'Rent'}
							placeholder={'Rent'}
							value={expensesDetail.rent}
							onChange={(rent) => handleChange('rent', rent)}
						/>
						<InputField
							label={'Loan'}
							placeholder={'Loan'}
							value={expensesDetail.loan}
							onChange={(loan) => handleChange('loan', loan)}
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
						Other Expenses
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
							label={'Shopping Expense'}
							placeholder={'Shopping Expense'}
							value={expensesDetail.shoppingExpense}
							onChange={(shoppingExpense) =>
								handleChange('shoppingExpense', shoppingExpense)
							}
						/>
						<InputField
							label={'Leisure Expense'}
							placeholder={'Leisure Expense'}
							value={expensesDetail.leisureExpense}
							onChange={(leisureExpense) =>
								handleChange('leisureExpense', leisureExpense)
							}
						/>
						<InputField
							label={'Total Expenses'}
							placeholder={'Total Expenses'}
							value={expensesDetail.totalExpenses}
							onChange={(totalExpenses) =>
								handleChange('totalExpenses', totalExpenses)
							}
						/>
						<InputField
							label={'Medical Expense'}
							placeholder={'Medical Expense'}
							value={expensesDetail.medicalExpense}
							onChange={(medicalExpense) =>
								handleChange('medicalExpense', medicalExpense)
							}
						/>
					</Box>
				</Box>
				<Box
					position={{ xs: 'absolute', md: 'absolute' }}
					bottom={{ xs: '30', md: '-80px' }}
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

export default ExpensesDetail;
