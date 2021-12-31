import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import userInformationReducer from "./slices/userInformation";

export default configureStore({
  reducer: {
    user: userReducer,
    userInformation: userInformationReducer,
  },
  devTools: true,
});
