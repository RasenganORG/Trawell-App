import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomService from "./roomService";

const initialState = {
  rooms: [],
  room: "",
  autoCompleteData: "",
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

export const addLike = createAsyncThunk(
  "room/addLike",
  async (data, thunkAPI) => {
    try {
      return await roomService.addLike(data);
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
export const deleteLike = createAsyncThunk(
  "room/deleteLike",
  async (data, thunkAPI) => {
    try {
      return await roomService.deleteLike(data);
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
  async (userId, thunkAPI) => {
    try {
      return await roomService.getRooms(userId);
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
    const { checkIn, checkOut, country, userId } = data;
    console.log({ userId });
    try {
      return await roomService.getAvailableRooms(
        checkIn,
        checkOut,
        country,
        userId
      );
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
    setAutoComplete: (state, action) => {
      state.autoCompleteData = action.payload;
      state.complete = true;
    },
    incrementLikes: (state, action) => {
      state.rooms.find((el) => el.id === action.payload).numberLikes++;
      const index = state.rooms.indexOf(
        state.rooms.find((el) => el.id === action.payload)
      );
      state.rooms[index].isLiked = true;
    },
    decrementLikes: (state, action) => {
      state.rooms.find((el) => el.id === action.payload).numberLikes--;
      const index = state.rooms.indexOf(
        state.rooms.find((el) => el.id === action.payload)
      );
      state.rooms[index].isLiked = false;
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
      })
      .addCase(addLike.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addLike.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addLike.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteLike.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLike.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteLike.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const roomActions = roomSlice.actions;
export const {
  reset,
  activateSearch,
  deActivateSearch,
  setAutoComplete,
  incrementLikes,
  decrementLikes,
} = roomSlice.actions;
export default roomSlice.reducer;
