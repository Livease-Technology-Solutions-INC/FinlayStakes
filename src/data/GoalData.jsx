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
			stats: 'AED' + (Goal.children_education || "0"),
		},
		{
			header: 'Capital Required for University',
			status: 'Budget',
			stats: 'AED' + (Goal.universityCapital || "0"),
		},
		{
			header: 'Years left for University',
			status: 'Year',
			stats: (Goal.years_left_for_university || "0") + 'Years',
		},
		{
			header: 'Where would you like to retire?',
			status: 'Location',
			stats: (Goal.where_would_you_like_to_retire || "0"),
		},
		{
			header: 'Income required after retirement?',
			status: 'Budget',
			stats: 'AED' + (Goal.income_required_after_retirement || "0"),
		},
		{
			header: 'Annual income for family incase of death',
			status: 'Budget',
			stats: 'AED' + (Goal.annual_income_for_family_incase_of_death || "0"),
		},
		{
			header: 'Annual income for family incase of critical illness',
			status: 'Budget',
			stats: 'AED' + (Goal.annual_income_for_family_incase_of_critical_illness || "0"),
		},
		{
			header: 'Annual income for family incase of disability',
			status: 'Budget',
			stats: 'AED' + (Goal.annual_income_for_family_incase_of_disability || "0"),
		},
	];
}

export default GoalData;
