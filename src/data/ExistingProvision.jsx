import React, { useEffect, useState } from 'react';
import useAxios from '../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';

function ExistingProvisionData() {
	const [ExistingProvision, setExistingProvision] = useState('');
	const api = useAxios();

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('authTokens');
			if (token) {
				const decode = jwtDecode(token);
				const user_id = decode.user_id;
				try {
					const ExistingProvisionResponse = await api.get(
						`/existing_provisions_details/${encodeURIComponent(user_id)}/`,
					);
					setExistingProvision(ExistingProvisionResponse.data);
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
			stat: 'AED' + (ExistingProvision.children_education || "0"),
			color: '#06B48A',
		},
		{
			name: 'Retirement - ',
			stat: 'AED' + (ExistingProvision.retirement || "0"),
			color: '#6560F0',
		},
		{
			name: 'Life Insurance -',
			stat: 'AED' + (ExistingProvision.life_insurance || "0"),
			color: '#3DD9EB',
		},
		{
			name: 'Critical Illness -',
			stat: 'AED' + (ExistingProvision.critical_illness || "0"),
			color: '#D76B66',
		},
		{
			name: 'Disability -',
			stat: 'AED' + (ExistingProvision.disability || "0"),
			color: '#F6CF7D',
		},
	];
}

export default ExistingProvisionData;
