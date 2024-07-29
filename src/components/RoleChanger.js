// src/components/RoleChanger.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setRole } from '../store/authSlice';

const RoleChanger = () => {
  const dispatch = useDispatch();

  const changeRole = (newRole) => {
    dispatch(setRole(newRole));
  };

  return (
    <div>
      <button onClick={() => changeRole('admin')}>Set as Admin</button>
      <button onClick={() => changeRole('user')}>Set as User</button>
    </div>
  );
};

export default RoleChanger;
