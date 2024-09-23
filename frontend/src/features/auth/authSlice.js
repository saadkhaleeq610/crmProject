import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    authFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { registerSuccess, loginSuccess, logoutSuccess, authFailure } = authSlice.actions;

export default authSlice.reducer;
