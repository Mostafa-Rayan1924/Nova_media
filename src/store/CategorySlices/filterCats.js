import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
  data: [],
  loading: false,
  error: null,
};
export let getCategoryById = createAsyncThunk(
  "category/getCategoryById",
  async (id) => {
    let { data } = await axios.get(
      `${baseUrl}nova/api/category/${id}/subcategory/getall`
    );
    return data.data;
  }
);
export let filterCategoriesSlice = createSlice({
  name: "filterCats",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategoryById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getCategoryById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategoryById.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
export default filterCategoriesSlice.reducer;
