import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let initialState = {
  user: null,
  loading: false,
  error: null,
};
export let signupFunc = createAsyncThunk(
  "signup/signupFunc",
  async (params) => {
    try {
      let { data } = await axios.post(`${baseUrl}nova/api/auth/signup`, params);
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export let signUpSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signupFunc.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      toast.success("تم التسجيل بنجاح");
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(signupFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signupFunc.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      toast.error(action.error.message);
    });
  },
});
export default signUpSlice.reducer;
