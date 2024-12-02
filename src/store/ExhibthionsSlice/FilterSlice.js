import { baseUrl } from "@/components/constants/api";
import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
let initialState = {
  data: [],
  loading: false,
  error: null,
};
export let getFilter = createAsyncThunk(
  "filter/getFilter",
  async (department = "حفلات تخرج") => {
    try {
      let { data } = await axios.get(
        `${baseUrl}nova/api/exhibition/getall?department=${department}`
      );
      return data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export let filterSlice = createSlice({
  name: "filter",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFilter.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFilter.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getFilter.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      });
  },
});
export default filterSlice.reducer;
