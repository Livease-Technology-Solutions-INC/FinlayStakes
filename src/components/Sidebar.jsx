import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ sidebarData, updateActiveItem, activeItem }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

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
    <Drawer variant="permanent" anchor="left" sx={{ zIndex: 1 }} className='sidebar'>
      <List
        className='sidebar-container'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {sidebarData.map((option, index) => (
          <ListItem
            key={index}
            className={`sidebar-item ${option === activeItem && !isHovered ? 'active' : ''}`}
            onClick={() => handleItemClick(option)}
          >
            {option.icon && <ListItemIcon className='sidebar-item-image'>{option.icon}</ListItemIcon>}
            <ListItemText primary={option.label} className='sidebar-item-text' />
            {option.chevron && <ListItemIcon className='sidebar-item-image'><ChevronIcon /></ListItemIcon>}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
