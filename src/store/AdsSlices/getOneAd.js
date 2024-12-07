import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export let getOneAd = createAsyncThunk("ads/getOneAd", async (id) => {
  try {
    let { data } = await axios.get(`${baseUrl}nova/api/ad/getone/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export let getOneAdSlice = createSlice({
  name: "getOneAd",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getOneAd.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getOneAd.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOneAd.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
export default getOneAdSlice.reducer;
