import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookingService from "./bookingService";

const initialState = {
  bookings: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addBooking = createAsyncThunk(
  "bookingState/addBooking",
  async (bookings, thunkAPI) => {
    try {
      return await bookingService.addBooking(bookings);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllBookings = createAsyncThunk(
  "bookingState/getBookings",
  async (bookings, thunkAPI) => {
    try {
      return await bookingService.getBookings(bookings);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const bookingSlice = createSlice({
  name: "bookingState",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.bookings = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings = [...action.payload];
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.bookings = [];
      })
      .addCase(addBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings.push(action.payload);
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.bookings = [];
      });
  },
});

export const bookingActions = bookingSlice.actions;
export const { reset } = bookingSlice.actions;
export default bookingSlice.reducer;
