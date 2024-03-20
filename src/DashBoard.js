import * as React from 'react';
 import Menu from '@mui/material/Menu';
 import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useContext,useEffect,useState} from 'react';
import { UserContext } from './UserContext.js';
import axios from 'axios';
export default function FadeMenu() {
  // const {loggedIn,setLoggedIn,loggedInUser,setLoggedInUser}=useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    // Assuming 'userToken' is the name of the authentication cookie
    // Make an additional request to the server to perform any server-side cleanup (if needed)
    axios.post('/logout')
      .then((response) => {
        console.log(response);
        // Additional logic after successful logout (if needed)
      })
      .catch((error) => {
        console.error(error);
      });
    
    // Update your React state to reflect the user's logged-out status
  };
  return (
    <div>
      <button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='outline-none'
      >
        Dashboard
      </button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem ><a href='/profile'>Profile</a></MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
