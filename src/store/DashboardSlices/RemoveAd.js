import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export let delAdFunc = createAsyncThunk("delAd/delAdFunc", async (id) => {
  try {
    let res = await axios.delete(`${baseUrl}nova/api/ad/deleteone/${id}`);
    toast.success("تم الحذق  بنجاح");
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export let delAdSlice = createSlice({
  name: "delAd",
  initialState: {
    isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(delAdFunc.fulfilled, (state) => {
      state.isloading = false;
    });
    builder.addCase(delAdFunc.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(delAdFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.isloading = false;
    });
  },
});
export default delAdSlice.reducer;
