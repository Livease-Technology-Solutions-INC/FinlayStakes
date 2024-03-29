import React, { useEffect, useState } from 'react';
import useAxios from '../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';

function ExpenseData() {
	const [Expense, setExpense] = useState('');
	const api = useAxios();

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('authTokens');
			if (token) {
				const decode = jwtDecode(token);
				const user_id = decode.user_id;
				try {
					const ExpenseResponse = await api.get(
						`/expense_details/${encodeURIComponent(user_id)}/`,
					);
					setExpense(ExpenseResponse.data);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fetchData();
	}, []);

	return [
		{
			name: 'Utility Bill',
			stat: 'AED' + (Expense.utility_bill || "0"),
			status: 'increase',
			percentage: '0.25%',
			color: '#06B48A',
		},
		{
			name: 'Loan',
			stat: 'AED' + (Expense.loan || "0"),
			status: 'decrease',
			percentage: '0.25%',
			color: '#6560F0',
		},
		{
			name: 'Rent',
			stat: 'AED' + (Expense.rent || "0"),
			status: 'decrease',
			percentage: '0.25%',
			color: '#3DD9EB',
		},
		{
			name: 'Shopping',
			stat: 'AED' + (Expense.shopping_expense || "0"),
			status: 'increase',
			percentage: '0.35%',
			color: '#D76B66',
		},
		{
			name: 'Leisure',
			stat: 'AED' + (Expense.leisure_expense || "0"),
			status: 'decrease',
			percentage: '0.15%',
			color: '#9F00AD',
		},
	];
}

export default ExpenseData;
