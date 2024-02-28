import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../assets/Finlay Stakes-01 1.svg';
import barIcon from '../assets/heroicons-outline_menu-alt-2.svg';
import info from '../assets/info_outline.svg';
import bellIcon from '../assets/notifications_none.svg';
import theme from '../assets/moon-solid 1.svg';
import { Box, Button, InputBase } from '@mui/material';
import userIcon from '../assets/Ellipse 5.svg';
import flag from '../assets/Ellipse 6.svg';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Search:', searchValue);
  };

  return (
    <AppBar className='navbar' position="static" sx={{ backgroundColor: "#fff", color: "black", flex: 1, zIndex: 100 }}>
      <Toolbar className='navbar-container' sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "100px", alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }} >
            <img src={Logo} alt="logo" />
            <img src={barIcon} alt="icon" />
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex' }} >
            {/* <InputBase
              placeholder="Search"
              sx={{
                color: 'black',
                backgroundColor: "#F2F1F9",
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
                paddingLeft: 3,
                flexShrink: 0,
                minWidth: 236,
              }}
              onChange={handleSearchChange}
            /> */}
            {/* <Button
              className='search-button'
              variant="contained"
              color="primary"
              sx={{
                width: "10px",
                borderBottomRightRadius: '20px',
                borderTopRightRadius: '20px',
                borderBottomLeftRadius: "0px",
                borderTopLeftRadius: "0px",
                minWidth: "62px",
                backgroundColor: "#6560F0",
              }}
              onClick={handleSearchSubmit}
            >
              <SearchIcon />
            </Button> */}
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "24px", alignItems: "center", justifyContent: "center", flexGrow: 0, cursor: "pointer" }}>
          <img src={flag} alt="flag" />
          <img src={bellIcon} alt="bellicon" />
          <img src={theme} alt="theme" />
          <img src={info} alt="info" />
          <img alt="userIcon" src={userIcon} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
