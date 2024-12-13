import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export let getJob = createAsyncThunk("ads/getJob", async () => {
  try {
    let { data } = await axios.get(`${baseUrl}nova/api/job/getall`);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export let getJobSlice = createSlice({
  name: "getJob",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getJob.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getJob.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getJob.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
export default getJobSlice.reducer;
