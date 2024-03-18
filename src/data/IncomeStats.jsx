import React, { useEffect, useState } from 'react';
import useAxios from '../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';
import incomeIcon from '../assets/income.svg';
import expensesIcon from '../assets/expenses.svg';
import liabilitiesIcon from '../assets/liabilities.svg';
import assetsIcon from '../assets/assets.svg';

function IncomeData() {
	const [Income, setIncome] = useState('');
	const api = useAxios();

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('authTokens');
			if (token) {
				const decode = jwtDecode(token);
				const user_id = decode.user_id;
				try {
					const incomeResponse = await api.get(
						`/income_details/${encodeURIComponent(user_id)}/`,
					);
					setTotalIncome(incomeResponse.data);
					console.log;
				} catch (error) {
					console.log(error);
				}
			}
		};

		fetchData();
	}, [api]);

	useEffect(() => {
		console.log('Income' + Income);
	}, [Income]);

	return [
		{
			name: 'Interest',
			stat: 'AED20,943',
			status: 'increase',
			percentage: '0.25%',
			color: '#06B48A',
		},
		{
			name: 'Bank Returns',
			stat: 'AED2,300',
			status: 'decrease',
			percentage: '0.25%',
			color: '#6560F0',
		},
		{
			name: 'Income from Property',
			stat: 'AED2,700',
			status: 'decrease',
			percentage: '0.25%',
			color: '#3DD9EB',
		},
		{
			name: 'Salary',
			stat: 'AED26,700',
			status: 'increase',
			percentage: '0.35%',
			color: '#D76B66',
		},
		{
			name: 'Bonus',
			stat: 'AED25,700',
			status: 'increase',
			percentage: '0.15%',
			color: '#F6CF7D',
		},
	];
}

export default IncomeData;
