import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let initialState = {
  loading: false,
  error: null,
};
export let addBannerFunc = createAsyncThunk(
  "addBanner/addBannerFunc",
  async ({ formData, headers }) => {
    try {
      let res = await axios.post(
        `${process.env.API_BASE_URL}nova/api/poster/create`,
        formData,
        {
          headers: headers,
        },
      );
      toast.success("تم اضافة البانر بنجاح");
      console.log(res);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);
export let addBannerSlice = createSlice({
  name: "addBanner",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addBannerFunc.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addBannerFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBannerFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.loading = false;
    });
  },
});
export default addBannerSlice.reducer;
