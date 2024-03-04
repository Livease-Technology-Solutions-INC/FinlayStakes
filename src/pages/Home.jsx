import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Pagetitle from '../components/Pagetitle';
import { Route, Routes } from 'react-router';
import { SidebarData } from '../resources/constants';
import ProfilePage from './ProfilePage';
import { Grid } from '@mui/material';

function Home() {
  const [activeItem, setActiveItem] = useState(SidebarData[0]);
  const updateActiveItem = (newActiveItem) => {
    setActiveItem(newActiveItem);
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <Sidebar
            sidebarData={SidebarData}
            updateActiveItem={updateActiveItem}
            activeItem={activeItem}
          />
          
         <div className="main-container" style={{ flex:1,display: "flex", flexDirection: "column", marginTop: "104px", marginLeft:"291px", backgroundColor: "#F2F1F9", padding: "24px" }}>
          <Pagetitle title={activeItem.label} companyName={'Finlay Stakes'} />
          <Routes>
            <Route path="/" element={<ProfilePage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
