import { baseUrl } from "@/components/constants/api";
import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
let initialState = {
  categories: [],
  loading: false,
  error: null,
};
export let GetCats = createAsyncThunk("category/getCats", async () => {
  try {
    let { data } = await axios.get(`${baseUrl}nova/api/category/getall`);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export let catSlice = createSlice({
  name: "HomeCategories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetCats.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(GetCats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetCats.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
export default catSlice.reducer;
