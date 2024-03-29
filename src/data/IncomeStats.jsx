import React, { useEffect, useState } from 'react';
import useAxios from '../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';

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
						`/income_details/${encodeURIComponent(user_id)}/`);
						setIncome(incomeResponse.data);
				} catch (error) {
					console.log(error);
				}
			}
		};
	
		fetchData();
	}, []);

	return [
		{
			name: 'Interest',
			stat: 'AED' + (Income.Interest || "0"),
			status: 'increase',
			percentage: '0.25%',
			color: '#06B48A',
		},
		{
			name: 'Bank Returns',
			stat: 'AED' + (Income.bank_returns || "0"),
			status: 'decrease',
			percentage: '0.25%',
			color: '#6560F0',
		},
		{
			name: 'Income from Property',
			stat: 'AED' + (Income.propertyIncome || "0"),
			status: 'decrease',
			percentage: '0.25%',
			color: '#3DD9EB',
		},
		{
			name: 'Salary',
			stat: 'AED' + (Income.salary || "0"),
			status: 'increase',
			percentage: '0.35%',
			color: '#D76B66',
		},
		{
			name: 'Bonus',
			stat: 'AED' + (Income.bonus || "0"),
			status: 'increase',
			percentage: '0.15%',
			color: '#F6CF7D',
		},
	];
}

export default IncomeData;
