import React, { useState, useContext, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';

import info from '../assets/info_outline.svg';
import bellIcon from '../assets/notifications_none.svg';
import sitetheme from '../assets/moon-solid 1.svg';
import { Box, Button, InputBase } from '@mui/material';
import userIcon from '../assets/Ellipse 5.svg';
import flag from '../assets/Ellipse 6.svg';
import Search from '../assets/Search Icon.svg';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../assets/Finlay Stakes-01 1.svg';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import barIcon from '../assets/heroicons-outline_menu-alt-2.svg';
import ChevronIcon from '@mui/icons-material/ExpandMore';
import { propsToClassKey } from '@mui/styles';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}),
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

const Navbar = ({
	sidebarData,
	updateActiveItem,
	activeItem,
	handleDrawerOpen,
	handleDrawerClose,
	open,
}) => {
	const [searchValue, setSearchValue] = useState('');

	const theme = useTheme();
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

	const handleSearchChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleSearchSubmit = () => {
		console.log('Search:', searchValue);
	};

	return (
		<Box>
			<AppBar
				sx={{
					position: 'fixed',
					width: '100%',
					backgroundColor: '#fff',
					color: 'black',
					paddingLeft: '8px 0',
					paddingY: '20px',
					boxShadow: 'none',
				}}
				open={open}
			>
				<Toolbar
					className="navbar-container"
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
					>
						<img src={barIcon} alt="icon" />
					</IconButton>
					<Box
						sx={{
							display: 'flex',
							gap: '10px',
							alignItems: 'center',
							justifyContent: 'center',
							flexGrow: 1,
							cursor: 'pointer',
							backgroundColor: '#F2F1F9',
							padding: '10px',
							borderRadius: '30px',
							position: 'fixed',
							right: '20px',
						}}
					>
						<Box sx={{ flexGrow: 1, display: 'flex' }}>
							<InputBase
								placeholder="Search"
								startAdornment={
									<img
										src={Search}
										alt="searchIcon"
										style={{ marginRight: '8px' }}
									/>
								}
								sx={{
									color: 'black',
									backgroundColor: '#Ffff',
									borderRadius: '20px',
									paddingLeft: 2,
									flexShrink: 0,
									minWidth: 226,
								}}
								onChange={handleSearchChange}
							/>
						</Box>
						<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '10px' }}>
							<img src={flag} alt="flag" />
							<img src={bellIcon} alt="bellicon" />
							<img src={sitetheme} alt="theme" />
							<img src={info} alt="info" />
							<img alt="userIcon" src={userIcon} />
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<Box sx={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
						<img src={Logo} alt="logo" />
						<IconButton onClick={handleDrawerClose}>
							<img src={barIcon} alt="icon" />
						</IconButton>
					</Box>
				</DrawerHeader>
				<Divider />
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
			</Drawer>
		</Box>
	);
};
export default Navbar;
