// AssetsDetail.js
import React, { useContext, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from '../../assets/carbon_next-outline.svg';
import backChevron from '../../assets/carbon_back-outline.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateAssetsDetail } from '../../state-management/reducer/assetsDetailSlice';
import AuthContext from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const AssetsDetail = ({ onNext, onPrev }) => {
	const assetsDetail = useSelector((state) => state.assetsDetail);
	const dispatch = useDispatch();
	const { assetDetails } = useContext(AuthContext);
	const [formValid, setFormValid] = useState(false);
	const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var user_id = decode.user_id;
	}
	const handleChange = (field, value) => {
		dispatch(updateAssetsDetail({ [field]: value }));
	};
	const validateForm = () => {
		const requiredFields = [
			'cash',
			'propertyValue',
			'shares',
			'businessAssets',
			'others',
			'totalAssets',
		];
		const isValid = requiredFields.every((field) => !!assetsDetail[field]);

		return isValid;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleChange();
		const isFormValid = validateForm();
		setFormValid(isFormValid);
		if (isFormValid) {
			assetDetails(
				user_id,
				assetsDetail.cash,
				assetsDetail.propertyValue,
				assetsDetail.shares,
				assetsDetail.businessAssets,
				assetsDetail.others,
				assetsDetail.totalAssets,
				user_id,
			);
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
					Asset Details
				</Typography>
				<Box
					width={'100%'}
					display={'flex'}
					flexDirection={'column'}
					gap={'24px'}
				>
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
							label={'Cash in Hand & Bank'}
							placeholder={'Cash in Hand & Bank'}
							value={assetsDetail.cash}
							onChange={(cash) => handleChange('cash', cash)}
							type="number"
						/>
						<InputField
							label={'Property Value'}
							placeholder={'Property Value'}
							value={assetsDetail.propertyValue}
							onChange={(propertyValue) =>
								handleChange('propertyValue', propertyValue)
							}
							type="number"
						/>
						<InputField
							label={'Shares / Equities'}
							placeholder={'Shares / Equities'}
							value={assetsDetail.shares}
							onChange={(shares) => handleChange('shares', shares)}
							type="number"
						/>
						<InputField
							label={'Business Assets'}
							placeholder={'Business Assets'}
							value={assetsDetail.businessAssets}
							onChange={(businessAssets) =>
								handleChange('businessAssets', businessAssets)
							}
							type="number"
						/>
						<InputField
							label={'Others'}
							placeholder={'Others'}
							value={assetsDetail.others}
							onChange={(others) => handleChange('others', others)}
							type="number"
						/>
						<InputField
							label={'Total Assets'}
							placeholder={'Total Assets'}
							value={assetsDetail.totalAssets}
							onChange={(totalAssets) =>
								handleChange('totalAssets', totalAssets)
							}
							type="number"
						/>
					</Box>
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

export default AssetsDetail;
