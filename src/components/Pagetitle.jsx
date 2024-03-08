import React from 'react';
import { Box, Container, Breadcrumbs, Link, Typography } from '@mui/material';

function PageTitle({header, title, companyName = 'Finlay Stakes' }) {
	return (
		<Box>
			<Typography variant="h5" color="#212844" sx={{ textTransform: 'capitalize', fontWeight: 'bold', fontFamily: 'Inter, sans-serif',}}>
				{header || ''}
			</Typography>
			<Breadcrumbs aria-label="breadcrumb"  separator="›" sx={{py: '6px'}}>
				<Link href="/" color="#6560F0"  sx={{fontSize: '14px', textTransform: 'capitalize', fontWeight: 'light', textDecoration: 'none'}}>
					{companyName || ''}
				</Link>
				<Typography color="textPrimary"  sx={{fontSize: '14px', textTransform: 'capitalize', fontWeight: 'light'}}>{title || ''}</Typography>
			</Breadcrumbs>
		</Box>
	);
}

export default PageTitle;
