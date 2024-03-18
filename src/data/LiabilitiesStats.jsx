import React, { useEffect, useState } from 'react';
import useAxios from '../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';

function LiabilitiesData() {
	const [Liabilities, setLiabilities] = useState('');
	const api = useAxios();

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('authTokens');
			if (token) {
				const decode = jwtDecode(token);
				const user_id = decode.user_id;
				try {
					const LiabilitiesResponse = await api.get(
						`/liability_details/${encodeURIComponent(user_id)}/`,
					);
					setLiabilities(LiabilitiesResponse.data);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fetchData();
	}, []);

	return [
		{
			name: 'Bank Loans',
			stat: 'AED' + Liabilities.bank_loans,
			status: 'increase',
			percentage: '0.25%',
			color: '#06B48A',
		},
		{
			name: 'Credit Card Outstanding',
			stat: 'AED' + Liabilities.credit_card_outstanding,
			status: 'decrease',
			percentage: '0.25%',
			color: '#6560F0',
		},
		{
			name: 'Mortgages',
			stat: 'AED' + Liabilities.mortages,
			status: 'decrease',
			percentage: '0.25%',
			color: '#3DD9EB',
		},
		{
			name: 'Auto Loans',
			stat: 'AED' + Liabilities.auto_loans,
			status: 'increase',
			percentage: '0.35%',
			color: '#D76B66',
		},
		{
			name: 'Hand Loans',
			stat: 'AED' + Liabilities.hand_loans,
			status: 'increase',
			percentage: '0.15%',
			color: '#F6CF7D',
		},
	];
}

export default LiabilitiesData;
