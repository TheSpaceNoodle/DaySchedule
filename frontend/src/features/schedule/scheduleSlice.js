import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import scheduleService from "./scheduleService";

const initialState = {
  schedule: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getSchedule = createAsyncThunk(
  "schedule/getSchedule",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await scheduleService.getSchedule(token);
    } catch (error) {
      const message =
        (error.responce && error.responce.data && error.respoce.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postActivity = createAsyncThunk(
  "schedule/postActivity",
  async (scheduleData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await scheduleService.postActivity(scheduleData, token);
    } catch (error) {
      const message =
        (error.responce && error.responce.data && error.respoce.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateActivity = createAsyncThunk(
  "schedule/updateActivity",
  async (thunkAPI, scheduleData) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await scheduleService.updateActivity(scheduleData, token);
    } catch (error) {
      const message =
        (error.responce && error.responce.data && error.respoce.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteActivity = createAsyncThunk(
  "schedule/deleteDay",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await scheduleService.deleteActivity(id, token);
    } catch (error) {
      const message =
        (error.responce && error.responce.data && error.respoce.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSchedule.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.schedule = action.payload;
      })
      .addCase(getSchedule.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(postActivity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postActivity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.schedule.push(action.payload);
      })
      .addCase(postActivity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteActivity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteActivity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.schedule = state.schedule.filter(
          (goal) => goal._id !== action.payload.id
        );
      })
      .addCase(deleteActivity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reser } = scheduleSlice.actions;
export default scheduleSlice.reducer;
