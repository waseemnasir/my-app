import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isAuthenticated: false,
  rememberMe: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.isAuthenticated = true;
      state.rememberMe = action.payload.rememberMe;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
