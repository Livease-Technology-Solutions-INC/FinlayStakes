import React, { useEffect, useState, useContext } from 'react';
import { Drawer, Box, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronIcon from '@mui/icons-material/ExpandMore';
import chevron from '../../src/assets/solar_logout-outline.svg';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Logo from '../assets/Finlay Stakes-01 1.svg';
import barIcon from '../assets/heroicons-outline_menu-alt-2.svg';

const Sidebar = ({ sidebarData, updateActiveItem, activeItem }) => {
	const navigate = useNavigate();
	const [isHovered, setIsHovered] = useState(false);
	const { logoutUser } = useContext(AuthContext);

	useEffect(() => {
		if (updateActiveItem) {
			updateActiveItem(activeItem);
			navigate(`${activeItem.url}`);
		}
	}, [updateActiveItem, activeItem, navigate]);

	const handleItemClick = (option) => {
		updateActiveItem(option);
	};

	return (
		<Drawer
			variant="permanent"
			anchor="left"
			InputProps={{
				sx: {
					'& .MuiDrawer-paper': {
						position: 'static',
					},
				},
			}}
			sx={{
				position: 'fixed',
				zIndex: '100',
				top: '104px',
				height: '100%',
				overflowY: 'auto',
				'& .MuiDrawer-paper': { position: 'static' },
				borderTop: 'solid 1px rgba(147, 151, 187, 0.25)',
			}}
		>
			<Box sx={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
				<img src={Logo} alt="logo" />
				<img src={barIcon} alt="icon" />
			</Box>
			<List
				className="sidebar-container"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				sx={{
					padding: '0rem 1rem',
					display: 'flex',
					flexDirection: 'column',
					gap: '8px',
					marginTop: '24px',
				}}
			>
				{sidebarData.map((option, index) => (
					<ListItem
						key={index}
						className={`sidebar-item ${
							option === activeItem && !isHovered ? 'active' : ''
						}`}
						onClick={() => handleItemClick(option)}
						sx={{ cursor: 'pointer' }}
					>
						{option.icon && (
							<ListItemIcon className="sidebar-item-image">
								{option.icon}
							</ListItemIcon>
						)}
						<ListItemText
							primary={option.label}
							className="sidebar-item-text"
							sx={{ color: '#9397BB' }}
						/>
						{option.chevron && (
							<ListItemIcon className="sidebar-item-image">
								<ChevronIcon />
							</ListItemIcon>
						)}
					</ListItem>
				))}
			</List>
			<Button
				onClick={logoutUser}
				sx={{
					position: 'absolute',
					padding: '0px 24px',
					bottom: '140px',
					color: '#9397BB',
					textTransform: 'none',
					fontSize: '16px',
				}}
			>
				<img src={chevron} style={{ marginRight: '16px' }}></img>
				Logout
			</Button>
		</Drawer>
	);
};

export default Sidebar;
