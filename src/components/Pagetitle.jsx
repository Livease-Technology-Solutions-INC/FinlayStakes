import React from 'react';
import { Container, Breadcrumbs, Link, Typography } from '@mui/material';

function PageTitle({ title, companyName = 'liviileads' }) {
	return (
		<Container sx={{ px:0, py:'8px' }}>
			<Typography variant="h5" color="#212844" sx={{fontSize: '20px', textTransform: 'capitalize', fontWeight: 'bold', fontFamily: 'Lato, sans-serif',}}>
				{title || ''}
			</Typography>
			<Breadcrumbs aria-label="breadcrumb"  separator="›" sx={{py: '6px'}}>
				<Link href="/" color="#6560F0"  sx={{fontSize: '14px', textTransform: 'capitalize', fontWeight: 'light', textDecoration: 'none'}}>
					{companyName || ''}
				</Link>
				<Typography color="textPrimary"  sx={{fontSize: '14px', textTransform: 'capitalize', fontWeight: 'light'}}>{title || ''}</Typography>
			</Breadcrumbs>
		</Container>
	);
}

export default PageTitle;
