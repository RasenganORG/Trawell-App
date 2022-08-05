import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomService from "./roomService";

const initialState = {
  rooms: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addRoom = createAsyncThunk(
  "roomState/addRooms",
  async (room, thunkAPI) => {
    try {
      return await roomService.addRoom(room);
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

export const getAllRooms = createAsyncThunk(
  "roomState/getRooms",
  async (room, thunkAPI) => {
    try {
      return await roomService.getRoom(room);
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

export const getRoomByCountry = createAsyncThunk(
  "roomState/getRoomsByCountry",
  async (country, thunkAPI) => {
    try {
      return await roomService.getRoomByCountry(country);
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

export const roomSlice = createSlice({
  name: "roomState",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRooms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = [...action.payload];
      })
      .addCase(getAllRooms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.rooms = [];
      })
      .addCase(addRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms.push(action.payload);
      })
      .addCase(addRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.rooms = null;
      })
      .addCase(getRoomByCountry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoomByCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = [...action.payload];
      })
      .addCase(getRoomByCountry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.rooms = null;
      });
  },
});

export const roomActions = roomSlice.actions;
export const { reset } = roomSlice.actions;
export default roomSlice.reducer;
