import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export let delJobFunc = createAsyncThunk("delJob/delJobFunc", async (id) => {
  try {
    let res = await axios.delete(`${baseUrl}nova/api/job/deleteone/${id}`);
    toast.success("تم الحذق  بنجاح");
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export let delJobSlice = createSlice({
  name: "delJob",
  initialState: {
    isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(delJobFunc.fulfilled, (state) => {
      state.isloading = false;
    });
    builder.addCase(delJobFunc.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(delJobFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.isloading = false;
    });
  },
});
export default delJobSlice.reducer;
