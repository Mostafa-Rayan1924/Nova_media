import { baseUrl } from "@/components/constants/api";
import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
let initialState = {
  data: [],
  loading: false,
  error: null,
};
export let getByIdFunc = createAsyncThunk("filter/getById", async (id) => {
  try {
    let { data } = await axios.get(
      `${baseUrl}nova/api/exhibition/getone/${id}`
    );
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export let filterSliceById = createSlice({
  name: "getOne",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getByIdFunc.pending, (state) => {
        state.loading = true;
      })
      .addCase(getByIdFunc.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getByIdFunc.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      });
  },
});
export default filterSliceById.reducer;
