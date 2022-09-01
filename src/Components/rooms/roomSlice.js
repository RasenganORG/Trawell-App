import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomService from "./roomService";

const initialState = {
  rooms: [],
  room: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  search: false,
};

export const addRoom = createAsyncThunk(
  "room/addRooms",
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
  "rooms/getRooms",
  async (room, thunkAPI) => {
    try {
      return await roomService.getRooms(room);
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

export const getFilteredRooms = createAsyncThunk(
  "rooms/getAvailableRooms",
  async (data, thunkAPI) => {
    const { checkIn, checkOut, country } = data;
    try {
      return await roomService.getAvailableRooms(checkIn, checkOut, country);
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

export const getRoomById = createAsyncThunk(
  "room/getRoomById",
  async (roomId, thunkAPI) => {
    try {
      return await roomService.getRoom(roomId);
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
  name: "rooms",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.room = "";
    },
    activateSearch: (state) => {
      state.search = true;
    },
    deActivateSearch: (state) => {
      state.search = false;
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
        state.rooms = action.payload;
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
      .addCase(getRoomById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoomById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.room = action.payload;
      })
      .addCase(getRoomById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.room = null;
      })
      .addCase(getFilteredRooms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilteredRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = action.payload;
      })
      .addCase(getFilteredRooms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.rooms = null;
      });
  },
});

export const roomActions = roomSlice.actions;
export const { reset, activateSearch, deActivateSearch } = roomSlice.actions;
export default roomSlice.reducer;
