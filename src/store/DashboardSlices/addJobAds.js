import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let initialState = {
  loading: false,
  error: null,
};
export let addJobAdFunc = createAsyncThunk(
  "addJobAd/addJobAdFunc",
  async (data, { getState }) => {
    let state = getState();
    let token = state.login?.user?.token;
    try {
      let res = await axios.post(`${baseUrl}nova/api/job/create`, data, {
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
export let addJobAdSlice = createSlice({
  name: "addJobAd",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addJobAdFunc.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addJobAdFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addJobAdFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.loading = false;
    });
  },
});
export default addJobAdSlice.reducer;
