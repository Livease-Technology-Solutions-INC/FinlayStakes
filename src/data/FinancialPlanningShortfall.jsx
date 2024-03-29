import React, { useEffect, useState } from 'react';
import useAxios from '../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';

function FinancialPlanningShortfallData() {
	const [FinancialPlanningShortfall, setFinancialPlanningShortfall] = useState('');
	const api = useAxios();

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('authTokens');
			if (token) {
				const decode = jwtDecode(token);
				const user_id = decode.user_id;
				try {
					const FinancialPlanningShortfallResponse = await api.get(
						`/financial_planning_shortfall/${encodeURIComponent(user_id)}/`,
					);
					setFinancialPlanningShortfall(FinancialPlanningShortfallResponse.data);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fetchData();
	}, []);

	return [
		{
			name: 'Children’s  Education -',
			stat: 'AED' + (FinancialPlanningShortfall.children_education || "0"),
			color: '#06B48A',
		},
		{
			name: 'Retirement - ',
			stat: 'AED' + (FinancialPlanningShortfall.retirement || "0"),
			color: '#6560F0',
		},
		{
			name: 'Life Insurance -',
			stat: 'AED' + (FinancialPlanningShortfall.life_insurance || "0"),
			color: '#3DD9EB',
		},
		{
			name: 'Critical Illness -',
			stat: 'AED' + (FinancialPlanningShortfall.critical_illness || "0"),
			color: '#D76B66',
		},
		{
			name: 'Disability -',
			stat: 'AED' + (FinancialPlanningShortfall.disability || "0"),
			color: '#F6CF7D',
		},
	];
}

export default FinancialPlanningShortfallData;
