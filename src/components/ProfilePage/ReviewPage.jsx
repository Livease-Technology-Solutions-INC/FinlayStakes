import React from 'react';
import HeaderCard from '../ProfilePage/reviewPage/HeaderCard';
import ProfilePageCardData from '../../data/ProfilePageCardData';
import NetStats from '../ProfilePage/reviewPage/NetStats';
import IncomeData from '../../data/IncomeStats';
import ExpenseData from '../../data/ExpensesStats';
import AssetsData from '../../data/AssetsStats';
import LiabilitiesData from '../../data/LiabilitiesStats';
import GoalData from '../../data/GoalData';
import ExistingPolicies from '../../data/ExistingPolicies';
import FinancialPlanningShortfall from '../../data/FinancialPlanningShortfall';
import ExistingProvision from '../../data/ExistingProvision';
import GoalCards from '../ProfilePage/reviewPage/Goals';
import BoxCard from './reviewPage/BoxCard';
import PolicyTable from '../ProfilePage/reviewPage/Policies';
import nextChevron from '../../assets/carbon_next-outline.svg';
import exportIcon from '../../assets/export.svg';
import editIcon from '../../assets/edit.svg';
import PageTitle from '../Pagetitle';
import { Box, Typography, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import xclose from '../../assets/Xclose.svg';
import main from '../../assets/main.svg';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 348,
	height: 175,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	borderRadius: '8px',
	border: 'none',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
};
function ReviewPage({ onNext, exportPage, editPage, first }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	console.log(open);
	const ScheduleCall = () => {
		onNext();
	};
	const profileData = ProfilePageCardData();
	const incomeStatsData = IncomeData();
	const expenseStatsData = ExpenseData();
	const assetsStatsData = AssetsData();
	const liabilitiesStatsData = LiabilitiesData();
	const goalStatsData = GoalData();
	const existingProvisionData = ExistingProvision();
	const financialPlanningShortfallData = FinancialPlanningShortfall();
	const existingPoliciesData = ExistingPolicies();
	return (
		<Box
			sx={{
				position: 'static',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				gap: '24px',
				justifyContent: 'center',
				alignItems: 'flex-start',
			}}
		>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Box>
					<PageTitle header={'Personal Financial Review'} title={'Dashboard'} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: '10px',
					}}
				>
					<Button
						sx={{
							display: 'flex',
							color: '#9397BB',
							padding: '7px 16px',
							borderRadius: '8px',
							gap: '8px',
							backgroundColor: '#fff',
							'&:hover': { backgroundColor: '#fff' },
							height: '32px',
						}}
						onClick={editPage}
					>
						<img src={editIcon} alt="editIcon" />
						<Typography
							variant="body1"
							sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
						>
							Edit
						</Typography>
					</Button>
					<Button
						sx={{
							display: 'flex',
							color: '#9397BB',
							padding: '7px 16px',
							borderRadius: '8px',
							gap: '8px',
							backgroundColor: '#fff',
							'&:hover': { backgroundColor: '#fff' },
							height: '32px',
						}}
						onClick={exportPage}
					>
						<Typography
							variant="body1"
							sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
						>
							Export
						</Typography>
						<img src={exportIcon} alt="exportIcon" />
					</Button>
				</Box>
			</Box>
			<Box>
				<img src={main} alt="main" />
			</Box>
			<HeaderCard HeaderCardData={profileData} />
			<NetStats
				data1={incomeStatsData}
				data2={expenseStatsData}
				Header={'NET INCOME'}
				subHeader1={'Income'}
				subHeader2={'Expenses'}
			/>
			<NetStats
				data1={assetsStatsData}
				data2={liabilitiesStatsData}
				Header={'NET WORTH'}
				subHeader1={'Assets'}
				subHeader2={'Liabilities'}
			/>
			<GoalCards goalData={goalStatsData} />
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexWrap: 'wrap',
					rowGap: '20px',
					gap: '20px',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
				}}
			>
				<BoxCard
					data={existingProvisionData}
					header="EXISTING PROVISIONS"
					stat="AED24,000"
					status="increase"
					percentage="5.5%"
				/>
				<BoxCard
					data={financialPlanningShortfallData}
					header="FINANCIAL PLANNING SHORTFALL"
					stat="AED24,000"
					status="increase"
					percentage="5.5%"
				/>
			</Box>
			<PolicyTable data={existingPoliciesData} />
			<Box
				position={'absolute'}
				bottom="-100px"
				right="0px"
				alignSelf={'flex-end'}
			>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Box>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									mb: 1,
								}}
							>
								<Typography
									id="modal-modal-title"
									variant="h6"
									component="h2"
									sx={{
										color: 'hsla(228, 35%, 20%, 1)',
										fontWeight: 600,
									}}
								>
									Fill Required Form
								</Typography>
								<Button
									onClick={handleClose}
									sx={{
										position: 'absolute',
										top: 20,
										right: 0,
									}}
								>
									<img src={xclose} alt="editIcon" />
								</Button>
							</Box>
							<Typography
								id="modal-modal-description"
								sx={{ mb: 3, color: 'hsla(234, 23%, 65%, 1)' }}
							>
								Complete the necessary form.
							</Typography>
						</Box>
						<Button
							onClick={first}
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'white',
								padding: '7px 16px',
								borderRadius: '8px',
								gap: '8px',
								backgroundColor: 'hsla(254, 82%, 26%, 1)',
								height: '32px',
								fontSize: '16px',
							}}
						>
							Click here
						</Button>
					</Box>
				</Modal>
				<Button
					sx={{
						backgroundColor: '#250C77',
						color: '#fff',
						padding: '10px 0px',
						paddingLeft: '24px',
						paddingRight: '6px',
						borderRadius: '40px',
						gap: '16px',
						'&:hover': { backgroundColor: '#250C94' },
					}}
					variant="contained"
					// onClick={ScheduleCall}
					onClick={handleOpen}
					style={{ marginTop: '16px' }}
				>
					<Typography
						variant="body1"
						sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
					>
						Fill Form
					</Typography>
					<div
						style={{
							backgroundColor: '#fff',
							width: '32px',
							height: '32px',
							borderRadius: '50%',
							position: 'relative',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							src={nextChevron}
							style={{
								filter: 'invert(1) saturate(0)',
								zIndex: '100',
								position: 'absolute',
							}}
						></img>
					</div>
				</Button>
			</Box>
		</Box>
	);
}

export default ReviewPage;
