import React, { useEffect, useState } from 'react';
import useAxios from '../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';

function ExistingPoliciesData() {
	const [ExistingPolicies, setExistingPolicies] = useState('');
	const api = useAxios();

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('authTokens');
			if (token) {
				const decode = jwtDecode(token);
				const user_id = decode.user_id;
				try {
					const ExistingPoliciesResponse = await api.get(
						`/existing_policies/${encodeURIComponent(user_id)}/`,
					);
					setExistingPolicies(ExistingPoliciesResponse.data);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fetchData();
	}, []);

	return [
		{
			header: 'Policy No',
			childrenEducation: ExistingPolicies.policy_no,
			lifeInsurance: ExistingPolicies.life_insurance_policy_no,
			retirement: ExistingPolicies.retirement_policy_no,
		},
		{
			header: 'Date of Commencement',
			childrenEducation: ExistingPolicies.date_of_commencement,
			lifeInsurance: ExistingPolicies.life_insurance_date_of_commencement,
			retirement: ExistingPolicies.retirement_date_of_commencement,
		},
		{
			header: 'Annual Premium',
			childrenEducation:  ExistingPolicies.annual_premium,
			lifeInsurance:  ExistingPolicies.life_insurance_annual_premium,
			retirement: ExistingPolicies.retirement_annual_premium,
		},
		{
			header: 'Term',
			childrenEducation: ExistingPolicies.term,
			lifeInsurance: ExistingPolicies.life_insurance_term,
			retirement: ExistingPolicies.retirement_term,
		},
		{
			header: 'Date of Maturity',
			childrenEducation: ExistingPolicies.date_of_maturity,
			lifeInsurance: ExistingPolicies.life_insurance_date_of_maturity,
			retirement: ExistingPolicies.retirement_date_of_maturity,
		},
		{
			header: 'Benefits',
			childrenEducation: ExistingPolicies.benefits,
			lifeInsurance: ExistingPolicies.life_insurance_benefits,
			retirement: ExistingPolicies.retirement_benefits,
		},
	];
}

export default ExistingPoliciesData;
