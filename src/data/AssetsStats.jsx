import React, { useEffect, useState } from 'react';
import useAxios from '../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';

function AssetData() {
	const [Asset, setAsset] = useState('');
	const api = useAxios();

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('authTokens');
			if (token) {
				const decode = jwtDecode(token);
				const user_id = decode.user_id;
				try {
					const AssetResponse = await api.get(
						`/asset_details/${encodeURIComponent(user_id)}/`,
					);
					setAsset(AssetResponse.data);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fetchData();
	}, []);

	return [
		{
			name: 'Cash in Hand & Bank',
			stat: 'AED' + Asset.cash_in_hand,
			status: 'increase',
			percentage: '0.25%',
			color: '#06B48A',
		},
		{
			name: 'Property Value',
			stat: 'AED' + Asset.property_value,
			status: 'decrease',
			percentage: '0.25%',
			color: '#6560F0',
		},
		{
			name: 'Shares / Equities',
			stat: 'AED' + Asset.shares,
			status: 'decrease',
			percentage: '0.25%',
			color: '#3DD9EB',
		},
		{
			name: 'Business Assets',
			stat: 'AED' + Asset.business_asset,
			status: 'increase',
			percentage: '0.35%',
			color: '#D76B66',
		},
		{
			name: 'Others',
			stat: 'AED' + Asset.others,
			status: 'increase',
			percentage: '0.15%',
			color: '#F6CF7D',
		},
	];
}

export default AssetData;
