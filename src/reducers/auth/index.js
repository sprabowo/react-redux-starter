import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userInfo: {},
    expiredAt: null
  },
  reducers: {
    login: (state, action) => {
      const { token, userInfo, expiredAt } = action.payload;
      state.token = token;
      state.userInfo = userInfo;
      state.expiredAt = expiredAt;
    },
    logout: state => {
      state = {
        token: null,
        userInfo: {},
        expiredAt: null
      }
    }
  }
});

export const { login, logout } = authSlice.actions;

export const selectUserInfo = state => state.auth.userInfo;

export default authSlice.reducer;