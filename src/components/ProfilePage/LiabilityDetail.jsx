import React, { useContext , useState} from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from '../../assets/carbon_next-outline.svg';
import backChevron from '../../assets/carbon_back-outline.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateLiabilityDetail } from '../../state-management/reducer/liabilityDetailSlice';
import AuthContext from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const LiabilityDetail = ({ onNext, onPrev }) => {
	const liabilityDetail = useSelector((state) => state.liabilityDetail);
	const dispatch = useDispatch();
	const { liabilityDetails } = useContext(AuthContext);
  const [formValid, setFormValid] = useState(false);
	const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var user_id = decode.user_id;
	}

	const handleChange = (field, value) => {
		dispatch(updateLiabilityDetail({ [field]: value }));
	};
  const validateForm = () => {
		const requiredFields = [
			'bankLoans',
			'creditCard',
			'mortgages',
			'autoLoans',
			'handLoans',
			'totalLiabilities',
		];
		const isValid = requiredFields.every((field) => !!liabilityDetail[field]);

		return isValid;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChange();
		const isFormValid = validateForm();
		setFormValid(isFormValid);
		if (isFormValid) {
			liabilityDetails(
				user_id,
				liabilityDetail.bankLoans,
				liabilityDetail.creditCard,
				liabilityDetail.mortgages,
				liabilityDetail.autoLoans,
				liabilityDetail.handLoans,
				liabilityDetail.totalLiabilities,
				user_id,
			);
			console.log(liabilityDetail);
			onNext();
		}
	};
	return (
		<Box width="100%" display={'flex'} flexDirection={'column'} gap={'32px'}>
			<form onSubmit={handleSubmit}>
				<Typography
					sx={{ fontFamily: 'Inter', color: '#212844', fontWeight: '700' }}
					variant="h5"
				>
					Liability Details
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
						label={'Bank Loans'}
						placeholder={'Bank Loans'}
						value={liabilityDetail.bankLoans}
						onChange={(bankLoans) => handleChange('bankLoans', bankLoans)}
					/>
					<InputField
						label={'Credit Card Outstanding'}
						placeholder={'Credit Card Outstanding'}
						value={liabilityDetail.creditCard}
						onChange={(creditCard) => handleChange('creditCard', creditCard)}
					/>
					<InputField
						label={'Mortgages'}
						placeholder={'Mortgages'}
						value={liabilityDetail.mortgages}
						onChange={(mortgages) => handleChange('mortgages', mortgages)}
					/>
					<InputField
						label={'Auto Loans'}
						placeholder={'Auto Loans'}
						value={liabilityDetail.autoLoans}
						onChange={(autoLoans) => handleChange('autoLoans', autoLoans)}
					/>
					<InputField
						label={'Hand Loans'}
						placeholder={'Hand Loans'}
						value={liabilityDetail.handLoans}
						onChange={(handLoans) => handleChange('handLoans', handLoans)}
					/>
					<InputField
						label={'Total Liabilities'}
						placeholder={'Total Liabilities'}
						value={liabilityDetail.totalLiabilities}
						onChange={(totalLiabilities) =>
							handleChange('totalLiabilities', totalLiabilities)
						}
					/>
				</Box>
				<Box
					position={{ xs: 'absolute', md: 'absolute' }}
					bottom={{ xs: '-80px', md: '-80px' }}
					right={{ xs: '0', md: '135px' }}
					display={'flex'}
					flexDirection={'row'}
					gap={{ xs: '0', md: '16px' }}
					alignSelf={'flex-end'}
				>
					<Button
						sx={{
							color: '#250C77',
							padding: { xs: '0', md: '10px 43px' },
							borderRadius: '8px',
							gap: '8px',
							marginTop: { xs: '40px', md: '20px' },
							height: { xs: 'auto', md: '48px' },
							width: { xs: '100%', md: 'auto' },
							'&:hover': { backgroundColor: '#fff' },
						}}
						onClick={onPrev}
					>
						<img src={backChevron}></img>
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
							marginTop: { xs: '40px', md: '20px' },
							height: { xs: 'auto', md: '48px' },
							width: { xs: '300px', md: 'auto' },
							'&:hover': { backgroundColor: '#250C94' },
						}}
						variant="contained"
						type="submit"
					>
						<Typography
							variant="body1"
							sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
						>
							Next Step
						</Typography>
						<img src={nextChevron}></img>
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default LiabilityDetail;
