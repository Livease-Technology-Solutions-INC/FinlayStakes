import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Pagetitle from '../components/Pagetitle';
import { Route, Routes } from 'react-router';
import { SidebarData } from '../resources/constants';
import ProfilePage from './Dashboard';
import { Grid } from '@mui/material';
import AvailableProjects from './AvailableProjects';

function Home() {
	useEffect(() => {
		const handleResize = () => {
			if (window.matchMedia('(max-width: 768px)').matches) {
				setOpen(false);
			} else {
				setOpen(true);
			}
		};

		// Initial check on component mount
		handleResize();

		// Event listener for window resize
		window.addEventListener('resize', handleResize);

		// Cleanup function to remove event listener
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	const [activeItem, setActiveItem] = useState(SidebarData[0]);
	const [open, setOpen] = React.useState(true);
	const updateActiveItem = (newActiveItem) => {
		setActiveItem(newActiveItem);
	};
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
			<Navbar
				sidebarData={SidebarData}
				updateActiveItem={updateActiveItem}
				activeItem={activeItem}
				handleDrawerOpen={handleDrawerOpen}
				handleDrawerClose={handleDrawerClose}
				open={open}
			/>
			<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
				<div
					className="main-container"
					style={{
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						marginTop: '104px',
						marginLeft: open ? '300px' : '50px',
						backgroundColor: '#F2F1F9',
						padding: '24px',
					}}
				>
					<Routes>
						<Route path="/" element={<ProfilePage />}></Route>
						<Route path="/*" element={<AvailableProjects />}></Route>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default Home;
