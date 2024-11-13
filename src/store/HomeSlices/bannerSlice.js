import { baseUrl } from "@/components/constants/api";
import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
let initialState = {
  banners: [],
  loading: false,
  error: null,
};
export let getBanners = createAsyncThunk("banner/getBanners", async () => {
  try {
    let { data } = await axios.get(`${baseUrl}nova/api/poster/getall`);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export let bannerSlice = createSlice({
  name: "banner",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBanners.fulfilled, (state, action) => {
      state.banners = action.payload;
      state.loading = false;
    });
    builder.addCase(getBanners.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBanners.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
export default bannerSlice.reducer;
