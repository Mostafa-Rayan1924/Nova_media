import { baseUrl } from "@/components/constants/api";
import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
let initialState = {
  customers: [],
  loading: false,
  error: null,
};
export let GetCustomers = createAsyncThunk("project/getCustomers", async () => {
  try {
    let { data } = await axios.get(`${baseUrl}nova/api/partner/getall`);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export let latestCustomerslice = createSlice({
  name: "HomeCustomers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetCustomers.fulfilled, (state, action) => {
      state.customers = action.payload;
      state.loading = false;
    });
    builder.addCase(GetCustomers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetCustomers.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
export default latestCustomerslice.reducer;
