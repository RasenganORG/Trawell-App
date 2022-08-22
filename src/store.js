import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/auth/authSlice";
import roomReducer from "./components/rooms/roomSlice";
import bookingReducer from "./components/profile/bookingSlice";
import listingReducer from "./components/profile/listingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    rooms: roomReducer,
    bookings: bookingReducer,
    myListings: listingReducer,
  },
});

export default store;
