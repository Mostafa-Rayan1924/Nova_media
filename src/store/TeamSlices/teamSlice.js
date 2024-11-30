import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
  data: [],
  loading: false,
  error: null,
};
export let getTeam = createAsyncThunk("team/getTeam", async () => {
  try {
    let { data } = await axios.get(`${baseUrl}nova/api/team/getall`);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export let teamSlice = createSlice({
  name: "team",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTeam.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getTeam.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTeam.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
export default teamSlice.reducer;
