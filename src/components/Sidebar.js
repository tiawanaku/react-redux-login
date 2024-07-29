// src/components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
      <Nav className="flex-column">
        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        <Nav.Link href="#settings">Settings</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

