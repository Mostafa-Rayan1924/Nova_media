import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export let getAd = createAsyncThunk("ads/getAd", async () => {
  try {
    let { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}nova/api/ad/getall`,
    );
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export let getAdSlice = createSlice({
  name: "getAd",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAd.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getAd.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAd.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
export default getAdSlice.reducer;
