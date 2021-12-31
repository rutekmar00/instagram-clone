import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
  userFullName: null,
  userId: null,
  isLoggedIn: false,
  userIcon: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setActiveUserIcon: (state, action) => {
      state.userIcon = action.payload.userIcon;
    },
    setUserLogOut: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userFullName = null;
      state.userId = null;
      state.isLoggedIn = false;
      state.userIcon = null;
    },
    setUserFullName: (state, action) => {
      state.userFullName = action.payload.userFullName;
    },
  },
});

export const {
  setActiveUser,
  setActiveUserIcon,
  setUserLogOut,
  setUserFullName,
} = userSlice.actions;

export default userSlice.reducer;
