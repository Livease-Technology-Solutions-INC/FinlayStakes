import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Pagetitle from '../components/Pagetitle';
import { Route, Routes } from 'react-router';
import { SidebarData } from '../resources/constants';

function Home() {
  const [activeItem, setActiveItem] = useState(SidebarData[0]);
  const updateActiveItem = (newActiveItem) => {
    setActiveItem(newActiveItem);
  };

  return (
    <div className="pageBg">
      <Navbar />
      <div className="main-container">
        <Sidebar sidebarData={SidebarData} updateActiveItem={updateActiveItem} activeItem={activeItem}/>
        <div className="pages">
          <Pagetitle title={activeItem.label} companyName={'Finlay Stakes'} />
          <Routes>
            {/* <Route path="/" element={<ProfilePage />}></Route> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
