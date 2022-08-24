import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import listingService from "./listingService";

const initialState = {
  listings: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getListingByUserLogged = createAsyncThunk(
  "listings/getListings",
  async (userId, thunkAPI) => {
    try {
      return await listingService.getListingByUserId(userId);
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

export const updateListingByUserLogged = createAsyncThunk(
  "listings/updateListing",
  async (listing, thunkAPI) => {
    try {
      return await listingService.editListing(listing);
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
      .addCase(getListingByUserLogged.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListingByUserLogged.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.listings = [...action.payload];
      })
      .addCase(getListingByUserLogged.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.listings = null;
      })
      .addCase(updateListingByUserLogged.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateListingByUserLogged.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.listings = [...state.listings, action.payload];
      })
      .addCase(updateListingByUserLogged.rejected, (state, action) => {
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
