import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const swal = require('sweetalert2');

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
	const [authTokens, setAuthTokens] = useState(() =>
		localStorage.getItem('authTokens')
			? JSON.parse(localStorage.getItem('authTokens'))
			: null,
	);

	const [user, setUser] = useState(() =>
		localStorage.getItem('authTokens')
			? jwtDecode(localStorage.getItem('authTokens'))
			: null,
	);

	const [loading, setLoading] = useState(true);

	const history = useNavigate();

	const loginUser = async (email, password) => {
		const response = await fetch('http://127.0.0.1:8000/app/token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const data = await response.json();

		if (response.status === 200) {
			setAuthTokens(data);
			setUser(jwtDecode(data.access));
			localStorage.setItem('authTokens', JSON.stringify(data));
			history('/');
			swal.fire({
				title: 'Login Successful',
				icon: 'success',
				toast: true,
				timer: 1000,
				position: 'top-right',
				timerProgressBar: true,
				showConfirmButton: false,
			});
		} else {
			// console.log(response.status);
			// console.log("there was a server issue");
			swal.fire({
				title: 'Username or passoword does not exists',
				icon: 'error',
				toast: true,
				timer: 2000,
				position: 'top-right',
				timerProgressBar: true,
				showConfirmButton: false,
			});
		}
	};

	const registerUser = async (email, username, password) => {
		const response = await fetch('http://127.0.0.1:8000/app/register/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				username,
				password,
			}),
		});
		if (response.status === 201 || 200) {
			swal.fire({
				title: 'Registration Successful, Please verify your email',
				icon: 'success',
				toast: true,
				timer: 1000,
				position: 'top-right',
				timerProgressBar: true,
				showConfirmButton: false,
			});
		} else {
			console.log(response.status);
			console.log('there was a server issue');
			swal.fire({
				title: 'An Error Occured ' + response.status,
				icon: 'error',
				toast: true,
				timer: 2000,
				position: 'top-right',
				timerProgressBar: true,
				showConfirmButton: false,
			});
		}
	};

	const logoutUser = () => {
		setAuthTokens(null);
		setUser(null);
		localStorage.removeItem('authTokens');
		history('/login');
	};

	const verifyEmail = async (email, otp_code) => {
		const response = await fetch(
			`http://127.0.0.1:8000/app/verify-email/${encodeURIComponent(email)}/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					otp_code,
				}),
			},
		);
		const data = await response.json();
		if (response.status === 200 || 201) {
			console.log('Email Verified');
			history('/login');
			swal.fire({
				title: 'Verification Successful',
				icon: 'success',
				toast: true,
				timer: 1000,
				position: 'top-right',
				timerProgressBar: true,
				showConfirmButton: false,
			});
		} else {
			console.log(response.status);
			console.log('there was a server issue');
			swal.fire({
				title: 'Invalid otp',
				icon: 'error',
				toast: true,
				timer: 2000,
				position: 'top-right',
				timerProgressBar: true,
				showConfirmButton: false,
			});
		}
	};
	const personalDetails = async (
		id,
		name,
		date_of_birth,
		age,
		marital_status,
		contact_number,
		email_id,
		country_of_residence,
		nationality,
		address,
		smoker,
		medical_history,
		user,
	) => {
		const response = await fetch(
			`http://127.0.0.1:8000/app/personal_details/${encodeURIComponent(id)}/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					name,
					date_of_birth,
					age,
					marital_status,
					contact_number,
					email_id,
					country_of_residence,
					nationality,
					address,
					smoker,
					medical_history,
					user,
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		if (response.status === 200 || 201) {
			console.log('successful');
		} else {
			console.log(response.status);
			console.log('unsuccessful');
		}
	};
	const incomeDetails = async (
		id,
		Interest,
		bank_returns,
		propertyIncome,
		salary,
		total_income,
		bonus,
		user,
	) => {
		const response = await fetch(
			`http://127.0.0.1:8000/app/income_details/${encodeURIComponent(id)}/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					Interest,
					bank_returns,
					propertyIncome,
					salary,
					total_income,
					bonus,
					user,
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		if (response.status === 200 || 201) {
			console.log('successful');
		} else {
			console.log(response.status);
			console.log('unsuccessful');
		}
	};
	const expenseDetails = async (
		id,
		utility_bill,
		rent,
		loan,
		shopping_expense,
		leisure_expense,
		total_expenses,
		medical_expenses,
		user,
	) => {
		const response = await fetch(
			`http://127.0.0.1:8000/app/expense_details/${encodeURIComponent(id)}/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					utility_bill,
					rent,
					loan,
					shopping_expense,
					leisure_expense,
					total_expenses,
					medical_expenses,
					user,
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		if (response.status === 200 || 201) {
			console.log('successful');
		} else {
			console.log(response.status);
			console.log('unsuccessful');
		}
	};
	const assetDetails = async (
		id,
		cash_in_hand,
		property_value,
		shares,
		business_asset,
		others,
		total_assets,
		user,
	) => {
		const response = await fetch(
			`http://127.0.0.1:8000/app/asset_details/${encodeURIComponent(id)}/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					cash_in_hand,
					property_value,
					shares,
					business_asset,
					others,
					total_assets,
					user,
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		if (response.status === 200 || 201) {
			console.log('successful');
		} else {
			console.log(response.status);
			console.log('unsuccessful');
		}
	};
	const liabilityDetails = async (
		id,
		bank_loans,
		credit_card_outstanding,
		mortages,
		auto_loans,
		hand_loans,
		totalLiabilities,
		user,
	) => {
		const response = await fetch(
			`http://127.0.0.1:8000/app/liability_details/${encodeURIComponent(id)}/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					bank_loans,
					credit_card_outstanding,
					mortages,
					auto_loans,
					hand_loans,
					totalLiabilities,
					user,
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		if (response.status === 200 || 201) {
			console.log('successful');
		} else {
			console.log(response.status);
			console.log('unsuccessful');
		}
	};
	const goalsURL = async (
		id,
		children_education,
		universityCapital,
		years_left_for_university,
		where_would_you_like_to_retire,
		income_required_after_retirement,
		annual_income_for_family_incase_of_death,
		annual_income_for_family_incase_of_critical_illness,
		annual_income_for_family_incase_of_disability,
		user,
	) => {
		const response = await fetch(
			`http://127.0.0.1:8000/app/goals/${encodeURIComponent(id)}/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					children_education,
					universityCapital,
					years_left_for_university,
					where_would_you_like_to_retire,
					income_required_after_retirement,
					annual_income_for_family_incase_of_death,
					annual_income_for_family_incase_of_critical_illness,
					annual_income_for_family_incase_of_disability,
					user,
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		if (response.status === 200 || 201) {
			console.log('successful');
		} else {
			console.log(response.status);
			console.log('unsuccessful');
		}
	};
	const existingProvisionsDetails = async (
		id,
		children_education,
		life_insurance,
		disability,
		retirement,
		critial_illness,
		user,
	) => {
		const response = await fetch(
			`http://127.0.0.1:8000/app/existing_provisions_details/${encodeURIComponent(
				id,
			)}/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					children_education,
					life_insurance,
					disability,
					retirement,
					critial_illness,
					user,
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		if (response.status === 200 || 201) {
			console.log('successful');
		} else {
			console.log(response.status);
			console.log('unsuccessful');
		}
	};
	const financialPlanningShortfallURL = async (
		id,
		children_education,
		life_insurance,
		disability,
		retirement,
		critial_illness,
		user,
	) => {
		const response = await fetch(
			`http://127.0.0.1:8000/app/financial_planning_shortfall/${encodeURIComponent(
				id,
			)}/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					children_education,
					life_insurance,
					disability,
					retirement,
					critial_illness,
					user,
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		if (response.status === 200 || 201) {
			console.log('successful');
		} else {
			console.log(response.status);
			console.log('unsuccessful');
		}
	};
	const existingPoliciesURL = async (
		id,
		policy_no,
		annual_premium,
		date_of_maturity,
		date_of_commencement,
		term,
		benefits,
		life_insurance_policy_no,
		life_insurance_annual_premium,
		life_insurance_date_of_maturity,
		life_insurance_date_of_commencement,
		life_insurance_term,
		life_insurance_benefits,
		retirement_policy_no,
		retirement_annual_premium,
		retirement_date_of_maturity,
		retirement_date_of_commencement,
		retirement_term,
		retirement_benefits,
		user,
	) => {
		const response = await fetch(
			`http://127.0.0.1:8000/app/existing_policies/${encodeURIComponent(id)}/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					policy_no,
					annual_premium,
					date_of_maturity,
					date_of_commencement,
					term,
					benefits,
					life_insurance_policy_no,
					life_insurance_annual_premium,
					life_insurance_date_of_maturity,
					life_insurance_date_of_commencement,
					life_insurance_term,
					life_insurance_benefits,
					retirement_policy_no,
					retirement_annual_premium,
					retirement_date_of_maturity,
					retirement_date_of_commencement,
					retirement_term,
					retirement_benefits,
					user,
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		if (response.status === 200 || 201) {
			console.log('successful');
		} else {
			console.log(response.status);
			console.log('unsuccessful');
		}
	};

	const contextData = {
		user,
		setUser,
		authTokens,
		setAuthTokens,
		registerUser,
		loginUser,
		logoutUser,
		verifyEmail,
		personalDetails,
		incomeDetails,
		expenseDetails,
		assetDetails,
		liabilityDetails,
		goalsURL,
		existingProvisionsDetails,
		financialPlanningShortfallURL,
		existingPoliciesURL,
	};

	useEffect(() => {
		if (authTokens) {
			setUser(jwtDecode(authTokens.access));
		}
		setLoading(false);
	}, [authTokens, loading]);

	return (
		<AuthContext.Provider value={contextData}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
