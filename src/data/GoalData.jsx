import React, { useEffect, useState } from 'react';
import useAxios from '../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';

function GoalData() {
	const [Goal, setGoal] = useState('');
	const api = useAxios();

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('authTokens');
			if (token) {
				const decode = jwtDecode(token);
				const user_id = decode.user_id;
				try {
					const GoalResponse = await api.get(
						`/goals/${encodeURIComponent(user_id)}/`,
					);
					setGoal(GoalResponse.data);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fetchData();
	}, []);

	return [
		{
			header: "Children's Education",
			status: 'Budget',
			stats: 'AED' + Goal.children_education,
		},
		{
			header: 'Capital Required for University',
			status: 'Budget',
			stats: 'AED' + Goal.universityCapital,
		},
		{
			header: 'Years left for University',
			status: 'Year',
			stats: Goal.years_left_for_university + 'Years',
		},
		{
			header: 'Where would you like to retire?',
			status: 'Location',
			stats: Goal.where_would_you_like_to_retire,
		},
		{
			header: 'Income required after retirement?',
			status: 'Budget',
			stats: 'AED' + Goal.income_required_after_retirement,
		},
		{
			header: 'Annual income for family incase of death',
			status: 'Budget',
			stats: 'AED' + Goal.annual_income_for_family_incase_of_death,
		},
		{
			header: 'Annual income for family incase of critical illness',
			status: 'Budget',
			stats: 'AED' + Goal.annual_income_for_family_incase_of_critical_illness,
		},
		{
			header: 'Annual income for family incase of disability',
			status: 'Budget',
			stats: 'AED' + Goal.annual_income_for_family_incase_of_disability,
		},
	];
}

export default GoalData;
