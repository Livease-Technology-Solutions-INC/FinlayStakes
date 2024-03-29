import React from 'react';
import {
	Box,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Typography,
} from '@mui/material';

const PolicyTable = ({ data }) => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#fff',
				padding: '24px',
				borderRadius: '16px',
			}}
		>
			<Typography
				sx={{ fontFamily: 'Inter', color: '#212844', fontWeight: '700' }}
				variant="body1"
			>
				EXISTING POLICIES
			</Typography>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell style={{ fontWeight: 'bold' }}>
							Children's Education
						</TableCell>
						<TableCell style={{ fontWeight: 'bold' }}>Life Insurance</TableCell>
						<TableCell style={{ fontWeight: 'bold' }}>Retirement</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, index) => (
						<TableRow key={index}>
							<TableCell style={{ fontWeight: 'bold', color: '#9397BB' }}>
								{row.header}
							</TableCell>
							<TableCell
								style={{
									fontFamily: 'Inter',
									color: '#212844',
									fontWeight: '500',
								}}
							>
								{row.childrenEducation}
							</TableCell>
							<TableCell
								style={{
									fontFamily: 'Inter',
									color: '#212844',
									fontWeight: '500',
								}}
							>
								{row.lifeInsurance}
							</TableCell>
							<TableCell
								style={{
									fontFamily: 'Inter',
									color: '#212844',
									fontWeight: '500',
								}}
							>
								{row.retirement}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	);
};

export default PolicyTable;
