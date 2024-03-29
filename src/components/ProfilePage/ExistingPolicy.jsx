import React, { useContext, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from '../../assets/carbon_next-outline.svg';
import backChevron from '../../assets/carbon_back-outline.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
	updateChildrenEducation,
	updateLifeInsurance,
	updateRetirement,
} from '../../state-management/reducer/existingPoliciesSlice';
import AuthContext from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const ExistingPolicies = ({ onNext, onPrev }) => {
	const existingPolicies = useSelector((state) => state.existingPolicies);
	const dispatch = useDispatch();
	const { existingPoliciesURL } = useContext(AuthContext);
	const [formValid, setFormValid] = useState(false);
	const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var user_id = decode.user_id;
	}

	const handleChildrenEducationChange = (field, value) => {
		dispatch(updateChildrenEducation({ [field]: value }));
	};

	const handleLifeInsuranceChange = (field, value) => {
		dispatch(updateLifeInsurance({ [field]: value }));
	};

	const handleRetirementChange = (field, value) => {
		dispatch(updateRetirement({ [field]: value }));
	};
	const validateForm = () => {
		const requiredFields = [
			'childrenEducation.policyNo',
			'childrenEducation.annualPremium',
			'childrenEducation.dateofMaturity',
			'childrenEducation.commencementDate',
			'childrenEducation.term',
			'childrenEducation.benefits',
			'lifeInsurance.policyNo',
			'lifeInsurance.annualPremium',
			'lifeInsurance.dateofMaturity',
			'lifeInsurance.commencementDate',
			'lifeInsurance.term',
			'lifeInsurance.benefits',
			'retirement.policyNo',
			'retirement.annualPremium',
			'retirement.dateofMaturity',
			'retirement.commencementDate',
			'retirement.term',
			'retirement.benefits',
		];
		const isValid = requiredFields.every((field) => {
			const nestedFields = field.split('.');
			const fieldValue = nestedFields.reduce((obj, key) => obj && obj[key], existingPolicies);
			const exists = !!fieldValue;
			if (!exists) {
				console.log(`Missing field: ${field}`);
			}
			return exists;
		})
		return isValid;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChildrenEducationChange();
		handleLifeInsuranceChange();
		handleRetirementChange();
		const isFormValid = validateForm();
		setFormValid(isFormValid);
		console.log(existingPolicies)
		if (isFormValid) {
			existingPoliciesURL(
				user_id,
				existingPolicies.childrenEducation.policyNo,
				existingPolicies.childrenEducation.annualPremium,
				existingPolicies.childrenEducation.dateofMaturity,
				existingPolicies.childrenEducation.commencementDate,
				existingPolicies.childrenEducation.term,
				existingPolicies.childrenEducation.benefits,
				existingPolicies.lifeInsurance.policyNo,
				existingPolicies.lifeInsurance.annualPremium,
				existingPolicies.lifeInsurance.dateofMaturity,
				existingPolicies.lifeInsurance.commencementDate,
				existingPolicies.lifeInsurance.term,
				existingPolicies.lifeInsurance.benefits,
				existingPolicies.retirement.policyNo,
				existingPolicies.retirement.annualPremium,
				existingPolicies.retirement.dateofMaturity,
				existingPolicies.retirement.commencementDate,
				existingPolicies.retirement.term,
				existingPolicies.retirement.benefits,
				user_id,
			);
			console.log(existingPolicies);
			onNext();
		}
		console.log(existingPolicies.childrenEducation.policyNo);
	};

	return (
		<Box width="100%" display={'flex'} flexDirection={'column'} gap={'32px'}>
			<form onSubmit={handleSubmit}>
				<Typography
					sx={{ fontFamily: 'Inter', color: '#212844', fontWeight: '700' }}
					variant="h5"
				>
					Existing Policies
				</Typography>
				<Box
					width={'100%'}
					display={'flex'}
					flexDirection={'column'}
					gap={'24px'}
				>
					<Typography
						sx={{
							color: '#212844',
							fontWeight: '600',
							fontSize: '20px',
							fontFamily: 'Inter, sans-serif',
							lineHeight: '24.2px',
						}}
					>
						Children’s Education
					</Typography>
					<Box
						width={'100%'}
						display={'flex'}
						flexWrap={'wrap'}
						flexDirection={'row'}
						gap="52px"
						rowGap={'24px'}
						alignItems={'flex-start'}
					>
						<InputField
							label={'Policy No'}
							placeholder={'Policy No'}
							value={existingPolicies.childrenEducation.policyNo}
							onChange={(value) =>
								handleChildrenEducationChange('policyNo', value)
							}
							required={true}
							type="number"
						/>
						<InputField
							label={'Annual Premium'}
							placeholder={'Annual Premium'}
							value={existingPolicies.childrenEducation.annualPremium}
							onChange={(value) =>
								handleChildrenEducationChange('annualPremium', value)
							}
							required={true}
							type="number"
						/>
						<InputField
							label={'Date of Maturity'}
							placeholder={'Date of Maturity'}
							value={existingPolicies.childrenEducation.dateofMaturity}
							onChange={(value) =>
								handleChildrenEducationChange('dateofMaturity', value)
							}
							required={true}
							type="date"
						/>
						<InputField
							label={'Date of Commencement'}
							placeholder={'Date of Commencement'}
							value={existingPolicies.childrenEducation.commencementDate}
							onChange={(value) =>
								handleChildrenEducationChange('commencementDate', value)
							}
							required={true}
							type="date"
						/>
						<InputField
							label={'Term'}
							placeholder={'Term'}
							value={existingPolicies.childrenEducation.term}
							onChange={(value) => handleChildrenEducationChange('term', value)}
							required={true}
							type="number"
						/>
						<InputField
							label={'Benefits'}
							placeholder={'Benefits'}
							value={existingPolicies.childrenEducation.benefits}
							onChange={(value) =>
								handleChildrenEducationChange('benefits', value)
							}
							required={true}
							type="number"
						/>
					</Box>
					<Typography
						sx={{
							color: '#212844',
							fontWeight: '600',
							fontSize: '20px',
							fontFamily: 'Inter, sans-serif',
							lineHeight: '24.2px',
						}}
					>
						Life Insurance
					</Typography>
					<Box
						width={'100%'}
						display={'flex'}
						flexWrap={'wrap'}
						flexDirection={'row'}
						gap="52px"
						rowGap={'24px'}
						alignItems={'flex-start'}
					>
						<InputField
							label={'Policy No'}
							placeholder={'Policy No'}
							value={existingPolicies.lifeInsurance.policyNo}
							onChange={(value) => handleLifeInsuranceChange('policyNo', value)}
							required={true}
							type="number"
						/>
						<InputField
							label={'Annual Premium'}
							placeholder={'Annual Premium'}
							value={existingPolicies.lifeInsurance.annualPremium}
							onChange={(value) =>
								handleLifeInsuranceChange('annualPremium', value)
							}
							required={true}
						/>
						<InputField
							label={'Date of Maturity'}
							placeholder={'Date of Maturity'}
							value={existingPolicies.lifeInsurance.dateofMaturity}
							onChange={(value) =>
								handleLifeInsuranceChange('dateofMaturity', value)
							}
							required={true}
							type="date"
						/>
						<InputField
							label={'Date of Commencement'}
							placeholder={'Date of Commencement'}
							value={existingPolicies.lifeInsurance.commencementDate}
							onChange={(value) =>
								handleLifeInsuranceChange('commencementDate', value)
							}
							required={true}
							type="date"
						/>
						<InputField
							label={'Term'}
							placeholder={'Term'}
							value={existingPolicies.lifeInsurance.term}
							onChange={(value) => handleLifeInsuranceChange('term', value)}
							required={true}
							type='number'
						/>
						<InputField
							label={'Benefits'}
							placeholder={'Benefits'}
							value={existingPolicies.lifeInsurance.benefits}
							onChange={(value) => handleLifeInsuranceChange('benefits', value)}
							required={true}
							type='number'
						/>
					</Box>
					<Typography
						sx={{
							color: '#212844',
							fontWeight: '600',
							fontSize: '20px',
							fontFamily: 'Inter, sans-serif',
							lineHeight: '24.2px',
						}}
					>
						Retirement
					</Typography>
					<Box
						width={'100%'}
						display={'flex'}
						flexWrap={'wrap'}
						flexDirection={'row'}
						gap="52px"
						rowGap={'24px'}
						alignItems={'flex-start'}
					>
						<InputField
							label={'Policy No'}
							placeholder={'Policy No'}
							value={existingPolicies.retirement.policyNo}
							onChange={(value) => handleRetirementChange('policyNo', value)}
							required={true}
							type='number'
						/>
						<InputField
							label={'Annual Premium'}
							placeholder={'Annual Premium'}
							value={existingPolicies.retirement.annualPremium}
							onChange={(value) =>
								handleRetirementChange('annualPremium', value)
							}
							required={true}
							type='number'
						/>
						<InputField
							label={'Date of Maturity'}
							placeholder={'Date of Maturity'}
							value={existingPolicies.retirement.dateofMaturity}
							onChange={(value) =>
								handleRetirementChange('dateofMaturity', value)
							}
							required={true}
							type='date'
						/>
						<InputField
							label={'Date of Commencement'}
							placeholder={'Date of Commencement'}
							value={existingPolicies.retirement.commencementDate}
							onChange={(value) =>
								handleRetirementChange('commencementDate', value)
							}
							required={true}
							type='date'
						/>
						<InputField
							label={'Term'}
							placeholder={'Term'}
							value={existingPolicies.retirement.term}
							onChange={(value) => handleRetirementChange('term', value)}
							required={true}
							type='number'
						/>
						<InputField
							label={'Benefits'}
							placeholder={'Benefits'}
							value={existingPolicies.retirement.benefits}
							onChange={(value) => handleRetirementChange('benefits', value)}
							required={true}
							type='number'
						/>
					</Box>
				</Box>
				<Box
					position={'absolute'}
					bottom="-100px"
					right="0px"
					alignSelf={'flex-end'}
				>
					<Button
						sx={{
							color: '#250C77',
							padding: '10px 43px',
							borderRadius: '8px',
							gap: '8px',
							'&:hover': { backgroundColor: '#fff' },
						}}
						onClick={onPrev}
						style={{ marginTop: '16px' }}
					>
						<img src={backChevron} alt="back-chevron"></img>
						<Typography
							variant="body1"
							sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
						>
							Back
						</Typography>
					</Button>
					<Button
						sx={{
							backgroundColor: '#250C77',
							color: '#fff',
							padding: '10px 24px',
							borderRadius: '8px',
							gap: '8px',
							'&:hover': { backgroundColor: '#250C94' },
						}}
						variant="contained"
						type="submit"
						style={{ marginTop: '16px' }}
					>
						<Typography
							variant="body1"
							sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
						>
							Complete
						</Typography>
						<img src={nextChevron} alt="next-chevron"></img>
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default ExistingPolicies;
