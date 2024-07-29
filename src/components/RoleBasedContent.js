// src/components/RoleBasedContent.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRole } from '../store/selectors';

const RoleBasedContent = () => {
  const role = useSelector(selectRole);

  return (
    <div>
      {role === 'admin' && <p>Welcome, Admin! You have full access.</p>}
      {role === 'user' && <p>Welcome, User! You have limited access.</p>}
      {!role && <p>Please log in to see your role-based content.</p>}
    </div>
  );
};

export default RoleBasedContent;
