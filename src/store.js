import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/auth/authSlice";
import roomReducer from "./components/rooms/roomSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    roomState: roomReducer,
  },
});

export default store;
