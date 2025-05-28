import React from 'react';
import '../styles/components.css';
import userAvatar from '../images/user-avatar.png';
import notificationIcon from '../images/notification-icon.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Healthcare Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="notification-icon">
          <img src={notificationIcon} alt="Notifications" />
          <span className="notification-badge">3</span>
        </div>
        <div className="user-profile">
          <img src={userAvatar} alt="User Avatar" className="avatar" />
          <div className="user-info">
            <p className="user-name">John Doe</p>
            <p className="user-role">Patient</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
