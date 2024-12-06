import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let initialState = {
  loading: false,
  error: null,
};
export let applyJobFunc = createAsyncThunk(
  "applyJob/applyJobFunc",
  async (data) => {
    try {
      let res = await axios.post(`${baseUrl}nova/api/emp/create`, data);
      toast.success("تم التقديم بنجاح");
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  }
);
export let applyJobSlice = createSlice({
  name: "applyJob",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(applyJobFunc.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(applyJobFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(applyJobFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.loading = false;
    });
  },
});
export default applyJobSlice.reducer;
