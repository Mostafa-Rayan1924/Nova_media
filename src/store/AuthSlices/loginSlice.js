import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let initialState = {
  user: {
    token:
      (typeof localStorage !== "undefined" &&
        JSON.parse(localStorage.getItem("user"))?.token) ||
      null,
    userData:
      (typeof localStorage !== "undefined" &&
        JSON.parse(localStorage.getItem("user"))?.data.result) ||
      null,
  },
  loading: false,
  error: null,
};
export let loginFunc = createAsyncThunk("login/loginFunc", async (params) => {
  try {
    let { data } = await axios.post(`${baseUrl}nova/api/auth/login`, params);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export let LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = { token: null, userData: null };
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginFunc.fulfilled, (state, action) => {
      state.user = {
        token: action.payload.token,
        userData: action.payload.data.result,
      };
      state.loading = false;
      toast.success("مرحبا بك مره اخري");
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    });
    builder.addCase(loginFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginFunc.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      toast.error(action.error.message);
    });
  },
});
export let { logout } = LoginSlice.actions;
export default LoginSlice.reducer;
