// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.role = null;
    },
    setRole(state, action) {
      state.role = action.payload;
    }
  }
});

export const { login, logout, setRole } = authSlice.actions;
export default authSlice.reducer;
