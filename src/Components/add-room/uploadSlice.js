import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from "./uploadService";

const initialState = {
  files: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addFile = createAsyncThunk(
  "files/addFile",
  async (file, thunkAPI) => {
    try {
      return await uploadService.uploadFiles(file);
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

export const getFiles = createAsyncThunk(
  "files/getFiles",
  async (data, thunkAPI) => {
    try {
      return await uploadService.getFiles(data);
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

export const uploadSlice = createSlice({
  name: "files",
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
      .addCase(addFile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.files = action.payload;
      })
      .addCase(addFile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.files = [];
      });
  },
});

export const filesActions = uploadSlice.actions;
export const { reset } = uploadSlice.actions;
export default uploadSlice.reducer;
