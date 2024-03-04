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
import Search from "../assets/Search Icon.svg"

function Navbar() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Search:', searchValue);
  };

  return (
    <AppBar  sx={{position:"fixed", width:"100%", backgroundColor: "#fff", color: "black",  paddingLeft:"8px", paddingY:"20px", boxShadow:"none", }}>
      <Toolbar className='navbar-container' sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }} >
            <img src={Logo} alt="logo" />
            <img src={barIcon} alt="icon" />
          </Box>
        <Box sx={{ display: "flex", gap: "24px", alignItems: "center", justifyContent: "center", flexGrow: 0, cursor: "pointer", backgroundColor:"#F2F1F9", padding:"10px",borderRadius:"30px"}}>
        <Box sx={{ flexGrow: 1, display: 'flex' }} >
             <InputBase
              placeholder="Search"
              startAdornment={<img src={Search} alt="searchIcon" style={{marginRight:"8px"}} />} 
              sx={{
                color: 'black',
                backgroundColor: "#Ffff",
                borderRadius: '20px',
                paddingLeft: 2,
                flexShrink: 0,
                minWidth: 226,
              }}
              onChange={handleSearchChange}
            /> 
          </Box>
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
