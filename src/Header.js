import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://i.postimg.cc/zvJGddP4/Capture.jpg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="BussinessCenter" />
        <HeaderOptions Icon={ChatIcon} title="Chat" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" />
        <HeaderOptions avatar="https://www.linkpicture.com/q/Surbhit.jpg" title="me"/>
      </div>
    </div>
  );
}

export default Header;
