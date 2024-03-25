import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Pagetitle from '../components/Pagetitle';
import { Route, Routes } from 'react-router';
import { SidebarData } from '../resources/constants';
import ProfilePage from './Dashboard';
import { Grid } from '@mui/material';

function Home() {
	const [activeItem, setActiveItem] = useState(SidebarData[0]);
	const updateActiveItem = (newActiveItem) => {
		setActiveItem(newActiveItem);
	};

	return (
		<div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
			<Navbar
				sidebarData={SidebarData}
				updateActiveItem={updateActiveItem}
				activeItem={activeItem}
			/>
			<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
				<div
					className="main-container"
					style={{
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						marginTop: '104px',
						marginLeft: '300px',
						backgroundColor: '#F2F1F9',
						padding: '24px',
					}}
				>
					<Routes>
            <Route path="/" element={<ProfilePage />}></Route>
          </Routes>
				</div>
			</div>
		</div>
	);
}

export default Home;
