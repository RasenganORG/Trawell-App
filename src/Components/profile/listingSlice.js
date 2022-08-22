import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import listingService from "./listingService";

const initialState = {
  listings: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getRoomByUserId = createAsyncThunk(
  "listings/getRoomByUserId",
  async (userId, thunkAPI) => {
    try {
      return await listingService.getRoomByUser(userId);
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

export const listingSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.room = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomByUserId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoomByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.listings = [...action.payload];
      })
      .addCase(getRoomByUserId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.listings = null;
      });
  },
});

export const listingActions = listingSlice.actions;
export const { reset } = listingSlice.actions;
export default listingSlice.reducer;
