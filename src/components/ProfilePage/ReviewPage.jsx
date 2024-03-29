import React, { useState, useEffect } from 'react';
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
import pdf from '../../assets/pdf (2).svg';
import ppt from '../../assets/ppt2.svg';
import { handleDownloadAsPpt } from './ExportPage';
import { useDispatch, useSelector } from 'react-redux';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import useAxios from '../../utlis/useAxios';
import { jwtDecode } from 'jwt-decode';

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
const exportStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 305,
	height: 284,
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
function ReviewPage({ onNext, exportPage, editPage, first, activeStep }) {
	const dispatch = useDispatch();
	const personalDetail = useSelector((state) => state.personalDetail);
	const existingPolicies = useSelector((state) => state.existingPolicies);
	const assetsDetail = useSelector((state) => state.assetsDetail);
	const existingProvisions = useSelector((state) => state.existingProvisions);
	const expensesDetail = useSelector((state) => state.expensesDetail);
	const goals = useSelector((state) => state.goals);
	const incomeDetail = useSelector((state) => state.incomeDetail);
	const liabilityDetail = useSelector((state) => state.liabilityDetail);

	const [open, setOpen] = React.useState(false);
	const [exportOpen, setExportOpen] = React.useState(false);
	const [firstname, setFirstName] = useState('');
	const api = useAxios();
	const handleExportOpen = () => setExportOpen(true);
	const handleExportClose = () => setExportOpen(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [activeButton, setActiveButton] = useState(null);
	const [timeOfDay, setTimeOfDay] = useState('');
	const [newUser, setNewUser] = useState(false);
	const [exportConfirm, setExportConfirm] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('authTokens');
			if (token) {
				const decode = jwtDecode(token);
				const user_id = decode.user_id;
				try {
					const personalResponse = await api.get(
						`/personal_details/${encodeURIComponent(user_id)}/`,
					);
					const fullName = personalResponse.data.name;
					setFirstName(fullName.split(' ')[0]);
					checkIfUserExist(fullName.split(' ')[0]);
				} catch (error) {
					console.log(error);
				}
			}
		};

		const checkIfUserExist = (tname) => {
			if (tname === '') {
				setNewUser(false);
			} else {
				setNewUser(true);
			}
			console.log('this user exists: ' + newUser);
		};
		const getTimeOfDay = () => {
			const currentHour = new Date().getHours();
			if (currentHour >= 5 && currentHour < 12) {
				return 'Morning';
			} else if (currentHour >= 12 && currentHour < 18) {
				return 'Afternoon';
			} else {
				return 'Evening';
			}
		};

		fetchData();
		checkIfUserExist(firstname);
		setTimeOfDay(getTimeOfDay());
	}, []);
	const toggleValue = () => {
		setExportConfirm(!exportConfirm);
	};
	const handleDownloadAsPdf = () => {
		const input = document.getElementById('downloadContent');

		html2canvas(input)
			.then((canvas) => {
				const imgData = canvas.toDataURL('image/png');
				const pdf = new jsPDF();
				const imgWidth = 250;
				const pageHeight = 297;
				const imgHeight = (canvas.height * imgWidth) / canvas.width;
				let heightLeft = imgHeight;
				let position = 0;

				pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
				heightLeft -= pageHeight;

				while (heightLeft >= 0) {
					position = heightLeft - imgHeight;
					pdf.addPage();
					pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
					heightLeft -= pageHeight;
				}

				pdf.save('FinancialDetails.pdf');
			})
			.catch((error) => {
				console.error('Error capturing content:', error);
			});
	};
	const handleButtonClick = (buttonName) => {
		setActiveButton(buttonName);
		if (exportConfirm === true && buttonName === 'PPT') {
			handleDownloadAsPpt(
				personalDetail,
				existingPolicies,
				assetsDetail,
				existingProvisions,
				expensesDetail,
				goals,
				incomeDetail,
				liabilityDetail,
			);
			console.log('PDF');
		}
		if (exportConfirm === true && buttonName === 'PDF') {
			handleDownloadAsPdf();
			console.log('PPT');
		}
		setExportConfirm(false);
	};
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
			<Box id="downloadContent">
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<Box>
						<PageTitle
							header={'Personal Financial Review'}
							title={'Dashboard'}
						/>
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
							onClick={handleExportOpen}
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
					<Modal
						open={exportOpen}
						onClose={handleExportClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={exportStyle}>
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
										Export Format
									</Typography>
									<Button
										onClick={handleExportClose}
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
									Choose the export option
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									gap: '20px',
									marginBottom: '10px',
								}}
							>
								<Button
									onClick={() => handleButtonClick('PDF')}
									sx={{
										width: '83px',
										height: '83px',
										borderRadius: '4px',
										// backgroundColor: 'hsla(234, 23%, 65%, 98)',
										display: 'flex',
										flexDirection: 'column',
										color: 'hsla(234, 23%, 65%, 1)',
										border: 'hsla(254, 82%, 26%, 1)',
										color:
											activeButton === 'PDF'
												? 'hsla(254, 82%, 26%, 1)'
												: 'white',
										border:
											activeButton === 'PDF'
												? '1px solid hsla(254, 82%, 26%, 1)'
												: 'none',
									}}
								>
									<img src={pdf} alt="exportpdf" />
									<Typography>PDF</Typography>
								</Button>
								<Button
									onClick={() => handleButtonClick('PPT')}
									sx={{
										width: '83px',
										height: '83px',
										borderRadius: '4px',
										// backgroundColor: 'hsla(234, 23%, 65%, 98)',
										display: 'flex',
										flexDirection: 'column',
										color: 'hsla(234, 23%, 65%, 1)',
										border: 'hsla(254, 82%, 26%, 1)',
										color:
											activeButton === 'PPT'
												? 'hsla(254, 82%, 26%, 1)'
												: 'white',
										border:
											activeButton === 'PPT'
												? '1px solid hsla(254, 82%, 26%, 1)'
												: 'none',
									}}
								>
									<img src={ppt} alt="exportpdf" />
									<Typography>PPT</Typography>
								</Button>
							</Box>
							<Button
								onClick={toggleValue}
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
									fontSize: '0.8rem',
									fontWeight: '600px',
									'&:hover': {
										backgroundColor: 'hsla(254, 82%, 26%, 1)', // Keep the same background color
									},
								}}
							>
								Export
							</Button>
						</Box>
					</Modal>
				</Box>
				<Box sx={{ width: '100%' }}>
					<Box
						sx={{ color: 'white', position: 'absolute', left: 30, top: 150 }}
					>
						<Typography
							variant="h6"
							sx={{ fontSize: ['16px', '20px', '24px'] }}
						>
							Hello,
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'column' }}>
							<Typography
								variant="h6"
								sx={{ fontSize: ['16px', '28px', '32px'] }}
							>
								Good {timeOfDay},{' '}
								<span
									variant="h4"
									sx={{ fontWeight: '100', lineBreak: 'none' }}
								>
									{firstname ? firstname : ''}
								</span>
							</Typography>
						</Box>

						<Typography
							variant="h6"
							sx={{ fontSize: ['12px', '20px', '24px'] }}
						>
							Check Your Personal Financial Review
						</Typography>
					</Box>
					<img
						src={main}
						alt="main"
						style={{ width: '100%', height: '100%', objectFit: 'contain' }}
						loading="lazy"
					/>
				</Box>
				<br />
				<HeaderCard HeaderCardData={profileData} />
				<br />
				<NetStats
					data1={incomeStatsData}
					data2={expenseStatsData}
					Header={'NET INCOME'}
					subHeader1={'Income'}
					subHeader2={'Expenses'}
				/>
				<br />
				<NetStats
					data1={assetsStatsData}
					data2={liabilitiesStatsData}
					Header={'NET WORTH'}
					subHeader1={'Assets'}
					subHeader2={'Liabilities'}
				/>
				<br />
				<GoalCards goalData={goalStatsData} />
				<br />
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
				<br />
				<PolicyTable data={existingPoliciesData} />
			</Box>
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
								fontSize: '12px',
								'&:hover': { backgroundColor: 'hsla(254, 82%, 26%, 1)' },
							}}
						>
							Click here
						</Button>
					</Box>
				</Modal>
				{newUser === false ? (
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
				) : (
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
						onClick={ScheduleCall}
						// onClick={handleOpen}
						style={{ marginTop: '16px' }}
					>
						<Typography
							variant="body1"
							sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}
						>
							Request For Free Analysis And Consultation
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
				)}
			</Box>
		</Box>
	);
}

export default ReviewPage;
