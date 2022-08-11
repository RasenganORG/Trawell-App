import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/auth/authSlice";
import roomReducer from "./components/rooms/roomSlice";
import bookingReducer from "./components/profile/bookingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    roomState: roomReducer,
    bookingState: bookingReducer,
  },
});

export default store;
