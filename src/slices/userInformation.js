import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  following: null,
};

const userInformationSlice = createSlice({
  name: "userInformation",
  initialState,
  reducers: {
    setUserFollowing: (state, action) => {
      state.following = action.payload.following;
    },
    setUserInformationLogOut: (state) => {
      state.following = null;
    },
  },
});

export const { setUserFollowing, setUserInformationLogOut } =
  userInformationSlice.actions;

export default userInformationSlice.reducer;
