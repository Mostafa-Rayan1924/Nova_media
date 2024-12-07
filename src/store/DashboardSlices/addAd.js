import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let initialState = {
  loading: false,
  error: null,
};
export let addAdFunc = createAsyncThunk(
  "addAd/addAdFunc",
  async (data, { getState }) => {
    let state = getState();
    let token = state.login?.user?.token;
    try {
      let res = await axios.post(`${baseUrl}nova/api/ad/create`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("تم الاضافة بنجاح");
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  }
);
export let addAdSlice = createSlice({
  name: "addAd",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addAdFunc.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addAdFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addAdFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.loading = false;
    });
  },
});
export default addAdSlice.reducer;
