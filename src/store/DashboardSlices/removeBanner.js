import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export let delBannerFunc = createAsyncThunk(
  "delBanner/delBannerFunc",
  async (id) => {
    try {
      let res = await axios.delete(`${baseUrl}nova/api/poster/deleteone/${id}`);
      toast.success("تم حذف البانر بنجاح");
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export let delBannerSlice = createSlice({
  name: "delBanner",
  initialState: {
    Isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(delBannerFunc.fulfilled, (state) => {
      state.Isloading = false;
    });
    builder.addCase(delBannerFunc.pending, (state) => {
      state.Isloading = true;
    });
    builder.addCase(delBannerFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.Isloading = false;
    });
  },
});
export default delBannerSlice.reducer;
