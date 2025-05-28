import React from 'react';
import '../styles/components.css';
import { navigationLinks } from '../data/navigationLinks';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          {navigationLinks.map((link, index) => (
            <li key={index} className={link.active ? 'active' : ''}>
              <a href={link.url}>
                <span className="icon">{link.icon}</span>
                <span className="link-text">{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="help-button">
          <span className="icon">?</span>
          <span>Help & Support</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
